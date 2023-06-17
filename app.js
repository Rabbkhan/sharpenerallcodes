const http = require("http");
const server =http.createServer((req,res)=>{
    const url = req.url;
//     res.end("Rabbil khan")
// console.log("Rabbil khan");

if (url === "/"){
    res.end("Welcome home");
}
if (url === "/about"){
    res.end("Welcome to About us page");
}
if (url === "/node"){
    res.end("Welcome to node js project");
}

} )

server.listen(4000)