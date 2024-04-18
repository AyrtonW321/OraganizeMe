'use strict'

const url = 'http://127.0.0.1:5000/data'

function fetchAPIs(modulePara, input) {
    console.log(input);
    const params = new URLSearchParams();
    params.append('module', modulePara);
    params.append('input', input);
    const fullUrl = `${url}?${params.toString()}`; // Convert params to string

    fetch(fullUrl)
    .then(response => {
        // Check if response is OK
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // get response and store it in local storage

        return response.json()
    })
    .then(data => {
        // Handle JSON data
        console.log(data);
        localStorage.setItem(input, data)
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
const cityDisplay = document.querySelector('.city')
const weatherDisplay = document.querySelector('.displayWeather');

function findweatheroflocation() {
    const city = userLocation.value.trim();
    fetchAPIs('weather', city);

    cityDisplay.textContent = localStorage.getItem(city);

    weather = localStorage.getItem(weather);
    celsius = localStorage.getItem(temperature);

    weatherDisplay.textContent = weather + "    " + temperature + "Â°C";

}


const userPrompt = document.getElementById('calender');


function calender() {
    const prompt = userPrompt.value.trim();
    fetchAPIs('calender', prompt)
}

updateTime();
setInterval(updateTime, 1000); // Update clock every second

const displays = document.getElementById('displays');
const clock = document.getElementById('clock');
const timelinePage = document.getElementById("timelinePage");

document.getElementById("timeline").addEventListener("click", () => {
    displays.style.display = "none";
    clock.style.display = "none";
    timelinePage.hidden = false;
});

document.getElementById("dashboard").addEventListener("click", () => {
    displays.style.display = "flex";
    clock.style.display = "flex";
    timelinePage.hidden = true;

});

timelinePage.hidden = true;

const tasksContainer = document.getElementById('tasks-container');
const newTaskInput = document.getElementById('new-task');
const addButton = document.getElementById('add-btn');

let tasks = []; // Array to store tasks

// Load tasks from localStorage (optional)
const savedTasks = localStorage.getItem('tasks');
if (savedTasks) {
    tasks = JSON.parse(savedTasks); // Parse tasks from JSON string
    renderTasks();
}

function renderTasks() {
    tasksContainer.innerHTML = ''; // Clear existing tasks

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `task-${index}`;
        checkbox.checked = task.completed; // Set checkbox state based on task completion

        const label = document.createElement('label');
        label.htmlFor = `task-${index}`;
        label.textContent = task.text;
        label.classList.add(task.completed ? 'completed' : ''); // Apply "completed" class if task is done

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => {
            removeTask(index);
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(label);
        taskItem.appendChild(deleteButton);

        tasksContainer.appendChild(taskItem);

        // Add event listener to checkbox for task completion
        checkbox.addEventListener('change', () => {
            toggleTaskCompletion(index);
        });
    });
}

function addTask() {
    const newTaskText = newTaskInput.value.trim(); // Trim whitespace
    if (!newTaskText) return; // Don't add empty tasks

    const newTask = {
        text: newTaskText,
        completed: false,
    };

    tasks.push(newTask);
    renderTasks();
    newTaskInput.value = ''; // Clear input field after adding task

    // Save tasks to localStorage (optional)
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(index) {
    tasks.splice(index, 1); // Remove the task at the specified index
    renderTasks(); // Update the UI by re-rendering the task list

    // Save tasks to localStorage (optional)
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
