/* exported ransomCase */
function ransomCase(string) {
  var emptyString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      emptyString += string[i].toLowerCase();
    } else {
      emptyString += string[i].toUpperCase();
    }
  }
  return emptyString;
}
