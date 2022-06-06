'use strict';

const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');

const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnReset = document.querySelector('.btn--new');

const dice = document.querySelector('.dice');
let activePlayer, currentScore, scores, playing;

function init() {
    currentScore = 0;
    activePlayer = 0;
    scores = [0, 0];
    playing = true;

    currentEl0.textContent = 0;
    currentEl1.textContent = 0;
    scoreEl0.textContent = 0;
    scoreEl1.textContent = 0;

    dice.classList.add('hidden');
    playerEl0.classList.add('player--active');
    playerEl1.classList.remove('player--active');

    playerEl0.classList.remove('player--winner');
    playerEl1.classList.remove('player--winner');
}

init();

function switchPlayer() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerEl0.classList.toggle('player--active');
    playerEl1.classList.toggle('player--active');
}


btnRoll.addEventListener('click', function () {

    if (playing) {
        const diceNumber = Math.trunc(Math.random() * 6 + 1);

        dice.classList.remove('hidden');

        dice.src = `dice-${diceNumber}.png`;

        if (diceNumber !== 1) {
            currentScore += diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        } else {
            switchPlayer();
        }
    }

})

btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            playing = false;
            dice.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
        
    }
})

btnReset.addEventListener('click', init);