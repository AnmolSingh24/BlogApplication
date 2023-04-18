var users = JSON.parse(localStorage.getItem("sign1")) || [];
function showUsers() {
    const username = document.getElementById("Username");
    const password = document.getElementById("Password");
    if (users.find(user => user.username1 === username.value && user.password1 === password.value)) {
        alert("✅ Login Successful");
        window.location = "SignUpBlog.html"
    } else {
        alert("❌ Incorrect username or password");
    }
}