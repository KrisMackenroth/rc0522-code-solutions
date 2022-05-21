/* exported isPalindromic */
function isPalindromic(string) {
  var revWord = '';
  var bob = string.replace(' ', '');
  for (var j = bob.length - 1; j >= 0; j--) {
    revWord += bob[j];
  }
  if (revWord === bob) {
    return true;
  } else return false;
}
