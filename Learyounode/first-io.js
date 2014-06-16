var fs = require('fs');
var option = 'utf8';

fs.readFile(process.argv[2], option, function(err, data) {
	if (err) throw err;
	var readContents = data;
	var result = readContents.split('\n').length - 1;
	console.log(result);
});

