let express = require('express');
let http = require('http')
let app = express();
app.use(express.static('./')) //匹配静态资源 包括index.html

// app.listen(3000);
http.createServer(app).listen(3000);