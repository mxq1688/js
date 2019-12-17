const express=require('express');
const app=express();
const mysql=require('mysql2');
const bodyParser=require('body-parser');
const connection=mysql.createConnection({
    host:'47.98.58.56',
    port:3306,
    user:'walnut',
    database:'thxy'
})
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/event',function(req,res){
    var sql='select * from text';
    connection.query(sql,function(error,result){
        res.send({
            error:error,
            result:result
        })
    })
})

app.post('/event',function(req,res){
    var text=req.body.text;
    var status=req.body.status;
    sql=`insert into text (text,status) value ('${text}','${status}')`
    connection.query(sql,function(error,result){
        res.send({
            error:error,
            result:result
        })
    })
})

app.delete('/event/:id',function(req,res){
    var id=req.params.id;
    var sql=`delete from text where id='${id}'`;
    connection.query(sql,function(error,result){
        res.send({
            error:error,
            result:result
        })
    })
})

app.put('/event/:id',function(req,res){
    var status=req.body.status;
    var id=req.params.id;
    var sql=`update text set status='${status}' where id='${id}'`;
    connection.query(sql,function(error,result){
        res.send({
            error:error,
            result:result
        })
    })
})

app.listen(8080);
