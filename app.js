var http = require('http');

http.createServer(function(req, res){
    console.log("Server running on port 3000");
    res.writeHead(200, {'Content-type':'text/plain'});
    res.end("Hello world!");

}).listen(3000);
