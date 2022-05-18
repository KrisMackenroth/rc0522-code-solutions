var one = 6;
var two = 7;
var three = 8;

var maximumValue = Math.max(one, two, three);

console.log('maximumValue:' + maximumValue);

var heroes = ['Spiderman', 'Batman', 'Moonknight', 'Superman'];

var randomNumber = Math.random();

randomNumber = heroes.length * randomNumber;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:' + randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero:' + randomHero);

var library = [
  {
    title: 'Hobbit',
    author: 'J. R. R. Tolkien'
  },
  {
    title: 'Harry Potter',
    author: 'J. K. Rowling'
  },
  {
    title: 'Hunger Games',
    author: 'Suzanne Collins'
  }
];

var lastBook = library.pop();

console.log('lastBook:', lastBook);

var firstBook = library.shift();

console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log(library);

var fullName = 'Kristopher Mackenroth';

var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:' + firstAndLastName);

var firstname = firstAndLastName[0];

var sayMyName = firstname.toUpperCase();

console.log('sayMyName:' + sayMyName);
