// Get elements on page
var x = document.getElementById("x");
var y = document.getElementById("y");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var result = document.getElementById("result");


var adder = function (x, y) {
	return parseFloat(x, 10) + parseFloat(y, 10);
};

var subtracter = function (x, y) {
	return parseFloat(x, 10) - parseFloat(y, 10);
};

var multiplier = function (x, y) {
	return parseFloat(x, 10) * parseFloat(y, 10);
};

var divider = function (x, y) {
	return parseFloat(x, 10) / parseFloat(y, 10);
};



// Register event listeners with elements on page
add.addEventListener("click", function() {
	perform(x.value, y.value, adder); 
}, false);

subtract.addEventListener("click", function() {
	perform(x.value, y.value, subtracter);
}, false);

multiply.addEventListener("click", function() { 
	perform(x.value, y.value, multiplier);
}, false);

divide.addEventListener("click", function() {
	perform(x.value, y.value, divider);
}, false);


function perform(x, y, f) {
	result.value = f(x, y);
	console.log(f(x, y));
}