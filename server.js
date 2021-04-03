var express=require('express');
//创建一个实例
var app=express();
//搭建服务,增加监听
app.get('/abc',function(req,res){
    res.send('hello world');
    //可以读文件
    // fs.readFile();
})
app.get('/xyz',function(req,res){
    res.send('我是xyz');
})
app.listen(8080);
console.log("服务已启动");
//在cmd中node server.js  
//在浏览器中输入地址 localhost:8080/abc
//在浏览器中输入地址 localhost:8080/xyz