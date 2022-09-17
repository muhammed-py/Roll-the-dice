'use strict';

// variables

let rollBtn = document.querySelector(".btn--roll"),
    diceImg = document.querySelector(".dice"),
    currentP0 = document.querySelector("#current--0"),  //score of player 1 
    scoreP0 = document.getElementById("score--0"),      //combined score of player 1
    currentP1 = document.querySelector("#current--1"),  //score of player 2
    scoreP1 = document.getElementById("score--1"),      //combined score of player 2
    player0 = document.querySelector(".player--0"),     //player 1
    player1 = document.querySelector(".player--1");      //player 2
    


function generateRandNum() {

    

     let RandNum = Math.floor(Math.random()*6 + 1);
     console.log(RandNum)

     
     diceImg.classList.remove("hidden");
     diceImg.setAttribute('src', `dice-${RandNum}.png`);
     currentP0.textContent = RandNum;
     scoreP0.textContent = Number(scoreP0.textContent) + RandNum;
     

    

       if (RandNum == 1) {

        currentP0.textContent = "Lost Turn";
        scoreP0.textContent = "0";
        player0.classList.remove("player--active");
        player1.classList.add("player--active");

       }

       

       

        
         

}


rollBtn.addEventListener("click", generateRandNum)


