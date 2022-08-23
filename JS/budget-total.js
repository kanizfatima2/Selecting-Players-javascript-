// get value from the input field 
function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;

    if (isNaN(inputFieldString)) {
        alert('please provide a number value');

    }

    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldValue;


}

//set value to the text field
function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}

//calculate Button 
document.getElementById('calculate-btn').addEventListener('click', function () {
    // get value from perplayer input field
    const perPlayerValue = getInputValueById('per-player');

    // calculate 
    const totalSelectedPlayers = document.getElementById('total-selected-players');
    const perPlayerExpense = perPlayerValue * parseInt(totalSelectedPlayers.innerText);

    //set the value in PlayerExpense inner text
    setTextElementValueById('player-expense', perPlayerExpense);

})

//calculate total Button
document.getElementById('calculate-total-btn').addEventListener('click', function () {
    //get value from manager input field
    const managerValue = getInputValueById('manager');

    //get value from coach input field
    const coachValue = getInputValueById('coach');

    // calculation of total expense 
    const PlayerExpense = document.getElementById('player-expense').innerText;
    const total_Expense = managerValue + coachValue + parseFloat
        (PlayerExpense);

    // set total expense field
    setTextElementValueById('total-expense', total_Expense);


})
