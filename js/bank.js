// /* 
//  * Author: Hasan
//  * Github: https://github.com/hasanrafi69
//  * Email: hasanrafi69@gmail.com
//  * Mobile: +880-161-782323
//  */
//=============Deposit with function=============
function inputMoney(input) {
    const inputValue = document.getElementById(input);
    const inValueText = inputValue.value;
    const inputAmmountNumber = parseFloat(inValueText);
    inputValue.value = '';
    return inputAmmountNumber;
}

function updateMoney(update, withdrawInput) {
    const updateValue = document.getElementById(update);
    const updateText = updateValue.innerText;
    const updateAmmountNumber = parseFloat(updateText);
    const updateAmmount = withdrawInput + updateAmmountNumber;
    updateValue.innerText = updateAmmount;

}

function totalMoney(total, withdrawInput) {
    const totalValue = document.getElementById(total);
    const totalBalanceText = totalValue.innerText;
    const totalBalanceNumber = parseFloat(totalBalanceText);
    const totalCurrentBalance = totalBalanceNumber + withdrawInput;
    if (totalCurrentBalance <= 0 && totalCurrentBalance < withdrawInput) {
        const errorMessage = document.getElementById('error');
        errorMessage.innerText = 'You dont have enough balance';
    } else {
        totalValue.innerText = totalCurrentBalance
    }
}


document.getElementById('deposit-button').addEventListener('click', function() {
    const depositAmmount = inputMoney('deposit-input');
    const errorMessage = document.getElementById('error');
    if (depositAmmount > 0 && depositAmmount != "string") {
        updateMoney('deposit-total', depositAmmount);
        totalMoney('balance-total', depositAmmount);
    } else if (depositAmmount < 0) {
        errorMessage.innerText = 'Please add a positive number';
    } else {
        errorMessage.innerText = 'Please use only number';
    }

})

document.getElementById('withdraw-button').addEventListener('click', function() {
    const withdrawInput = inputMoney('withdraw-input');
    const errorMessage = document.getElementById('error');
    if (withdrawInput > 0 && withdrawInput != "string ") {
        updateMoney('withdraw-total', withdrawInput)
        totalMoney('balance-total', -withdrawInput);
    } else if (withdrawInput < 0) {
        errorMessage.innerText = 'Please add a positive number';
    } else {
        errorMessage.innerText = 'Please use only number';
    }

})


// // // ===============Deposit without function=============
// const depositBtn = document.getElementById('deposit-button');
// depositBtn.addEventListener('click', function() {
//     const inputValue = document.getElementById('deposit-input')
//     const inValueText = inputValue.value;
//     const inputAmmountNumber = parseFloat(inValueText);
//     const depositValue = document.getElementById('deposit-total');
//     const depositValueTxt = depositValue.innerText;
//     const depositAmountNumber = parseFloat(depositValueTxt);
//     const totalInput = inputAmmountNumber + depositAmountNumber;
//     depositValue.innerText = totalInput; // Total Deposite
//     const totalBalance = document.getElementById('balance-total');
//     const totalBalanceText = totalBalance.innerText;
//     const totalBalanceNumber = parseFloat(totalBalanceText);
//     const totalCurrent = totalBalanceNumber + totalInput;
//     totalBalance.innerText = totalCurrent; // Total Blance
//     inputValue.value = '';

// })

// const withdrawBtn = document.getElementById('withdraw-button');
// withdrawBtn.addEventListener('click', function() {
//     const withdrawInput = document.getElementById('withdraw-input');
//     const withdrawInputText = withdrawInput.value;
//     const withdrawInputNumber = parseFloat(withdrawInputText); // Get amount from withdraw button
//     const withdrawTotal = document.getElementById('withdraw-total');
//     const withdrawTotalText = withdrawTotal.innerText;
//     const withdrawTotalNumber = parseFloat(withdrawTotalText); // current withdraw amount
//     const totalWithdraw = withdrawTotalNumber + withdrawInputNumber; // Total Withdraw
//     withdrawTotal.innerText = totalWithdraw; // Display Total Withdraw
//     const totalBalance = document.getElementById('balance-total'); // Total Balance
//     const totalBalanceText = totalBalance.innerText;
//     const totalBalanceNumber = parseFloat(totalBalanceText);
//     const totalCurrentBalance = totalBalanceNumber - withdrawInputNumber;
//     totalBalance.innerText = totalCurrentBalance; // Total Blance
//     withdrawInput.value = '';
// })