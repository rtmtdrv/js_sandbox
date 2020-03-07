// const sayHello = function() {
//   console.log('Hello');
// }

// const sayHello = () => {
//   console.log('Hello');
// }

// One Line Function does not need braces
// const sayHello = () => console.log('Hello');

// Returns 'Hello'
// const sayHello = () => 'Hello';

// Same as above
// const sayHello = function() {
//   return "Hello";
// }

// Return object
// const sayHello = () => ({msg: 'Hello'})

// Single Param does not need parentheses
// const sayHello = (name) => console.log(`Hello ${name}`);
// const sayHello = name => console.log(`Hello ${name}`);

// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Art', 'Todorov');

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
//   return name.length;
// });

//Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);
