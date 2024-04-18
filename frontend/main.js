'use strict'

const form = document.querySelector('form');

const usernameInput = document.getElementById('username');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const termsCheckbox = document.getElementById('check');
const submitButton = document.getElementById('submitButton');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    console.log('Information Submitted')

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !email || !password) {
        alert('Please fill in all required fields.');
        return;
    }

    const userData = {
        username, email, password
    };

    localStorage.setItem('registeredUser', JSON.stringify(userData));

    window.location.href = 'loginPage.html';
});
