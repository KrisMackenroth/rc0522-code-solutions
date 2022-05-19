/* exported compact */
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== false && array[i] !== null && array[i] !== '' && array[i] !== 0 && array[i] !== undefined) {
      if (Number.isNaN(array[i]) === false) {
        newArray.push(array[i]);
      }
    }
  }
  return newArray;
}
