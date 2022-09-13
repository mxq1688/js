const fs = require('fs');
const path = require('path');
const cors = require('cors');
const express = require('express');
const server = express();
server.use(cors());
// server.get('/', (req, res, next) => {
//   console.log(res.header)
//   res.header('Access-Control-Allow-Origin', 'http://dev.mobvoi.com:8080');
//   next()
// })
// server.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
// res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
// res.header('Access-Control-Allow-Headers', 'Content-Type');
// res.header("Content-Type", "application/json;charset=utf-8");
//   res.header('Access-Control-Allow-Credentials', 'false');
//   next()
// })
server.use(express.static('dist'));
// server.use(cors({
//   origin: '*',//可设置多个跨域
//   credentials: true//允许客户端携带验证信息
// }))
const bundle = fs.readFileSync(path.resolve(__dirname, 'dist/server.js'), 'utf-8');
const clientBundle = fs.readFileSync(path.resolve(__dirname, 'dist/client.js'), 'utf-8');
const renderer = require('vue-server-renderer').createBundleRenderer(bundle, {
  template: fs.readFileSync(path.resolve(__dirname, 'dist/index.ssr.html'), 'utf-8') // 服务端渲染数据
});
server.get('/client', (req, res,) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send(clientBundle);
})
server.get('/html', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Credentials", "true");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

  renderer.renderToString((err, html) => {
    // console.log(html)
    // console.error(err);
    // if (err) {
    //   res.status(500).end('服务器内部错误');
    //   return;
    // }
    res.send({ html, js: 'http://localhost:8088/client' });
    // res.send(html);
  })
});


server.listen(8088, () => {
  console.log('访问：http://127.0.0.1:8088');
});
