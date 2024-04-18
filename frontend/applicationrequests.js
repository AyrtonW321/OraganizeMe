'use strict'

function startAPIs(){
    fetch('http://127.0.0.1:5000/data')
    .then(response => {
        // Check if response is OK
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse JSON response
        return response.json();
    })
    .then(data => {
        // Handle JSON data
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}