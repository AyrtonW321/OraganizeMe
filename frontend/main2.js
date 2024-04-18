'use strict'
const storage = localStorage.getItem('registeredUser');
const form = document.querySelector('form');

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const timeOutput = document.querySelector('.time');
const secOutput = document.querySelector('.sec');
const ampmOutput = document.querySelector('.ampm');
const monthOutput = document.querySelector('.month');
const dayOfWeekOutput = document.querySelector('.dayOfWeek');
const dayOutput = document.querySelector('.day');

const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const monthName = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatTime(val){
    if (val < 10){
        return "0";
    } else {
        return "";
    }
}

function clock(){
    const date = new Date();
    const hours = d.getHours();
    const seconds = d.getSeconds();

    dayOfWeekOutput.innerHTML = weekday[
        date.getDay()
    ];

    monthOutput.innerHTML = monthName[
        d.getMonth()
    ];

    dayOutput.innerHTML = d.getDate();

    
}
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