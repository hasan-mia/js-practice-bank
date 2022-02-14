// Pin Generator
document.getElementById('pin-generator').addEventListener('click', function(e) {
    const pin = Math.round(Math.random() * 10000);
    const pinDisplayId = document.getElementById('pin-display');
    pinDisplayId.value = pin;
});
// varify pin

// Press Button
document.getElementById('press-keybtn').addEventListener('click', function(e) {
    const keyBtn = e.target.innerText;
    const keyInput = document.getElementById('number-input');
    if (isNaN(keyBtn)) {
        if (keyBtn == "C") {
            keyInput.value = "";
        }
        if (keyBtn == "x") {
            keyInput.value = keyInput.value.slice(0, -1);
        }
    } else {
        keyInput.value += keyBtn;
    }

});

// Submit Button
document.getElementById('submit-pin').addEventListener('click', function(e) {
    const submitPinBtn = e.target.id;
    const pinNumber = document.getElementById('pin-display').value;
    const typeNumber = document.getElementById('number-input').value;
    const success = document.getElementById('success');
    const error = document.getElementById('error');
    if (pinNumber == typeNumber) {
        success.style.display = 'block';
        error.style.display = 'none';
    } else {
        success.style.display = 'none';
        error.style.display = 'block';
    }
    // console.log(submitPinBtn);
});