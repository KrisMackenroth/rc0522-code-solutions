/* exported reverseWords */
function reverseWords(string) {
  var revWord = '';
  for (var i = string.length - 1; i >= 0; i--) {
    revWord += string[i];
  }
  return revWord;
}
