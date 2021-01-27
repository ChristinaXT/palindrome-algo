// Check for Palindromes

// Return true if the given string is a palindrome. Otherwise return false.
// A palindrome is a word or sentence that's spelled the same
// way both forward and backward, ignoring punctuation, case and spacing.
// Note.
// You will need to remove all non-alphanumeric characters (punctuation, spaces, symbols)
// and turn everything to lower case in order to check Palindromes

//regex = regular expression - sequence of characters that match a specific search pattern
// /forward slash is for start of expression - \W is from website regexone for regular expressions
// _underscore because we need to get rid of them as well, and g for global to go
//through entire string

function palindrome (str) {
  let rex = /[\W_]/g;
  let smallStr = str.toLowerCase().replace(rex, "");
  let reversed = smallStr.split("").reverse().join("");
  if (reversed === smallStr) return true;

  return false;
}

console.log(palindrome("racecar"));
