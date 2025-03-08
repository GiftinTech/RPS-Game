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
const playAgainDialog = document.querySelector('.play-again')
const yesPlayAgainBtn = document.querySelector('.play-again-btn')
const dontPlayAgainBtn = document.querySelector('.exit-play-again-btn')
const thanksMessage = document.querySelector('.thanks-message-dialog')
console.log()

// Play button functionality
if (playBtn && secondDialog) {
    playBtn.addEventListener("click", () => {
        secondDialog.showModal();
    });
}

// Exit button functionality
if (exitBtn1 && dialog) {
    exitBtn1.addEventListener("click", () => dialog.showModal());
}

if (exitBtn2 && dialog) {
    exitBtn2.addEventListener("click", () => dialog.showModal());
}

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
}

// initGame when clicking Next button functionality
const initGame = () => {
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            const playerName = playerNameInput ? playerNameInput.value || 'Player' : 'Player';
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

            // addScore('result');
            
            //Navigate to finalRound page
            location.href = 'final-round.html'
        })
    })
}

 // Remove SVGs that were NOT selected by either player or computerfinalRound functionality 
 document.addEventListener('DOMContentLoaded', () => {
    const playerMove = localStorage.getItem("playerMove");
    const computerMove = localStorage.getItem("computerMove");

    if (svgChoices.length > 0) {
        svgChoices.forEach((svg, index) => {
            const move = rpsArr[index];

            // Remove SVG if it wasn't selected by either player or computer
            if (window.location.href.includes("start-game.html")) {
                // Ensure all SVGs are visible in start-game.html
                svg.style.display = "flex";
            } else {
                // Hide unselected SVGs in final-round.html
                if (move !== playerMove && move !== computerMove) {
                    svg.style.display = "none";  
                }
            }
        });

    
    if (playerMove && computerMove) {
        evaluatePlayerChoice(); // Only run if the user has made a choice
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

const askToPlayAgain = (result) => {
    addScore(result)

    if (playAgainDialog) {
        playAgainDialog.showModal();

        if (yesPlayAgainBtn) {
            yesPlayAgainBtn.addEventListener('click', restartGame);
        }

        if (dontPlayAgainBtn) {
            dontPlayAgainBtn.addEventListener('click', exitGame);
        }
    } 
};

// Restart game function
const restartGame = () => {
    location.href = 'start-game.html';
};

// Exit game function
const exitGame = () => {
    location.href = 'index.html';

    // Show "Thanks for playing" modal
/*     if (thanksMessage) {
        thanksMessage.showModal()
    } */
};

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

const score = {
    wins: 0,
    losses: 0
};

// Set score functionality
const setScore = (playerScore, computerScore) => {
    localStorage.setItem('playerScore', playerScore);
    localStorage.setItem('computerScore', computerScore);

    updateScoreBoard()
};

// Add score functionality
const addScore = (result) => {
    let playerScoreValue = Number(localStorage.getItem('playerScore')) || 0;
    let computerScoreValue = Number(localStorage.getItem('computerScore')) || 0;

    if (result.includes('Tie game!')) {
        return;
    } else if (result.includes("wins!") && !result.includes("Computer wins!")) {
        score.wins += 1;
        playerScoreValue += 1;
    } else if (result.includes("Computer wins!")) {
        score.wins += 1;
        computerScoreValue += 1;
    }

    setScore(playerScoreValue, computerScoreValue);
};

// Update score board UI functionality
function updateScoreBoard() {
    const playerScoreValue = localStorage.getItem('playerScore') || 0;
    const computerScoreValue = localStorage.getItem('computerScore') || 0;
    
    if (playerScore) playerScore.textContent = playerScoreValue;
    if (computerScore) computerScore.textContent = computerScoreValue;
}

// Reset score 
const resetScore = () => {
    localStorage.setItem('playerScore', 0);
    localStorage.setItem('computerScore', 0);
    score.wins = 0;
    score.losses = 0;
    updateScoreBoard();
};