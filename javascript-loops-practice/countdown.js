/* exported countdown */
function countdown(number) {
  var count = [];
  var currentNumber = 0;
  while (number >= currentNumber) {
    count.push(number);
    number--;
  }
  return count;
}
