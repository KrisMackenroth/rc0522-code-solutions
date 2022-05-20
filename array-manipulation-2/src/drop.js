/* exported drop */
// create an empty array to hold the future array
// create an if statement to determine if the count is higher then the length
// of the array. If it is higher, return the array.
// create an else statement with a for loop to iterate through
// the array. It will begin increasing at the given count.
// Push the array into the empty array.
// return the empty array.
function drop(array, count) {
  var emptyArray = [];
  if (array.length < count) {
    return array;
  } else {
    for (var i = count; i < array.length; i++) {
      emptyArray.push(array[i]);
    }
    return emptyArray;
  }
}
// create an empty array to hold the future array
// create an if statement to determine if the count is higher then the length
// of the array. If it is higher, return the array.
// create an else statement with a for loop to iterate through
// the array. It will begin increasing at the given count.
// Push the array into the empty array.
// return the empty array.
