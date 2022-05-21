/* exported isAnagram */
function isAnagram(firstString, secondString) {

  var first = firstString.split('').sort();
  var second = secondString.split('').sort();
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        return true;
      }
    }
  } return false;
}
