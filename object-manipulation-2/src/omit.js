/* exported omit */
function omit(source, keys) {
  var result = {};
  for (var key in source) {
    if (source[key] === source[keys]) {
      delete source[keys];
    } else result[key] = source[keys];
  }
  return result;
}
