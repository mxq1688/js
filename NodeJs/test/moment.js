

var moment = require('moment');


console.log('本地时间',moment().format('YYYY-MM-DD HH:mm:ss'));
console.log('utc时间',moment.utc().format('YYYY-MM-DD HH:mm:ss'));

console.log('\n')
var time = '2019-08-22T14:32:26+08:00';//东八区本地时间
var time2 = '2019-08-22T06:32:26Z';//Z utc时间

console.log(moment(time).format('YYYY-MM-DD HH:mm:ss'));
console.log(moment(time).utc().format('YYYY-MM-DD HH:mm:ss'));
console.log('\n')

console.log(moment(time2).format('YYYY-MM-DD HH:mm:ss'));
console.log(moment(time2).utc().format('YYYY-MM-DD HH:mm:ss'));
console.log('\n')


//utc() 显示utc时间， utc(true)显示东八区本地时间
console.log(moment('2019-08-14T18:01:08.000Z').utc(true).format('YYYY-MM-DD HH:mm:ss'));

console.log('\n')
