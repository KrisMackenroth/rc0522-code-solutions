var hotButton = document.querySelector('.hot-button');

var coldButton = document.querySelector('.cold-button');

var hidden = document.querySelector('.hidden');

var hiddenBackground = document.querySelector('.hidden-background');

hotButton.addEventListener('click', function (event) {
  hidden.className = 'visible';
  hiddenBackground.className = 'background';
});

coldButton.addEventListener('click', function (event) {
  hidden.className = 'hidden';
  hiddenBackground.className = 'hidden-background';
});
