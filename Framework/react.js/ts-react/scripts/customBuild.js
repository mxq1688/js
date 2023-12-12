
const path = require('path');
const fs = require('fs');
var cmd=require('node-cmd');
const { exec } = require('child_process');
const os = require('os');
const moment = require('moment');
const chalk = require('chalk');


let copyPath = path.resolve(__dirname,'../build');//复制源的路径

/**
 * 从当前目录到复制到的目录的相对路径 
 * ※※※※ 每个项目自己都需要重新根据目录结构找到要打包复制的地址到该项目的相对路径 ※※※※
 */
const targetPath = '../'

/**
 * 需要打包到的目录名称
 */
const secendLevelDirectorys = ['build-test']
// 转化需要打包的目录的路径结果
const resolvedTargetPath = [] 
//转化路径
secendLevelDirectorys.forEach(item=>{
    const url = path.resolve(__dirname,`${targetPath}${item}`)
    resolvedTargetPath.push(url)
})

//获取SHELL参数
const arguments = process.argv.splice(2);
const execGit = arguments[0]=='true'? true:false;//是否执行git拉取代码,默认不执行
/** 删除指定文件,文件加
 *
 * @param {*} url
 */
const deleteFolderRecursive = (url)=> {
    log(`删除${url}路径操作`);
    let promise = new Promise((resolve,reject)=>{
        var files = [];
        /**
         * 判断给定的路径是否存在
         */
        if (fs.existsSync(url)) {
            /**
             * 返回文件和子目录的数组
             */
            if(!fs.statSync(url).isDirectory()){
                fs.unlinkSync(url);
                resolve();
                return;
            }
            files = fs.readdirSync(url);
            files.forEach(function (file, index) {
                var curPath = path.join(url, file);
                /**
                 * fs.statSync同步读取文件夹文件，如果是文件夹，在重复触发函数
                 */
                if (fs.statSync(curPath).isDirectory()) { // recurse
                    deleteFolderRecursive(curPath);

                } else {
                    fs.unlinkSync(curPath);
                }
            });
            /**
             * 清除文件夹
             */
            fs.rmdirSync(url);
            resolve();
        } else {
            log("给定的路径不存在，请给出正确的路径");
            resolve();
        }

    });
    return promise;
}

/**
 * cmd执行完成事件处理 复制build生成的index2和static2
 *@param {*} copySrc 复制路径
 *@param {*} targetSrc 需要复制到的目标目录
*/
//先递归遍历dist文件夹,把对应的文件或者文件夹写入目标路径
const traverseFolder = (copySrc,targetSrc)=>{
    let paths = fs.readdirSync(copySrc); //同步读取当前目录
    paths.forEach(function(path){
        var _src=copySrc+'/'+path;
        var _dst=targetSrc+'/'+path;
        fs.stat(_src,function(err,stats){ //stats  该对象 包含文件属性
            if(err)throw err;
            if(stats.isFile()){ //如果是个文件则拷贝 
                let readable=fs.createReadStream(_src);//创建读取流
                let writable=fs.createWriteStream(_dst);//创建写入流
                readable.pipe(writable);
            }else if(stats.isDirectory()){ //是目录则 递归 
                checkDirectory(_src,_dst,traverseFolder);
            }
        });
    });
}
/* 
 * 递归复制文件
*/
const checkDirectory = (src,dst,callback)=>{
    fs.access(dst, fs.constants.F_OK, (err) => {
        if(err){
            fs.mkdirSync(dst);
            callback(src,dst);
        }else{
            callback(src,dst);
        }
      });
};

/** 执行cmd命令 返回promise
 * 
 * @param {*} command 
 */
const execCmdCommand = (command)=>{
    log(`执行cmd命令(${command})中...`);
    let promise = new Promise((resolve,reject)=>{
        const exec = require('child_process').exec;
        exec(command, (err, stdout, stderr) => {
            if (err){
                log('exec',err);
                warn(`执行cmd命令(${command})命令失败`);
                reject();
            } else {
                log(stdout,stderr);
                log(`执行cmd命令(${command})命令成功`);
                resolve();
            }
        });
    });
    return promise;
}

//执行git名称
const execGitCommand = (command)=>{
    log(`执行git命令(${command})中...`);
    return execCmdCommand(command);
}

//获取系统类型
const getOs = ()=>{
    let type;
    switch(os.type()){
        case 'Windows_NT':
            type = 'windows'
            break
        case 'Darwin':
            type = 'mac'
            break
        case 'Linux':
            type = 'linux'
            break
        default:
            type = 'windows'
            break
    }
    return type;
}

const log = (str, color)=>{
    color = color?color: 'black'
    console.log(chalk.keyword(color)(moment().format('YYYY-MM-DD HH:mm:ss')+'-->>', str))
}

/* 新build执行方法
    先删除目标路径相关文件,然后执行cmd命令 npm run build  
    在执行完成事件中复制dist目录文件到webapp中
*/
const build = async (dirs) => {
    if(execGit){
        //先拉去最新代码
        log(`git命令开始拉取代码`);
        let gitPull = `git pull`;
        await execGitCommand(gitPull);
        log(`git命令拉取代码完成`);
    }
    //运行打包命令 老的npm run  build 
    log(`开始打包...`);
    const start = (new Date()).getTime()
    // await execCmdCommand('npm run build');
    const end  = (new Date()).getTime()
    log(`打包完成,耗时${(end - start)/(1000*60)}min`);
    let promiseList = [];
    dirs.forEach(async dir=>{
        if(getOs() != 'windows'){
            if(!fs.existsSync(dir)){
                await execCmdCommand(`mkdir ${dir}`)
            }
            log(`文件往${dir}复制中...`);
            await execCmdCommand(path.resolve(__dirname,`../SHELL/run.bat ${copyPath} ${dir}`))
            log(`文件往${dir}复制完成`, 'green');
        }else{
            //递归删除文件夹下的所有文件
            log(`开始删除${dir}目录内容`);
            const indexResult = deleteFolderRecursive(dir+'/index.html');
            const staticResult = deleteFolderRecursive(dir+'/static');

            promiseList.push(indexResult)
            promiseList.push(staticResult)
            await indexResult;
            await staticResult;
            log(`删除${dir}目录成功!`);
            //复制dist文件到webapp
            log(`文件往${dir}复制中...`);
            traverseFolder(copyPath,dir);
            log(`文件往${dir}复制完成`);
        }
    })
    await Promise.all(promiseList)
    log(`打包完成!`);
}

build(resolvedTargetPath);

