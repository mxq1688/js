let express = require('express');
let http = require('http')
let path = require('path')
let app = express();
app.use(express.static(path.join(__dirname, './'))) //匹配静态资源 包括index.html
// app.listen(3000);
http.createServer(app).listen(3000);