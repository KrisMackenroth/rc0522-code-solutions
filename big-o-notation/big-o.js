/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 2 * n = O(2n)
    if (!seen[word]) {              // _ * _ = O(?)
      seen[word] = true;
      unique[unique.length] = word; // _ * _ = O(?)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // _ * _ = O(?)
    let isUnique = true;            // _ * _ = O(?)
    for (
      let c = 0;                    // 1 * 1 = O(1)
      c < i;                        // 2 * n = O(2n)
      c++                           // 2 * n = O(2n)
    ) {
      const comparing = words[c];   // _ * _ = O(?)
      if (comparing === word) {     // _ * _ = O(?)
        isUnique = false;           // _ * _ = O(?)
      }
    }
    if (isUnique) {                 // _ * _ = O(?)
      unique[unique.length] = word; // _ * _ = O(?)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(?)
