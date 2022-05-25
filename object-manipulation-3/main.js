console.log('Lodash is loaded:', typeof _ !== 'undefined');
var playerOne = { name: 'Kris', hand: {} };
var playerTwo = { name: 'Cole', hand: {} };
var playerThree = { name: 'Daniel', hand: {} };
var playerFour = { name: 'Isaac', hand: {} };

var suits = ['Spades', 'Diamonds', 'Club', 'Heart'];
var rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

var combined = [];

for (var i = 0; i < suits.length; i++) {
  for (var j = 0; j < rank.length; j++) {
    var card = { value: rank[j], suit: suits[i] };
    combined.push(card);
  }
}

for (var k = combined.length - 1; k > 0; k--) {
  var x = Math.floor(Math.random() * k);
  var temp = combined[k];
  combined[k] = combined[x];
  combined[x] = temp;

}

for (var n = 0; n < combined.length; n++) {
  if (combined[n].value === 'Ace') {
    combined[n].value = 11;
  } else if (combined[n].value === 'King' || combined[n].value === 'Queen' || combined[n].value === 'Jack') {
    combined[n].value = 10;
  }
}

playerOne.hand[0] = combined[x];
playerOne.hand[1] = combined[x + 1];
playerTwo.hand[0] = combined[x + 2];
playerTwo.hand[1] = combined[x + 3];
playerThree.hand[0] = combined[x + 4];
playerThree.hand[1] = combined[x + 5];
playerFour.hand[0] = combined[x + 6];
playerFour.hand[1] = combined[x + 7];

playerOne.total = playerOne.hand[0].value + playerOne.hand[1].value;
playerTwo.total = playerTwo.hand[0].value + playerTwo.hand[1].value;
playerThree.total = playerThree.hand[0].value + playerThree.hand[1].value;
playerFour.total = playerFour.hand[0].value + playerFour.hand[1].value;

console.log(playerOne);
console.log(playerTwo);
console.log(playerThree);
console.log(playerFour);

if (playerOne.total > playerTwo.total && playerOne.total > playerThree.total && playerOne.total > playerFour.total) {
  console.log('Winner:' + ' ' + playerOne.name);
} else if (playerTwo.total > playerOne.total && playerTwo.total > playerThree.total && playerTwo.total > playerFour.total) {
  console.log('Winner:' + ' ' + playerTwo.name);
} else if (playerThree.total > playerOne.total && playerThree.total > playerTwo.total && playerThree.total > playerFour.total) {
  console.log('Winner:' + ' ' + playerThree.name);
} else if (playerFour.total > playerOne.total && playerFour.total > playerTwo.total && playerFour.total > playerThree.total) {
  console.log('Winner:' + ' ' + playerFour.name);
}
