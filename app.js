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

let val;

// Number to string
val = String(555);
val = String(4+4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4])

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(true);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);

val = parseInt('100');
val = parseFloat('100.30');

// Output 
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));

// Type Coersion
const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);





