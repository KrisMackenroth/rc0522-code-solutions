/* exported isPalindromic */
// Create an empty string.
// Replace the spaces in the string with no space.
// Create a for loop to iterate through string.
// reverse the now spaceless variable and assign it to a new
// variable.
// Compare the two strings to identify if they are palindromic.
// return true if they are, anf false if they are not.
function isPalindromic(string) {
  var revWord = '';
  var bob = string.replace(' ', '');
  for (var j = bob.length - 1; j >= 0; j--) {
    revWord += bob[j];
  }
  if (revWord === bob) {
    return true;
  } else return false;
}
// Create an empty string.
// Replace the spaces in the string with no space.
// Create a for loop to iterate through string.
// reverse the now spaceless variable and assign it to a new
// variable.
// Compare the two strings to identify if they are palindromic.
// return true if they are, anf false if they are not.
