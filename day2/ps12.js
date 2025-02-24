const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-Type':'text/html'

    })
    req.readableEnded(`<h1 style ='background-color'>Hello world</h1>`);
    server.listen(9000,()=>{
        console.log
    })
})