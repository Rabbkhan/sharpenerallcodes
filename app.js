const express = require('express');
const bodyParser= require('body-parser')
const path = require('path');
const addminrouter =require('./routes/admin')
const shoprouter =require('./routes/shop')
const contactrouter =require('./routes/contact')
const successrouter =require('./routes/success')

const app= express();
PORT = 4000;
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',addminrouter);
app.use(contactrouter);
app.use(successrouter);
app.use(shoprouter);
app.use((req,res,next)=>{
res.status(404).sendFile(path.join(__dirname, 'views','404.html'))
})

 

app.listen(`${PORT}`);
