<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: ../iletisimm.html");
    exit();
}

$name = trim($_POST["name"] ?? "");
$surname = trim($_POST["surname"] ?? "");
$gender = trim($_POST["gender"] ?? "");
$country = trim($_POST["country"] ?? "");
$email = trim($_POST["email"] ?? "");
$phone = trim($_POST["phone"] ?? "");
$message = trim($_POST["message"] ?? "");

$errors = [];

if ($name === "") $errors[] = "Ad alanı boş bırakılamaz.";
if ($surname === "") $errors[] = "Soyad alanı boş bırakılamaz.";
if ($gender === "") $errors[] = "Cinsiyet seçilmelidir.";
if ($country === "") $errors[] = "Ülke alanı boş bırakılamaz.";
if ($email === "" || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "Geçerli bir e-posta giriniz.";
if ($phone === "" || !preg_match('/^[0-9]{10,11}$/', $phone)) $errors[] = "Telefon numarası 10 veya 11 haneli olmalıdır.";
if ($message === "") $errors[] = "Mesaj alanı boş bırakılamaz.";

if (!empty($errors)) {
    ?>
    <!DOCTYPE html>
    <html lang="tr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form Hatası</title>
        <link rel="stylesheet" href="../css/contact.css">
    </head>
    <body>
        <main class="container page-content">
            <section class="form-card">
                <span class="badge">Hata</span>
                <h1>Form gönderilemedi</h1>
                <div class="message-box error-box">
                    <?php foreach ($errors as $error): ?>
                        <p><?php echo htmlspecialchars($error); ?></p>
                    <?php endforeach; ?>
                </div>
                <div class="button-group">
                    <a href="../iletisimm.html" class="btn secondary-btn">Forma Geri Dön</a>
                </div>
            </section>
        </main>
    </body>
    </html>
    <?php
    exit();
}

if (!isset($_SESSION["contacts"])) {
    $_SESSION["contacts"] = [];
}

$_SESSION["contacts"][] = [
    "name" => $name,
    "surname" => $surname,
    "gender" => $gender,
    "country" => $country,
    "email" => $email,
    "phone" => $phone,
    "message" => $message
];

header("Location: contact_list.php");
exit();
?>