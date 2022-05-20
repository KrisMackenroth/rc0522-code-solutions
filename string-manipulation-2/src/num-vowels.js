/* exported numVowels */
// create an emtpy array to hold the length of the string
// create a variable to hold the number of vowels.
// create an if statement to determine if the length of the string is greater then zero
// create a for loop to iterate through the string.
// create an if statement to push the vowels into the empty array.
// assign the length of the empty array to count to acquire the number of vowels.
// return count.
function numVowels(string) {
  var emptyArray = [];
  var count;
  if (string.length !== 0) {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === 'A' || string[i] === 'a' || string[i] === 'E' || string[i] === 'e' || string[i] === 'I' || string[i] === 'i' || string[i] === 'O' || string[i] === 'o' || string[i] === 'U' || string[i] === 'u') {
        emptyArray.push(string[i] === 'A' || string[i] === 'a' || string[i] === 'E' || string[i] === 'e' || string[i] === 'I' || string[i] === 'i' || string[i] === 'O' || string[i] === 'o' || string[i] === 'U' || string[i] === 'u');
        count = emptyArray.length;
      }
    }
    return count;
  } else return 0;
}
// create an emtpy array to hold the length of the string
// create a variable to hold the number of vowels.
// create an if statement to determine if the length of the string is greater then zero
// create a for loop to iterate through the string.
// create an if statement to push the vowels into the empty array.
// assign the length of the empty array to count to acquire the number of vowels.
// return count.
