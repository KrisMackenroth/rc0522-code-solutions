/* exported omit */
function omit(source, keys) {
  var result = {};
  for (var key in source) {
    if (keys.includes(key) === false) {
      result[key] = source[key];
    }
  }
  return result;
}
