var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	if (req.method != 'POST') 
		return res.end('send me a POSY\n');
	// console.log(req.method);
	req.on('data', function(data) {
		var things = (data.toString());
		var result = things.toUpperCase();
		res.write(result);
	});
});

server.listen(Number(process.argv[2]));