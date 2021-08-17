
// deposit button event
document.getElementById('deposit-button').addEventListener('click' , function(){
    const depositAmount = getInputValue('deposit-input')
    if(depositAmount > 0){
        updateTotal('deposit-total' , depositAmount)
        updateBalance(depositAmount, true)
    }else{
        alert
    }
})
// currentBalance
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceTotalText);
    return balanceAmount;
}

// withdraw button event
document.getElementById('withdraw-button').addEventListener('click' , function(){
    const withdrawAmount = getInputValue('withdraw-input')
    const currentBalance = getCurrentBalance()
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotal('withdraw-total', withdrawAmount)
    updateBalance(withdrawAmount, false)
    }if(withdrawAmount > currentBalance){
        alert('You can not withdraw more than what you have in your acount')
    }
    
})

function getInputValue(inputId){
    const inputField = document.getElementById(inputId)
    const inputFieldText = inputField.value;
    const inputAmout = parseFloat(inputFieldText)
    //clear input field
    inputField.value = ''; 
    return inputAmout;
}

function updateTotal(total, amount){
    const totalValue = document.getElementById(total)
    const totalValueText = totalValue.innerText;
    const totalAmountNum = parseFloat(totalValueText)
    const totalAmount = totalAmountNum + amount;
    totalValue.innerText = totalAmount;
}

function updateBalance(amount , isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceTotalText);
    if(isAdd == true){
        balanceTotal.innerText = balanceAmount + amount;
    }else{
        balanceTotal.innerText = balanceAmount - amount;
    }
}