// function for get input field value 
function getInputFieldValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value ;
    const inputFieldValue = parseInt(inputFieldValueString);
    return inputFieldValue;
}

// function for get text field value 
function getTextFieldValue(textFieldId){
    const textField = document.getElementById(textFieldId);
    const textFieldValueString = textField.innerText ;
    const textFieldValue = parseInt(textFieldValueString);
    return textFieldValue;
}

