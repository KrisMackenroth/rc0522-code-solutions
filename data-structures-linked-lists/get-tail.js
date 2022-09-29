/* exported getTail */

function getTail(list) {
  let test = list;
  while (test.next !== null) {
    test = test.next;
  }

  return test.data;
}
