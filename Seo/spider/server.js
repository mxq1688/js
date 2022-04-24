var express = require('express');
var path = require('path');
var app = express();
var spider = require("./spider.js")
var minify = require('html-minifier').minify;
const isProduction = process.env.NODE_ENV === 'production'
var port = process.env.VUE_APP_TICO_ENV? (process.env.VUE_APP_TICO_ENV!== 'prd'? '': ':9032'): ':8080'
app.use(express.static(path.join(__dirname, '../dist')))
app.get('*', async (req, res, next) => {
	// 部署到服务器的完整URL
	 var url = req.protocol + '://'+ req.hostname + port + req.originalUrl;
    //  console.log(111, req);
	console.log('请求的完整URL：' + url);
	var content = await spider(url).catch((error) => {
		console.log(error);
		res.send('获取html内容失败');
		return;
	});
    //由于是直接获取的源码，下面通过minify库压缩代码，也不知道是不是多余的。
	// content=minify(content,{removeComments: true,collapseWhitespace: true,minifyJS:true, minifyCSS:true});
	res.send(content);
});
//监听3000端口
app.listen(3000, () => {
	console.log('预渲染服务已启动！');
});
