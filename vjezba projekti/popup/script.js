const btn = document.querySelector(".btn");
const closeBtn = document.querySelector(".closeBtn");
const popup = document.querySelector("#popup");
btn.addEventListener("click", () => {
  popup.classList.add("open-popup");
});
closeBtn.addEventListener("click", () => {
  popup.classList.remove("open-popup");
});
