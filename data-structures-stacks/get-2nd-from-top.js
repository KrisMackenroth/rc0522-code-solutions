/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.print() === 'Stack { <empty> }') {
    return undefined;
  } else {
    const popped = stack.pop();
    const second = stack.peek();
    stack.push(popped);
    return second;
  }
}
