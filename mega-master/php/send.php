<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$phone = $_POST['phone'];
$name = $_POST['name'];
$date = date('j, F Y h:i A');
    
$emailBody = "
<html>
<head>
 <title>$email Заявка с Мега-Мастера</title>
</head>
 <body style=\"background-color:#fafafa;\">
 <div style=\"padding:20px;\">
<div style=\"color: black\"><b>Имя</b>: $name</div>
 <br>
 <div style=\"color:black\"><b>Телефон</b>:  $phone</div>
 <br>
 <div style=\"color:black\"><b>Время заказа</b>: $date</div>
 </div>
 </body>
 </html>
";
    
$headers = 	'From: ~Mega-Master <info@megamaster.space>' . "\r\n" .
"Reply-To: $email" . "\r\n" .
"MIME-Version: 1.0\r\n" . 
"Content-Type: text/html; charset=utf-8\r\n";

$to = 'info@megamaster.website';
$subject = 'Заявка с Мега-Мастера';
    
if (mail($to, $subject, $emailBody, $headers)) {
      $sent = true;	
}
?>
<?php if (!empty($errors)) : ?> 
  
  {
    "status": "fail",
    "error":  <?php echo json_encode($errors) ?>
  }
    
<?php endif; ?>
<?php if ($sent === true) : ?> 

{
  "status": "success",
  "message": "Спасибо, ваша заявка принята. Мы свяжемся с вами в ближайшее время"
}
<?php endif; ?>