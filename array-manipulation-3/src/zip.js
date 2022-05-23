/* exported zip */
function zip(first, second) {
  var bigArray = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (i === j) {
        bigArray.push(Array.of(first[i], second[j]));
      }
    }
  }
  return bigArray;
}
