/* exported initial */
// create a new array variable to hold the contents of the old array.
// create a for loop to iterate through the array.
// Modify how many iterations withh transpire in the loop.
// push the array into the new array without the final index.
// return the new array
function initial(array) {
  var newArray = [];
  for (var i = 0; i < (array.length - 1); i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
// create a new array variable to hold the contents of the old array
// create a for loop to iterate through the old array.
// modify the for loop to minus one from the arrays legnth to
// omit the last index of the array
// push the contents of the old array into the new array.
// return the new array
