const scrollContainerDOM = document.querySelector(".gallery");
const backBtnDOM = document.querySelector("#backBtn");
const nextBtnDOM = document.querySelector("#nextBtn");

scrollContainerDOM.addEventListener("wheel", (ev) => {
  ev.preventDefault();
  scrollContainerDOM.scrollLeft += ev.deltaY;
  scrollContainerDOM.style.scrollBehavior = "auto";
});

nextBtnDOM.addEventListener("click", () => {
  scrollContainerDOM.style.scrollBehavior = "smooth";
  scrollContainerDOM.scrollLeft += 900;
});
backBtnDOM.addEventListener("click", () => {
  scrollContainerDOM.style.scrollBehavior = "smooth";
  scrollContainerDOM.scrollLeft -= 900;
});
