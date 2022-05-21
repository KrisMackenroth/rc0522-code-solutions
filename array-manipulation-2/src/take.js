/* exported take */
function take(array, count) {
  var emptyArray = [];
  if (array.length < count) {
    return array;
  } else {
    for (var i = 0; i < count; i++) {
      emptyArray.push(array[i]);
    }
    return emptyArray;
  }

}
