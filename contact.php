<?php
  $errors = '';
  $myEmail = 'collin.butt@teamvaluenigeria.com';

  if ( empty($_POST['name'])  ||
       empty($_POST['email']) ||
       empty($_POST['message']) ) {
    # code...
    $errors = "\n Error: all field are required";
  }

  $name = $_POST['name'];
  $email_address = $_POST['email'];
  $message = $_POST['message'];

  if (!preg_match(
    "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
    $email_address)) {
    # code...
    $errors ="\n Error: Invalid email address";
  }

  if (empty($errors)) {
    # code...

    $to = $myEmail;
    $email_subject = "Contact form submission: $name";
    $email_body = "You have received a new message. ".
                   " Here are the details:\n Name: $name \n ".
                   "Email: $email_address\n Message \n $message";

    $headers = "From: $email_address\n";
    $headers .= "Reply-To: $myEmail";

    //send email
    mail($to, $email_subject, $email_body, $headers);

    //Email response
    header('location: thankyou.html');
  }

?>