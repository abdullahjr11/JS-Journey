'use strict';

// console.log(document.querySelector
//     (".message").textContent);
// console.log(document.querySelector('.message')
// .textContent='🎉 Correct Number');
// document.querySelector(".number").textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector('.guess').value);

let secret_number = Math.trunc(Math.random() *20 ) + 1 ;
let score = 20;
let highscore = 0;

const displayMessage = function (message) { 
    document.querySelector(".message").textContent = message;
}
const check = document.querySelector('.check');

check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //when there is no input!
  if (!guess) {
    // document.querySelector(".message").textContent = " ❌ Wrong NUmber!";
    displayMessage(" ❌ Wrong Number!");
}
  //when a player winss
  else if (guess === secret_number) {
    
      //   (document.querySelector(".message").textContent = "🎉 Correct Number")
      displayMessage("🎉 Correct Number");
    
    document.querySelector(".number").textContent = secret_number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    // highscore availabilty;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } //Making code much healthier!
  else if (guess !== secret_number) {
    if (score > 1) {
      
        // (document.querySelector(".message").textContent =
          displayMessage(guess > secret_number ? "📈 Too high number" : "📉 Too low number");
      ;
      score--;
      console.log((document.querySelector(".score").textContent = score));
    } else {
    //   document.querySelector(".message").textContent = " You lost the Game!";
    displayMessage("You lost the Game!");  
    document.querySelector(".score").textContent = 0;
    }
  }
});    
    //When guess is too high
    // else if (guess > secret_number) { 
    //     if (score > 1){
    //              console.log(
    //                (document.querySelector(".message").textContent =
    //                  "📈 Too high number")
    //              );
    //              score--;
    //              console.log(
    //                (document.querySelector(".score").textContent = score)
    //              );
    //     } else {
    //         document.querySelector('.message').textContent = " You lost the Game!" ;
    //         document.querySelector(".score").textContent = 0;
    //     }
     
    // } 
    // //When guess is too low!
    // else if (guess < secret_number) {
    //   if (score > 1) {
    //     console.log(
    //       (document.querySelector(".message").textContent =
    //         "📉 Too low number")
    //     );
    //     score--;
    //     console.log((document.querySelector(".score").textContent = score));
    //   } else {
    //     document.querySelector(".message").textContent = " You lost the Game!";
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }


/*
document.querySelector('.again').addEventListener('click', function(){
     document.querySelector('.message').textContent = 'Start guessing...';
     document.querySelector('.guess').value = '';
     document.querySelector("body").style.backgroundColor = "#222";
     document.querySelector('.number').style.width = '15rem';
     document.querySelector(".number").textContent = '?' ;
     document.querySelector('.score').textContent = 20;
} );
*/

document.querySelector('.again').addEventListener('click',function (){
    score = 20;
    secret_number = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector(".message").textContent = "Start guessing...";
    displayMessage('Start guessing...');
    document.querySelector(".guess").value = "";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = '?';
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";


    
})