// Get elements on page
var x = document.getElementById("x");
var y = document.getElementById("y");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var equals = document.getElementById("equals");


// Register event listeners with elements on page
add.addEventListener("click", function() {alert("add");});
subtract.addEventListener("click", function() {alert("subtract");});
multiply.addEventListener("click", function() {alert("multiply");});
divide.addEventListener("click", function() {alert("divide");});
submit.addEventListener("click", function() {alert("submit");});



var multiplier = function (x, y) {
  return x * y;
}


var adder = function (x, y) {
  return x + y;
}


var subtracter = function (x, y) {
  return x - y;
}


var divider = function (x, y) {
  return x / y;
}



/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function (x, y, operation) {
  
}