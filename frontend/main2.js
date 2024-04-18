'use strict'
const storage = localStorage.getItem('registeredUser');
const form = document.querySelector('form');

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

console.log(storage);

form.addEventListener('submit', (event) => {
    // check local storage / database
    database = localStorage.getItem();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // match username
    if (username === )
    console.log(da)

    // match password

    // login
});

/*fetch('/data')
    .then(response => response.json())
    .then(data => {
        // Handle JSON data
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });*/