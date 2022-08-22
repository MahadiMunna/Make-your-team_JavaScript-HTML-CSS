function totalPlayer(){
    const totalPlayerList = document.querySelectorAll('#player-list li');
    const totalPlayerNumber = totalPlayerList.length;
    return totalPlayerNumber;
}

function getInputFieldValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value ;
    const inputFieldValue = parseInt(inputFieldValueString);
    return inputFieldValue;
}

function getTextFieldValue(textFieldId){
    const textField = document.getElementById(textFieldId);
    const textFieldValueString = textField.innerText ;
    const textFieldValue = parseInt(textFieldValueString);
    return textFieldValue;
}

