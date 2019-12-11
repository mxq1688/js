'use strict';

var http = require('http');
var router = require('./module/router');


http.createServer(function (request, response) {
    router.statics(request, response, 'static')
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://localhost:8888/');
