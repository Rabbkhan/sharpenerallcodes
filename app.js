const express = require('express');
const bodyParser= require('body-parser')
const app= express();
const addminrouter =require('./routes/admin')
const shoprouter =require('./routes/shop')
app.use(bodyParser.urlencoded({extended: false}));
PORT = 4000;

app.use('/admin',addminrouter);
app.use(shoprouter);
app.use((req,res,next)=>{
res.send('<h1>404 No Page found</h1>')
})

 

app.listen(`${PORT}`);
