/* exported titleCase */
function titleCase(title) {
  var newString = '';
  var lowerCase = title.toLowerCase();
  var split = lowerCase.split(' ');
  for (var i = 0; i < split.length; i++) {
    if (split[i] !== 'in') {
      split[i] = split[i][0].toUpperCase() + split[i].slice(1);
    }
  }
  newString = split.join(' ');
  return newString;
}
