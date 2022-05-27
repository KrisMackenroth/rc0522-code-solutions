/* exported unique */
function unique(array) {
  var uniques = Array.from(new Set(array));
  return uniques;
}
