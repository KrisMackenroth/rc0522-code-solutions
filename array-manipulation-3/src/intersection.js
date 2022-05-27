/* exported intersection */
function intersection(first, second) {
  var finalArray = [];
  var newArray = first.concat(second);
  var uniques = Array.from(new Set(newArray));
  for (var i = 0; i < uniques.length; i++) {
    for (var j = 0; j < first.length; j++) {
      for (var k = 0; k < second.length; k++) {
        if (uniques[i] === first[j] && uniques[i] === second[k]) {
          finalArray.push(uniques[i]);
        }
      }
    }
  }
  return finalArray;
}
