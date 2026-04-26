document.getElementById('js-kontrol').addEventListener('click', function(event) {
  event.preventDefault(); // Formun gönderilmesini engellemek için

  var name = document.getElementById('name').value.trim();
  var surname = document.getElementById('surname').value.trim();
  var gender = document.getElementById('gender').value;
  var country = document.getElementById('country').value.trim();
  var email = document.getElementById('email').value.trim();
  var phone = document.getElementById('phone').value.trim();
  var message = document.getElementById('message').value.trim();

  var errorMessages = [];
  var errorMessagesDiv = document.getElementById('errorMessages');
  errorMessagesDiv.innerHTML = '';

  if (name === '') {
    errorMessages.push('Ad alanı boş bırakılamaz.');
  }

  if (surname === '') {
    errorMessages.push('Soyad alanı boş bırakılamaz.');
  }

  if (gender === '') {
    errorMessages.push('Cinsiyet seçiniz.');
  }

  if (country === '') {
    errorMessages.push('Ülke alanı boş bırakılamaz.');
  }

  if (email === '') {
    errorMessages.push('Email alanı boş bırakılamaz.');
  } else {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      errorMessages.push('Geçerli bir email adresi girin.');
    }
  }

  if (phone === '') {
    errorMessages.push('Telefon alanı boş bırakılamaz.');
  } else {
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      errorMessages.push('Geçerli bir telefon numarası girin (10 haneli).');
    }
  }

  if (message === '') {
    errorMessages.push('Mesaj alanı boş bırakılamaz.');
  }

  if (errorMessages.length > 0) {
    errorMessages.forEach(function(message) {
      var p = document.createElement('p');
      p.textContent = message;
      errorMessagesDiv.appendChild(p);
    });
  } else {
    var successMessage = document.createElement('p');
    successMessage.textContent = 'Tüm alanlar geçerli.';
    successMessage.classList.add('success');
    errorMessagesDiv.appendChild(successMessage);

    // Formun gönderilmesi için burada işlem yapabilirsiniz, örneğin:
    // document.getElementById('contactForm').submit();
  }
});
