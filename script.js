document.addEventListener("DOMContentLoaded", function () {
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let mail = document.getElementById("email");
  let form = document.getElementById("form");

  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,6}$/;
  const nameRegex = /^[\u0600-\u06FFa-zA-Z\s]{2,50}$/;

  function check(e) {
    e.preventDefault();
    let valid = true;

    // First name
    if (!nameRegex.test(firstName.value.trim())) {
      firstName.classList.add("is-invalid");
      firstName.classList.remove("is-valid");
      valid = false;
    } else {
      firstName.classList.remove("is-invalid");
      firstName.classList.add("is-valid");
    }

    // Last name
    if (!nameRegex.test(lastName.value.trim())) {
      lastName.classList.add("is-invalid");
      lastName.classList.remove("is-valid");
      valid = false;
    } else {
      lastName.classList.remove("is-invalid");
      lastName.classList.add("is-valid");
    }

    // Email
    if (!emailRegex.test(mail.value.trim())) {
      mail.classList.add("is-invalid");
      mail.classList.remove("is-valid");
      valid = false;
    } else {
      mail.classList.remove("is-invalid");
      mail.classList.add("is-valid");
    }

    // لو كل حاجة صح ابعتي الفورم
    if (valid) {
      form.submit();
    }
  }

  form.addEventListener("submit", check);
});
