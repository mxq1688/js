const http = require('http')
function express(){
    var funcs = [];

    var expr = function(req,res){
        var i = 0;
        function next(){            
            var task = funcs[i++];
            if(!task) return;
            task(req,res,next);
        }
        next();
    }
    //use是expr函数的静态方法 
    expr.use=function(f){
        funcs.push(f);
    }
    return expr;
}
var app = express();

app.use(function(req,res,next){
    console.log('haha');
    next();
});
app.use(function(req,res,next){
    console.log('hehe');
    next();
});
app.use(function(req,res){
    res.end("there is nothing happened");
});

http.createServer(app).listen('3000', function(){
  console.log('Express server listening on port 3000');
});