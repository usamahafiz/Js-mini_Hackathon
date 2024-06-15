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


    let storedUser = users.find(user => user.email === email && user.password === password);
    if (storedUser) {
        showToast("User has been successfully logged in.")
        return;
    }
     else {
        showToast("Please register first.");
    }

    let user = {
        email,
        password
    }

    user.id = Math.random().toString(36).slice(2);
    user.dateCreated = new Date().getTime();
    user.status = "active";
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("loginbutton").innerText = email;
    window.location.replace("todo.html")
}




