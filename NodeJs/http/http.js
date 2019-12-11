'use strict';

/*
    热更新：
*       supervisor  代替node运行
*       nodemon     代替node运行
*
* */

//内置模块
var http = require('http');
var url = require('url');

http.createServer(function (request, response) {

    // request
    // 获取url参数 http://127.0.0.1:8888/?id=123
    // console.log(request.url);

        if(request.url != '/favicon.ico'){
            var req = url.parse(request.url, true);//true表示把get传值（query）转为对象

            console.log(req.query.id);


        }



    // response
        // 发送 HTTP 头部
        // HTTP 状态值: 200 : OK
        // 内容类型: text/html 字符集 utf8
        response.writeHead(200, {'Content-Type': "text/html;charset='utf8'"});

        response.write('hello world\n');
        // 发送响应数据 "Hello World"
        response.end('end');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
