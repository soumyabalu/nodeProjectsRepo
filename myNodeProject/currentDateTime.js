var http = require('http');
var date = require('./myDateTime');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Todays date and time is :" + date.myDateTime());
    res.end();

}).listen(8080);