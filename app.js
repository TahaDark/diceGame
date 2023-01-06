const btnEl = document.querySelector(".roll-btn");
const scoreEl0 = document.querySelector(".score-0");
const scoreEl1 = document.querySelector(".score-1");
const diceEl0 = document.querySelector(".dice-0");
const diceEl1 = document.querySelector(".dice-1");
let activePlayer, dice, dice0, dice1, score0, score1;

const init = function () {
  dice = [0, 0];
  activePlayer = 0;
  score0 = 0;
  score1 = 0;
  scoreEl1.textContent = 0;
  scoreEl0.textContent = 0;
  btnEl.classList.remove("hide");
  diceEl0.classList.add("hide");
  diceEl1.classList.add("hide");
};
const switchPlayer = function () {
  if (activePlayer === 0) {
    if (window.screen.width >= 865) {
      document.querySelector(".btn-box").style.left = "50%";
    }
    activePlayer = 1;
  } else {
    if (window.screen.width >= 703) {
      document.querySelector(".btn-box").style.left = "0";
    }
    activePlayer = 0;
    console.log(dice);
    if (dice[0] > dice[1]) {
      score0++;
      scoreEl0.textContent = score0;
    } else if (dice[0] < dice[1]) {
      score1++;
      scoreEl1.textContent = score1;
    }
    dice[0] = 0;
    dice[1] = 0;
  }
};

init();

btnEl.addEventListener("click", function () {
  dice[activePlayer] = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  document.querySelector(`.dice-${activePlayer}`).classList.remove("hide");
  document.querySelector(
    `.dice-${activePlayer}`
  ).src = `img/dice${dice[activePlayer]}.png`;
  switchPlayer();
  if (score0 === 3 || score1 === 3) {
    btnEl.classList.add("hide");
    setTimeout(() => {
      init();
    }, 2000);
  }
});
