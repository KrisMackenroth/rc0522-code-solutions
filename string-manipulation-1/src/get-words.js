/* exported getWords */
function getWords(string) {
  var newArray = [];
  if (string === '') {
    return newArray;
  } else { var split = string.split(' '); }
  for (var i = 0; i < split.length; i++) {
    newArray.push(split[i]);
  }
  return newArray;
}
