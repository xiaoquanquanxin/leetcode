//引入模块
var http = require('http');
var urls = require('url');
var util = require('util');

//创建服务
http.createServer(function (req, res){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log(`访问${new Date().toLocaleString()}`);
    //解析并且打成字符串形式返回给客户端
    res.end(JSON.stringify({
        code: 1000,
        data: {
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyTmFtZSI6ImR4eSIsInVzZXJJZCI6ImM4MzllYTgzODJmZDRiMWY5MjliOTI0Y2JjNjc5MGU2In0.kQ37Nilcg-bTM-DkmKix9VicxVsYxhOqxUf56FlMx2I'
        },
    }));
}).listen(3000);

console.log('http server is listening at port 3000');

//  /user/login
