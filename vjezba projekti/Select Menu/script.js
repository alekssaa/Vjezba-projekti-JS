const selectField = document.querySelector("#selectField");
const selectText = document.querySelector("#selectText");
const options = document.getElementsByClassName("options");
const list = document.querySelector("#list");
var arowIcon = document.querySelector(".arrow");
for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
  };
}
selectField.addEventListener("click", () => {
  list.classList.toggle("hide");
  arowIcon.classList.toggle("rotate");
});
