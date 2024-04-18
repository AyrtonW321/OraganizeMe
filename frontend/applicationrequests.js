'use strict'

const url = 'http://127.0.0.1:5000/data'
  
function fetchAPIs(modulePara, input){
    console.log(input)
    const params = new URLSearchParams();
    params.append('module', modulePara);
    params.append('input', input);
    fetch(`${url}?${params}`)
    .then(response => {
        // Check if response is OK
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // get response and store it in local storage
        console.log(response)
        localStorage.setItem(parent[modulePara], response.json())
    })
    .then(data => {
        // Handle JSON data
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

const timeDisplay = document.querySelector('.time');
const ampmDisplay = document.querySelector('.ampm');
const secDisplay = document.querySelector('.sec');
const monthDisplay = document.querySelector('.month');
const dayofweekDisplay = document.querySelector('.dayofweek');
const dayDisplay = document.querySelector('.day');

function updateTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Format hours for 12-hour clock (adjust for 24-hour format if needed)
  const formattedHours = hours % 12 || 12;

  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  // Display time
  timeDisplay.textContent = `${formattedHours}:${formattedMinutes}`;

  // Display AM/PM
  ampmDisplay.textContent = hours >= 12 ? 'PM' : 'AM';

  // Display seconds (optional)
  secDisplay.textContent = formattedSeconds;

  // Update date (optional)
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  monthDisplay.textContent = months[date.getMonth()];
  dayofweekDisplay.textContent = days[date.getDay()];
  dayDisplay.textContent = date.getDate();
}

const userLocation = document.getElementById('weather');


function findweatheroflocation(){
    console.log('a')
    const city = userLocation.value.trim();
    fetchAPIs('weather', city);
}


const userPrompt = document.getElementById('calender');


function calender() {
    console.log('b')
    const prompt = userPrompt.value.trim();
    fetchAPIs('calender', prompt)
}

updateTime();
setInterval(updateTime, 1000); // Update clock every second