class HandleWeather {
  constructor() {
    this.placeholder = 'hi';
  }

  // Data Handling
  async handleData(data) {
    const json = await data.json();
    this.placeholder = 'yes';
    return [json.main.temp, json.main.feels_like, json.main.temp_max, json.main.temp_min, json.main.humidity, json.name, json.weather[0].main];
  }
  // TODO: Need to create a seperate function for extracting all of the data needed rather than how
  // TODO: the one above is returning all of the data needed.

  // API Functions
  async fetchWeather(location) {
    const locat = location;
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${locat}&APPID=5714462c1533311f2fccfad1cc68c6b9&units=imperial`, { mode: 'cors' });
    return this.handleData(response);
  }
}

export default HandleWeather;
