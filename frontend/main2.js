'use strict'
const storage = localStorage.getItem('registeredUser');
const form = document.querySelector('form');

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

console.log(storage);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // check local storage / database
    let database = JSON.parse(allStorage());

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // match username
    if (username == database['username']){
        console.log(database['username'] + ' match');
    }

    // match password
    if (password == database['password']){
        console.log(database['password'] + ' match');
    }

    // login
    window.location.href = 'mainPage.html';

});

function allStorage() {
    var data = [];
    for (var i = 0; i<localStorage.length; i++) {
        data[i] = localStorage.getItem(localStorage.key(i));
    }
    return data
}

/*fetch('/data')
    .then(response => response.json())
    .then(data => {
        // Handle JSON data
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });*/