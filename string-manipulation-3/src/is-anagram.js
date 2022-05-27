/* exported isAnagram */
// Create a variable that has the first string with no spaces.
// Split the first string into an array, sort the array, and then join the array
// back together.
// Do the same for the secondString.
// Compare the now sorted and spacless strings with each and return true if they
// are an anagram or false if they are not.
function isAnagram(firstString, secondString) {

  var first = firstString.replace(' ', '');
  var firstRun = first.replace(' ', '').split('').sort().join('');
  var second = secondString.replace(' ', '');
  var secondRun = second.replace(' ', '').split('').sort().join('');

  if (firstRun === secondRun) {
    return true;
  } return false;
}
// Create a variable that has the first string with no spaces.
// Split the first string into an array, sort the array, and then join the array
// back together.
// Do the same for the secondString.
// Compare the now sorted and spacless strings with each and return true if they
// are an anagram or false if they are not.
