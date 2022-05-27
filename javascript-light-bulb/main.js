var counter = 0;

var circleBackground = document.querySelector('.yellow-background');

var circleClick = document.querySelector('.circle');

var mainBackground = document.querySelector('.background-white');

circleClick.addEventListener('click', function (event) {
  counter++;
  if (counter % 2 === 0) {
    circleBackground.className = 'yellow-background';
    mainBackground.className = 'background-white';
  } else {
    circleBackground.className = 'grey-background';
    mainBackground.className = 'background-black';
  }
});
