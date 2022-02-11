// ===============Login Control=============
document.getElementById('login').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    if (email == 'admin@hasan.com' && pass == 'admin') {
        window.location.href = 'home.html'
    } else if (email != 'admin@hasan.com') {
        alert('Email Doesnt Match');
    } else if (pass != 'admin') {
        alert('Password Doesnt Match');
    } else {
        alert('Wrong Email and Password');
    }
});

document.getElementById('logout').addEventListener('click', function() {
    window.location.href = 'index.html'
})