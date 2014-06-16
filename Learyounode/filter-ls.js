var fs = require('fs');
var option = 'utf8';
var path = require('path');
var printFile = require('./make-it-modular');
var readFolder = process.argv[2];
var extension = process.argv[3];


printFile(readFolder, extension, function(err, data){
	data.forEach(function(element) {
		console.log(element);
	});
});
