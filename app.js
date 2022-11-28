// Create LS object
const ls = new LS()
// initialize city name
const initialCity = ls.getCity()
// Create weather object
const weather = new Weather(initialCity)
// UI object
const ui = new UI()

// events
const form = document.querySelector("#change-city")
form.addEventListener("submit", changeWeather)

// get city weather data
function getWeather() {
    weather.getWeather()
        .then(data => {
            console.log(data)
            ui.drawWeather(data)
        })
        .catch(error => console.log(error))
}

// to change weather
function changeWeather(e) {
    const city = document.querySelector("#city-name").value
    weather.changeCity(city)
    ls.setCity(city)
    getWeather()
    document.querySelector("#city-name").value = "";
    e.preventDefault()
}

getWeather()