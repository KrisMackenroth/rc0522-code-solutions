/* exported pick */
// Create an empty object to assign the picks to.
// Create a for in loop to iterate through the source object.
// creat an if statement that determines if the keys array includes
// keys from the source object and if the source object keys
// do not contain a value of undefined. Assign the new object with
// the key in source to be the source object keys.
// return the new object.

function pick(source, keys) {
  const result = {};
  for (var key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      result[key] = source[key];
    }
  }
  return result;
}

// Create an empty object to assign the picks to.
// Create a for in loop to iterate through the source object.
// creat an if statement that determines if the keys array includes
// keys from the source object and if the source object keys
// do not contain a value of undefined. Assign the result object
// to be equal to the source object that get approved by the if
// statement.
// return the new object.
