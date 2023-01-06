const btnEl = document.querySelectorAll(".roll-btn");
const scoreEl0 = document.querySelector(".score-0");
const scoreEl1 = document.querySelector(".score-1");
const diceEl0 = document.querySelector(".dice-0");
const diceEl1 = document.querySelector(".dice-1");
let scores, activePlayer;

const init = function () {
  scores = [0, 0];
  btnEl[0].classList.remove(hide);
  btnEl[1].classList.add(hide);
  diceEl0[0].classList.add(hide);
  diceEl1[0].classList.add(hide);
  activePlayer = 0;
};

init();
