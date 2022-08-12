/* exported removeTail */

function removeTail(list) {
  if (list.next === null) {
    return list;
  } else {

    let current = list;
    while (current.next.next !== null) {
      current = current.next.next;
    }
    current.next = null;
    return list.data;
  }
}
