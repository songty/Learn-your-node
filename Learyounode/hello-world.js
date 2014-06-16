// console.log(process.argv);
var numbArray = [];
process.argv.forEach(function(arg) {
	numbArray.push(+arg);
});
var processedArray = numbArray.slice(2);
// console.log(processedArray);

var sum = 0;
processedArray.forEach(function(numb) {
	sum = numb + sum;
});
console.log(sum);