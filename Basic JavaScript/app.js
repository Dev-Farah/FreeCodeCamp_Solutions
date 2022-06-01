// Challenge 1
// Comment Your JavaScript Code
// This is an in-line comment

/* This
is a
Multi-line
comment */



// Challenge 2
// Declare JavaScript Variables
var myName;



// Challenge 3
// Storing Values with the Assignment Operator
// Setup
var a;

// Only change code below this line
a = 7;



// Challenge 4
// Assigning the Value of One Variable to Another
// Setup
var a;
a = 7;
var b;

// Only change code below this line
b = a;



// Challenge 5
// Initializing Variables with the Assignment Operator
var a = 9;



// Challenge 6
// Declare String Variables
var myFirstName = "Farah";
var myLastName = "Syed";



// Challenge 7
// Understanding Uninitialized Variables
// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";



// Challenge 8
// Understanding Case Sensitivity in Variables
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;



// Challenge 9
// Explore Differences Between the var and let Keywords
let catName = "Oliver";
let catSound = "Meow!";



// Challenge 10
// Declare a Read-Only Variable with the const Keyword
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line



// Challenge 11
// Add Two Numbers with JavaScript
const sum = 10 + 10;



// Challenge 12
// Subtract One Number from Another with JavaScript
const difference = 45 - 33;



// Challenge 13
// Multiply Two Numbers with JavaScript
const product = 8 * 10;



// Challenge 14
// Divide One Number by Another with JavaScript
const quotient = 66 / 33;



// Challenge 15
// Increment a Number with JavaScript
let myVar = 87;
// Only change code below this line
myVar++;



// Challenge 16
// Increment a Number with JavaScript
let myVar = 11;

// Only change code below this line
myVar--;



// Challenge 17
// Create Decimal Numbers with JavaScript
const ourDecimal = 5.7;

// Only change code below this line
const myDecimal = 2.3;



// Challenge 18
// Multiply Two Decimals with JavaScript
const product = 2.0 * 2.5;



// Challenge 19
// Divide One Decimal by Another with JavaScript
const quotient = 4.4 / 2.0; // Change this line



// Challenge 20
// Finding a Remainder in JavaScript
const remainder = 11 % 3;



// Challenge 21
// Compound Assignment With Augmented Addition
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;



// Challenge 22
// Compound Assignment With Augmented Subtraction
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;


// Challenge 23
// Compound Assignment With Augmented Multiplication
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;



// Challenge 24
// Compound Assignment With Augmented Division
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;



// Challenge 25
// Escaping Literal Quotes in Strings
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line



// Challenge 26
// Quoting Strings with Single Quotes
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';




// Escape Sequences in Strings:
Code    Output
\'    	single quote
\"    	double quote
\\    	backslash
\n    	newline
\r    	carriage return
\t    	tab
\b    	word boundary
\f    	form feed

// Challenge 27
// Escape Sequences in Strings
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line



// Challenge 28
// Concatenating Strings with Plus Operator
const myStr = "This is the start." + " " + "This is the end."; // Change this line



// Challenge 29
// Concatenating Strings with the Plus Equals Operator
let myStr = "This is the first sentence.";
myStr += " " + "This is the second sentence.";
console.log(myStr);



// Challenge 30
// Constructing Strings with Variables
// Only change code below this line
const myName = "Farah";
const myStr = "My name is" + " " + myName + " " + "and I am well";




// Challenge 31
// Appending Variables to Strings
const someAdjective = "nice";
let myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr);



// Challenge 32
// Find the Length of a String
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;



// Challenge 33
// Use Bracket Notation to Find the First Character in a String
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line



// Challenge 34
// Understand String Immutability
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line



// Challenge 35
// Use Bracket Notation to Find the Nth Character in a String
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line



// Challenge 36
// Use Bracket Notation to Find the Last Character in a String
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line



// Challenge 37
// Use Bracket Notation to Find the Nth-to-Last Character in a String
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line



// Challenge 38
// Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "It was a " + myAdjective + " " + myNoun + ", he " + myVerb + " " + myAdverb + "."; // Change this line
// Only change code above this line



// Challenge 39
// Store Multiple Values in one Variable using JavaScript Arrays
// Only change code below this line
const myArray = ["My Name", 42];



// Challenge 40
// Nest one Array within Another Array
// Only change code below this line
const myArray = [["One", 21], ["Two", 24]];



// Challenge 41
// Access Array Data with Indexes
const myArray = [50, 60, 70];
const myData = myArray[0];



// Challenge 42
// Modify Array Data With Indexes
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;



// Challenge 43
// Access Multi-Dimensional Arrays With Indexes
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
  
const myData = myArray[2][1];
console.log(myData);



// Challenge 44
// Manipulate Arrays With push()
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);
console.log(myArray);



// Challenge 45
// Manipulate Arrays With pop()
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop();



// Challenge 46
// Manipulate Arrays With shift()
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.shift();



// Challenge 47
// Manipulate Arrays With unshift()
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);



// Challenge 48
// Shopping List
const myList = [["Ice-Cream", 10], ["Water Bottles", 5], ["Pringles", 8],["Watermelon", 4], ["Honey", 2]];



// Challenge 49
// Write Reusable JavaScript with Functions
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();



// Challenge 50
// Passing Values to Functions with Arguments
function functionWithArgs(param1, param2) {
  console.log(param1 + param2);
}
functionWithArgs(1, 2);
functionWithArgs(7, 9);



// Challenge 51
// Return a Value from a Function with Return
function timesFive(num) {
  return num * 5;
}
timesFive(5);
timesFive(2);
timesFive(0);



// Challenge 52
// Global Scope and Functions
// Declare the myGlobal variable below this line
let myGlobal;
myGlobal = 10;
var oopsGlobal;
function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}



// Challenge 53
// Local Scope and Functions
function myLocalScope() {
  // Only change code below this line
let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);



// Challenge 54
// Global vs. Local Scope in Functions
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();



// Challenge 55
// Understanding Undefined Value returned from a Function
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();



// Challenge 56
// Assignment with a Returned Value
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processArg(7);
processed = processArg(7);
console.log(processed);



// Challenge 57
// Stand in Line
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  var removed = arr.shift();
  return removed;
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
console.log(nextInLine([], 5));
console.log(nextInLine([], 1));
console.log(nextInLine([2], 1));
console.log(nextInLine([5, 6, 7, 8, 9], 1));
console.log(nextInLine(testArr, 10), testArr[4]);