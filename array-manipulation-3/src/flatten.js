/* exported flatten */
// Create an empty array.
// Iterate through the given array and determine if there is an array inside the array
// and assign it to a new variable.
// itterate through that smaller array and push it into the newly created array.
// push the remaining pieces of the first array that were not inside an array itself
// into the new created array.
// return the newly created array.
function flatten(array) {
  var flat = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      var current = array[i];
      for (var j = 0; j < current.length; j++) {
        flat.push(current[j]);
      }
    } else if (Array.isArray(array[i]) === false) {
      flat.push(array[i]);
    }
  }
  return flat;
}
// Create an empty array.
// Iterate through the given array and determine if there is an array inside the array
// and assign it to a new variable.
// itterate through that smaller array and push it into the newly created array.
// push the remaining pieces of the first array that were not inside an array itself
// into the new created array.
// return the newly created array.
