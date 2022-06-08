var image = document.querySelector('.image');

var one = document.querySelector('.one');

var two = document.querySelector('.two');

var three = document.querySelector('.three');

var four = document.querySelector('.four');

var five = document.querySelector('.five');

var forward = document.querySelector('.forward');

var backward = document.querySelector('.backward');

var count = 1;

function countDecrease() {
  if (count === 0) {
    image.setAttribute('src', 'images/001.png');
    one.classList.remove('background-white');
    one.classList.add('background-black');
    five.classList.remove('background-black');
    five.classList.add('background-white');
  } else if (count === 1) {
    image.setAttribute('src', 'images/004.png');
    one.classList.remove('background-black');
    one.classList.add('background-white');
    two.classList.remove('background-white');
    two.classList.add('background-black');
  } else if (count === 2) {
    image.setAttribute('src', 'images/007.png');
    two.classList.remove('background-black');
    two.classList.add('background-white');
    three.classList.remove('background-white');
    three.classList.add('background-black');
  } else if (count === 3) {
    image.setAttribute('src', 'images/025.png');
    three.classList.remove('background-black');
    three.classList.add('background-white');
    four.classList.remove('background-white');
    four.classList.add('background-black');
  } else if (count === 4) {
    image.setAttribute('src', 'images/039.png');
    four.classList.remove('background-black');
    four.classList.add('background-white');
    five.classList.remove('background-white');
    five.classList.add('background-black');
  } else if (count === 5) {
    count = 0;
    image.setAttribute('src', 'images/001.png');
    one.classList.remove('background-white');
    one.classList.add('background-black');
    five.classList.remove('background-black');
    five.classList.add('background-white');
    count++;
    return count;
  }
  count++;
  return count;
}

var newInterval = setInterval(countDecrease, 3000);

one.addEventListener('click', function (event) {
  clearInterval(newInterval);
  count = 0;
  countDecrease();
  one.classList.remove('background-white');
  one.classList.add('background-black');
  two.classList.remove('background-black');
  two.classList.add('background-white');
  three.classList.remove('background-black');
  three.classList.add('background-white');
  four.classList.remove('background-black');
  four.classList.add('background-white');
  five.classList.remove('background-black');
  five.classList.add('background-white');
  newInterval = setInterval(countDecrease, 3000);
  return newInterval;
});
two.addEventListener('click', function (event) {
  clearInterval(newInterval);
  count = 1;
  countDecrease();
  two.classList.remove('background-white');
  two.classList.add('background-black');
  one.classList.remove('background-black');
  one.classList.add('background-white');
  three.classList.remove('background-black');
  three.classList.add('background-white');
  four.classList.remove('background-black');
  four.classList.add('background-white');
  five.classList.remove('background-black');
  five.classList.add('background-white');
  newInterval = setInterval(countDecrease, 3000);
  return newInterval;
});
three.addEventListener('click', function (event) {
  clearInterval(newInterval);
  count = 2;
  countDecrease();
  three.classList.remove('background-white');
  three.classList.add('background-black');
  two.classList.remove('background-black');
  two.classList.add('background-white');
  one.classList.remove('background-black');
  one.classList.add('background-white');
  four.classList.remove('background-black');
  four.classList.add('background-white');
  five.classList.remove('background-black');
  five.classList.add('background-white');
  newInterval = setInterval(countDecrease, 3000);
  return newInterval;
});
four.addEventListener('click', function (event) {
  clearInterval(newInterval);
  count = 3;
  countDecrease();
  four.classList.remove('background-white');
  four.classList.add('background-black');
  two.classList.remove('background-black');
  two.classList.add('background-white');
  three.classList.remove('background-black');
  three.classList.add('background-white');
  one.classList.remove('background-black');
  one.classList.add('background-white');
  five.classList.remove('background-black');
  five.classList.add('background-white');
  newInterval = setInterval(countDecrease, 3000);
  return newInterval;
});
five.addEventListener('click', function (event) {
  clearInterval(newInterval);
  count = 4;
  countDecrease();
  five.classList.remove('background-white');
  five.classList.add('background-black');
  two.classList.remove('background-black');
  two.classList.add('background-white');
  three.classList.remove('background-black');
  three.classList.add('background-white');
  four.classList.remove('background-black');
  four.classList.add('background-white');
  one.classList.remove('background-black');
  one.classList.add('background-white');
  newInterval = setInterval(countDecrease, 3000);
  return newInterval;
});

backward.addEventListener('click', function (event) {

  clearInterval(newInterval);
  count = count - 2;
  if (count === 0) {
    two.classList.add('background-white');
    two.classList.remove('background-black');
  } else if (count === 1) {
    three.classList.add('background-white');
    three.classList.remove('background-black');
  } else if (count === 2) {
    four.classList.add('background-white');
    four.classList.remove('background-black');
  } else if (count === 3) {
    five.classList.add('background-white');
    five.classList.remove('background-black');
  }
  countDecrease();
  newInterval = setInterval(countDecrease, 3000);
  return newInterval;
});

forward.addEventListener('click', function (event) {
  count++;
  count = count - 1;
  clearInterval(newInterval);
  countDecrease();
  newInterval = setInterval(countDecrease, 3000);
  return newInterval;
});
