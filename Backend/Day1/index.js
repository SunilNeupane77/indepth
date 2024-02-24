const http = require('http');
const server = http.createServer((req,res)=>{
   if (req.url === "/about") {
       res.end("<h1>This is About Page</h1>");
   }
   if(req.url === "/"){
       res.end("<h1>This is Home Page</h1>");
   }
   if(req.url === "/sunil"){
       res.end("<h1>This is Sunil Page</h1>");
   }
   else{
       res.end("<h1>Page Not Found man</h1>");
   }
});
server.listen(5000,()=>{
   console.log("Server is Listening");
   
});