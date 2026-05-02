document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const jsKontrolBtn = document.getElementById("js-kontrol");
  const errorMessagesDiv = document.getElementById("errorMessages");

  if (!form || !jsKontrolBtn || !errorMessagesDiv) return;

  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const gender = document.getElementById("gender").value;
    const country = document.getElementById("country").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const errors = [];
    errorMessagesDiv.innerHTML = "";

    if (name === "") errors.push("Ad alanı boş bırakılamaz.");
    if (surname === "") errors.push("Soyad alanı boş bırakılamaz.");
    if (gender === "") errors.push("Cinsiyet seçilmelidir.");
    if (country === "") errors.push("Ülke alanı boş bırakılamaz.");

    if (email === "") {
      errors.push("E-posta alanı boş bırakılamaz.");
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        errors.push("Geçerli bir e-posta adresi giriniz.");
      }
    }

    if (phone === "") {
      errors.push("Telefon alanı boş bırakılamaz.");
    } else {
      const phonePattern = /^[0-9]{10,11}$/;
      if (!phonePattern.test(phone)) {
        errors.push("Telefon numarası 10 veya 11 haneli olmalıdır.");
      }
    }

    if (message === "") errors.push("Mesaj alanı boş bırakılamaz.");

    if (errors.length > 0) {
      errors.forEach(function (error) {
        const p = document.createElement("p");
        p.textContent = error;
        errorMessagesDiv.appendChild(p);
      });
      return false;
    } else {
      const p = document.createElement("p");
      p.textContent = "Tüm alanlar geçerli.";
      p.classList.add("success");
      errorMessagesDiv.appendChild(p);
      return true;
    }
  }

  jsKontrolBtn.addEventListener("click", function (event) {
    event.preventDefault();
    validateForm();
  });

  form.addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });
});