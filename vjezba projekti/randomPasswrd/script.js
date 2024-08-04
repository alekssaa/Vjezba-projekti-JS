const passwordBox = document.querySelector("#password");
const lenght = 12;
const upperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowerCase = "qwertyuioplkjhgfdsazxcvbnm";
const number = "0123456789";
const symbol = "~!#$%^&*()+_-./,?><|:{}[]";
const allChars = upperCase + lowerCase + number + symbol;
const createPasword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  while (lenght > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
};

const copyPassword = () => {
  passwordBox.select(); // odabire tekst iz inputa
  document.execCommand("copy"); //ugradjena metoda koja moze da kopira tekst
};

const btn = document
  .querySelector(".btn")
  .addEventListener("click", createPasword);
