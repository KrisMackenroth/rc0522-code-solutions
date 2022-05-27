var tabContainer = document.querySelector('.tab-container');

var tab = document.querySelectorAll('.tab');

var view = document.querySelectorAll('.view');

tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tab.length; i++) {
      if (tab[i] === event.target) {
        event.target.classList.add('active');
      } else if (tab[i] !== event.target) {
        tab[i].classList.remove('active');
      }
    }
  }

  if (event.target.matches('.tab')) {
    var dataView = event.target.getAttribute('data-view');
    for (var j = 0; j < view.length; j++) {
      if (view[j].getAttribute('data-view') === dataView) {
        view[j].classList.remove('hidden');
      } else view[j].classList.add('hidden');
    }
  }
});
