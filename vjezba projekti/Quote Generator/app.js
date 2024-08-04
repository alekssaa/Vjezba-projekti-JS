const apiLink = "https://api.quotable.io/random";
const qouteText = document.querySelector("#qoute");
const qouteAutor = document.querySelector("#author");
const noviCitat = document.querySelector(".noviCitat");
const citati = async () => {
  try {
    const response = await fetch(apiLink);
    const data = await response.json();
    qouteText.innerHTML = data.content;
    qouteAutor.innerHTML = data.author;
  } catch (error) {
    console.log(error);
  }
};
const twitt = () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      qouteText.innerHTML +
      "   ---- by " +
      qouteAutor.innerHTML, // dodao tekst i autora na link koji ga objavljuje
    "Tweet Window",
    "width = 600, height = 300"
  ); // dodao link za objavljivanje na twitweru podesio visinu i sirinu prozora za objavljivanje
};
window.addEventListener("DOMContentLoaded", citati());

noviCitat.addEventListener("click", () => {
  citati();
});
