const http = require('http');
const express = require('express');
const app= express();
PORT = 4000;
// console.log(routes.someText);
 app.use('/', (req, res, next)=>{
res.send(`<h1> hello sharpener</h1>`)
 })

app.listen(`${PORT}`);
