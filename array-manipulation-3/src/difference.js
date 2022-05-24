/* exported difference */
function difference(first, second) {
  var bigArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      bigArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.indexOf(second[j]) === -1) {
      bigArray.push(second[j]);
    }
  }
  return bigArray;
}
