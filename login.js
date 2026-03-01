// Toggle Forms
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginToggle = document.getElementById('login-toggle');
const signupToggle = document.getElementById('signup-toggle');

loginToggle.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
    loginToggle.classList.add('active');
    signupToggle.classList.remove('active');
});

signupToggle.addEventListener('click', () => {
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    signupToggle.classList.add('active');
    loginToggle.classList.remove('active');
});


// ================== SIGNUP ==================
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Get existing users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email already exists
    const userExists = users.find(user => user.email === email);

    if (userExists) {
        alert("User already exists! Please login.");
        return;
    }

    // Save new user
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert("Account created successfully! Please login.");
    signupForm.reset();

    // Switch to login
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});


// // ================== LOGIN ==================
// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const email = document.getElementById('login-email').value;
//     const password = document.getElementById('login-password').value;

//     let users = JSON.parse(localStorage.getItem('users')) || [];

//     // Check if user exists
//     const validUser = users.find(user =>
//         user.email === email && user.password === password
//     );

//     if (validUser) {
//         alert("Login successful!");
//         window.location.href = "education.html"; // Redirect
//     } else {
//         alert("Invalid email or password!");
//     }
// });

// ================== LOGIN ==================
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');

    const email = emailInput.value;
    const password = passwordInput.value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const validUser = users.find(user =>
        user.email === email && user.password === password
    );

    if (validUser) {
        alert("Login successful!");
        window.location.href = "subject.html";
    } else {
        alert("Invalid email or password!");

        // Clear fields
        emailInput.value = "";
        passwordInput.value = "";

        // Focus back to email field
        emailInput.focus();
    }
});

