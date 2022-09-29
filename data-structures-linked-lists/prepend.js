/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const test = new LinkedList(value);
  test.next = list;
  return test;
}
