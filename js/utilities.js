
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

function showSectionById(id){
    document.getElementById('noakhali-section').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden')
}


