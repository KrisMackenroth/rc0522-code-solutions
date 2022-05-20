/* exported dropRight */
function dropRight(array, count) {
  var newArr = array.slice(0, -count);
  return newArr;
}
