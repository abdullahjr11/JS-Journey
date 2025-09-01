"use strict";

// Selecting Elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1"); // we can get elements by this too. Tis is much faster then query selector.
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

// Starting conditions
let score, currentScore, activePlayer, playing; //we declaring the variables outside of initializer and assign values in initializer function.
//initializer function
const init = function () {
  score = [0, 0]; // score adds up like an array;
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  current0El.textContent = 0;
  current1El.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();

const switchPlayer = function () {
  //switch to other player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // contradiction trivial method
  // score0.textContent = currentScore;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    //1. Dice random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //2. Display Dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //3. Check for roll 1.
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore;
    } else {
      // score[activePlayer] += currentScore;
      // document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //1. Add current score to the active player's score
    score[activePlayer] += currentScore;
    // score[1] = score[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    //2. Check if player's score is >= 100
    //3. Finish the game
    if (score[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    } //switch to the next player
  }
});

btnNew.addEventListener("click", init);
