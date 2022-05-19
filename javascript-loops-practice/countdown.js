/* exported countdown */
function countdown(number) {
  var num = [];
  while (number >= 0) {
    num.push(number);
    number--;
  }
  return num;
}
