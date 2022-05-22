/* exported reverseWords */
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
