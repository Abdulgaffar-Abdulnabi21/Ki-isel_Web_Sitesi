<?php
session_start();
$contacts = $_SESSION["contacts"] ?? [];
?>
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gönderilen Mesajlar</title>
  <link rel="stylesheet" href="../css/contact.css">
</head>
<body>
  <main class="container page-content">
    <section class="form-card">
      <span class="badge">Mesajlar</span>
      <h1>Gönderilen Mesajlar</h1>

      <?php if (count($contacts) > 0): ?>
        <div class="message-list">
          <?php foreach ($contacts as $contact): ?>
            <div class="message-card">
              <p><strong>Ad:</strong> <?php echo htmlspecialchars($contact["name"]); ?></p>
              <p><strong>Soyad:</strong> <?php echo htmlspecialchars($contact["surname"]); ?></p>
              <p><strong>Cinsiyet:</strong> <?php echo htmlspecialchars($contact["gender"]); ?></p>
              <p><strong>Ülke:</strong> <?php echo htmlspecialchars($contact["country"]); ?></p>
              <p><strong>Email:</strong> <?php echo htmlspecialchars($contact["email"]); ?></p>
              <p><strong>Telefon:</strong> <?php echo htmlspecialchars($contact["phone"]); ?></p>
              <p><strong>Mesaj:</strong> <?php echo htmlspecialchars($contact["message"]); ?></p>
            </div>
          <?php endforeach; ?>
        </div>
      <?php else: ?>
        <div class="message-box">
          <p>Henüz gönderilmiş mesaj bulunmuyor.</p>
        </div>
      <?php endif; ?>

      <div class="button-group">
        <a href="../iletisimm.html" class="btn primary-btn">Yeni Mesaj Gönder</a>
        <a href="../index.html" class="btn secondary-btn">Ana Sayfaya Dön</a>
      </div>
    </section>
  </main>
</body>
</html>