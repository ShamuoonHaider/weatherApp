


const input = document.getElementById("inputCity");
const search = document.getElementById("searchBtn");
const condition = document.getElementById("weather");
const temperature = document.getElementById("temp");
const time = document.getElementById("time");
const area = document.getElementById("cityName");

const apiKey = "18df8a3023823736dbde68b31a3177da";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function fetchWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);
  area.textContent = data.name;
  temperature.innerHTML = (data.main.temp).toFixed() + `°C`;

  if(data.weather[0].main === "Clouds"){
    condition.textContent = "☁️"
  }
  if(data.weather[0].main === "Clear"){
    condition.innerText = "☀️"
  }
  if(data.weather[0].main === "Rain"){
    condition.innerText = "🌧️"
  }
  if(data.weather[0].main === "Snow"){
    condition.innerText = "🌨️"
  }
}


search.addEventListener("click", () => {
  fetchWeather(input.value);
});

input.addEventListener("keypress", (event) => {
  if(event.key === "Enter"){
      fetchWeather(input.value);
  }
});

function updateTime() {
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  time.textContent = currentTime;
}

updateTime()
setInterval(updateTime, 1000)




