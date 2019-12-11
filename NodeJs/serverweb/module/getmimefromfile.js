
var fs = require('fs');
var events = require('events');

exports.getMime = function (cname, EventsEmitter, callback) {
    if(callback && typeof callback !== 'function'){
        console.log('参数错误');
        return false;
    }
    //异步方法 回调函数获取
        fs.readFile('./mime.json', function (err, data) {
        if(err){
            console.log(err, 'mime.json文件不存在！');
            return false;
        }
            callback(JSON.parse(data.toString())[cname] || 'text/html');
    });

    //promise方法
        // return new Promise(function (resolve, reject) {
        //     fs.readFile('./mime.json', function (err, data) {
        //         if(err){
        //             console.log(err, 'mime.json文件不存在！');
        //             reject('mime.json文件不存在！')
        //             return false;
        //         }
        //         resolve(JSON.parse(data.toString())[cname] || 'text/html');
        //     });
        // })

    // events广播&订阅
        fs.readFile('./mime.json', function (err, data) {
            if(err){
                console.log(err, 'mime.json文件不存在！');
                return false;
            }
            EventsEmitter.emit('mime-type', JSON.parse(data.toString())[cname] || 'text/html');
        });
    // 同步读取
    var data = fs.readFileSync('./mime.json');//路劲相对server.js
    return JSON.parse(data.toString())[cname] || 'text/html';

}
