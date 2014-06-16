var http = require('http');
var option = 'utf8';

var url = process.argv[2];
var result = '';
http.get(url, function(response) {
	response.setEncoding(option);
	response.on('data', function(data) {
		result = result.concat(data);
	});
	response.on('end', function() {
		console.log(result.length);
		console.log(result);
	});

	response.on('error',console.error);
	// res.on("data", function(data) {
	// 	console.log(data);
	// }).setEncoding(option);
}); 