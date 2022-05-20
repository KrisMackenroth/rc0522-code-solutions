/* exported truncate */
function truncate(length, string) {
  var emptyString = '';
  if (string.length === length) {
    return string;
  } else if (string.length > length) {
    for (var i = 0; i < length; i++) {
      emptyString += string[i];
    }
    emptyString = emptyString + '...';
    return emptyString;
  } else if (string.length < length) {
    return string + '...';
  }

}
