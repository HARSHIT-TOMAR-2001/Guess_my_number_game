// 'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent = 24;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 52;
// console.log(document.querySelector('.message').textContent);

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
//    let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  let number = Number(document.querySelector('.guess').value);

  if (!number) {
    displayMessage('NO NUMBER SELECTED!!');
  } else {
    if (score > 0) {
      if (secretnumber != number) {
        score--;
        if (score == 0) {
          displayMessage('You Lost The GAME!');
          document.querySelector('.number').textContent = secretnumber;
          document.querySelector('.score').textContent = score;
          document.querySelector('body').style.backgroundColor = 'red';
        } else {
          displayMessage(`${secretnumber < number ? 'TOO HIGH' : 'TOO LOW'}`);

          document.querySelector('.score').textContent = score;
        }
      } else {
        document.querySelector('.number').textContent = secretnumber;
        displayMessage('Hurray!! YOU WON!!');
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        let h = document.querySelector('.highscore').textContent;
        if (score > h) document.querySelector('.highscore').textContent = score;
      }
    }
  }
});
