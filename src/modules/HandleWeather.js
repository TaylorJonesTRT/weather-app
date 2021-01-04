class HandleWeather {
  // Data Handling
  async handleData(apiData) {
    this.json = await apiData.json();
    return this.json;
  }

  findTemp(data) {
    this.data = data;
    return data.main.temp;
  }

  getName(data) {
    this.data = data;
    return data.name;
  }

  findDesc(data) {
    this.data = data;
    return data.weather[0].main;
  }

  findFeelsLike(data) {
    this.data = data;
    return data.main.feels_like;
  }

  findMaxMinTemp(data) {
    this.data = data;
    return [data.main.temp_max, data.main.temp_min];
  }

  findWeatherType(data) {
    this.data = data;
    return data.weather.main;
  }

  findHumidity(data) {
    this.data = data;
    return data.main.humidity;
  }

  // API Functions
  async fetchWeather(location, units) {
    const locat = location;
    const measurementUnits = units;
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${locat}&APPID=5714462c1533311f2fccfad1cc68c6b9&units=${measurementUnits}`, { mode: 'cors' });
    return this.handleData(response);
  }
}

export default HandleWeather;
