<?php
// Database connection details
$servername = "localhost";  // Update if necessary
$username = "root";         // Your MySQL username
$password = "";             // Your MySQL password
$dbname = "portfolio";      // Your database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form data is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize user input to prevent SQL injection
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $message = $conn->real_escape_string($_POST['message']);

    // Insert the data into the database
    $sql = "INSERT INTO contacts (name, email, message, submitted_at) 
            VALUES ('$name', '$email', '$message', CURRENT_TIMESTAMP)";

    if ($conn->query($sql) === TRUE) {
        header("Location: thank_you.php");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the connection
$conn->close();
?>
