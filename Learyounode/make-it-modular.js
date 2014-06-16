var fs = require('fs');
var option = 'utf8';
var path = require('path');

module.exports = function(readFolder, extension, cb) {
	fs.readdir(readFolder, function(err, files) {
		if(err) {return cb(err, null);}
		var result = files.filter(function(eachFile) {
			if (path.extname(eachFile) === ('.' + extension)) {
				return eachFile;
			}
		});
		cb(null, result);
	});
};