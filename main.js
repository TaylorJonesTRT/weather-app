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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_DisplayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DisplayController */ \"./src/modules/DisplayController.js\");\n/* harmony import */ var _modules_HandleWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/HandleWeather */ \"./src/modules/HandleWeather.js\");\n\n\n\nwindow.displayContoller = new _modules_DisplayController__WEBPACK_IMPORTED_MODULE_0__.default();\n\n\n//# sourceURL=webpack://Weather-App/./src/index.js?");

/***/ }),

/***/ "./src/modules/DisplayController.js":
/*!******************************************!*\
  !*** ./src/modules/DisplayController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass DisplayController {\n  constructor() {\n    this.appDiv = document.getElementById('app');\n    this.createContainer();\n    this.createWeatherContainer();\n    this.updateTempText();\n  }\n\n  createContainer() {\n    this.containerDiv = document.createElement('div');\n    this.containerDiv.id = 'container';\n    this.appDiv.appendChild(this.containerDiv);\n  }\n\n  createWeatherContainer() {\n    this.weatherAppContainer = document.createElement('div');\n    this.weatherAppContainer.classList.add('weather-app-container');\n    this.containerDiv.appendChild(this.weatherAppContainer);\n  }\n\n  updateTempText() {\n    this.tempArea = document.createElement('div');\n    this.weatherAppContainer.appendChild(this.tempArea);\n    this.tempArea.classList.add('weather-temp');\n    this.tempArea.innerText = '39';\n    this.testarea = document.createElement('div');\n    this.weatherAppContainer.appendChild(this.testarea);\n    this.testarea.classList.add('other-test');\n    this.testarea.innerText = 'Richardson';\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayController);\n\n\n//# sourceURL=webpack://Weather-App/./src/modules/DisplayController.js?");

/***/ }),

/***/ "./src/modules/HandleWeather.js":
/*!**************************************!*\
  !*** ./src/modules/HandleWeather.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass HandleWeather {\n  constructor() {\n    this.placeholder = 'hi';\n  }\n\n  // Data Handling\n  async handleData(data) {\n    const json = await data.json();\n    this.placeholder = 'yes';\n    return [json.main.temp, json.main.feels_like, json.main.humidity, json.name, json.weather[0].main];\n  }\n\n  // API Functions\n  async fetchWeather(location) {\n    const locat = location;\n    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${locat}&APPID=5714462c1533311f2fccfad1cc68c6b9&units=imperial`, { mode: 'cors' });\n    return this.handleData(response);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HandleWeather);\n\n\n//# sourceURL=webpack://Weather-App/./src/modules/HandleWeather.js?");

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