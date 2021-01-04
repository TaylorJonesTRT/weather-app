import HandleWeather from './modules/HandleWeather';
import DisplayController from './modules/DisplayController';

const displayController = new DisplayController();
const handleWeather = new HandleWeather();
let units;

const input = document.querySelector('.search-input');
input.addEventListener('keyup', async (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    const location = input.value;
    const weatherImperial = await handleWeather.fetchWeather(location, 'imperial');
    const weatherMetric = await handleWeather.fetchWeather(location, 'metric');
    const temp = handleWeather.findTemp(weatherImperial);
    const name = handleWeather.getName(weatherImperial);
    const desc = handleWeather.findDesc(weatherImperial);
    const feelsLike = handleWeather.findFeelsLike(weatherImperial);
    const highLow = handleWeather.findMaxMinTemp(weatherImperial);
    const humidity = handleWeather.findHumidity(weatherImperial);
    displayController.updateText(temp, name, desc, feelsLike, highLow, humidity);
    input.value = '';
  }
});

const fSpan = document.querySelector('.f-span');
fSpan.addEventListener('click', () => {
  displayController.updateText(temp, name, desc, feelsLike, highLow, humidity); 
});
const cSpan = document.querySelector('.c-span');
cSpan.addEventListener('click', () => {
  displayController.updateText(temp, name, desc, feelsLike, highLow, humidity);
});

// TODO: Need to create a function that will handle whats in the event listener above and have the
// TODO: listener just call the function so that the units can be changed even after a location is loaded.
