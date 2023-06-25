const express = require('express');
const path = require('path');
const router = express.Router();

const rootdir = require('../util/path')

router.get('/success', (req, res, next)=>{
   res.sendFile(path.join(rootdir, 'views', 'sucess.html'))
    
     });
    
module.exports =router;