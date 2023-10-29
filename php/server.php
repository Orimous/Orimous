<?php
if(isset($_POST['email'])) {
    // Здесь указываете ваш адрес электронной почты, на который будут отправляться сообщения
    $to = "orimouswork@gmail.com";
    $subject = "Новое сообщение с формы обратной связи";

    $name = $_POST['name'];
    $email = $_POST['email'];
    $text = $_POST['text'];

    $message = "Имя: ".$name."\n\nEmail: ".$email."\n\nСообщение: ".$text;

    $headers = "From: ".$name." <".$email.">"."\r\n".
        "Reply-To: ".$email."\r\n".
        "X-Mailer: PHP/".phpversion();

    if(mail($to, $subject, $message, $headers)) {
        echo "Ваше сообщение успешно отправлено.";
    } else {
        echo "Произошла ошибка при отправке сообщения.";
    }
}
