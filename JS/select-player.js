
// get players Name 
// get players Name 

function getPlayerNames(playerName) {
    // step 1: get players name 
    const playerNameField = document.getElementById(playerName);
    const playerNameValue = playerNameField.innerText;

    // step 2: child node count 
    const Orderd_list_player = document.getElementById('orderd-list');
    let childNodeCount = Orderd_list_player.childElementCount;

    // addend child node less than 5
    if (childNodeCount < 5) {
        const li = document.createElement('li');
        li.innerText = playerNameValue;
        li.style.marginTop = '10px';
        const li_items = Orderd_list_player.appendChild(li);

        //    selectted player count update 
        const count_li = document.querySelectorAll("#orderd-list li").length;
        const total_player_list = document.getElementById('total-selected-players');
        total_player_list.innerText = count_li;

        // return li for disabling buttons 
        return li_items;
    }
    else {
        alert('No More Players Can Be Added!!')
    }
}

//button disabled
function buttonDisable(playName, li_name, btn_id) {
    const p_name = document.getElementById(playName);
    const btn = document.getElementById(btn_id);
    if (li_name.innerText == p_name.innerText) {
        btn.setAttribute('disabled', true);
    }

    else {
        btn.removeAttribute('disabled');
    }


}

// player 1 
document.getElementById('player-1').addEventListener('click', function () {
    const player1Name = getPlayerNames('player1-name');

    const playerButtonDisable = buttonDisable('player1-name', player1Name, 'player-1')

})


// player 2 
document.getElementById('player-2').addEventListener('click', function () {
    const player2Name = getPlayerNames('player2-name');

    const playerButtonDisable = buttonDisable('player2-name', player2Name, 'player-2')

})


// player 3 
document.getElementById('player-3').addEventListener('click', function () {
    const player3Name = getPlayerNames('player3-name');

    const playerButtonDisable = buttonDisable('player3-name', player3Name, 'player-3')


})


// player 4 
document.getElementById('player-4').addEventListener('click', function () {
    const player4Name = getPlayerNames('player4-name');

    const playerButtonDisable = buttonDisable('player4-name', player4Name, 'player-4')


})


// player 5 
document.getElementById('player-5').addEventListener('click', function () {
    const player5Name = getPlayerNames('player5-name');

    const playerButtonDisable = buttonDisable('player5-name', player5Name, 'player-5')

})


// player 6 
document.getElementById('player-6').addEventListener('click', function () {
    const player6Name = getPlayerNames('player6-name');

    const playerButtonDisable = buttonDisable('player6-name', player6Name, 'player-6')
})

