/* exported removeNext */

function removeNext(list) {

  if (list.next === null) {
    return list;
  } else {
    const next = list.next.next;
    list.next = next;
  }
}
