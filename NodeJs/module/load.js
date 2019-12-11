// 引入自定义模块
    var modul = require('./modul')
    // console.log(modul);

// 不加前缀默认去node_modules目录中查找
    var foo = require('foo');
    console.log(foo);

// 查找目录目录下文件，省略文件名的方法
    //方法1
        var nav = require('nav/nav.js');
    //方法2，在nav目录下创建package.json
        var nav = require('nav');

        console.log(nav);
