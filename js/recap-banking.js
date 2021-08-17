// handle deposit button event
document.getElementById('deposit-button').addEventListener('click' , function(){
   changeAmount('deposit')
})
// handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click' , function(){
    changeAmount('withdraw')
})

function changeAmount(type){
    const inputField = document.getElementById(`${type}-input`)
    const inputFieldText = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldText)
    if(inputFieldNumber > 0){
        const total = document.getElementById(`${type}-total`)
        const totalText = total.innerText;
        const totalNumber = parseFloat(totalText)
        const totalAmount = totalNumber + inputFieldNumber;
        total.innerText = totalAmount;

            // update balance
        const balanceTotal = document.getElementById('balance-total')
        const balanceTotalText = balanceTotal.innerText;
        const balanceTotalNumber = parseFloat(balanceTotalText)
        if(type == 'deposit'){
        const balanceAmount = balanceTotalNumber + inputFieldNumber;
            balanceTotal.innerText = balanceAmount
        }else{
            const balanceAmount = balanceTotalNumber - inputFieldNumber;
            balanceTotal.innerText = balanceAmount
        }
    }else{
        alert('Please give me a valid amount')
    }
    // clear input field
    inputField.value = '';
}