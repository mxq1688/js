// 定义模块

    // define({
    //     name: 'mm',
    //     age: 11,
    // });

    //函数式定义
    // define(function () {
    //     var demo = 20;
    //         function mm(){
    //         }
    //         return {
    //             mm: mm
    //         }
    // });

    //依赖式定义
    // define(['getname'], function (getname) {
    //     console.log(getname);
    // });

define(['getname', 'jquery'], function (getname, $) {
    function init() {
        $('#root').html(getname.userInfo.name);
    }
    return {
        init: init
    }
});
