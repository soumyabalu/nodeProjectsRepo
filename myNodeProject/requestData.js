var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var filename = "." + q.pathname;
    fs.readFile('filename', function(err, data){
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write('404 not found');
        }
        console.log("Sucess");
    })
    res.write(data);
    return res.end();
    fs.readFile('filename', function(err,data){
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write('404 not found');
        }
        console.log("Sucess");
    })
    res.write(data);
    return res.end();

}).listen(8080);
