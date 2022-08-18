let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
// variable to keep the tack of blackjack
let hasBlackjack = false

// variable to check if the blackjack is available or not
let isAlive = true

let message = ""
let messageEl= document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl= document.querySelector("#cards-el")
function startGame()
{
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message=" You've got Blackjack! "
        hasBlackjack = true
    } else {
        message= "You're out of the game! "
        isAlive = false
    }
    
    messageEl.textContent = message
    sumEl.textContent += sum
    cardsEl.textContent +=firstCard +" "+ secondCard;
}

function newCard()
{
    
}


