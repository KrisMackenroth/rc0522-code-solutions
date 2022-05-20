/* exported pick */
function pick(source, keys) {
  const result = {};
  for (var key in source) {
    if (source[key] === undefined) {
      delete source[key];
    } else if (keys.includes(key)) {
      result[key] = source[key];
    }

  }
  return result;

}
