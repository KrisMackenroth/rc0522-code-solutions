/* exported capitalizeWord */
function capitalizeWord(word) {
  var emptyString = '';
  var firstLet = '';
  var fullLet = '';
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else if (word.length === 1) {
    emptyString = word.toUpperCase();
  } else {
    for (var i = 1; i < word.length; i++) {
      firstLet = word[0].toUpperCase();
      fullLet += word[i].toLowerCase();
      emptyString = firstLet + fullLet;
    }
  }
  return emptyString;
}
