var http = require("http");
var url = require("url");
var fs = require("fs");
http.createServer(function(req, res){
    
var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data){
        if (err){
            res.writeHead(404, {'Content-Type': 'text/txt'});
            return res.write("404 not found");
        }
        
            res.writeHead(200, {'Content-Type': 'text/txt'});
            res.write(data);
            return res.end();
            
       
    });
}).listen(8080);

