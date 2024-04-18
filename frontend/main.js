'use strict'

const form = document.querySelector('form');

const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const termsCheckbox = document.getElementById('check');

submitButton.disabled = true;

termsCheckbox.addEventListener('change', () => {
  submitButton.disabled = !termsCheckbox.checked;
});


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!firstName || !lastName || !email || !password){
        alert('Please fill in all required fields.');
        return;
    }

    const userData = {
        firstName, lastName, email, password,
    };

    localStorage.setItem('registeredUser', JSON.stringify(userData));
    
    window.location.href = 'loginPage.html';
});
