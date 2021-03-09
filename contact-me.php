<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'Test@test.com';
    $email_subject = "New Form Submission";
    $email_body = "User Name: $name.\n"<div class="".
                    "User Email: $visitor_email.\n".
                    "User Message: $message.\n";
    $to = "EricLee0497@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";
    mail($to, $email_subject, $email_body, $headers);
    header("Location: index.html");

?>