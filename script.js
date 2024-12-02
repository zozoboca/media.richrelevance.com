const loginForm = document.getElementById('login-form');
const logoutButton = document.getElementById('logout-button');
const signupForm = document.getElementById('signup-form');

// Check if user is logged in on page load
const isLoggedIn = localStorage.getItem('isLoggedIn');
if (isLoggedIn) {
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
    logoutButton.style.display = 'block';
}

// Login form submission
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Implement your login logic here, e.g., check credentials
    localStorage.setItem('isLoggedIn', true);
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
    logoutButton.style.display = 'block';
});

// Logout button click
logoutButton.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    loginForm.style.display = 'block';
    signupForm.style.display = 'block';
    logoutButton.style.display = 'none';
});

// Signup form submission
signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Implement your signup logic here, e.g., create user account
});
