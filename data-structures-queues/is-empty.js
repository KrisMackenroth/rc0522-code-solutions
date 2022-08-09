/* exported isEmpty */

function isEmpty(queue) {
  if (queue.print() === 'Queue { <empty> }') {
    return true;
  }
  return false;
}
