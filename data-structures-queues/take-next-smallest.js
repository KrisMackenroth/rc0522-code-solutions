/* exported takeNextSmallest */

function takeNextSmallest(queue) {

  let smallest = queue.dequeue();
  if (queue.print() === 'Queue { <empty> }') {
    return smallest;
  } else {
    while (queue.print() !== 'Queue { <empty> }') {
      const next = queue.peek();
      if (smallest <= next) {

        return smallest;
      } else {
        queue.enqueue(smallest);
        smallest = queue.dequeue();

      }

    }

  }
}
