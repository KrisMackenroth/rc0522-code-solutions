/* exported capitalizeWords */
// create a empty string to hold the captial words.
// use the lowercase method to make all letters in the string lowercase.
// use the split method to split the string into an array.
// use a for loop to capitalize the first letter of each word.
// join the array together with the join method.
// return the now filled string.
function capitalizeWords(string) {
  var newString = '';
  var lowerCase = string.toLowerCase();
  var split = lowerCase.split(' ');
  for (var i = 0; i < split.length; i++) {
    split[i] = split[i][0].toUpperCase() + split[i].substr(1);
  }
  newString = split.join(' ');
  return newString;
}
// create a empty string to hold the captial words.
// use the lowercase method to make all letters in the string lowercase.
// use the split method to split the string into an array.
// use a for loop to capitalize the first letter of each word.
// join the array together with the join method.
// return the now filled string.
