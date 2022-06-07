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



// Challenge 58
// Understanding Boolean Values
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}



// Challenge 59
// Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
  // Only change code above this line
}



// Challenge 60
// Comparison with the Equality Operator
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);



// Challenge 61
// Comparison with the Strict Equality Operator
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);



// Challenge 62
// Practice comparing different values
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");



// Challenge 63
// Comparison with the Inequality Operator
// Setup
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);



// Challenge 64
// Comparison with the Strict Inequality Operator
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);



// Challenge 65
// Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(10));



// Challenge 66
// Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

console.log(testGreaterOrEqual(10));



// Challenge 67
// Comparison with the Less Than Operator
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);



// Challenge 68
// Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);



// Challenge 69
// Comparisons with the Logical And Operator
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
      return "Yes";
    }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);



// Challenge 70
// Comparisons with the Logical Or Operator
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);



// Challenge 71
// Introducing Else Statements
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);



// Challenge 72
// Introducing Else If Statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
  else {
  return "Between 5 and 10";
  }
}

testElseIf(7);



// Challenge 73
// Logical Order in If Else Statements
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);



// Challenge 74
// Chaining If Else Statements
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
  // Only change code above this line
}

testSize(7);



// Challenge 75
// Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2)  {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return names[6];
  }
  // Only change code above this line
}

golfScore(5, 4);



// Challenge 76
// Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case (1):
      answer = "alpha";
      break;
    case (2):
      answer = "beta";
      break;
    case (3):
      answer = "gamma";
      break;
    case (4):
      answer = "delta";
      break;
  }
  // Only change code above this line
  return answer;
}

caseInSwitch(1);



// Challenge 77
// Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  // Only change code above this line
  return answer;
}

switchOfStuff(1);



// Challenge 78
// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
    default:
      answer = "Invalid";
      break;
  }
  // Only change code above this line
  return answer;
}

sequentialSizes(1);



// Challenge 79
// Replacing If Else Chains with Switch
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  // Only change code above this line
  return answer;
}

chainToSwitch(7);



// Challenge 80
// Returning Boolean Values from Functions
function isLess(a, b) {
  // Only change code below this line
    return a < b;
  // Only change code above this line
}

isLess(10, 15);



// Challenge 81
// Return Early Pattern for Functions
// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);



// Challenge 82
// Counting Cards
let count = 0;

function cc(card) {
  // Only change code below this line
  if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
    count++;
  } else if (card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A') {
    count--;
  }
var holdBet = "Hold";
if (count > 0) {
  holdBet = "Bet";
}
return count + " " + holdBet;
  // Only change code above this line
}
// console.log(one);

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(2), cc(3), cc(4), cc(5), cc(6));



// Challenge 83
// Build JavaScript Objects
const myDog = {
  // Only change code below this line
  name: "Tommy",
  legs: 4,
  tails: 1,
  friends: ["Milo", "Fiona"]
  // Only change code above this line
};



// Challenge 84
// Accessing Object Properties with Dot Notation
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line



// Challenge 85
// Accessing Object Properties with Bracket Notation
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line



// Challenge 86
// Accessing Object Properties with Variables
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line



// Challenge 87
// Updating Object Properties
// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder";
myDog["name"] = "Happy Coder";



// Challenge 88
// Add New Properties to a JavaScript Object
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";
myDog["bark"] = "woof";



// Challenge 89
// Delete Properties from a JavaScript Object
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails;
delete myDog["tails"];



// Challenge 90
// Using Objects for Lookups
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  }
  result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");



// Challenge 91
// Testing Objects for Properties
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  // Only change code above this line
}



// Challenge 92
// Manipulating Complex Objects
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
  }
];



// Challenge 93
// Accessing Nested Objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];



// Challenge 94
// Accessing Nested Arrays
const myPlants = [
  { 
   type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];
console.log(secondTree);



// Challenge 95
// Record Collection
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  }
  else if (prop == 'tracks' && records[id].hasOwnProperty('tracks') === false) {
    records[id][prop] = [value];
  } else if (prop === 'tracks' && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');



// Challenge 96
// Iterate with JavaScript While Loops
// Setup
const myArray = [];

// Only change code below this line
let i = 5;

while(i >= 0) {
  myArray.push(i);
  i--;
}
console.log(myArray);



// Challenge 97
// Iterate with JavaScript For Loops
// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}



// Challenge 98
// Iterate Odd Numbers With a For Loop
// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}



// Challenge 99
// Count Backwards With a For Loop
// Setup
const myArray = [];

// Only change code below this line

for (let i = 9; i > 0; i -= 2) {
   myArray.push(i);
}



// Challenge 100
// Iterate Through an Array with a For Loop
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}



// Challenge 101
// Nesting For Loops
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
  product *= arr[i][j];
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);



// Challenge 102
// Iterate with JavaScript Do...While Loops
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do { myArray.push(i);
  i++;
} while (i < 5);



// Challenge 103
// Replace Loops using Recursion
function sum(arr, n) {
  // Only change code below this line
if (n <= 0) {
  return 0;
} else {
  return sum(arr, n - 1) + arr[n - 1];
}
  // Only change code above this line
}



// Challenge 104
// Profile Lookup
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    let contact = contacts[i];
    if (contact.firstName === name && contact.hasOwnProperty(prop)) {
      return contact[prop];
    } else if (contact.firstName === name && !contact.hasOwnProperty(prop)) {
      return "No such property";
    }
  }
  return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");