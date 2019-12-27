/*

// alert('Hello World'); 

// Log to console
console.log('Hello World');
console.log(123);
console.log(true);
var greeting = 'Hello'
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});

// Table
console.table({a:1, b:2});

// Error
console.error('This is some error');

// Clear
console.clear();
console.warn('This is a warning');

// Time
console.time('Hello');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
console.timeEnd('Hello');

*/

// // var, let, const
// var name = 'John Doe'
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init Variable
// var greeting;
// console.log(greeting);
// greeting =  'hello';
// console.log(greeting);

// // Letters, numbers, _, $
// // Can not start with number

// // Multi word vars
// var firstName = 'John'; // Camel case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case

// Let

// let name;
// name = 'John Doe'
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Const
// const name = 'John';
// console.log(name);
// // Can not reassign
// // name = 'Sara';
// // Have to assign value
// // const greeting;

// const person = {
//   name: 'John',
//   age: 30
// }

// person.name = 'Sara';
// person.age = 32;

// // console.log(person);

// const numbers = [1,2,3,4,5];
// numbers.push(6);

// console.log(numbers);

// Primitives
// String
// Number (integers, decimals, floats)
// Boolean (true, false)
// Null
// Undefined (not assigned)
// Symbols

// Reference Types
// Arrays
// Object Literals
// Functions
// Dates\

// Primitive

// // String
// const name = 'Jon Doe'
// console.log(typeof name);

// // Number
// const age = 45;
// console.log(typeof age);

// // Boolean
// const hasKids = true;
// console.log(typeof hasKids);

// // Null
// const car = null;
// console.log(typeof car);

// // Undefined
// let test;
// console.log(typeof test);

// // Symbol
// const sym = Symbol();
// console.log(typeof sym);

// // REFERENCE TYPES - Objects
// // Array
// const hobbies = ['movies', 'music'];
// console.log(typeof hobbies);

// // Object Literal
// const address = {
//   city: 'Yorba Linda',
//   state: 'CA'
// }
// console.log(typeof address);

// // Date
// const today = new Date();
// console.log(today);
// console.log(typeof today);

// let val;

// // Number to string
// val = String(555);
// val = String(4+4);
// // Bool to string
// val = String(true);
// // Date to string
// val = String(new Date());
// // Array to string
// val = String([1,2,3,4])

// // toString()
// val = (5).toString();
// val = (true).toString();

// // String to number
// val = Number('5');
// val = Number(true);
// val = Number(true);
// val = Number(null);
// val = Number('hello');
// val = Number([1,2,3]);

// val = parseInt('100');
// val = parseFloat('100.30');

// // Output 
// // console.log(val);
// // console.log(typeof val);
// // // console.log(val.length);
// // console.log(val.toFixed(2));

// // Type Coersion
// const val1 = String(5);
// const val2 = 6;
// const sum = Number(val1 + val2);

// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple Math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
// val = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
// val = Math.random();

// val = Math.floor(Math.random() * 20 + 1);

// console.log(val);

// STRING METHODS & CONCATENATION

// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 31;
// const str = 'Hello there my name is Art';
// const tags = 'web design,web development,programming'

// let val;

// val = firstName + lastName;

// // Concatenation
// val = firstName + ' ' + lastName;

// // Append
// val = 'Art ';
// val += 'Todorov'; 

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// // Escaping
// val = 'That\'s awesome, I can\'t wait';

// // Length
// val = firstName.length;

// // concat
// val = firstName.concat(' ', lastName);

// // Change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// // Arrays
// val = firstName[2];

// // indexOf()
// val = firstName.indexOf('l')
// val = firstName.lastIndexOf('l')

// // charAt()
// val = firstName.charAt('2');

// // Get last char
// val = firstName.charAt(firstName.length - 1).toUpperCase();

// // substring()
// val = firstName.substring(0,4);

// // slice()
// val = firstName.slice(0,4);
// val = firstName.slice(-3)

// // split()
// val = str.split(' ');
// val = tags.split(',');

// // replace()
// val = str.replace('Art', 'Jack')

// // includes()
// val = str.includes('Hello');

// console.log(val);

// // TEMPLATE LITERALS

// const name = 'John';
// const age = 31;
// const job = 'Web Developer';
// const city = 'Miami';

// // Without template strings (es5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job:' + job + '</li><li>City: ' + city + '</li></ul>';

// html = '<ul>' + 
//         '<li>Name: ' + name + '</li>' +
//         '<li>Age: ' + age + '</li>' +
//         '<li>Job: ' + job + '</li>' +
//         '<li>City: ' + city + '</li>' +
//         '</ul>'

// function hello() {
//   return 'Hello';
// }

// // With Template strings (es6)
// html = `
//   <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//     <li>${2 + 2}</li>
//     <li>${hello()}</li>
//     <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//     </ul>
// `;

// document.body.innerHTML = html;

// // ARRAYS & ARRAY METHODS

// const numbers = [43, 56, 33, 23, 44, 36, 5];
// const numbers2 = new Array(22,45,33,76,54);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

// let val;

// // Get array length
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// // Get single value
// val = numbers[3];
// val = numbers[0];
// // Insert into array
// numbers[2] = 100;
// // Find index of value
// val = numbers.indexOf(36);

// // MUTATING ARRAYS
// // // Add on to end
// // numbers.push(250);
// // // Add on to front
// // numbers.unshift(120);
// // // Take off from end
// // numbers.pop();
// // // Take off from front
// // numbers.shift();
// // // Splice values
// // numbers.splice(1,1);
// // // numbers.splice(1,3);
// // //Reverse Array
// // numbers.reverse();

// // Concatenate array
// val = numbers.concat(numbers2);

// // Sort arrays
// val = fruit.sort();
// // val = numbers.sort();

// // // Use the "compare function"
// // val = numbers.sort(function(x,y) {
// //   return x - y;
// // });

// // // Reverse sort
// // val = numbers.sort(function(x,y) {
// //   return y - x;
// // });

// // Find
// function over50(num) {
//   return num > 50;
// }

// val = numbers.find(over50);

// console.log(numbers);
// console.log(val);

// OBJECT LITERALS

// const person = {
//   firstName: 'Steve',
//   lastName: 'Smith',
//   age: 36,
//   email: 'stevesmith@gmail.com',
//   hobbies: ['music', 'sports'],
//   address: {
//     city: 'Miami',
//     state: 'FL'
//   },
//   getBirthYear: function() {
//     return 2019 - this.age;
//   }
// }

// let val;
// val = person;
// // Get specific value
// val = person.firstName;
// val = person['lastName'];
// val = person.age;
// val = person.age;
// val = person.address['city'];
// val = person.getBirthYear();

// console.log(val);

// const people = [
//   {name: 'John', age: 30},
//   {name: 'Mike', age: 23},
//   {name: 'Nancy', age: 40}
// ];

// for(let i = 0; i < people.length; i++) {
//   console.log(people[i].name);
  
// }

// DATES AND TIMES

// let val;

// const today = new Date();
// let birthday = new Date('9-10-1981 11:25:00');
// birthday = new Date('September 10 1981');
// birthday = new Date('9/10/1981');

// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);

// console.log(birthday);

// IF STATEMENTS AND COMPARISON OPERATORS

// if(something){
//   do something
// } else {
//   do something else
// }

const id = 100;

// // EQUAL TO
// if (id == 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if (id != 101) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE AND TYPE
// if (id == 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE AND TYPE
// if (id !== 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// Test if undefined
// if(typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// GREATER OR LESS THAN
// if(id <= 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// IF ELSE
// const color = 'yellow';

// if (color === 'red') {
//   console.log('Color is red');
// } else if (color === 'blue') {
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }

// LOGICAL OPERATORS
// const name = 'Steve';
// const age = 20;

// AnD &&
// if (age > 0 && age < 12) {
//   console.log(`${name} is a child`);
// } else if (age >= 13 && age <= 19){
//   console.log(`${name} is a teenager`);
// } else {
//   console.log(`${name} is an adult`);
// }

// // OR ||
// if (age < 16 || age > 65) {
//  console.log(`${name} can not run race`);
// } else {
//   console.log(`${name} is registered for the race`);
// }

// // TERNARY OPERATOR
// console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// // WITHOUT BRACES
// if (id === 100)
//   console.log('CORRECT');
// else
//   console.log('INCORRECT');

// // SWITCHES
// const color = 'yellow';

// switch(color) {
//   case 'red':
//     console.log('Color is red');
//     break;
//   case 'blue':
//     console.log('Color is blue');
//     break;
//   default:
//     console.log('Color is not red or blue');
//     break;
// }

// let day;

// switch(new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
// }

// console.log(`Today is ${day}`);
// console.log(new Date().getDay());

// FUNCTION DECLARATIONS AND EXPRESSIONS

function greet(firstName = 'John', lastName = 'Doe'){
  // if(typeof firstName === 'undefined'){ firstName = 'John'}
  // if(typeof lastName === 'undefined'){ lastName = 'Doe'}
  // console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// FUNCTION EXPRESSIONS

const square = function(x = 3) {
  return x*x;
};

// console.log(square());

// IMMIDIATELY INVOKABLE FUNCTION XPRESSIONS - IIFEs

// (function(){
//   console.log('IIFE Ran..');
// })();

// (function(name){
//   console.log('Hello ' + name);
// })('Brad');

// PROPERTY METHODS

const todo = {
  add: function(){
    console.log('Add todo...');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo');
}

todo.add();
todo.edit(22);
todo.delete();