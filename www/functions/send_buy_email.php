<?php
    error_reporting(-1);
ini_set('display_errors', 'On');

    $name = $_POST['name'];
    $storeName = $_POST['storeName'];
    $to_email = $_POST['email'];
    $serviceLength = $_POST['serviceLength'];

    include('../plugins/Mail-1.2.0/Mail.php');

    $recipients = 'sondre.sallaup@gmail.com';

    $headers['From']    = 'contact@storemaps.nu';
    $headers['To']      = $recipients;
    $headers['Subject'] = 'Test message';

    $body = 'Test message';

    $smtpinfo["host"] = "send.one.com";
    $smtpinfo["port"] = "465";
    $smtpinfo["auth"] = true;
    $smtpinfo["username"] = "contact@storemaps.nu";
    $smtpinfo["password"] = "storemaps";


    // Create the mail object using the Mail::factory method
    $mail_object =& Mail::factory("smtp", $smtpinfo); 

    $mail_object->send($recipients, $headers, $body);

?>