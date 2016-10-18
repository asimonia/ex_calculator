// Get elements on page
var x = document.getElementById("x");
var y = document.getElementById("y");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");

var multiplier = function (x, y) {
	return x * y;
};


var adder = function (x, y) {
	return x + y;
};


var subtracter = function (x, y) {
	return x - y;
};


var divider = function (x, y) {
	return x / y;
};



// Register event listeners with elements on page
add.addEventListener("click", function() { perform(x.value, y.value, adder); }, false);
subtract.addEventListener("click", function() { perform(x.value, y.value, subtracter); }, false);
multiply.addEventListener("click", function() { perform(x.value, y.value, multiplier); }, false);
divide.addEventListener("click", function() { perform(x.value, y.value, divider); }, false);


function perform(x, y, f) {
	console.log(x.value + " " + y.value);
	return f(x, y);
}