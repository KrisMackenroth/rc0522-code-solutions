/* exported capitalizeWords */
function capitalizeWords(string) {
  var newString = '';
  var lowerCase = string.toLowerCase();
  var split = lowerCase.split(' ');
  for (var i = 0; i < split.length; i++) {
    split[i] = split[i][0].toUpperCase() + split[i].substr(1);
  }
  newString = split.join(' ');
  return newString;
}
