/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let count = 0;
  let first = queue.dequeue();
  while (count < index && queue.print() !== 'Queue { <empty> }') {
    queue.enqueue(first);
    first = queue.dequeue();
    count++;
  }

  return first;

}
