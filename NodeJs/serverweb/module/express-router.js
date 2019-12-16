
var url = require('url')

/*分装方法改变response, 绑定send方法*/
function CHangeRes(response) {
    response.send = function (data) {
        response.writeHead(200, {'Content-Type': "text/html;charset='utf8'"});
        response.end(data);/*结束响应*/
    }
}

var Server = function(){
    var G = this;//全局变量
    // 处理get post请求
        this._get = {};
        this._post = {};

    var app = function (request, response) {

        CHangeRes(response);

        var request_url = url.parse(request.url, true);
        var pathname = request_url.pathname.replace('/', '');
        pathname = pathname == ''? 'index': pathname;

        if(pathname != 'favicon.ico') {
            pathname = pathname.endsWith('/')? pathname: pathname+'/';
            pathname = pathname.startsWith('/')? pathname: '/'+pathname;
        }

        var method = request.method.toLowerCase();

        if(G['_'+method][pathname]){
            if(method == 'get'){

                var query = request_url.query;
                request.body = query;

                G['_'+method][pathname](request, response);
            }
            if(method == 'post'){
                var strPost = '';
                request.on('data', function (data) {
                    strPost += data;
                })
                request.on('end', function (err, data) {
                    request.body = strPost;

                    G['_'+method][pathname](request, response);
                })
            }
        }else{
            response.writeHead('404',{'Content-Type': "text/html;charset='utf8'"})
            response.end('not found');
        }
    }

// 定义get方法 (构造函数的静态方法)
    app.get = function (string, callback) {
        string = string.endsWith('/')? string: string+'/';
        string = string.startsWith('/')? string: '/'+string;

        G._get[string] = callback;
    }
// 定义post方法 (构造函数的静态方法)
    app.post = function (string, callback) {
        string = string.endsWith('/')? string: string+'/';
        string = string.startsWith('/')? string: '/'+string;

        G._post[string] = callback;
    }
    return app;
}

module.exports = Server();
