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

// Brackets [] - Character Sets
re = /gr[ae]y/i;    // Must be an a or e
re = /[GF]ray/i;   // Must be a G of F
re = /[^GF]ray/i;   // Match anything except a G or F
re = /[A-Z]ray/;   // Match any uppercase letter
re = /[a-z]ray/;   // Match any lowercase letter
re = /[A-za-z]ray/;   // Match any letter
re = /[0-9][0-9]ray/;    // Match any digit

// Braces {} - Quantifiers
re =/Hel{2}o/i;   // Must occur exactly {m} amount of times
re =/Hel{2,4}o/i;   // Must occur between {m,n} amount of times
re =/Hel{2,}o/i;   // Must occur at least {m} amount of times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/;

// Shorthand Character Classes
re = /\w/;    // Word chracter - alphanumeric or _
re = /\w+/;    // + = one or more
re = /\W/;    // Non-Word characters
re = /\d/;    // Match any digit
re = /\d+/;    // Match any digit 0 or more times
re = /\D/;    // Match any non-digit
re = /\s/;    // Match whitespace char
re = /\S/;    // Match non-whitespace char
re = /Hell\b/i;   //Word boundary

// Assertions
re = /x(?=y)/;    // Match x only if followed by y
re = /x(?!y)/;    // Match x only if not followed by y

// String to match
const str = 'dsfdxsf';

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