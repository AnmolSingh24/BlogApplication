function register() {
    var firstname = document.getElementById('Firstname').value;
    var lastname = document.getElementById('Lastname').value;
    var username = document.getElementById('Username').value;
    var email = document.getElementById('Email').value;
    var phone = document.getElementById('PhoneNumber').value;
    var password = document.getElementById('Password').value;

    if (firstname === '') {
        alert('Please enter your First name.');
        return;
    }
    else if (lastname === ' ') {
        alert('Please enter your Last name.');
        return;
    }
    else if (username === 0 - 9 && username === a - z || username.length >= 15) {
        alert('Please enter your Username.');
        return;
    }
    else if (email === 0 - 9 && email === a - z) {
        alert('Please enter your Email.');
        return;
    }
    else if (phone <= 10) {
        alert('Please enter your Phone Number.');
        return;
    }
    else if (password.length >= 8) {
        alert('Please enter your Password.');
        return;
    } else
        alert("Thanks for Signing Up!");
    SignUpRegister();
}

function SignUpRegister() {
    var username1 = document.getElementById("Username").value;
    var password1 = document.getElementById("Password").value;

    const sign1 = {
        username1: username1,
        password1: password1,
        id: Date.now()
    }
    
    var sign2 = [];
    var sign2 = JSON.parse(localStorage.getItem("sign1")) || [];
    console.log(JSON.stringify(sign2))
    sign2.push(sign1);
    console.log(JSON.stringify(sign2));
    localStorage.setItem("sign1", JSON.stringify(sign2));
    window.location = "index.html";
}