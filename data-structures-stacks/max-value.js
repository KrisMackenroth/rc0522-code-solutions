/* exported maxValue */

function maxValue(stack) {
  let max = stack.peek();
  if (stack.print() === 'Stack { <empty> }') {
    return -Infinity;
  } else {

    while (stack.print() !== 'Stack { <empty> }') {
      stack.pop();
      if (max < stack.peek()) { max = stack.peek(); }
    }
    return max;
  }

}
