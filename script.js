'use strict';

// variables

let rollBtn = document.querySelector(".btn--roll"),
    diceImg = document.querySelector(".dice"),
    currentP0 = document.querySelector("#current--0"),  //score of player 1 
    scoreP0 = document.getElementById("score--0"),      //total score of player 1
    currentP1 = document.querySelector("#current--1"),  //score of player 2
    scoreP1 = document.getElementById("score--1"),      //total score of player 2
    player0 = document.querySelector(".player--0"),     //player 1
    player1 = document.querySelector(".player--1");      //player 2
    
function changePlayer() {
  if (player0.classList.contains("player--active")) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
    currentP0.textContent = 'SCORE LOST !';
    if (RandNum == 1) {
      scoreP0.textContent = '0';
    }
  }

  else {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
    currentP1.textContent = 'SCORE LOST !';
    if (RandNum == 1) {
      scoreP1.textContent = '0';
    }
  } 
}


function generateRandNum() {

    

  let RandNum = Math.floor(Math.random()*6 + 1);   
  diceImg.classList.remove("hidden");
  diceImg.setAttribute('src', `dice-${RandNum}.png`);



  if (player0.classList.contains("player--active")) {
    currentP0.textContent = RandNum;
    scoreP0.textContent = Number(scoreP0.textContent) + RandNum;
  }

  else {
    currentP1.textContent = RandNum;
    scoreP1.textContent = Number(scoreP1.textContent) + RandNum;
  }




  if (RandNum == 1) {

     changePlayer();

  }

       

       

        
         

}


rollBtn.addEventListener("click", generateRandNum)


