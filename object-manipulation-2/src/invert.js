/* exported invert */
// create an empty object variale to hold the inverted objects
// Use a for in loop to iterate through the keys in source
// Assign the empty object have the property of the key with the key value
// of the source property
// return the now filled object.
function invert(source) {
  var newObject = {};
  for (var key in source) {
    newObject[source[key]] = key;
  }
  return newObject;
}

// create an empty object variale to hold the inverted objects
// Use a for in loop to iterate through the keys in source
// Assign the empty object to have the key of the source that is the
// key equal to the key.
// return the now filled object.
