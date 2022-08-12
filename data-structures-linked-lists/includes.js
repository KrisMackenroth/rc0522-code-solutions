/* exported includes */

function includes(list, value) {

  let test = list;
  if (test.data === value) {
    return true;
  } else {
    while (test.next !== null) {
      test = test.next;
      if (test.data === value) {
        return true;
      }
    }

    return false;
  }
}
