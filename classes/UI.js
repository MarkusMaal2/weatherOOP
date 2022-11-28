class UI {
    constructor() {
        this.temp = document.querySelector("#temp")
        this.description = document.querySelector("#description")
        this.city = document.querySelector("#location")
    }

    drawWeather(data) {
        // parse data
        let celcius = Math.round(parseFloat(data.main.temp)-273.15)
        let description = data.weather[0].description

        // display values
        this.description.innerHTML = description
        this.temp.innerHTML = celcius + "&deg;C"
        this.city.innerHTML = data.name

        // change color depending if the temperature is positive or negative
        if (celcius > 0) { this.temp.style.color = "orange" }
        else { this.temp.style.color = "skyblue" }
    }
}