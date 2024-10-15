
function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const number = parseFloat(inputValue)
    return number;
}

function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const number2 = parseFloat(textValue);
    return number2;
}


