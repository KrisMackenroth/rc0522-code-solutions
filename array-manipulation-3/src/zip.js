/* exported zip */
function zip(first, second) {
  var bigArray = [];
  var smallArray = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {

      while (smallArray.length < 2) {
        smallArray.push(first[i], second[j]);
        bigArray.push(smallArray);
      }
    }
  }
  return bigArray;
}
