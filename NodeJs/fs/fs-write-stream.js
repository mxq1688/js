
var fs = require('fs');

// 流的方式

var writeStream = fs.createWriteStream('output.txt');

for(var i=0;i<100;i++){
    writeStream.write('我是写入的数据\n', 'utf8');
}
// 标记写入完成
writeStream.end()

writeStream.on('finish', function () {
    console.log('写入完成');
})

writeStream.on('error', function (err) {
    console.log('写入失败');
})

