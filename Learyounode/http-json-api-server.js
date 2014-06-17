var http = require('http');
var fs = require('fs');
var URL = require('url');

var server = http.createServer(function(req, res) {
	var blah = URL.parse(req.url, true);
	console.log(blah);
	console.log(blah.query);
	console.log(blah.path);
	server.listen(blah.query, function() {
		console.log('he');
	});
	// src.pipe(res);
});

server.listen(Number(process.argv[2]));