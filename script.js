document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".nav-toggle");

  toggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const navbar = button.nextElementSibling;
      if (navbar) {
        navbar.classList.toggle("active");
      }
    });
  });
});