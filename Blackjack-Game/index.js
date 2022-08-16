let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard
// variable to keep the tack of blackjack
let hasBlackjack = false

// variable to check if the blackjack is available or not
let isAlive = true

let message = ""

if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message="Wohoo! You've got Blackjack! 🥳"
    hasBlackjack = true
} else {
    message= "You're out of the game! 😭"
    isAlive = false
}

