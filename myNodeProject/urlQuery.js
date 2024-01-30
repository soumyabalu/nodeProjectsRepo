var url = require('url');
var address = "http://localhost:8080/default.html?year=2024&month=january&date=01/30/2024";
var q = url.parse(address, true);
console.log(q.hostname);
console.log(q.pathname);
console.log(q.protocol);
console.log(q.host);
console.log(q.port);
console.log(q.path);
console.log(q.query.year)
console.log(q.query.month)
console.log(q.query.date)
// we can place q.query in a variable and can query the url
var data = q.query;
console.log(data.year);
console.log(data.month)