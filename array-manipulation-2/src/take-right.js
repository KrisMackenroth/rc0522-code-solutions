/* exported takeRight */
function takeRight(array, count) {
  if (array.length < count) {
    return array;
  } else { var emptyArray = array.slice(array.length - count); }

  return emptyArray;
}
