// Data Handling
async function handleData(data) {
  const json = await data.json();
  return [json.main.temp, json.main.feels_like, json.main.humidity, json.name, json.weather[0].main];
}

// API Functions
async function fetchWeather(location) {
  const locat = location;
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${locat}&APPID=5714462c1533311f2fccfad1cc68c6b9&units=imperial`, { mode: 'cors' });
  return handleData(response);
}

export { fetchWeather };
