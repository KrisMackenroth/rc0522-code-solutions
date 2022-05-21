/* exported flatten */
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
