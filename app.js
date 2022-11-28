// Create weather object
const weather = new Weather("Tallinn")
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
    document.querySelector("#city-name").value = "";
    getWeather()
    e.preventDefault()
}

getWeather()