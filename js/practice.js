

document.getElementById('donate-now-btn1').addEventListener('click', function(){
    const donateTaka = getInputValueById('write-donation-ammount1');
    const donateAmount = getTextValueById('donate-noakhali');
    const mainBalance = getTextValueById('main-balance');
    
    const newBalanceNoakhali = donateTaka + donateAmount;

    document.getElementById('donate-noakhali').innerText = newBalanceNoakhali;

    const remainingBalance = mainBalance - donateTaka;

    document.getElementById('main-balance').innerText = remainingBalance;
})


document.getElementById('donate-now-btn2').addEventListener('click', function(){
    const donateFeniTaka = getInputValueById('write-donation-ammount2');
    const donateFeniAmount = getTextValueById('donate-feni');
    const mainBalance = getTextValueById('main-balance');


    const newBalanceFeni = donateFeniTaka + donateFeniAmount;
    
    document.getElementById('donate-feni').innerText = newBalanceFeni;

    const remainingBalanceFeni = mainBalance - donateFeniTaka;

    document.getElementById('main-balance').innerText = remainingBalanceFeni;


});



document.getElementById('donate-now-btn3').addEventListener('click', function(){
    const donateQuata = getInputValueById('write-donation-ammount3');
    const donateBalance = getTextValueById('donate-quota');
    const mainBalance = getTextValueById('main-balance');

    const newBalanceQuata = donateQuata + donateBalance;
    document.getElementById('donate-quota').innerText = newBalanceQuata;
    
    
    const remainingBalanceQuata = mainBalance - donateQuata;
    document.getElementById('main-balance').innerText = remainingBalanceQuata;
})