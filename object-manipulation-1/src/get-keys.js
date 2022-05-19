/* exported getKeys */
// Create an empty array to hold the keys
// create a for in loop that iterates through the object
// push the key into the empty array
// return the now filled array.
function getKeys(object) {
  var keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
// Create an empty array to hold the keys
// create a for in loop that iterates through the object
// push the key into the empty array
// return the now filled array.
