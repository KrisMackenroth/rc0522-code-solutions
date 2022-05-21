/* exported firstChars */
// create an empty string to hold the first chars.
// create an if statment to determine if the length of the string is greater then the given length.
// create a for loop to iterate through the string with the given length.
// return the empty string.
// Create an else if statement to return the given string if the length is higher then the string length.
function firstChars(length, string) {
  var emptyString = '';
  if (string.length > length) {
    for (var i = 0; i < length; i++) {
      emptyString += string[i];
    }
    return emptyString;
  } else if (string.length < length) {
    return string;
  }

}
// create an empty string to hold the first chars.
// create an if statment to determine if the length of the string is greater then the given length.
// create a for loop to iterate through the string with the given length.
// return the empty string.
// Create an else if statement to return the given string if the length is higher then the string length.
