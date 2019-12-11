
var fs = require('fs');

// 管道流

var readStream = fs.createReadStream('input.txt');


var writeStream = fs.createWriteStream('output.txt');


readStream.pipe(writeStream)

console.log('执行完毕');
