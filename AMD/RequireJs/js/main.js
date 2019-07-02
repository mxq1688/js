
requirejs.config({
    baseUrl: 'js/', //不使用baseUrl的话，默认根目录是main.js所在目录。
    paths: {
        index: 'apps/index',
        getname: 'apps/getname',
        jquery: ['https://cdn.bootcss.com/jquery/3.4.1/jquery', 'libs/jquery-3.2.1'],
        vue : 'libs/vue',
        css: 'libs/css.min',//用于加载css文件
        bootstrap : 'libs/bootstrap',
        m	: 'apps/m', //自定义amd规范插件
        old	: 'apps/old',//自定义的非amd插件, 使用shim解决
    },

    shim: {
        // 定义依赖关系
        bootstrap: {
            deps : ['jquery','css!libs/bootstrap.css'] //加载第三方插件 （css）,加载css需要上面的css.min.js
        },
        //自定义的非amd插件
        old: {
            // exports: 'modal',
            init: function(){
                return {
                    modal: modal,
                    success: success,
                }
            }
        }
    }
});

//引入
requirejs(['index', 'm', 'old'], function (index, m, old) {
    index.init();
    m.change();
});
