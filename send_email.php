<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Recipient email
    $to = 'sablepradipsubhash@gmail.com';
    
    // Subject
    $subject = 'Message from Contact Form';
    
    // Compose message
    $message_body = "Name: $name\nEmail: $email\nMessage:\n$message";
    
    // Additional headers
    $headers = "From: $email\r\n";
    
    // Send email
    if (mail($to, $subject, $message_body, $headers)) {
        echo '<div class="alert alert-success" role="alert">Your message has been sent successfully.</div>';
    } else {
        echo '<div class="alert alert-danger" role="alert">Sorry, there was an error sending your message.</div>';
    }
}
?>
