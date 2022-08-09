const noteCards = [
  { card: 1, question: '1 + 1', answer: '2' },
  { card: 2, question: '1 + 2', answer: '2' },
  { card: 3, question: '1 + 3', answer: '2' },
  { card: 4, question: '1 + 4', answer: '2' },
  { card: 5, question: '1 + 5', answer: '2' }
];

const cardList = document.querySelector('#note-card');

function cardCreate(info) {
  const $con = document.createElement('div');
  const $temp = document.createElement('h3');

  $con.classList.add('card');
  $con.classList.add('question');
  $temp.classList.add('heading');

  $temp.textContent = info.question;

  $con.appendChild($temp);

  $con.addEventListener('click', function (event) {
    if ($con.classList.contains('question')) {
      $temp.textContent = info.answer;
      $con.classList.remove('question');
      $con.classList.add('answer');
    } else {
      $temp.textContent = info.question;
      $con.classList.remove('answer');
      $con.classList.add('question');
    }
  });
  return $con;
}

let count = 0;

const card = cardCreate(noteCards[count]);

cardList.appendChild(card);

const forward = document.querySelector('.forward');

const backward = document.querySelector('.backward');

forward.addEventListener('click', movement);

backward.addEventListener('click', movement);

function movement(event) {
  if (event.target.classList.contains('forward') && count < 5) {
    count++;
  } else if (count > 0) { count--; }
  const test = cardCreate(noteCards[count]);
  cardList.removeChild(cardList.firstElementChild);
  cardList.appendChild(test);
}
