const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();




router.get('/service',(req,res)=>{
    res.sendFile(path.join(process.cwd () +'/public/service.html'));
  });





  module.exports = router;