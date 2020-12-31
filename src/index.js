import { fetchWeather } from './modules/HandleWeather';
import { DisplayController } from './modules/DisplayController';

// fetchWeather('Richardson').then(console.log);
window.displayContoller = new DisplayController();
fetchWeather('Richardson').then(console.log);
