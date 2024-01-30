var http = require('http');
http.createServer(function(req, res){
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hey I am ok. Do you want to be friends with me . You can also join ');
}).listen(8080)