//variable instantiation//

let hasBlackjack = false;
let message = "";
let isAlive = false;
cards = [];
sum = 0;

//Object instantation//
let player = {
    name: "Nathaniel",
    chips: 1000
}

//HTML selectors//

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");


//functions//

function startGame() { 
    isAlive = true;
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + cards;
    renderGame();
    playerEl.textContent = player.name + ": $" + player.chips;

    if(isAlive === false || hasBlackjack === true)
    {
        cards = [];
        startGame();
    }
 }

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + cards
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackjack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function addCard() {
    if ( isAlive === true && hasBlackjack === false)
    {
        alert("Drawing card..")
        let newCard = getRandomNumber();
        cards.push(newCard)
        sum += newCard;
        renderGame();
    }
}

function getRandomNumber(){

     let number = Math.floor(Math.random() * 14) + 1;
     if (number === 1){
         return 11
     }
     else if (number > 10 ){
         return 10;
     }
     else{
          return number
    }

}