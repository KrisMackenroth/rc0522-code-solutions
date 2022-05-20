/* exported drop */
function drop(array, count) {
  var emptyArray = [];
  if (array.length < count) {
    return array;
  } else {
    for (var i = count; i < array.length; i++) {
      emptyArray.push(array[i]);
    }
    return emptyArray;
  }
}
