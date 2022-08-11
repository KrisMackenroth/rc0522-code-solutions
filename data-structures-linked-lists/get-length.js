/* exported getLength */

function getLength(list) {
  let count = 1;
  let test = list;
  while (test.next !== null) {
    test = test.next;
    count++;
  }

  return count;
}
