function renderMsg() {
    const wlcmMsg = document.querySelector('.wlcm-msg');

    const playerName = secondDialog.value;
    if(wlcmMsg) { 
        wlcmMsg.innerHTML = `
        <h1 class="wlcm-msg">Welcome ${playerName}! Choose rock, paper, or scissors.</h1>
    `
    } else {
        wlcmMsg.textContent = 'Welcome Player! Choose rock, paper, or scissors.'
    }
}
    renderMsg()