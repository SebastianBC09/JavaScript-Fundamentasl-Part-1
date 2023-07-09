/* 
let js = "Amazing";
console.log(40 + 8 + 23 - 10);

console.log("Juan");
console.log(23);

let firstName = 'Juan';
let first = 'Adriana';
let firstNamePerson = 'Camel case naming'
let first_name_person = 'Underscore naming'

console.log(firstName)
console.log(firstName)
console.log(firstName)

// Hard Rules in Naming

let 3years = 3; //Cannot start with numbers
let juan&adriana = 'JA'; // Can only contain letters, numbers, underscore or $ sign
// Cannot use reserved keywords of JS
let new = 27;
let function = 'Walk';
let Person = 'John' // The uppercase naming is used for an specific use like OOP
let PI = 3.14 // A name write in all upercase is used to create constants, which are variables that it's value would not change

// A good practice in naming to have cleaner & readable code is to be descriptive
let myFirstJob = 'Librarian';
let myCurrentJob = 'Software Engineer'

// Not a very good practice
let job1 = 'Librarian';
let job2 = 'Software Engineer';


let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 24);
console.log(typeof 'Juan');

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1999;
console.log(typeof year);
*/

// let age = 23; //✅
// age = 24; //✅

// const birthYear = 1999; //✅
// birthYear = 1998; //❌

// const job; //❌

// lastName = 'Ballen Castaneda'; //❌
// console.log(lastName)

// Minus operator
const now = 2023;
const ageSebas = now - 1999;
const ageAyana = now - 1998;
console.log(ageSebas, ageAyana)

// Multiplication & divison operator
console.log(ageSebas * 2, ageAyana / 2, 4 ** 2)
// For JavaScript, the operator that represents the power of a number is **. So that means 4 to the power of 2  = 4 * 4

// Plus operator has another use, like in this case join or concatenate strings
const firstName = 'Sebastian'
const lastName = 'Ballen'
console.log(firstName + ' ' + lastName)

// Assignment Operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x)

//Comparison Operators
console.log(ageSebas > ageAyana) // >, <, >=, <=
console.log(ageAyana >= ageSebas)

const isFullAge = ageSebas >= 18;

console.log(now - 1999 > now - 2018)
