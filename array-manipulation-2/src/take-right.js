/* exported takeRight */
// create an if statement to determine if the count is higher then the length
// of the array. If it is, return the array.
// If it is not, utlize the slice method retrieve a piece of the array and place it
// into the new array.
// return the now filled array.
function takeRight(array, count) {
  if (array.length < count) {
    return array;
  } else { var emptyArray = array.slice(array.length - count); }

  return emptyArray;
}
// create an if statement to determine if the count is higher then the length
// of the array. If it is, return the array.
// If it is not, utlize the slice method retrieve a piece of the array and place it
// into the new array.
// return the now filled array.
