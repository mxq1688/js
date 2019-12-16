'use strict';

var http = require('http');
var url = require('url')


const G = {};

var app = function (request, response) {


    var request_url = url.parse(request.url, true);
    var pathname = request_url.pathname.replace('/', '');
    pathname = pathname == ''? 'index': pathname;

    if(pathname != 'favicon.ico') {
        pathname = pathname.endsWith('/')? pathname: pathname+'/';
        pathname = pathname.startsWith('/')? pathname: '/'+pathname;
    }

    if(G[pathname]){
        G[pathname](request, response);
    }else{
        response.writeHead('404',{'Content-Type': "text/html;charset='utf8'"})
        response.end('not found');
    }
}

// 定义get方法 (构造函数的静态方法)
    app.get = function (string, callback) {
        string = string.endsWith('/')? string: string+'/';
        string = string.startsWith('/')? string: '/'+string;

        G[string] = callback;
    }


http.createServer(app).listen(8888);

// 注册login路由
app.get('login',function (request, response) {
    console.log('login');
});
// 注册index路由
app.get('index',function (request, response) {
    console.log('index');
});

// 终端打印如下信息
console.log('Server running at http://localhost:8888/');
