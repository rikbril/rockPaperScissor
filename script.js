//referal array
const rpsArray = ["Rock", "Paper", "Scissor"]

// Looking for which Rock,Paper,Scissor choice the user makes
function userInput() {
    const buttons = document.querySelectorAll("button")
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const adjuster = whoWon(button.id)
            const score = scoreKeeping(adjuster)
            console.log(score)
            game()
            return 
        })
    })
}

//determines who won the round of Rock,Paper,Scissor
function whoWon(userChoice) {
    const computerChoice = Math.floor(Math.random() * 3)
    if (userChoice == computerChoice) {
        console.log("It's a draw!, You both have chosen :" + rpsArray[computerChoice])
        return 0
    } else if ((userChoice + 1) % 3 == computerChoice) {
        console.log("You lose, you have chosen :" + rpsArray[userChoice]
            + " whilst the computer chose :" + rpsArray[computerChoice])
        return -1
    } else {
        console.log("You win, you have chosen :" + rpsArray[userChoice]
            + " whilst the computer chose :" + rpsArray[computerChoice])
        return +1
    }
}

//keeping track of who is ahead and with what margin 
function scoreKeeping(adjuster) {
    //returns inmediatly if it was a draw
    if (adjuster == 0) {
        return
    }
    const scoreString = document.querySelector(".counter")
    const scoreText = document.querySelector(".favor")
    
    // determines who is leading after a tied score
    if (+scoreString.textContent == 0) {
        if (adjuster > 0) {
            scoreText.textContent = "The player leads with"
            console.log("cl: activated player leads")
            scoreString.textContent = +scoreString.textContent + adjuster
            return scoreString.textContent
        } else {
            scoreText.textContent = "The computer leads with"
            console.log("cl: activated computer leads")
            scoreString.textContent = +scoreString.textContent - adjuster
            return scoreString.textContent
        }
        
    }
    
    // flips the modiefiers if the computer was leading
    if (scoreText.textContent == "The computer leads with") {
        if (adjuster < 0) {
            scoreString.textContent = +scoreString.textContent + 1
        } else {
            scoreString.textContent = +scoreString.textContent - 1
        }
    } // uses the normal score if the user was leading
    else {
        scoreString.textContent = +scoreString.textContent + adjuster
    }

    // returns to a tie if it is tied
    if (scoreString.textContent == 0) {
        scoreText.textContent = "The score is tied"
    }      
    return scoreString.textContent
}

function game() {
    if (+document.querySelector(".counter").textContent > 4) {
        alert("We have a Winner!")
    } 
}

userInput()