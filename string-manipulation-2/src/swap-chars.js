/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var tempOne = string[firstIndex];
  var tempTwo = string[secondIndex];
  var emptyString = '';
  var split = [];

  for (var i = 0; i < string.length; i++) {
    split = string.split('');
    split[firstIndex] = tempTwo;
    split[secondIndex] = tempOne;
    emptyString += split[i];
  }

  return emptyString;
}
