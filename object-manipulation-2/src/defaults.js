/* exported defaults */
// Create an for in loop to iterate through the source object.
// Pass the source object onto the target object.
function defaults(target, source) {
  for (var key in source) {
    // eslint-disable-next-line no-prototype-builtins
    if (target.hasOwnProperty(key) === false) {
      target[key] = source[key];
    }
  }
}

// Create an for in loop to iterate through the source object.
// Create an if statement that has the hasOwnProperty method checking
// if a key within source is also within target. The hasOwnProperty method will
// be equal to false if it does not have the key, and will place the key and value
// within the target object.
