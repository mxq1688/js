'use strict';

var http = require('http');
var ejs = require('ejs');
var app = require('./module/express-router')


http.createServer(app).listen(8888);

// 注册login路由
app.get('/login',function (request, response) {
    response.writeHead(200, {'Content-Type': "text/html;charset='utf8'"});

    var vurl = 'views/login.ejs';
    ejs.renderFile(vurl, {}, function (err, data) {
        response.write(data);
        response.end();/*结束响应*/
    })
});
// 注册dologin路由
app.get('dologin',function (request, response) {
    //获取get参数
    console.log(request.body);
    response.send("<script>alert('登录成功'); location.href='/index'</script>")
});

// 注册dologin路由
app.post('dologin',function (request, response) {
    console.log(request.body);
    response.send("<script>alert('登录成功'); location.href='/index'</script>")
});
// 注册index路由
app.get('/index',function (request, response) {
    console.log('index');
    response.end('index')
});

// 终端打印如下信息
console.log('Server running at http://localhost:8888/');
