<?php
// Server Id
$servername: "192.168.20.145", // could be derek@192.168.20.145
$username: "derek@localhost",
$password: "password",
$database: "hackathon1"

// Values
$formID = $_POST['form_id']
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
	// if it doesn't connect kill the code
    die("Connection failed: " . $conn->connect_error);
}

if (isset($formID["login"])){
	// its a login

}	
else {
	// Registration
	$stmt = $conn->prepare("insert into registration(username, password, email)
	values(?, ?, ?)");
	$stmt->bind_param("sss", $username, $password, $email);
	$execval = $stmt->execute();
}

// done
$conn->close();
?>