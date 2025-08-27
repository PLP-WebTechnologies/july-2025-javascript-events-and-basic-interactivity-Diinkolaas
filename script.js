// ==========================
// Part 1: Event Handling
// ==========================

// Button click event
document.getElementById("clickButton").addEventListener("click", function() {
    document.getElementById("clickMessage").textContent = "Button was clicked!";
});

// Input hover event
const hoverInput = document.getElementById("hoverInput");
hoverInput.addEventListener("mouseenter", function() {
    document.getElementById("hoverMessage").textContent = "You're hovering over the input!";
});
hoverInput.addEventListener("mouseleave", function() {
    document.getElementById("hoverMessage").textContent = "";
});

// ==========================
// Part 2: Interactive Features
// ==========================

// Feature 1: Light/Dark Mode Toggle
document.getElementById("toggleTheme").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Feature 2: Counter
let count = 0;
const countDisplay = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
    count++;
    countDisplay.textContent = count;
});

document.getElementById("decrement").addEventListener("click", function() {
    count--;
    countDisplay.textContent = count;
});

document.getElementById("reset").addEventListener("click", function() {
    count = 0;
    countDisplay.textContent = count;
});

// ==========================
// Part 3: Form Validation
// ==========================

const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission

    // Clear previous messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("formSuccess").textContent = "";

    let valid = true;

    // Validate Name
    const name = document.getElementById("name").value.trim();
    if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters long.";
        valid = false;
    }

    // Validate Email
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        valid = false;
    }

    // Validate Password
    const password = document.getElementById("password").value.trim();
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
        valid = false;
    }

    // Success message
    if (valid) {
        document.getElementById("formSuccess").textContent = "Registration successful!";
        form.reset();
    }
});
