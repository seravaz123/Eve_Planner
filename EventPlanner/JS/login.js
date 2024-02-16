
// label increase and decrease while typing 
document.querySelectorAll('input').forEach((item) => {
    item.addEventListener("focus", function () {
        item.previousElementSibling.className = 'label-selected';
    })
    item.addEventListener("blur", function () {
        if (item.value == '') {
            item.previousElementSibling.className = '';
        }
    })
})


document.getElementById("registerLink").addEventListener("click", function () {
    if (window.innerWidth < 600) {
        document.getElementById("signUp").style.display = "block";
        document.getElementById("login").style.display = "none";
    }
    else {
        document.getElementById("overlay").style.transform = 'translate(550px ,-25px)';
    }
})


document.getElementById("loginLink").addEventListener("click", function () {
    if (window.innerWidth < 600) {
        document.getElementById("login").style.display = "block";
        document.getElementById("signUp").style.display = "none";
    }
    else {
        document.getElementById("overlay").style.transform = 'translate(0px ,-25px)';
    }
})



function submitLogin() {

    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (username === '') {
        alert('Please enter your userid');
    }
    else if (password === '') {
        alert('Please enter your Password.');
    }
    else {
        // Perform login logic here
        alert('Logged in successfully!');
    }
}

