
var fs = require('fs');//内置模块


// 检测目录、文件
    fs.stat('./fs-test/m.json', function (err, status) {
        if(err){
            console.log(err);
            return false;
        }
        console.log(status.isFile());
        console.log(status.isDirectory());
    })

// 创建目录
//     fs.mkdir('fs-test1/', function (err) {
//         if(err){
//             console.log(err);
//             return false;
//         }
//     })

// 写入文件
    fs.writeFile('fs-test/m.txt','hello world', 'utf8',function (err) {
        if(err){
            console.log(err);
            return false;
        }
    })

// 追加
    fs.appendFile('fs-test/m.txt','ccc\n',function (err) {
        if(err){
            console.log(err);
            return false;
        }
    })

// 读取文件
    fs.readFile('fs-test/m.txt',function (err, res) {
        if(err){
            console.log(err);
            return false;
        }
        //转换
        // console.log(res.toString());
    })

// 读取目录
    fs.readdir('fs-test', function (err, res) {
        // console.log(res);
    })

// 重命名， 剪切
    fs.rename('fs-test/m.json', 'fs-test/m1.json', function (err, res) {
        if(err){
            // console.log(err);
            return false;
        }
        // console.log(res);
    })

// 删除目录
//     fs.rmdir('', function(){})

// 删除文件
//     fs.unlink()
