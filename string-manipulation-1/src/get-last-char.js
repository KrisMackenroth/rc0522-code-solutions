/* exported getLastChar */
// Create an empty string variable to old the last character
// of the string.
// Minus one from the length of the string to obtain the last
// character and assign it to the empty string.
// return the new string.
function getLastChar(string) {
  var lastChar = '';
  lastChar = string[string.length - 1];
  return lastChar;
}

// Create an empty string variable to old the last character
// of the string.
// Assign the empty string to the old string and assign the index
// of the old string to be the strings length minus one.
// return the new string.
