
function toggleCard(type) {
    const cardWrapper = document.querySelector('.card-3d-wrapper');
    cardWrapper.style.transform = `rotateY(${type === 'signup' ? 180 : 0}deg)`;
}


function validateLoginForm() {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    if (email=="") {
        alert('Please enter your Email');
    }
    else  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
}
    else if (password=="") {
        alert('Please enter your Password');
    }

    else if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
    }

    else{
        alert('Login successful!');
    }
    
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}