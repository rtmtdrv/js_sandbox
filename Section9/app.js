let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;        // Must start with
re = / world$/i;  // Must end with
re = /^hello$/i;  // Must begin and end with
re = /h.llo/i;  // Matches any ONE character
re = /h*llo/i;  // Matches any character 0 or more
re =  /gre?a?y/i   // Optional chracter
re =  /gre?a?y\?/i   // Escape chracter

// String to match
const str = 'gray?';

// Log results
const result = re.exec(str);
console.log(result);


function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);