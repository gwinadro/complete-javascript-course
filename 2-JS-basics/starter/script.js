/*****************************
* Variables and Data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/



/***************************
* Variable mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;

//Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '.' + ' Is he married? ' + isMarried );

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '.' + ' Is he married? ' + isMarried );

var lastName = prompt('what is his last name?');
console.log(firstName + ' ' + lastName);
*/



/*********************************
* Basic operator
***********************************
**********************************
var year, yearJohn, yearMark
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/



/*****************************
 *  Operator precedence
******************************
*/

/********
 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;

 // Multiple operators
 var isFullAge = now - yearJohn >= fullAge; //true
 console.log(isFullAge);

 // Grouping
 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) /2;
 console.log(average);

 // Multiple assignments
 var x, y;
 x = y =  (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
 console.log(x, y);


 // More operators
  x *= 2;
 console.log(x);
 x +=10;
 console.log(x);
 x--;
 console.log(x);
*/
/**************************************
* Coding Challenge 1
* it worked, I used prompt to collect user input from the keyboard
* test data is in the comments but I left the prompt for flexibilty
***************************************

var bmiMark, bmiJohn, heightJohn, heightMark, massMark, massJohn;

heightMark = prompt('Enter Mark\'s height in meters '); // meters 1.78
massMark = prompt('Enter Mark\'s mass in kiligrams'); // kilograms 183.7
heightJohn = prompt('Enter John\'s height in meters '); // meters 1.88
massJohn =  prompt('Enter John\'s mass in kilograms'); // kilograms 175.5

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

console.log("Mark's BMI is = " + bmiMark);
console.log('John\'s BMI is = ' + bmiJohn);

var isBmiGreater = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI greater than John\'s? ' + isBmiGreater);
*/
