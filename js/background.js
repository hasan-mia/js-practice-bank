// All button by class
const allButton = document.getElementsByClassName('btn')
for (const button of allButton) {
    button.addEventListener('click', function(e) {
        const btnId = e.target.id;
        // console.log(btnId)
        if (btnId == 'default') {
            document.body.style.background = "white";
        } else if (btnId == 'red') {
            document.body.style.background = "red";
        } else if (btnId == 'crimson') {
            document.body.style.background = "crimson";
        } else if (btnId == 'darkorchid') {
            document.body.style.background = "darkorchid";
        } else if (btnId == 'dodgerblue') {
            document.body.style.background = "dodgerblue";
        } else if (btnId == 'deeppink') {
            document.body.style.background = "deeppink";
        }
    })
}