/* exported swapFront */

function swapFront(list) {

  if (list.next === null) {
    return list;
  } else {
    const next = list.next.data;
    const head = list.data;
    list.data = next;
    list.next.data = head;
    return list;
  }
}
