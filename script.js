'use strict';
//seleacting element.
const player1 = document.querySelector('.player_0');
const player2 = document.querySelector('.player_1');

const score1 = document.getElementById('score_0');
const score2 = document.querySelector('#score_1');

const current1 = document.getElementById('current_0');
const current2 = document.getElementById('current_1');

const diceEl = document.querySelector('.dice');
const btnnew = document.querySelector('.btn_new');
const btnroll = document.querySelector('.btn_roll');
const btnhold = document.querySelector('.btn_hold');

// starting condation:
let currentscore, scores,activeplayer
let playing = true;
/*******************RePlay Game and Start functionality********************/
const playagain = ()=>{
    playing = true;
    activeplayer = 0;
    currentscore = 0;
    scores = [0, 0];

    score1.textContent = 0;
    score2.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;

    diceEl.classList.add('hidden');
    player1.classList.remove('player_winner');
    player2.classList.remove('player_winner');
    player1.classList.add('player_active');
    player2.classList.remove('player_active');

}
playagain();

btnnew.addEventListener('click', playagain);

/*******************Switching player functionality********************/
const SWITCHPLAYER = ()=>{
    document.getElementById(`current_${activeplayer}`).textContent = 0;
    currentscore = 0;
    activeplayer = (activeplayer == 0) ? 1 : 0;
    player1.classList.toggle('player_active');
    player2.classList.toggle('player_active');
}

/*******************Rolling dice functionality********************/
let rollop = function rollfun() {
    if(playing){
    //1.creacting a random dice rool
    const dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
    
    //2.Display Dice.
    diceEl.classList.remove('hidden');
    diceEl.src = `img/dice-${dice}.png `
    
    //3.Cheack rolled value is 1 than switch payer.
    if (dice !== 1)
    {
        currentscore += dice;
        document.getElementById(`current_${activeplayer}`).textContent = currentscore;
    }
    else    //swith the player.
    {
      SWITCHPLAYER();
    }
}
}
btnroll.addEventListener('click', rollop);

/************************Holding dice functionality*******************************/
let holdop = ()=>{
    if(playing){
    scores[activeplayer] += currentscore;   
    document.getElementById(`score_${activeplayer}`).textContent = scores[activeplayer]
    
    if(scores[activeplayer] >= 100)
    {   playing = false;
        document.querySelector(`.player_${activeplayer}`).classList.add('player_winner')
        document.querySelector(`.player_${activeplayer}`).classList.remove('player_active')

    }
    else
    {
        SWITCHPLAYER();
    } 
}
}
btnhold.addEventListener('click', holdop)




// Selecting elements
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1'); //Using class method.

// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1'); //Using id

// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');//by id

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// let scores, currentScore, activePlayer, playing;

// // Starting conditions
// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   diceEl.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };
// init();

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // 1. Generating a random dice roll
//     const dice = Math.trunc(Math.random() * 6) + 1;

//     // 2. Display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `img/dice-${dice}.png`;

//     // 3. Check for rolled 1
//     if (dice !== 5) {
//       // Add dice to current score
//       currentScore += dice;
//       document.getElementById(
//         `current--${activePlayer}`
//       ).textContent = currentScore;
//     } else {
//       // Switch to next player
//       switchPlayer();
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     // 1. Add current score to active player's score
//     scores[activePlayer] += currentScore;
//     // scores[1] = scores[1] + currentScore

//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     // 2. Check if player's score is >= 100
//     if (scores[activePlayer] >= 100) {
//       // Finish the game
//       playing = false;
//       diceEl.classList.add('hidden');

//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//     } else {
//       // Switch to the next player
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener('click', init);










