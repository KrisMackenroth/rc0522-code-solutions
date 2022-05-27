var button = document.getElementById('myButton');

button.addEventListener('click', function (event) {
  var input = document.getElementById('userInput').value;
  var splitInput = input.split('');
  var main = document.querySelector('main');
  var i = 0;
  do {
    var spanTest = document.createElement('span');
    var wordContent = document.createTextNode(splitInput[i]);
    spanTest.appendChild(wordContent);
    main.appendChild(spanTest);
    i++;
  } while (i < splitInput.length);

  var spanial = document.querySelectorAll('span');
  var temp = 0;

  document.addEventListener('keydown', function (e) {
    var keys = e.key;
    if (keys === spanial[temp].textContent) {
      spanial[temp].className = 'green-text';
      spanial[temp + 1].classList.add('under-border');
      temp++;
    } else { spanial[temp].className = 'red-text'; }
  });

});
