const mainBalance = parseFloat(document.getElementById('main-balance').innerText);


function writeDonateAmount(amount){
  const value = parseFloat(document.getElementById(amount).value);
  return value

}
// writeDonateAmount('write-donation-ammount2')

function innerTextInTag (innerAmount) {
    const textInTag =  parseFloat(document.getElementById(innerAmount).innerText)
    return textInTag
}  

function setInnerText (setInnerTextInTag) {
    document.getElementById(setInnerTextInTag).innerText
}



function doneteNow(id, amount, innerAmount){
   
    document.getElementById(id).addEventListener('click', function(){


        const donateValue = writeDonateAmount(amount)
        const balance = innerTextInTag(innerAmount)

        const donateBalance = donateValue + balance;
        console.log(donateBalance)

        document.getElementById(innerAmount).innerText = donateBalance

        const remainingBalance = mainBalance - donateValue

        document.getElementById('main-balance').innerText = remainingBalance

        
    })
}

doneteNow('donate-now-btn1', 'write-donation-ammount1', 'donate-noakhali')
doneteNow('donate-now-btn2', 'write-donation-ammount2', 'donate-feni')
doneteNow('donate-now-btn3', 'write-donation-ammount3', 'donate-quota')