var countDown = document.querySelector('.countdown-display');

function countDecrease() {
  countDown.textContent -= 1;
  if (countDown.textContent < 1) {
    clearInterval(stopInterval);
    countDown.textContent = '~Earth Beeeelooowww Us~';
  }
}

var stopInterval = setInterval(countDecrease, 1000);
