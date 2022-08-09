/* exported postpone */

function postpone(queue) {
  if (queue.print() !== 'Queue { <empty> }') {
    const front = queue.dequeue();
    queue.enqueue(front);
  }

}
