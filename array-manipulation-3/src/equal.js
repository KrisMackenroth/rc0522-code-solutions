/* exported equal */
function equal(first, second) {
  for (var i = 0; i < first.length; i++) {
    if (first.length !== second.length || first[i] !== second[i]) {
      return false;
    } else if (first[i] === second[i]) {
      return true;
    }

  }
}
