let outPut = document.getElementById('result');
let showNumber = document.getElementById('number');

function result(num) {
    showNumber.value += num;
}

function clean() {
    showNumber.value = showNumber.value.slice(0, -1);
}

function erase() {
    outPut.value = '';
    showNumber.value = '';
}

function equal() {
    try {
        outPut.value = eval(showNumber.value);
    } catch (err) {
        outPut.value = "math error"
    }
}