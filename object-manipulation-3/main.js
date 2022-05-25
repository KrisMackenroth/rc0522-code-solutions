console.log('Lodash is loaded:', typeof _ !== 'undefined');
var playerOne = { name: 'Kris', hand: {} };
var playerTwo = { name: 'Cole', hand: {} };
var playerThree = { name: 'Daniel', hand: {} };
var playerFour = { name: 'Isaac', hand: {} };

var suits = ['Spades', 'Diamonds', 'Club', 'Heart'];
var rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

var combined = [];

// creating the deck object, and pushing it into an array.
for (var i = 0; i < suits.length; i++) {
  for (var j = 0; j < rank.length; j++) {
    var card = { rank: rank[j], suit: suits[i] };
    combined.push(card);
  }
}
// Randomizing the deck by assigning it an index that is being multiplied by an every changing number.
for (var k = combined.length - 1; k > 0; k--) {
  var x = Math.floor(Math.random() * k);
  var temp = combined[k];
  combined[k] = combined[x];
  combined[x] = temp;

}
// Locating ranks that do not have an inherit value, and assigning them a new value.
for (var n = 0; n < combined.length; n++) {
  if (combined[n].rank === 'Ace') {
    combined[n].rank = 11;
  } else if (combined[n].rank === 'King' || combined[n].rank === 'Queen' || combined[n].rank === 'Jack') {
    combined[n].rank = 10;
  }
}

// Assigning the players their cards.
playerOne.hand[0] = combined[x];
playerOne.hand[1] = combined[x + 1];
playerTwo.hand[0] = combined[x + 2];
playerTwo.hand[1] = combined[x + 3];
playerThree.hand[0] = combined[x + 4];
playerThree.hand[1] = combined[x + 5];
playerFour.hand[0] = combined[x + 6];
playerFour.hand[1] = combined[x + 7];

// Collecting the total value of each card the players were given.
playerOne.total = playerOne.hand[0].rank + playerOne.hand[1].rank;
playerTwo.total = playerTwo.hand[0].rank + playerTwo.hand[1].rank;
playerThree.total = playerThree.hand[0].rank + playerThree.hand[1].rank;
playerFour.total = playerFour.hand[0].rank + playerFour.hand[1].rank;

console.log(playerOne);
console.log(playerTwo);
console.log(playerThree);
console.log(playerFour);

// Determing who won the game depending on if the total of each player is greater then eachothers.
if (playerOne.total > playerTwo.total && playerOne.total > playerThree.total && playerOne.total > playerFour.total) {
  console.log('Winner:' + ' ' + playerOne.name);
} else if (playerTwo.total > playerOne.total && playerTwo.total > playerThree.total && playerTwo.total > playerFour.total) {
  console.log('Winner:' + ' ' + playerTwo.name);
} else if (playerThree.total > playerOne.total && playerThree.total > playerTwo.total && playerThree.total > playerFour.total) {
  console.log('Winner:' + ' ' + playerThree.name);
} else if (playerFour.total > playerOne.total && playerFour.total > playerTwo.total && playerFour.total > playerThree.total) {
  console.log('Winner:' + ' ' + playerFour.name);
}
