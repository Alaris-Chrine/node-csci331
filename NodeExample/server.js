// server.js
const http = require("http");

http.createServer(function(request, response) {    
   response.writeHead(200, {"Content-Type": "text/html"});
   response.write("<h1>Hello, Node.js!</h1>");    
   response.write("<h2>Charis Liddle - d91z289</h2><p>Running node server on port 3044</p>");  
   response.end();
}).listen(3044);
