// function for get input field value 
function getInputFieldValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value ;
    const inputFieldValue = parseInt(inputFieldValueString);
    const isNumber = isNaN(inputFieldValue);
    if(isNumber == true ){
        alert('Please input number!')
        return 0;
    }
    return inputFieldValue;
}

// function for get text field value 
function getTextFieldValue(textFieldId){
    const textField = document.getElementById(textFieldId);
    const textFieldValueString = textField.innerText ;
    const textFieldValue = parseInt(textFieldValueString);
    return textFieldValue;
}

