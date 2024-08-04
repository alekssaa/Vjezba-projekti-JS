const apiKey = "d566db364450cd3c8abcd2350734826d";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBoxDOM = document.querySelector(".search input");
const formDOM = document.querySelector("form"); // dodao formu bolje izgleda kada moze i sa enterom ne mora samo klik
const weatherIconDOM = document.querySelector(".weather-icon");
const weatherDOM = document.querySelector(".weather");

const checkWethr = async (city) => {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
      document.querySelector(".error").style.display = "block";
      weatherDOM.style.display = "none";
      searchBoxDOM.value = "";
    } else {
      document.querySelector(".error").style.display = "none";
      const data = await response.json();

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      if (data.weather[0].main == "Clouds") {
        weatherIconDOM.src = "images/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weatherIconDOM.src = "images/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weatherIconDOM.src = "images/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherIconDOM.src = "images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherIconDOM.src = "images/mist.png";
      }
      weatherDOM.style.display = "block";
      searchBoxDOM.value = "";
    }
  } catch (error) {
    console.log(error);
  }
};
formDOM.addEventListener("submit", (e) => {
  e.preventDefault();
  checkWethr(searchBoxDOM.value);
});
