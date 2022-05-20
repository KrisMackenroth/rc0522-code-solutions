/* exported firstChars */
function firstChars(length, string) {
  var emptyString = '';
  if (string.length > length) {
    for (var i = 0; i < length; i++) {
      emptyString += string[i];
    }
    return emptyString;
  } else if (string.length < length) {
    return string;
  }

}
