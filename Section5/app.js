// Object Literal
// const art = {
//   name: 'art',
//   age: 31,
// }

// console.log(art);
// console.log(art.age);

// Person Constructor

function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// console.log(this);

// this.alert(1);

// const art = new Person('Art', 36);
// const john = new Person('John', 31);

// console.log(art);
// console.log(john.age);

const brad = new Person('Brad', '9-10-1999')

console.log(brad.calculateAge());

