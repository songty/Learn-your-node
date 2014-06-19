var http = require('http');
var fs = require('fs');
var URL = require('url');

var server = http.createServer(function(req, res) {
	var blah = URL.parse(req.url, true);
	console.log(blah);
	console.log(blah.query);
	console.log(blah.path);
	var date = new Date(blah.query.iso);

	// console.log(Date.getTime(blah.query.iso));
	if (req.method === 'GET' && blah.pathname === '/api/parsetime' && blah.query.iso) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({
			'hour': date.getHours(),
			'minute': date.getMinutes(),
			'second': date.getSeconds()
		}));

	}
	if (req.method === 'GET' && blah.pathname === '/api/unixtime') {
			res.end(JSON.stringify({
			'unixtime': Date.parse(date.toISOString())
		}));
	}
	// src.pipe(res);
});

server.listen(Number(process.argv[2]));