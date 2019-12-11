
var ejs = require('ejs')
var url = require('url')

var app = {
    login: function (request, response) {

        response.writeHead(200, {'Content-Type': "text/html;charset='utf8'"});

        var vurl = 'views/login.ejs';
        ejs.renderFile(vurl, {}, function (err, data) {
            response.write(data);
            response.end();/*结束响应*/
        })
    },
    dologin: function(request, response){
        response.writeHead(200, {'Content-Type': "text/html;charset='utf8'"});

        if(request.method == 'GET'){
            //获取get参数
            var request_url = url.parse(request.url, true);
            console.log(request_url.query);
            response.end("<script>alert('登录成功'); location.href='/index'</script>");/*结束响应*/
        }else{
            //获取POST数据
            var postStr = '';
            request.on('data',function (data) {
                postStr += data;
            });
            request.on('end',function (data) {
                console.log(postStr);
                response.end("<script>alert('登录成功'); location.href='/index'</script>");/*结束响应*/
            });
        }
    },
    index: function (request, response) {
        response.writeHead(200, {'Content-Type': "text/html;charset='utf8'"});
        var vurl = 'views/index.ejs';
        var param = {
            title: '这是主页',
            data: [1,2,3,4,5,6]
        };
        ejs.renderFile(vurl, param, function (err, data) {
            response.write(data);
            response.end();/*结束响应*/
        })
    }
};
module.exports = app
