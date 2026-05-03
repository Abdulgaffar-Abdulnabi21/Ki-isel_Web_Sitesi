<?php
session_start();

$error = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = trim($_POST["username"] ?? "");
    $password = trim($_POST["password"] ?? "");

    if ($username === "" || $password === "") {
        $error = "Lütfen kullanıcı adı ve şifre alanlarını doldurunuz.";
    } elseif (!filter_var($username, FILTER_VALIDATE_EMAIL)) {
        $error = "Kullanıcı adı geçerli bir e-posta adresi olmalıdır.";
    } else {
        $studentNumber = explode('@', $username)[0];

        if ($password !== $studentNumber) {
            $error = "Şifre yanlış. Şifre öğrenci numaranız olmalıdır.";
        } else {
            $_SESSION["user"] = $studentNumber;
            header("Location: welcome.php");
            exit();
        }
    }
}
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Sayfası</title>
    <link rel="stylesheet" href="../css/login.css">
</head>
<body>
    <main class="login-page">
        <div class="login-card">
            <h1>Login Sayfası</h1>
            <p class="login-text">Öğrenci mailiniz ve öğrenci numaranız ile giriş yapınız.</p>

            <?php if ($error !== ""): ?>
                <div class="alert-box"><?php echo htmlspecialchars($error); ?></div>
            <?php endif; ?>

            <form id="loginForm" method="POST" action="">
                <div class="form-group">
                    <label for="username">Kullanıcı Adı (Öğrenci Maili)</label>
                    <input type="text" id="username" name="username" placeholder="b2412100001@sakarya.edu.tr">
                </div>

                <div class="form-group">
                    <label for="password">Şifre (Öğrenci Numarası)</label>
                    <input type="password" id="password" name="password" placeholder="b2412100001">
                </div>

                <button type="submit" class="primary-btn">Giriş Yap</button>
            </form>

            <div class="back-links">
                <a href="../index.html">Ana Sayfaya Dön</a>
            </div>
        </div>
    </main>

    <script src="../java/login.js"></script>
</body>
</html>