/* exported lastChars */
function lastChars(length, string) {
  var emptyString = '';
  if (string.length < length) {
    return string;
  } else {
    for (var i = string.length - length; i < string.length; i++) {
      emptyString += string[i];
    }
    return emptyString;
  }
}
