var users = JSON.parse(localStorage.getItem("sign1")) || [];

function Login() {
    const loginUsername1 = document.getElementById("Username");
    const loginPassword1 = document.getElementById("Password");
    if (users.find(user => user.username1 === loginUsername1.value && user.password1 === loginPassword1.value)) {
        alert("✅ Login Successful");
        window.location = "SignUpBlog.html"
    } else {
        alert("❌ Incorrect username or password");
    }
}