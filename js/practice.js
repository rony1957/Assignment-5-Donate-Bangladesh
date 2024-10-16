document.getElementById('donation-btn').addEventListener('click', function () {
    showSectionById('noakhali-section')
    document.getElementById('donation-btn').classList.add('bg-lime-400');
    document.getElementById('history-btn').classList.remove('bg-lime-400');
});



document.getElementById('donate-now-btn1').addEventListener('click', function () {
    const donateTaka = getInputValueById('write-donation-ammount1');
    const donateAmount = getTextValueById('donate-noakhali');
    const mainBalance = getTextValueById('main-balance');

    
    const newBalanceNoakhali = donateTaka + donateAmount;

    document.getElementById('donate-noakhali').innerText = newBalanceNoakhali;

    const remainingBalance = mainBalance - donateTaka;

    document.getElementById('main-balance').innerText = remainingBalance;


    // history
    document.getElementById('history-btn').addEventListener('click', function () {
        showSectionById('history');
        document.getElementById('history-btn').classList.add('bg-lime-400')
        document.getElementById('donation-btn').classList.remove('bg-lime-400');

        const div = document.createElement('div');
        console.log(div);
        div.className = 'border mt-4 my-5 rounded-xl p-5';
        div.innerHTML = `<h1>${donateTaka} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h1>
        <p>${new Date()}</p>
        `

        document.getElementById('history-container').appendChild(div)
    })
    // history end

    // modal

})


document.getElementById('donate-now-btn2').addEventListener('click', function () {
    const donateFeniTaka = getInputValueById('write-donation-ammount2');
    const donateFeniAmount = getTextValueById('donate-feni');
    const mainBalance = getTextValueById('main-balance');


    // 
    document.getElementById('history-btn').addEventListener('click', function () {
        showSectionById('history');

        const div = document.createElement('div');
        console.log(div);
        div.className = 'border mt-4 my-5 rounded-xl p-5';
        div.innerHTML = `<h1>${donateFeniTaka} Taka is Donated for famine-2024 in Feni, Bangladesh</h1>
        <p>${new Date()}</p>
        `

        document.getElementById('history-container').appendChild(div)
    })
    // 


    const newBalanceFeni = donateFeniTaka + donateFeniAmount;

    document.getElementById('donate-feni').innerText = newBalanceFeni;

    const remainingBalanceFeni = mainBalance - donateFeniTaka;

    document.getElementById('main-balance').innerText = remainingBalanceFeni;


});



document.getElementById('donate-now-btn3').addEventListener('click', function () {
    const donateQuata = getInputValueById('write-donation-ammount3');
    const donateBalance = getTextValueById('donate-quota');
    const mainBalance = getTextValueById('main-balance');

    // 
    document.getElementById('history-btn').addEventListener('click', function () {
        showSectionById('history');

        const div = document.createElement('div');
        console.log(div);
        div.className = 'border mt-4 my-5 rounded-xl p-5';
        div.innerHTML = `<h1>${donateQuata} Taka is Donated for famine-2024 in the Quata movement, Bangladesh</h1>
        <p>${new Date()}</p>
        `

        document.getElementById('history-container').appendChild(div)
    })
    // 

    const newBalanceQuata = donateQuata + donateBalance;
    document.getElementById('donate-quota').innerText = newBalanceQuata;


    const remainingBalanceQuata = mainBalance - donateQuata;
    document.getElementById('main-balance').innerText = remainingBalanceQuata;
})

// history add


