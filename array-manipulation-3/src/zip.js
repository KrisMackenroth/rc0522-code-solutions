/* exported zip */
// Create an empty array.
// Create a for loop to iterate through the first and and second string.
// if the index of each loop is equal to eachother, create an around from the
// equal index of both strings and push that into the newly created array.
// return the now filled array.
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
