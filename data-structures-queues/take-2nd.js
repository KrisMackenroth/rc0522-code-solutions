/* exported take2nd */

function take2nd(queue) {
  if (queue.print() !== 'Queue { <empty> }') {
    const front = queue.dequeue();
    queue.enqueue(front);
    return queue.dequeue();
  }
}
