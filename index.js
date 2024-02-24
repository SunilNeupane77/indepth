const express = require('express');
const app = express();
app.get('/',(req,res)=>{
   res.end("<h1>Sunil Neupane Home Page is Running</h1> ");
})
 const port=3000;
app.listen(port,()=>{
   console.log("App is Running ");
})