function showToast(message) {
    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "bottom", 
        position: "bottom-right", 
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #0D6EFD, #DC3545)",
        },
    }).showToast();
}

let users = JSON.parse(localStorage.getItem("users")) || []; 

document.getElementById("registerForm").addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (email.length < 6) {
        showToast("Please enter your email correctly");
        return;
    }
    if (password.length < 6) { 
        showToast("Please enter your password correctly");
        return;
    }
    if (users.some(user => user.email === email)) {
        showToast("User already exists. Please login");
        return;
    }
    let user = {
        email,
        password
    }

    user.id = Math.random().toString(36).slice(2);

    user.dateCreated = new Date().getTime();
    user.status = "active";
    users.push(user);
    showToast("A new user has been successfully added.");
    localStorage.setItem("users", JSON.stringify(users)); 
    window.location.replace("login.html")
}




