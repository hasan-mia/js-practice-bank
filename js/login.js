// ===============Login Control=============
document.getElementById('login').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    if (email == 'admin@hasan.com' && pass == 'rafi') {
        window.location.href = 'home.html'
    } else {
        alert('wrong email or password');
    }
});