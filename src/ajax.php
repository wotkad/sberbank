<?php
$email='mail@mail.com';
$from='адрес почты "от кого"';
$login_from='логин почты "от кого"';
$password_from='пароль почты "от кого"';
$name_from='Робот';
$subject='тема письма';
require 'mailer/class.phpmailer.php';
require 'mailer/class.smtp.php';

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';
//$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;
$mail->Host = 'smtp.gmail.com';
$mail->Port = 465;//587;
$mail->Username = $login_from;
$mail->Password = $password_from;
$mail->setFrom($from, $name_from);        
$mail->addAddress($email, '');
$mail->Subject = $subject;
$sq='ДА';
$tt='Исходя из его содержания, понятно кто виноват в заливе?';
if($_POST['s_q']=='2'){
	$sq='НЕТ';
	$tt='Без Акта понятно, кто виновник залива?';
}	
$body = '<table>
<tr><td>Как давно произошел залив?</td><td>'.$_POST['f_q'].'</td></tr>
<tr><td>Вы уже получили Акт о заливе от Управляющей компании?</td><td>'.$sq.'</td></tr>
<tr><td>'.$tt.'</td><td>'.$_POST['t_q'].'</td></tr>
<tr><td>Имя</td><td>'.$_POST['nm'].'</td></tr>
<tr><td>Email</td><td>'.$_POST['em'].'</td></tr>
</table>';
$mail->msgHTML($body);
if(!$mail->send())echo 'no';
else echo 'ok';
?>