<?php
session_start();

if (!isset($_SESSION["user"])) {
    header("Location: giris.php");
    exit();
}

$user = $_SESSION["user"];
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hoş Geldiniz</title>
    <link rel="stylesheet" href="../css/login.css">
</head>
<body>
    <main class="login-page">
        <div class="login-card welcome-card">
            <h1>Hoş Geldiniz</h1>
            <p class="welcome-message">
                Başarıyla giriş yaptınız.
            </p>
            <p class="user-info">
                <strong>Kullanıcı:</strong> <?php echo htmlspecialchars($user); ?>
            </p>

            <div class="button-stack">
                <a href="../index.html" class="primary-link">Ana Sayfaya Git</a>
                <a href="../iletisimm.html" class="secondary-link">İletişim Sayfası</a>
            </div>
        </div>
    </main>
</body>
</html>