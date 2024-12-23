const exitBtn1 = document.querySelector('.exit-btn')
const exitBtn2 = document.querySelector('.second-exit-btn')
const dialog = document.querySelector('.message-dialog')
const playBtn = document.querySelector('.play-btn')
const secondDialog = document.querySelector('.player-input-dialog')
const closeBtn = document.querySelector('.close-modal')
const rulesBtn = document.querySelector('.rules-el')
const nextBtn = document.querySelector('.player-name-btn')
const wlcmMsg = document.querySelector('.wlcm-msg');
const playerNameInput = document.querySelector('.player-input-dialog input');

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

// Next button functionality
if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        const playerName = playerNameInput ? playerNameInput.value || 'Player' : 'Player';
        localStorage.setItem('playerName', playerName);
        location.href = 'start-game.html';
    });
}

// Welcome message functionality
function renderMsg() {
    const playerName = localStorage.getItem('playerName') || 'Player';
    if (wlcmMsg) {
        wlcmMsg.textContent = `Welcome ${playerName}! Choose rock, paper, or scissors.`;
    }
}

renderMsg();
//rulesBtn.addEventListener("click", () => dialog.showModal())