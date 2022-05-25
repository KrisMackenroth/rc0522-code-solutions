console.log('Lodash is loaded:', typeof _ !== 'undefined');
var playerOne = { name: 'bob', hand: {} };
var playerTwo = { name: 'cole', hand: [] };
var playerThree = { name: 'daniel', hand: [] };
var playerFour = { name: 'greg', hand: [] };

const suits = ['Spades', 'Diamonds', 'Club', 'Heart'];
const values = [
  'Ace',
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  'Jack',
  'Queen',
  'King'
];

// shuffle

var combined = [];

for (var i = 0; i < suits.length; i++) {
  for (var j = 0; j < values.length; j++) {
    var card = { Value: values[j], Suit: suits[i] };
    combined.push(card);
  }
}

for (var k = combined.length - 1; k > 0; k--) {
  var x = Math.floor(Math.random() * k);
  var temp = combined[k];
  combined[k] = combined[x];
  combined[x] = temp;

}

playerOne.hand[0] = combined[x];
playerOne.hand[1] = combined[x + 1];
playerTwo.hand[0] = combined[x + 2];
playerTwo.hand[1] = combined[x + 3];
playerThree.hand[0] = combined[x + 4];
playerThree.hand[1] = combined[x + 5];
playerFour.hand[0] = combined[x + 6];
playerFour.hand[1] = combined[x + 7];

if (playerOne.hand.value === 'Ace') {
  playerOne.hand.value = 11;
}

if (playerOne.hand.value === 'King' || playerOne.hand.value === 'Queen' || playerOne.hand.value === 'Jack') {
  playerOne.hand.value = 10;
}
console.log(playerOne);
console.log(playerTwo);
console.log(playerThree);
console.log(playerFour);
