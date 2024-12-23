const exitBtn1 = document.querySelector('.exit-btn')
const exitBtn2 = document.querySelector('.second-exit-btn')
const dialog = document.querySelector('.message-dialog')
const playBtn = document.getElementById('play-btn')
const secondDialog = document.querySelector('.player-input-dialog')
const closeBtn = document.querySelector('.close-modal')
const rulesBtn = document.querySelector('.rules-el')
const nextBtn = document.querySelector('.player-name-btn')
const wlcmMsg = document.querySelector('.wlcm-msg');

playBtn.addEventListener("click", () => secondDialog.showModal())

exitBtn1.addEventListener("click", () =>  
    dialog.showModal())
exitBtn2.addEventListener("click", () =>  
    dialog.showModal())

closeBtn.addEventListener("click", () => dialog.close())

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
})

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
})

nextBtn.addEventListener("click", () =>
    location.href = 'start-game.html'
)

const player = {
    name: secondDialog.value,
    default: 'Player'
}

const playerName = player.name

function renderMsg() {
  
    console.log(playerName)
    wlcmMsg.textContent = `
        Welcome ${playerName}! Choose rock, paper, or scissors.
    `

   // const defaultName = player.default
    /* if(playerName) {
        wlcmMsg.textContent = `
        Welcome ${playerName}! Choose rock, paper, or scissors.
    `  
    } else {
        wlcmMsg.textContent = `
        Welcome ${defaultName}! Choose rock, paper, or scissors.
    `  
    } */
}
if (wlcmMsg) {
    renderMsg();
}
//rulesBtn.addEventListener("click", () => dialog.showModal())