var http = require('http');    // importing the inbuild http module to node.js
var url = require('url');  // importing the inbuild url modeule to node.js to split the query string into ore redable format

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var q = url.parse(req.url, true);
    var text = ("q.Date" + " " + "q.Month");
    res.end(text);

}).listen(8080);
