/* exported getValues */
// Create an empty array to hold the values
// create a for in loop that iterates through the object
// Using bracket notation, push the values of the keys in the object
// into the empty array.
// return the now filled array.
function getValues(object) {
  var values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
