/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  if (list.next === null) {
    return list;
  } else {

    const head = new LinkedList(value);
    const test = list.next;
    list.next = head;
    list.next.next = test;
    return list;
  }

}
