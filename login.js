// Get elements
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginToggle = document.getElementById('login-toggle');
const signupToggle = document.getElementById('signup-toggle');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');
const openLoginBtns = document.querySelectorAll('#open-login, #open-login-2');

// Open modal buttons
openLoginBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        overlay.classList.remove('hidden');
    });
});

// Close modal
closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
});

// Toggle forms
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

// SIGNUP
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.email === email);

    if (userExists) {
        alert("User already exists! Please login.");
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert("Account created successfully! Please login.");
    signupForm.reset();

    // Switch to login
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    loginToggle.classList.add('active');
    signupToggle.classList.remove('active');
});

// LOGIN
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');

    const email = emailInput.value;
    const password = passwordInput.value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
        alert("Login successful!");
        overlay.classList.add('hidden'); // close modal
        window.location.href = "education.html";
    } else {
        alert("Invalid email or password!");
        emailInput.value = "";
        passwordInput.value = "";
        emailInput.focus();
    }
});
