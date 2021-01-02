class HandleWeather {
  // Data Handling
  async handleData(data) {
    this.json = await data.json();
    return this.json;
  }

  async findTemp() {
    const data = await this.fetchWeather('Richardson');
    return data.main.temp;
  }

  async findFeelsLike() {
    const data = await this.fetchWeather('Richardson');
    return data.main.feels_like;
  }

  async findMaxMinTemp() {
    const data = await this.fetchWeather('Richardson');
    return [data.main.temp_max, data.main.temp_min];
  }

  async findWeatherType() {
    const data = await this.fetchWeather('Richardson');
    return data.weather.main;
  }

  async findHumidity() {
    const data = await this.fetchWeather('Richardson');
    return data.main.humidity;
  }

  // API Functions
  async fetchWeather(location) {
    const locat = location;
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${locat}&APPID=5714462c1533311f2fccfad1cc68c6b9&units=imperial`, { mode: 'cors' });
    return this.handleData(response);
  }
}

export default HandleWeather;
