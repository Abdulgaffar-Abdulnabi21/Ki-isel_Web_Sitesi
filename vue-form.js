const { createApp } = Vue;

createApp({
  data() {
    return {
      form: {
        name: "",
        surname: "",
        gender: "",
        country: "",
        email: "",
        phone: "",
        message: ""
      },
      vueErrors: [],
      vueSuccessMessage: ""
    };
  },
  methods: {
    validateVueForm() {
      this.vueErrors = [];
      this.vueSuccessMessage = "";

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phonePattern = /^[0-9]{10,11}$/;

      if (this.form.name.trim() === "") {
        this.vueErrors.push("Ad alanı boş bırakılamaz.");
      }

      if (this.form.surname.trim() === "") {
        this.vueErrors.push("Soyad alanı boş bırakılamaz.");
      }

      if (this.form.gender === "") {
        this.vueErrors.push("Cinsiyet seçilmelidir.");
      }

      if (this.form.country.trim() === "") {
        this.vueErrors.push("Ülke alanı boş bırakılamaz.");
      }

      if (this.form.email.trim() === "") {
        this.vueErrors.push("E-posta alanı boş bırakılamaz.");
      } else if (!emailPattern.test(this.form.email.trim())) {
        this.vueErrors.push("Geçerli bir e-posta adresi giriniz.");
      }

      if (this.form.phone.trim() === "") {
        this.vueErrors.push("Telefon alanı boş bırakılamaz.");
      } else if (!phonePattern.test(this.form.phone.trim())) {
        this.vueErrors.push("Telefon numarası 10 veya 11 haneli olmalıdır.");
      }

      if (this.form.message.trim() === "") {
        this.vueErrors.push("Mesaj alanı boş bırakılamaz.");
      }

      if (this.vueErrors.length === 0) {
        this.vueSuccessMessage = "Vue kontrolü başarılı. Tüm alanlar geçerli.";
      }
    },
    clearVueMessages() {
      this.vueErrors = [];
      this.vueSuccessMessage = "";
      this.form = {
        name: "",
        surname: "",
        gender: "",
        country: "",
        email: "",
        phone: "",
        message: ""
      };
    }
  }
}).mount("#vueApp");