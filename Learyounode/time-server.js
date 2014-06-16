var net = require('net');
var date = new Date();

var server = net.createServer(function(socket) {
	var data = {
		year : date.getFullYear(),
		month : '0' + (1 + date.getMonth()),
		day :  date.getDate(),
		hour : date.getHours(),
		minutes : '0' + date.getMinutes()
	};
	var arrayData = Stringing(data);
	var da = arrayData.slice(0, 3).join('-');
	var time = arrayData.slice(3, 5).join(':');
	console.log(da);
	console.log(time);
	console.log(data);
	socket.end(da + ' ' +time);
});

function Stringing(obj) {
	return Object.keys(obj).map(function(key) {
		return obj[key];
	});
}




server.listen(process.argv[2]);
