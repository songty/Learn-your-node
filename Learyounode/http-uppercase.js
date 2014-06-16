var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	console.log(req);
	console.log(res);
});

server.listen(process.argv[2]);