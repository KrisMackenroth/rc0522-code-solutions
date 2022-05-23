/* exported union */
function union(first, second) {
  var newArray = first.concat(second);
  var uniques = Array.from(new Set(newArray));
  return uniques;
}
