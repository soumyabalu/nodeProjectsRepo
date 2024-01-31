var http = require("http");
var fs = require("fs");
http.createServer(function(req, res){
    var datareq = "filename";
    fs.readFile(datareq, function(err, data){
        if (err){
            res.writeHead(404, {'Content-Type': 'text/plain'});
            return res.end(datareq.data);
        }
        {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            return res.end(datareq.data);
        };
    })
})