/* 
 * Author: Hasan
 * Github: https://github.com/hasanrafi69
 * Email: hasanrafi69@gmail.com
 * Mobile: +880-161-782323
 */


// ===============Deposit Control=============
document.getElementById('deposit-button').addEventListener('click', function() {
    const depositInput = document.getElementById('deposit-input');
    const depositTotal = document.getElementById('deposit-total');
    const balanceTotal = document.getElementById('balance-total');

    // get the amount deposited
    const depositInputText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputText);

    // update deposit total
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmout = parseFloat(depositTotalText) + depositInputAmount;
    depositTotal.innerText = depositTotalAmout;

    // total balance
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText) + depositInputAmount;
    balanceTotal.innerText = balanceTotalAmount;
    // clear the deposit input field
    depositInput.value = '';
});

// ===============Withdraw Control=============
document.getElementById('withdraw-button').addEventListener('click', function() {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawTotal = document.getElementById('withdraw-total');
    const balanceTotal = document.getElementById('balance-total');
    document.getElementsByClassName

    // get the amount withdraw
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);

    // update withdraw total
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmout = parseFloat(withdrawTotalText) + withdrawInputAmount;
    withdrawTotal.innerText = withdrawTotalAmout;

    // total balance
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText) - withdrawInputAmount;
    balanceTotal.innerText = balanceTotalAmount;
    // clear the withdraw field
    withdrawInput.value = '';
});