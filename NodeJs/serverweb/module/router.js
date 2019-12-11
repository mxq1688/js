var url = require('url');
var fs = require('fs');
var path = require('path');
var mimeModule = require('./getmime');
var mimeFileModule = require('./getmimefromfile');

var events = require('events');
var EventsEmitter = new events.EventEmitter();


exports.statics = function (request, response, static) {
    // 过滤获取pathname
    var request_url = url.parse(request.url);
    var pathname = request_url.pathname;

    pathname = pathname == '/'? 'index.html': pathname;
    //获取后缀名
    var extname = path.extname(pathname);
    // var mimeType = mimeModule.getMime(extname);
    var mimeType = mimeFileModule.getMime(extname, EventsEmitter,function (data) {});
    // EventsEmitter.on('mime-type', function (data) {
    //     console.log(mimeType);
    // })


    if(pathname != '/favicon.ico'){

        fs.readFile(static+ '/'+pathname, function (err, data) {
            if(err){
                fs.readFile(static+ '/404.html', function (err, data) {
                    response.writeHead(404, {'Content-Type': "text/html;charset='utf8'"});
                    response.write(data);
                    response.end();/*结束响应*/
                });
                return false;
            }
            response.writeHead(200, {'Content-Type': mimeType+";charset='utf8'"});
            response.write(data);
            response.end();/*结束响应*/
        });

    }
}
