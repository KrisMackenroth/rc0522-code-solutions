/* exported includes */
// create a for loop to iterate through the array
// create an if statement to determine if each index matches the
// value that will be given.
// if it does, return true, if not return false.
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
// create a for loop to iterate through the array
// create an if statement to determine if each index matches the
// value that will be given.
// if it does, return true, if not return false.
