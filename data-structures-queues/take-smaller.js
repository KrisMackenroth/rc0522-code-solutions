/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.print() === 'Queue { <empty> }') {
    return undefined;
  } else {
    const first = queue.dequeue();
    if (queue.print() === 'Queue { <empty> }') {
      return first;
    } else {
      const second = queue.dequeue();

      if (first < second) {
        queue.enqueue(second);
        return first;
      }
      queue.enqueue(first);
      return second;
    }
  }
}
