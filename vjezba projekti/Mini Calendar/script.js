const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const date = document.querySelector("#date");

const weekDays = [
  "nedelja",
  "ponedeljak",
  "utorak",
  "srijeda",
  "cetvrtak",
  "petak",
  "subota",
];
const monthinYear = [
  "Januar",
  "Februar",
  "Mart",
  "April",
  "Maj",
  "Jun",
  "Jul",
  "Avgust",
  "Septembar",
  "Oktobar",
  "Novembar",
  "Decembar",
];
const today = new Date();
date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
year.innerHTML = today.getFullYear();
month.innerHTML = monthinYear[today.getMonth()];
day.innerHTML = weekDays[today.getDay()];
