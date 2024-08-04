const productImg = document.querySelector("#productImg");
let btn = document.querySelectorAll(".btn");

btn[0].addEventListener("click", (e) => {
  productImg.src = "img/image1.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
});
btn[1].addEventListener("click", (e) => {
  productImg.src = "img/image2.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
});
btn[2].addEventListener("click", (e) => {
  productImg.src = "img/image3.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
});
