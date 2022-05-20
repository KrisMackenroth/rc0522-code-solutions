/* exported numVowels */
function numVowels(string) {
  var emptyArray = [];
  var count;
  if (string.length !== 0) {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === 'A' || string[i] === 'a' || string[i] === 'E' || string[i] === 'e' || string[i] === 'I' || string[i] === 'i' || string[i] === 'O' || string[i] === 'o' || string[i] === 'U' || string[i] === 'u') {
        emptyArray.push(string[i] === 'A' || string[i] === 'a' || string[i] === 'E' || string[i] === 'e' || string[i] === 'I' || string[i] === 'i' || string[i] === 'O' || string[i] === 'o' || string[i] === 'U' || string[i] === 'u');
        count = emptyArray.length;
      }
    }
    return count;
  } else return 0;
}
