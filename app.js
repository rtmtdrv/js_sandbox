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

// TEMPLATE LITERALS

const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';

// Without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job:' + job + '</li><li>City: ' + city + '</li></ul>';

html = '<ul>' + 
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>' +
        '</ul>'

function hello() {
  return 'Hello';
}

// With Template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;

document.body.innerHTML = html;

