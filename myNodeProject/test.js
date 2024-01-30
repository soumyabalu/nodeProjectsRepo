var http = require('http');
http.createServer(function(req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('My project is success!!!');
}).listen(8080);