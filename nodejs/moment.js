

var moment = require('moment');


console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
console.log(moment.utc().format('YYYY-MM-DD HH:mm:ss'));

console.log('\n')
var time = '2019-08-22T14:32:26+08:00';
var time2 = '2019-08-22T06:32:26Z';

console.log(moment(time).format('YYYY-MM-DD HH:mm:ss'));
console.log(moment(time).utc().format('YYYY-MM-DD HH:mm:ss'));
console.log('\n')

console.log(moment(time2).format('YYYY-MM-DD HH:mm:ss'));
console.log(moment(time2).utc().format('YYYY-MM-DD HH:mm:ss'));
console.log('\n')

console.log(moment('2019-08-14T18:01:08.000Z').utc(true).format('YYYY-MM-DD HH:mm:ss'));
console.log('\n')
