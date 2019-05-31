'use strict';

var fs = require('fs');
var http = require('http');
var url = require('url');
var path = require('path');
var path = require('path');
//
// fs.readFile('1.jpg', function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         console.log(data.length + ' bytes');
//         console.log(Buffer.from(data.toString('utf-8'), 'utf-8'))//buffer二进制数据
//     }
// });

// 打开一个流:
// var rs = fs.createReadStream('input.txt', 'utf-8');
//
// rs.on('data', function (chunk) {
//     console.log('DATA:')
//     console.log(chunk);
// });
//
// rs.on('end', function () {
//     console.log('END');
// });
//
// rs.on('error', function (err) {
//     console.log('ERROR: ' + err);
// });

// var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
// ws1.write('使用Stream写入文本数据...\n');
// ws1.write('END.');
// ws1.end();
//
// // var ws2 = fs.createWriteStream('output2.txt');
// // ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
// // ws2.write(new Buffer('END.', 'utf-8'));
// // ws2.end();
//
// var rs = fs.createReadStream('input.txt');
// var ws = fs.createWriteStream('copied.txt');
// rs.pipe(ws);


// 解析当前目录:
var workDir = path.resolve('.'); // '/Users/michael'
// 组合完整的文件路径:当前目录+'pub'+'index.html':
var filePath = path.join(workDir, 'pub', 'index.html');
var root = path.resolve(process.argv[2] || '.');
// console.log(process.argc);
// console.log(process.argv);
// console.log(root);


var server = http.createServer(function(request, response){
    // 获得URL的path，类似 '/css/bootstrap.css':
    var pathname = url.parse(request.url).pathname;
    // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
    if(pathname == '/'){
        pathname = 'index.html'
    }
    var filepath = path.join(root, pathname);
    // 获取文件状态:
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) {
            // 没有出错并且文件存在:
            // console.log('200 ' + request.url);
            // 发送200响应:
            response.writeHead(200);
            // 将文件流导向response:
            fs.createReadStream(filepath).pipe(response);
            // response.end('kk');
        } else {
            // 出错了或者文件不存在:
            // console.log('404 ' + request.url);
            // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

// server.listen('8080');
// console.log('Server is running at http://127.0.0.1:8080/');
