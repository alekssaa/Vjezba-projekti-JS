// key za API: Krwbflh0Z6InF6jIkb1W7euvL8UdiFcJeroqhkRfHnU
const id = `Krwbflh0Z6InF6jIkb1W7euvL8UdiFcJeroqhkRfHnU`;
const searchForm = document.querySelector("#search-form");
const searchBox = document.querySelector("#search-box");
const searchResult = document.querySelector("#search-result");
const shoveMoreBtn = document.querySelector("#show-more-btn");

let keyword = "";
let page = 1;

const searchImg = async () => {
  if (page === 1) {
    searchResult.innerHTML = "";
  }
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${id}&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
  shoveMoreBtn.style.display = "block";
};
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImg();
});
shoveMoreBtn.addEventListener("click", () => {
  page++;
  searchImg();
});
