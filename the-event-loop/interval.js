var count = 3;
console.log(count);
const interval = setInterval(() => {
  count--;
  if (count > 0) {
    console.log(count);
  }
  if (count === 0) {
    console.log('Blast Off!');
    clearInterval(interval);
  }
}, 1000);
