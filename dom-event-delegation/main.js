var taskList = document.querySelector('.task-list');

taskList.addEventListener('click', function (event) {
  console.log(event.target);
  console.log(event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var close = event.target.closest('.task-list-item');
    console.log(close);
    close.remove('.task-list-item');
  }
});
