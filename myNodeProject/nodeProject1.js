var http = require('http');
http.createServer(fun(req, res{
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Oh my');
})).listen(8080);