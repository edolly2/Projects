document.getElementById("btn").addEventListener("click", function(event) {
    console.log("Hey, this works!");
});


var message;
message = "Hello, World!";
console.log(message);

message = "Everything changes!";
console.log(message);

message = 101;
console.log(message);

message = true;
console.log(message);

var hello = "Hello, World!";
console.log(hello);

var firstName = "Eric",
    lastName = "Dollinger",
    age = 29;

console.log(firstName, lastName, age);

var addition = 5 + 5;
var subtraction = 6 - 5;
var multiplication = 10 * 2;
var division = 10 / 2;
var module = 10 % 2;
var moduleTwo = 10 % 3;
console.log(addition, subtraction, multiplication, division, module, moduleTwo);

var total = 200;
console.log(total);

total = total + 100;
console.log(total);

total = 200;
total += 100;
console.log(total);


var count = 0;
++count;
console.log(count);

count++;
console.log(count);

// Math library functions

Math.max(5, 10);
Math.sqrt(49);
Math.round(3.657);
Math.random();
Math.random() * 100;