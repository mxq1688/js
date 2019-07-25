
requirejs.config({
    baseUrl: 'src/', //不使用baseUrl的话，默认根目录是main.js所在目录。
    paths: {
        jquery: ['https://cdn.bootcss.com/jquery/3.4.1/jquery', 'libs/jquery-3.2.1'],
        react: ['https://cdn.staticfile.org/react/16.4.0/umd/react.development'],
        reactDom: ['https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development'],
        babel: ['bower_components/require-react-jsx/babel-5.8.34.min'],
        reactRouter: ['https://cdn.bootcss.com/react-router/4.3.0/react-router'],
        css: 'libs/css.min',//用于加载css文件
        bootstrap : 'libs/bootstrap',
    },

    shim: {
        // 定义依赖关系
        bootstrap: {
            deps : ['jquery','css!libs/bootstrap.css'] //加载第三方插件 （css）,加载css需要上面的css.min.js
        },
        //自定义的非amd插件
    }
});

requirejs(['index']);

