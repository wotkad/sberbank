<?php
$to      = 'mail@mail.com';
$subject = 'Заявка с сайта';
$message = 'Заявка.  Имя: ' . $_POST["name"] . ', Телефон: ' . $_POST["phone"] . ', Сообщение: ' . $_POST["text"];
$headers = 'From: mail@mail.com' . "\r\n" .
    'Content-Type: text/plain; charset=utf8;' . "\r\n" .
    'Reply-To: mail@mail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
mail($to, $subject, $message, $headers);
?>

