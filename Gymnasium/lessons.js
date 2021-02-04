// Lesson 1

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

// Lesson 2

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

// Lesson 3

var userName = "username123456"

if (userName == "username1234") {
    console.log("Welcome to our site!");
} else if (userName == "username123456") {
    console.log("Nice guess. Welcome!");

} else {
    console.log("Sorry, try again!");
}

// Lesson 4

var quotes = 'Joe says "Hello!"';
console.log(quotes);
var quotesTwo = "Joe says \"Hello!\"";
console.log(quotesTwo);

// escape character = \, \n = newline, \\, \', \",

var eric = "eric";
var last = "dollinger";
console.log(eric + " " + last);

var language = "Java";
language += "Script";
console.log(language);

var lang = "JavaScript";
lang = lang.substring(4, 10);
console.log(lang);

var subString = "JavaScript"
subString = subString.substring(4);
console.log(subString);

var characterLocation = "Eric Dollinger";
console.log(characterLocation.charAt(0));

var word = "Team";
console.log(word.indexOf('I'));
console.log(word.indexOf('a'));

// Lesson 5
// Functions

function sayHello() {
    console.log("Hello.");
}
sayHello();

function sayHi(name) {
    console.log("hello " + name);
}
sayHello("eric");

var rand = Math.random();

function randomInt(max) {
    var rand = Math.random() * max;
    rand = Math.round(rand);
    return rand;
}
console.log(randomInt(100));

// Lesson 6
// Arrays

var list = [];

list[0] = "socks";
list[1] = "pants";
list[2] = "shirt";

function listItems() {
    console.log(list[0]);
    console.log(list[1]);
    console.log(list[2]);
}
listItems();

// Better way
var things = ["socks", "pants", "shirt"];

function thingsList() {
    for (var i = 0; i < things.length; i++) {
        console.log(things[i]);
    }
}
thingsList();

// Manipulate arrays
// Add to the end of array
things.push("hat");
things.push("glasses", "shoes");
// Sort array ABC
things.sort();
// Remove end of array
things.pop();

// Lesson 7
// Objects

var person = {};
person.fName = "eric";
person.lName = "dollinger";
console.log(person.fName + " " + person.lName);

var fruit = [{
        name: "orange",
        cost: "1.99",
        id: 101,
        picture: "orange.jpg",
    },
    {
        name: "apple",
        cost: "2.99",
        id: 102,
        picture: "apple.jpg",
    },
    {
        name: "pear",
        cost: "4.99",
        id: 103,
        picture: "pear.jpg",
    }
];

function fruits() {
    for (var i = 0; i < fruit.length; i++) {
        console.log(fruit[i].name + " is $ " + fruit[i].cost);
    }
}

fruits();

// Lesson 8
// Object methods
var speak = {};

speak.sayMe = function() {
    console.log("Me");
}

speak.sayMe();

var speech = {
    name: "eric",
    greeting: "hello",

    saySpeech: function() {
        console.log(this.name + ", " + this.greeting);
    }
};
speech.saySpeech();

// Lesson 9
// Events

document.addEventListener("mousedown", function(event) {
    console.log("mouse down. x: " + event.clientX + ",y: " + event.clientY);
});

document.addEventListener("mousemove", function(event) {
    console.log("mouse move. x: " + event.clientX + ",y: " + event.clientY);
});