class HandleWeather {
  // Data Handling
  async handleData(apiData) {
    this.json = await apiData.json();
    return this.json;
  }

  async findTemp(data) {
    this.data = data;
    return data.main.temp;
  }

  async findFeelsLike(data) {
    this.data = data;
    return data.main.feels_like;
  }

  async findMaxMinTemp(data) {
    this.data = data;
    return [data.main.temp_max, data.main.temp_min];
  }

  async findWeatherType(data) {
    this.data = data;
    return data.weather.main;
  }

  async findHumidity(data) {
    this.data = data;
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
