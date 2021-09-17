<?php

require_once 'mainsms.class.php';

$api = new MainSMS('bio64', '082ddc2a6a162b886addad163b020d6d', false, false);

//echo 'отправка СМС/а смс: ' . $api->sendSMS ( '79271149999' , 'bio64'), PHP_EOL ;

	$to = 'kurganov.danil@yandex.ru';
	$subject = 'Заявка звонок верх';

	$message = "
	<html>
	<head>
	  <title>{$subject}</title>
	</head>
	<body>
		<p><strong>Имя</strong>: <span>{$_GET['name']}</span></p>
		<p><strong>Телефон</strong>: <span>{$_GET['tel']}</span></p>
	</body>
	</html>
	";

	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= "From: BIO64" . "\r\n";
	$headers .= "Reply-to: kurganov.danil@yandex.ru" . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	mail( $to , $subject , $message , $headers );

header("Location: thanks.html");
?>
