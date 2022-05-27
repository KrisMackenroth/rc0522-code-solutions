/* exported reverseWords */
// Split the string into an array
// Reverese each word in the new array.
// Push the reverse array into a new array.
// Join the array into a string.
function reverseWords(string) {
  var revWord = string.split(/(\s+)/);
  var newWord = [];
  for (var i = 0; i < revWord.length; i++) {
    for (var j = revWord[i].length - 1; j >= 0; j--) {
      newWord.push(revWord[i][j]);
      var joined = newWord.join('');
    }
  }
  return joined;
}
// Split the string into an array.
// Create an empty array.
// Reverese each word in the new array.
// Push the reverse array into a new array.
// Join the array into a string.
