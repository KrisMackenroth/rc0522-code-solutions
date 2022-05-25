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
