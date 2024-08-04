const icon = document.querySelector("#icon");

icon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./dark theme icon/sun.png";
    localStorage.setItem("theme", JSON.stringify("dark-theme"));
  } else {
    icon.src = "./dark theme icon/moon.png";
    localStorage.setItem("theme", JSON.stringify(""));
  }
});
const getMode = () => {
  if (localStorage.getItem("theme")) {
    document.body.classList = JSON.parse(localStorage.getItem("theme"));
  }
};
getMode();
