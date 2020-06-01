//key 8a68b9cb12e157ce829802d22acf3b5a
let input = document.getElementById("input");

input.addEventListener('keyup', (e) => {
    e.preventDefault();
    let searchkey = e.target.value;
    searchWeather(searchkey);

    let formText = document.getElementById("divBlock");
    formText.style.display = "none";
    search.classList.add("afterkeyPress");
    document.querySelector("#formBlock").classList.add("afterkey_formBlock");
});



function searchWeather(searchkey){
    let weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${searchkey}&appid=8a68b9cb12e157ce829802d22acf3b5a`;
    window.
    fetch(weatherApi)
    .then((data) => {
        data.
        json()
        .then((weather) => {
            console.log(weather);
            let weatherData = weather.weather;
            let main = weather.main;
            output = [];
            let cTemp=main.temp-273.15;
            let currentTemp=cTemp.toFixed(2);
            for(let x of weatherData)   {
                output += `
                <div class="weatherInfoBlock">
                <div class="card-body">
                    <h2 class="placeName">${weather.name}, ${weather.sys.country}<h2>
                <div>
                    <p class="icon"><img src="http://openweathermap.org/img/wn/${x.icon}.png" /></p>
                    <p class="desc">${x.main}</p>
                    <p class="temp">${currentTemp}&deg;c</p>
                    <p class="humidity">Humidity : ${main.humidity}%</p>
                    <p class="windSpeed">Wind : ${weather.wind.speed} m/s</p>
                </div>
                </div>
                </div>
                `;
                document.getElementById("weatherTemplate").innerHTML = output;
            }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}


