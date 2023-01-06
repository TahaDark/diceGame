const btnEl = document.querySelector(".roll-btn");
const scoreEl0 = document.querySelector(".score-0");
const scoreEl1 = document.querySelector(".score-1");
const diceEl0 = document.querySelector(".dice-0");
const diceEl1 = document.querySelector(".dice-1");
let scores, activePlayer, dice0, dice1;

const init = function () {
  scores = [0, 0];
  activePlayer = 0;
};
const switchPlayer = function () {
  if (activePlayer === 0) {
    document.querySelector(".btn-box").style.left = "50%";
    activePlayer = 1;
  } else {
    document.querySelector(".btn-box").style.left = "0";
    activePlayer = 0;
  }
};

init();

btnEl.addEventListener("click", function () {
  dice0 = Math.trunc(Math.random() * 6) + 1;
  document.querySelector(`.dice-${activePlayer}`).classList.remove("hide");
  document.querySelector(`.dice-${activePlayer}`).src = `img/dice${dice0}.png`;
  switchPlayer();
});
