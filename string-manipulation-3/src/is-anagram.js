/* exported isAnagram */
function isAnagram(firstString, secondString) {

  var first = firstString.replace(' ', '');
  var firstRun = first.replace(' ', '').split('').sort().join('');
  var second = secondString.replace(' ', '');
  var secondRun = second.replace(' ', '').split('').sort().join('');
  for (var i = 0; i < firstRun.length; i++) {
    for (var j = 0; j < secondRun.length; j++) {
      if (firstRun === secondRun) {
        return true;
      }
    }
  } return false;
}
