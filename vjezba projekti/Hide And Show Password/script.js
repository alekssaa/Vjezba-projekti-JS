const eyeIcon = document.querySelector("#eyeIcon");
const password = document.querySelector("#password");

eyeIcon.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    eyeIcon.src = "eye-open.png";
  } else {
    password.type = "password";
    eyeIcon.src = "eye-close.png";
  }
});
