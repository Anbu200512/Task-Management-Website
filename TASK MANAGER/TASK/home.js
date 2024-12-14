// JavaScript to toggle the hamburger menu
document.getElementById('menu-icon').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Fetch input values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const dob = document.getElementById('dob').value;

    // Valid credentials
    const validEmail = '123@hicet.com';
    const validPassword = 'abcd@123';
    const validDob = '2005-01-01'; // Format: YYYY-MM-DD

    // Validation logic
    if (email === validEmail && password === validPassword && dob === validDob) {
        // Redirect to dashboard if valid
        window.location.href = 'dashboard.html';
    } else {
        // Show error message
        alert('Invalid credentials! Please enter the correct email, password, and date of birth.');
    }
});
