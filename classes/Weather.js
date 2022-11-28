class Weather {
    constructor(city) {
        this.city = city
        this.key = "f888f2d4b332b94625bd937ba929ae14"
    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responseData = await response.json()
        return responseData
    }

    changeCity(city) {
        this.city = city
    }
}