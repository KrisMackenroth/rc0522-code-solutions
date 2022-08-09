/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.print() === 'Stack { <empty> }') {
    return undefined;

  } else {
    const first = stack.pop();
    stack.push(value);
    stack.push(first);
    return stack;
  }
}
