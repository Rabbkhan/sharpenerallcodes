const http = require("http");

const server =http.createServer((req,res)=>{
    res.end("Rabbil khan")
console.log("Rabbil khan");
} )
server.listen(4000)