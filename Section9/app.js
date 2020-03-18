const user = {email: 'jdoe@gmail.com'};

try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Will produce SyntaxError
  // console.log(eval('2+2'));
  // eval('Hello World');

  // Will produce URIError
  // decodeURIComponent('%');

  if(!user.name) {
    // throw 'User has no name'
    throw new SyntaxError('User has no name');
  }
  
} catch(e) {
  console.log(`User Error: ${e.message}`);
  // console.log(e);
  // console.log(`${e.name}: ITS NULL DUMMIE`);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof TypeError);
} finally {
  console.log('Finally runs regardless of result...');
}

console.log('Program continues...');
