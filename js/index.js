


function donateNow(){
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    const donateNoakhali = parseFloat(document.getElementById('donate-noakhali').innerText);
    
    
    document.getElementById('donate-now-btn').addEventListener('click', function(){
        const donateValue = parseFloat(document.getElementById('write-donation-ammount').value);
        
        const donateBalance = donateNoakhali + donateValue;
        
        document.getElementById('donate-noakhali').innerText = donateBalance;
    
        const remainingBalance = mainBalance - donateValue;
        document.getElementById('main-balance').innerText = remainingBalance;



        
    })
    
}

// donateNow();

