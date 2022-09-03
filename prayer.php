<?php 
$name = $_POST['name'];
$visitors_email = $_POST['email'];
$number = $_POST['number'];
$request = $_POST['request'];


$email_from = 'https://wim.pages.dev/';

$email_subject = 'Prayer Request';

$email_body = " User Name: $name.\n".
                " User Email: $visitors_email.\n".
                " User Number: $number.\n".
                " Pray Request: $request.\n";


$to = 'tobioresegun@gmail.com'; 

$hearders = "From: $email_from \r\n";

$hearders .= "Reply-To: $visitors_email \r\n";


mail($to,$email_subject,$email_body,$hearders);

header("location:prayer.html");


?>