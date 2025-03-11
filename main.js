const exitBtn1 = document.querySelector('.exit-btn')
const exitBtn2 = document.querySelector('.second-exit-btn')
const dialog = document.querySelector('.message-dialog')
const playBtn = document.querySelector('.play-btn')
const secondDialog = document.querySelector('.player-input-dialog')
const closeBtn = document.querySelector('.close-modal')
const nextBtn = document.querySelector('.player-name-btn')
const wlcmMsg = document.querySelector('.wlcm-msg');
const finalRoundMsg = document.querySelector('.final-round-msg ')
const playerNameInput = document.querySelector('.player-input-dialog input');
const rulesBtn = document.querySelector('.rules-el button')
const thirdDialog = document.querySelector('.rules-dialog')
const finalDialog = document.querySelector('.final-rules-dialog')
const secondRulesBtn = document.querySelector('.rules-el-btn:first-child')
const svgChoices = Array.from(document.querySelectorAll('.svg-container svg'));
const rpsArr = ['paper', 'scissors', 'rock'];
const playerScore = document.querySelector('.player-score-value')
const computerScore = document.querySelector('.computer-score-value')
const ties = document.querySelector('.ties-score-value')
const thanksMessage = document.querySelector('.thanks-message-dialog')
const thanksMessageCloseBtn = document.getElementById('second-close-modal')
const playAgainBtn = document.querySelector('.play-again-btn')
const totalScore = document.querySelector('.score-value')
//console.log(thanksMessageCloseBtn)

// Play button functionality
if (playBtn && secondDialog) {
    playBtn.addEventListener("click", () => {
        secondDialog.showModal();
    });
}

// Exit Game functionality
if (exitBtn1 && dialog) {
    exitBtn1.addEventListener("click", () => dialog.showModal());
}

if (exitBtn2 && dialog) {
    exitBtn2.addEventListener("click", () => dialog.showModal());
}

function startGameExitBtn() {
    localStorage.setItem("showExitMessage", "true"); // Set flag

    location.href = "index.html"; // Navigate to index
}

document.addEventListener("DOMContentLoaded", () => {   
    if (localStorage.getItem("showExitMessage") === "true" && dialog) {
        dialog.showModal(); // Show modal
        localStorage.removeItem("showExitMessage"); // Clear flag after showing
    }
});

const exitGameBtn = () => exitGame()

const exitGame = () => {
    localStorage.setItem("showThanksMessage", "true"); // Set flag

    location.href = "index.html"; // Navigate to index
};

document.addEventListener("DOMContentLoaded", () => {   
    if (localStorage.getItem("showThanksMessage") === "true" && thanksMessage) {
        thanksMessage.showModal(); // Show modal
        localStorage.removeItem("showThanksMessage"); // Clear flag after showing
    }
});

// gameRules dialog functionality
if (rulesBtn && thirdDialog) {
    rulesBtn.addEventListener('click', (rules) => {
        thirdDialog.showModal()
        thirdDialog.style.overflow = 'auto'
        thirdDialog.style.scrollbarWidth = 'none'
    })
} 

if (secondRulesBtn && finalDialog) {
    secondRulesBtn.addEventListener('click', () => {
        finalDialog.showModal()
        finalDialog.style.overflow = 'auto'
        finalDialog.style.scrollbarWidth = 'none'
    })
}

// Close button functionality
if (closeBtn && dialog) {
    closeBtn.addEventListener("click", () => dialog.close());
}
if (thanksMessageCloseBtn && thanksMessage) {
    thanksMessageCloseBtn.addEventListener("click", () => thanksMessage.close());
}

// Dialog click outside functionality
if (dialog) {
    dialog.addEventListener("click", event => {
        const rect = dialog.getBoundingClientRect()
        const isInDialog = 
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom

        if(!isInDialog) {
            dialog.close()
        }
    });
}

if (secondDialog) {
    secondDialog.addEventListener("click", event => {
        const rect = secondDialog.getBoundingClientRect()
        const isInSecondDialog = 
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom

        if(!isInSecondDialog) {
            secondDialog.close()
        }
    });
}

if (thirdDialog) {
    thirdDialog.addEventListener("click", event => {
        const rect = thirdDialog.getBoundingClientRect()
        const isInThirdDialog = 
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom

        if(!isInThirdDialog) {
            thirdDialog.close()
        }
    });

    if (thirdDialog) {
        const thirdDialogClose = document.querySelector('.third-dialog-btn')
        thirdDialogClose.addEventListener('click', () => thirdDialog.close())
    }
}

// initGame when clicking Next button functionality
const initGame = () => {
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            const playerName = playerNameInput ? playerNameInput.value.toUpperCase().trim() || 'Player' : 'Player';
            localStorage.setItem('playerName', playerName);
            location.href = 'start-game.html';
        });
    }
};

initGame()

// startGame Welcome message functionality
function renderMsg() {
    const playerName = localStorage.getItem('playerName') || 'Player';
    if (wlcmMsg) {
        wlcmMsg.textContent = `Welcome ${playerName}! Choose rock, paper, or scissors.`;
    }
}

renderMsg();

// SVG choice and Set game state when a user actually plays functionality
if(svgChoices.length > 0) {
    svgChoices.forEach((choice, index) => {
        choice.addEventListener('click', () => {
            const move = index === 0 
            ? 'paper' 
            : index === 1 
            ? 'scissors' 
            : 'rock'
            localStorage.setItem('playerMove', move) //Player move

            // Computer move
            const randomIndex = Math.floor(Math.random() * rpsArr.length);
            localStorage.setItem('computerMove', rpsArr[randomIndex])


            // New round
            localStorage.setItem("newRound", "true");
            
            //Navigate to finalRound page
            location.href = 'final-round.html'
        })
    })
}

 // Remove SVGs that were NOT selected by either player or computerfinalRound functionality 
 document.addEventListener('DOMContentLoaded', () => {
    const playerMove = localStorage.getItem("playerMove");
    const computerMove = localStorage.getItem("computerMove");
    const isNewRound = localStorage.getItem("newRound") === "true";

    if (svgChoices.length > 0) {
        svgChoices.forEach((svg, index) => {
            const move = rpsArr[index];

            // Remove SVG if it wasn't selected by either player or computer
            if (window.location.href.includes("start-game.html")) {
                // Ensure all SVGs are visible in start-game.html
                svg.style.display = "flex";
            } else {
                // Check if it's a tie
                if (playerMove === computerMove && move === playerMove) {
                    // Show the SVG for both player and computer
                    svg.style.display = "flex";  

                    // Clone the SVG and add it to the computer's side
                    const clonedSvg = svg.cloneNode(true);
                    clonedSvg.classList.add("computer-move"); // Add a class to position it differently
                    svg.parentElement.appendChild(clonedSvg); // Append to the parent container
                }
                 // Show selected moves normally
                else if (move === playerMove || move === computerMove) {
                    svg.style.display = "flex";  
                } 
                // Hide unselected moves
                else {
                    svg.style.display = "none";  
                }
            }
        });

       // Only evaluate if it's a new round
       if (window.location.href.includes("final-round.html") && playerMove && computerMove  && isNewRound) {
                evaluatePlayerChoice();
                localStorage.setItem("newRound", "false"); // Prevent auto-playing again
        }
    }

    // Disable selection in final round funtionality
    if (window.location.href.includes("start-game.html")) {
        svgChoices.forEach(svg => {
            svg.style.pointerEvents = 'auto';
        });
    } else if (playerMove && computerMove) {
        svgChoices.forEach(svg => {
            svg.style.pointerEvents = 'none';
        });
    }

    askToPlayAgain()
 })

 const getPlayerChoice = () => localStorage.getItem('playerMove');
 const getComputerChoice = () => localStorage.getItem('computerMove');

// Determine the winner functionality
const determineWinner = (player, computer) => {   
    const playerName = localStorage.getItem('playerName') || 'Player';
    const winner =
        player === computer 
        ? `<span class="players-choice">${playerName} chose: ${player}<br>Computer chose: ${computer}</span><br><span class="winner-text">Tie game!</span>`
        : player === "rock" && computer === "paper" 
        ? `<span class="players-choice">${playerName} chose: ${player}<br>Computer chose: ${computer}</span><br><span class="winner-text">Computer wins!</span>`
        : player === "paper" && computer === "scissors" 
        ? `<span class="players-choice">${playerName} chose: ${player}<br>Computer chose: ${computer}</span><br><span class="winner-text">Computer wins!</span>`
        : player === "scissors" && computer === "rock" 
        ? `<span class="players-choice">${playerName} chose: ${player}<br>Computer chose: ${computer}</span><br><span class="winner-text">Computer wins!</span>`
        : `<span class="players-choice">${playerName} chose: ${player}<br>Computer chose: ${computer}</span><br><span class="winner-text">${playerName} wins!</span>`;

    return winner;
};

// Display result in UI functionality
function displayResult(result) {
    if (finalRoundMsg) {
        finalRoundMsg.innerHTML = result;
       /*  finalRoundMsg.innerHTML = result.replace(/\n/g, "<br>"); // Convert `\n` to `<br>` */
    }
    return result
}

/* const score = {
    wins: 0,
    losses: 0,
}; */

// Set score functionality
const setScore = (playerScore, computerScore, ties) => {
    localStorage.setItem('playerScore', playerScore);
    localStorage.setItem('computerScore', computerScore);
    localStorage.setItem('ties', ties);

    updateScoreBoard()
};

// Update the score UI when the page loads
document.addEventListener("DOMContentLoaded", () => {
    updateScoreBoard();
    if (window.location.href.includes("start-game.html")) {
        totalScoreValue();
    }
});

// Function to update the scoreboard UI
function updateScoreBoard() {
    const playerScoreValue = localStorage.getItem('playerScore') || 0;
    const computerScoreValue = localStorage.getItem('computerScore') || 0;
    const tiesScoreValue = localStorage.getItem('ties') || 0;
    
    if (playerScore) playerScore.textContent = playerScoreValue;
    if (computerScore) computerScore.textContent = computerScoreValue;
    if (ties) ties.textContent = tiesScoreValue;
}

// Add score functionality
const addScore = (result) => {
    let playerScoreValue = Number(localStorage.getItem('playerScore')) || 0;
    let computerScoreValue = Number(localStorage.getItem('computerScore')) || 0;
    let tiesScoreValue = Number(localStorage.getItem('ties')) || 0;

    if (result.includes('Tie game!')) {
        tiesScoreValue += 1;
    } else if (result.includes("wins!") && !result.includes("Computer wins!")) {
        playerScoreValue += 1;
    } else if (result.includes("Computer wins!")) {
        computerScoreValue += 1;
    }

    localStorage.setItem("playerScore", playerScoreValue);
    localStorage.setItem("computerScore", computerScoreValue);
    localStorage.setItem("ties", tiesScoreValue);

    updateScoreBoard(); // Update UI immediately after score change
};

// Calculate total score 
const totalScoreValue = () => {
    const playerScoreValue = Number(localStorage.getItem('playerScore')) || 0;
    const computerScoreValue = Number(localStorage.getItem('computerScore')) || 0;
    const tiesScoreValue = Number(localStorage.getItem('ties')) || 0;

    if (totalScore) {
        totalScore.textContent = playerScoreValue + computerScoreValue + tiesScoreValue;
    }
}

// Evaluate the player's choice
const evaluatePlayerChoice = () => {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    displayResult(result);
    addScore(result);
    askToPlayAgain(result);
   /*  if (askToPlayAgain()) {
        continue;
    } else {
        thanksForPlaying();
        break;
    }  */
};

// Reset score 
const resetScore = () => {
    const resetScorePopup = document.querySelector('.reset-score-modal')
    const yesConfirmReset = document.querySelector('.yes-reset')
    const dontConfirmReset = document.querySelector('.dont-reset')

   
    resetScorePopup.showModal();

   // Define event handlers
    function handleYesClick() {
        localStorage.setItem("playerScore", 0);
        localStorage.setItem("computerScore", 0);
        localStorage.setItem("ties", 0);

        if (totalScore) {
            totalScore.textContent = 0
        }
    
        updateScoreBoard();
        resetScorePopup.close();
    }

    function handleNoClick() {
        resetScorePopup.close();
    }

 
    // Remove existing event listeners before adding new ones
    yesConfirmReset.removeEventListener("click", handleYesClick);
    dontConfirmReset.removeEventListener("click", handleNoClick);

    // Add event listeners
    yesConfirmReset.addEventListener("click", handleYesClick);
    dontConfirmReset.addEventListener("click", handleNoClick);
};

// Ask to play again functionality
const askToPlayAgain = () => {
    playAgainBtn.addEventListener('click', () => restartGame())
}

// Restart game function
const restartGame = () => {
    // Remove cloned SVG from prev round
    document.querySelectorAll('.computer-move').forEach(svg => svg.remove())

    // Clear stored moves in localStorage
    localStorage.removeItem('playerMove')
    localStorage.removeItem('computerMove')

    // Redirect back to start-game.html
    location.href = 'start-game.html'
}

if (window.location.href.includes("start-game.html")) {
    totalScoreValue()
}
