/* exported difference */
function difference(first, second) {
  var newArray = first.concat(second);
  var bigArray = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      for (var k = 0; k < newArray.length; k++) {
        if (!newArray.includes(first[i]) && newArray.includes(second[j])) {
          bigArray.push(newArray);
        }
      }
    }
  }
  return bigArray;
}
