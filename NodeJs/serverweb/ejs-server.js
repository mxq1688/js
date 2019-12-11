'use strict';

var http = require('http');
var url = require('url')

var module = require('./module/ejs-router');


http.createServer(function (request, response) {

    var request_url = url.parse(request.url, true);
    var pathname = request_url.pathname.replace('/', '');
    pathname = pathname == ''? 'index': pathname;

    if(pathname != 'favicon.ico') {
        try{
            module[pathname](request, response)
        }catch (e) {
            module['index'](request, response)
        }
    }
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://localhost:8888/');
