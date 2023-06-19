const http = require("http");
const fs = require('fs');
const server =http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;

if (url === "/"){
    res.write('<html>');
    res.write('<head><title> Enter Message</title> </head>');
    res.write('<body><form action="/message" method="POST"> <input type="text" name="message"><button type="submit">send</button></form> </body>');
    res.write('<html>');
    res.write('<html>');

    return res.end();
}
if(url === '/message' && method ==='POST'){
fs.writeFileSync('message.txt', 'Hello bro whatsup');
res.statusCode=302;
res.setHeader('location','/');
return res.end();
}
} )

server.listen(4000)