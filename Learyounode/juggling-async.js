var http = require('http');
var option = 'utf8';
var urlNumb = process.argv[2];
var result = [];
var count = 0;

for (var i = 0; i < 3; i++) {
	goGet(i);
}

function goGet(index) {
	http.get(process.argv[2 + index], function(response) {
		var str = '';
		response.setEncoding(option);
		response.on('data', function(data) {
			str = str.concat(data);
		});
		response.on('end', function() {
			result[index] = (str);
			count++;
			if(count === 3) {
				printResult();
			}
		});
	});
}

function printResult() {
	result.forEach(function(data) {
		console.log(data);
	});
}

// http.get(url1, function(response) {
// 	var firstRes = '';
// 	response.setEncoding(option);
// 	response.on('data', function(data) {
// 		firstRes = firstRes.concat(data);
// 	});
// 	response.on('end', function() {
// 		console.log(firstRes);
// 		http.get(url2, function(response) {
// 			var secondRes = '';
// 			response.setEncoding(option);
// 			response.on('data', function(data) {
// 				secondRes = secondRes.concat(data);
// 			});
// 			response.on('end', function() {
// 				console.log(secondRes);
// 					http.get(url3, function(response) {
// 						var thirdRes = '';
// 					response.setEncoding(option);
// 					response.on('data', function(data) {
// 						thirdRes = thirdRes.concat(data);
// 					});
// 					response.on('end', function() {
// 						console.log(thirdRes);
// 					});
// 				});
// 			});
// 		});
// 	});
// });
