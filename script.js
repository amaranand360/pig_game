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









