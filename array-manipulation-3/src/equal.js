/* exported equal */
// Declare an if statement that determines if the first length is equal to the
// second length, and if it is not return false.
// if they are equal, iterate through the first and second array using the
// length of the first array and determine if they are equal at each index.
// If they are not, return false, else return true.
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
