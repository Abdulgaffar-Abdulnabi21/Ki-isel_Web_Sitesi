document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  if (!loginForm) return;

  loginForm.addEventListener("submit", function (event) {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      event.preventDefault();
      alert("Lütfen kullanıcı adı ve şifre alanlarını doldurunuz.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(username)) {
      event.preventDefault();
      alert("Lütfen geçerli bir e-posta adresi giriniz.");
      return;
    }

    const studentNumber = username.split("@")[0];
    if (password !== studentNumber) {
      event.preventDefault();
      alert("Şifre, öğrenci mailinizin @ işaretinden önceki kısmı ile aynı olmalıdır.");
    }
  });
});