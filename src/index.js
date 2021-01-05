import HandleWeather from './modules/HandleWeather';
import DisplayController from './modules/DisplayController';

const displayController = new DisplayController();
const handleWeather = new HandleWeather();

const input = document.querySelector('.search-input');
input.addEventListener('keyup', async (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    const location = input.value;
    const weather = await handleWeather.fetchWeather(location);
    const temp = handleWeather.findTemp(weather);
    const name = handleWeather.getName(weather);
    const desc = handleWeather.findDesc(weather);
    const feelsLike = handleWeather.findFeelsLike(weather);
    const highLow = handleWeather.findMaxMinTemp(weather);
    const humidity = handleWeather.findHumidity(weather);
    displayController.updateText(temp, name, desc, feelsLike, highLow, humidity);
    input.value = '';
  }
});

const fSpan = document.querySelector('.f-span');
fSpan.addEventListener('click', async () => {
  const location = document.querySelector('.location').textContent;
  const weather = await handleWeather.fetchWeather(location, 'imperial');
  const temp = handleWeather.findTemp(weather);
  const name = handleWeather.getName(weather);
  const desc = handleWeather.findDesc(weather);
  const feelsLike = handleWeather.findFeelsLike(weather);
  const highLow = handleWeather.findMaxMinTemp(weather);
  const humidity = handleWeather.findHumidity(weather);
  displayController.updateText(temp, name, desc, feelsLike, highLow, humidity); 
});
const cSpan = document.querySelector('.c-span');
cSpan.addEventListener('click', async () => {
  const location = document.querySelector('.location').textContent;
  const weather = await handleWeather.fetchWeather(location, 'metric');
  const temp = handleWeather.findTemp(weather);
  const name = handleWeather.getName(weather);
  const desc = handleWeather.findDesc(weather);
  const feelsLike = handleWeather.findFeelsLike(weather);
  const highLow = handleWeather.findMaxMinTemp(weather);
  const humidity = handleWeather.findHumidity(weather);
  displayController.updateText(temp, name, desc, feelsLike, highLow, humidity);
});
