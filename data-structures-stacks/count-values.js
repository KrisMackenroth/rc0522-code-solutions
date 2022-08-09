/* exported countValues */

function countValues(stack) {
  let count = 0;
  while (stack.print() !== 'Stack { <empty> }') {
    stack.pop();
    count++;
  }

  return count;

}
