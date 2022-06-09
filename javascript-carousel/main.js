var image = document.querySelector('.image');

var one = document.querySelector('.one');

var two = document.querySelector('.two');

var three = document.querySelector('.three');

var four = document.querySelector('.four');

var five = document.querySelector('.five');

var forward = document.querySelector('.forward');

var backward = document.querySelector('.backward');

var buttons = document.querySelector('.buttons');

var count = 1;

function countDecrease() {
  if (count === 1) {
    image.setAttribute('src', 'images/004.png');
    one.classList.remove('background-black');
    two.classList.add('background-black');
  } else if (count === 2) {
    image.setAttribute('src', 'images/007.png');
    two.classList.remove('background-black');
    three.classList.add('background-black');
  } else if (count === 3) {
    image.setAttribute('src', 'images/025.png');
    three.classList.remove('background-black');
    four.classList.add('background-black');
  } else if (count === 4) {
    image.setAttribute('src', 'images/039.png');
    four.classList.remove('background-black');
    five.classList.add('background-black');
  } else if (count === 5 || count === 0) {
    count = 0;
    image.setAttribute('src', 'images/001.png');
    one.classList.add('background-black');
    five.classList.remove('background-black');
  }
  count++;
  return count;
}

var newInterval = setInterval(countDecrease, 3000);

buttons.addEventListener('click', function (event) {
  clearInterval(newInterval);
  two.classList.remove('background-black');
  one.classList.remove('background-black');
  three.classList.remove('background-black');
  four.classList.remove('background-black');
  five.classList.remove('background-black');
  if (event.target.classList.contains('one')) {
    count = 0;
  } else if (event.target.classList.contains('two')) {
    count = 1;
  } else if (event.target.classList.contains('three')) {
    count = 2;
  } else if (event.target.classList.contains('four')) {
    count = 3;
  } else if (event.target.classList.contains('five')) {
    count = 4;
  }
  countDecrease();
  newInterval = setInterval(countDecrease, 3000);
  return newInterval;
});

backward.addEventListener('click', function (event) {
  clearInterval(newInterval);
  count = count - 2;
  if (count === 0) {
    two.classList.remove('background-black');
  } else if (count === 1) {
    three.classList.remove('background-black');
  } else if (count === 2) {
    four.classList.remove('background-black');
  } else if (count === 3) {
    five.classList.remove('background-black');
  }
  countDecrease();
  newInterval = setInterval(countDecrease, 3000);
  return newInterval;
});

forward.addEventListener('click', function (event) {
  clearInterval(newInterval);
  countDecrease();
  newInterval = setInterval(countDecrease, 3000);
  return newInterval;
});
