let toastBox = document.querySelector("#toastBox");
const successMsg =
  '<i class="fa-solid fa-circle-check"></i> Uspjesno ste poslali zahtjev';
const errorMsg =
  ' <i class="fa-solid fa-circle-xmark"></i>  Molim ispravite gresku!!';
const ivalidMsg =
  '<i class="fa-solid fa-circle-exclamation"></i> Nije moguce ispuniti zahtjev!';
const showTost = (msg) => {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);
  if (msg.includes("gresku")) {
    toast.classList.add("error");
  }
  if (msg.includes("ispuniti")) {
    toast.classList.add("invalid");
  }
  setTimeout(() => {
    toast.remove();
  }, 3000);
};
