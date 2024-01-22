import { spawn } from 'child_process';

/*
const child = spawn()

stdout 获取标准输出
  child.stdout.on('data', data => {
    console.log(`stdout: ${data}`)
  })

stderr 获取标准错误输出
  child.stderr.on('data', data => {
    console.error(`stderr: ${data}`)
  })

监听子进程退出
  child.on('close', code => {
    console.log(`子进程退出，退出码: ${code}`)
    downLiveServer()
  })
  
监听子进程错误
  child.on('error', code => {
    console.log(`子进程错误，错误码 ${code}`)
    // downLiveServer()
  })
*/

// 执行命令的工具函数
export default async (command: string, path: string) => {
  //cmd表示命令，args代表参数，如 rm -rf  rm就是命令，-rf就为参数
  const [cmd, ...args] = command.split(' ');
  return new Promise((resolve, reject) => {
    const app = spawn(cmd, args, {
      cwd: path, //执行命令的路径
      stdio: 'inherit', //输出共享给父进程
      shell: true //mac不需要开启，windows下git base需要开启支持
    });
    //执行完毕关闭并resolve
    app.on('close', resolve);
    // 相当于
    //   app.on("close", ()=>{resolve()});
  });
};
