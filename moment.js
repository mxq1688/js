

var moment = require('moment');


// antd时间插件需要用这种时间类型
moment(moment().subtract(1, 'days'), 'YYYY-MM-DD')

// 获取时间戳
moment().format('X')

// 格式
moment().format('YYYY-MM-DD HH:mm:ss') 
moment().format('YYYY-MM-DD 00:00:00') 

// add() days Monday minute
// 加
moment().add(1, 'days').format('YYYY-MM-DD HH:mm:ss')
moment().add(-1, 'days').format('YYYY-MM-DD HH:mm:ss')
// 减
moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')
moment().subtract(-1, 'days').format('YYYY-MM-DD HH:mm:ss')
// 本周
moment().day("Monday").format("YYYY-MM-DD 00:00:00"); //本周一
moment().day("Monday").day(+7).format("YYYY-MM-DD 23:59:59"); //本周日
// 本月
moment().startOf("month").format("YYYY-MM-DD 00:00:00"); //本月1号
moment().endOf("month").format("YYYY-MM-DD 23:59:59"); //本月最后一天

// 本天
moment().startOf("day");
moment().endOf("day");

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
