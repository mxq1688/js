
var fs = require('fs');

// 流的方式读取文件

var readStream = fs.createReadStream('input.txt');


var str = '';
var count = 0;

readStream.on('data',function (chuck) {
    str += chuck;
    count++;
})
// 读取完成
readStream.on('end', function (chuck) {
    console.log(str);
    console.log(count);
})
// 读取失败
readStream.on('error', function (chuck) {

})


