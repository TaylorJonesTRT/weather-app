/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_HandleWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/HandleWeather */ \"./src/modules/HandleWeather.js\");\n/* harmony import */ var _modules_DisplayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DisplayController */ \"./src/modules/DisplayController.js\");\n\n\n\nconst displayController = new _modules_DisplayController__WEBPACK_IMPORTED_MODULE_1__.default();\nconst handleWeather = new _modules_HandleWeather__WEBPACK_IMPORTED_MODULE_0__.default();\nlet units;\n\nconst input = document.querySelector('.search-input');\ninput.addEventListener('keyup', async (event) => {\n  if (event.keyCode === 13) {\n    event.preventDefault();\n    const location = input.value;\n    const weather = await handleWeather.fetchWeather(location);\n    const temp = handleWeather.findTemp(weather);\n    const name = handleWeather.getName(weather);\n    const desc = handleWeather.findDesc(weather);\n    const feelsLike = handleWeather.findFeelsLike(weather);\n    const highLow = handleWeather.findMaxMinTemp(weather);\n    const humidity = handleWeather.findHumidity(weather);\n    displayController.updateText(temp, name, desc, feelsLike, highLow, humidity);\n    input.value = '';\n  }\n});\n\nconst fSpan = document.querySelector('.f-span');\nfSpan.addEventListener('click', async () => {\n  const location = document.querySelector('.location').textContent;\n  const weather = await handleWeather.fetchWeather(location, 'imperial');\n  const temp = handleWeather.findTemp(weather);\n  const name = handleWeather.getName(weather);\n  const desc = handleWeather.findDesc(weather);\n  const feelsLike = handleWeather.findFeelsLike(weather);\n  const highLow = handleWeather.findMaxMinTemp(weather);\n  const humidity = handleWeather.findHumidity(weather);\n  displayController.updateText(temp, name, desc, feelsLike, highLow, humidity); \n});\nconst cSpan = document.querySelector('.c-span');\ncSpan.addEventListener('click', async () => {\n  const location = document.querySelector('.location').textContent;\n  const weather = await handleWeather.fetchWeather(location, 'metric');\n  const temp = handleWeather.findTemp(weather);\n  const name = handleWeather.getName(weather);\n  const desc = handleWeather.findDesc(weather);\n  const feelsLike = handleWeather.findFeelsLike(weather);\n  const highLow = handleWeather.findMaxMinTemp(weather);\n  const humidity = handleWeather.findHumidity(weather);\n  displayController.updateText(temp, name, desc, feelsLike, highLow, humidity);\n});\n\n// TODO: Need to create a function that will handle whats in the event listener above and have the\n// TODO: listener just call the function so that the units can be changed even after a location is loaded.\n\n\n//# sourceURL=webpack://Weather-App/./src/index.js?");

/***/ }),

/***/ "./src/modules/DisplayController.js":
/*!******************************************!*\
  !*** ./src/modules/DisplayController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass DisplayController {\n  constructor() {\n    this.appDiv = document.getElementById('app');\n    this.createContainer();\n    this.createTopBar();\n    this.createWeatherContainer();\n    this.createTempArea();\n    this.createInfoArea();\n  }\n\n  createContainer() {\n    this.containerDiv = document.createElement('div');\n    this.containerDiv.id = 'container';\n    this.appDiv.appendChild(this.containerDiv);\n  }\n\n  createTopBar() {\n    this.topBarDiv = document.createElement('div');\n    this.topBarDiv.classList.add('search');\n    this.unitOptionsDiv = document.createElement('div');\n    this.unitOptionsDiv.classList.add('unit-options');\n    this.fSpan = document.createElement('span');\n    this.fSpan.classList.add('f-span');\n    this.fSpan.innerText = 'F';\n    this.cSpan = document.createElement('span');\n    this.cSpan.classList.add('c-span');\n    this.cSpan.innerText = 'C';\n    this.search = document.createElement('input');\n    this.search.classList.add('search-input');\n    this.search.placeholder = 'Search Location';\n    this.unitOptionsDiv.appendChild(this.fSpan);\n    this.unitOptionsDiv.appendChild(this.cSpan);\n    this.topBarDiv.appendChild(this.unitOptionsDiv);\n    this.topBarDiv.appendChild(this.search);\n    this.containerDiv.appendChild(this.topBarDiv);\n  }\n\n  createWeatherContainer() {\n    this.weatherAppContainer = document.createElement('div');\n    this.weatherAppContainer.classList.add('weather-app-container');\n    this.containerDiv.appendChild(this.weatherAppContainer);\n  }\n\n  createTempArea() {\n    this.tempArea = document.createElement('div');\n    this.weatherAppContainer.appendChild(this.tempArea);\n    this.tempArea.classList.add('weather-temp');\n    this.weatherAppContainer.appendChild(this.tempArea);\n  }\n\n  createInfoArea() {\n    this.infoArea = document.createElement('div');\n    this.infoArea.classList.add('info-area');\n    this.nameDiv = document.createElement('div');\n    this.nameDiv.classList.add('location');\n    this.descriptionDiv = document.createElement('div');\n    this.descriptionDiv.classList.add('weather-desc');\n    this.feelsLikeDiv = document.createElement('div');\n    this.feelsLikeDiv.classList.add('feels-like');\n    this.highLowDiv = document.createElement('div');\n    this.highLowDiv.classList.add('high-low');\n    this.humidityDiv = document.createElement('div');\n    this.humidityDiv.classList.add('humidity');\n    this.weatherAppContainer.appendChild(this.infoArea);\n    this.infoArea.appendChild(this.nameDiv);\n    this.infoArea.appendChild(this.descriptionDiv);\n    this.infoArea.appendChild(this.feelsLikeDiv);\n    this.infoArea.appendChild(this.highLowDiv);\n    this.infoArea.appendChild(this.humidityDiv);\n  }\n\n  updateText(temp, name, desc, feelsLike, highLow, humidity) {\n    this.tempArea.innerText = `${temp}°`;\n    this.nameDiv.innerText = name;\n    this.descriptionDiv.innerText = desc;\n    this.feelsLikeDiv.innerText = `Feels like: ${feelsLike}°`;\n    this.highLowDiv.innerText = `High: ${highLow[0]}° | Low: ${highLow[1]}°`;\n    this.humidityDiv.innerText = `Humidity: ${humidity}%`;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayController);\n\n\n//# sourceURL=webpack://Weather-App/./src/modules/DisplayController.js?");

/***/ }),

/***/ "./src/modules/HandleWeather.js":
/*!**************************************!*\
  !*** ./src/modules/HandleWeather.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass HandleWeather {\n  // Data Handling\n  async handleData(apiData) {\n    this.json = await apiData.json();\n    return this.json;\n  }\n\n  findTemp(data) {\n    this.data = data;\n    return data.main.temp;\n  }\n\n  getName(data) {\n    this.data = data;\n    return data.name;\n  }\n\n  findDesc(data) {\n    this.data = data;\n    return data.weather[0].main;\n  }\n\n  findFeelsLike(data) {\n    this.data = data;\n    return data.main.feels_like;\n  }\n\n  findMaxMinTemp(data) {\n    this.data = data;\n    return [data.main.temp_max, data.main.temp_min];\n  }\n\n  findWeatherType(data) {\n    this.data = data;\n    return data.weather.main;\n  }\n\n  findHumidity(data) {\n    this.data = data;\n    return data.main.humidity;\n  }\n\n  // API Functions\n  async fetchWeather(location, units = 'imperial') {\n    const locat = location;\n    const measurementUnits = units;\n    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${locat}&APPID=5714462c1533311f2fccfad1cc68c6b9&units=${measurementUnits}`, { mode: 'cors' });\n    return this.handleData(response);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HandleWeather);\n\n\n//# sourceURL=webpack://Weather-App/./src/modules/HandleWeather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;