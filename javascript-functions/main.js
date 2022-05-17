function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var minutesToSeconds = convertMinutesToSeconds(5);

console.log('minutesToSeconds:', minutesToSeconds);

function greet(name) {
  return 'Hey, ' + name;
}

var heyName = greet('Kris');

console.log(heyName);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var calculateArea = getArea(10, 25);

console.log('calculateArea:', calculateArea);

function getFirstName(person) {
  return person.firstName;
}

var whatIsFirstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

console.log('whatIsFirstName:', whatIsFirstName);

function getLastElement(array) {
  var arrayNumber = array.length;
  var lastIndex = arrayNumber - 1;
  var lastArray = array[lastIndex];
  return lastArray;
}

var whatIsLastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('whatisLastElement:', whatIsLastElement);
