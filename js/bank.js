// /* 
//  * Author: Hasan
//  * Github: https://github.com/hasanrafi69
//  * Email: hasanrafi69@gmail.com
//  * Mobile: +880-161-782323
//  */
// // ===============Deposit with function=============



// // ===============Deposit without function=============
const depositBtn = document.getElementById('deposit-button');
depositBtn.addEventListener('click', function() {
    const inputValue = document.getElementById('deposit-input')
    const inValueText = inputValue.value;
    const inputAmmountNumber = parseFloat(inValueText);
    const depositValue = document.getElementById('deposit-total');
    const depositValueTxt = depositValue.innerText;
    const depositAmountNumber = parseFloat(depositValueTxt);
    const totalInput = inputAmmountNumber + depositAmountNumber;
    depositValue.innerText = totalInput; // Total Deposite
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceNumber = parseFloat(totalBalanceText);
    const totalCurrent = totalBalanceNumber + totalInput;
    totalBalance.innerText = totalCurrent; // Total Blance
    inputValue.value = '';

})

const withdrawBtn = document.getElementById('withdraw-button');
withdrawBtn.addEventListener('click', function() {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputNumber = parseFloat(withdrawInputText); // Get amount from withdraw button
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalNumber = parseFloat(withdrawTotalText); // current withdraw amount
    const totalWithdraw = withdrawTotalNumber + withdrawInputNumber; // Total Withdraw
    withdrawTotal.innerText = totalWithdraw; // Display Total Withdraw
    const totalBalance = document.getElementById('balance-total'); // Total Balance
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceNumber = parseFloat(totalBalanceText);
    const totalCurrentBalance = totalBalanceNumber - withdrawInputNumber;
    totalBalance.innerText = totalCurrentBalance; // Total Blance
    withdrawInput.value = '';
})