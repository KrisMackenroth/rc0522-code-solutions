function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name' + ' ' + event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name' + ' ' + event.target.name);
}

function handleInput(event) {
  console.log('event.target.name' + ' ' + event.target.name);
  console.log(event.target.value);
}

var inputOne = document.querySelector('#contact-form :nth-child(3)');

var inputTwo = document.querySelector('#contact-form :nth-child(5)');

var textArea = document.querySelector('textarea');

inputOne.addEventListener('focus', handleFocus);

inputOne.addEventListener('blur', handleBlur);

inputOne.addEventListener('input', handleInput);

inputTwo.addEventListener('focus', handleFocus);

inputTwo.addEventListener('blur', handleBlur);

inputTwo.addEventListener('input', handleInput);

textArea.addEventListener('focus', handleFocus);

textArea.addEventListener('blur', handleBlur);

textArea.addEventListener('input', handleInput);
