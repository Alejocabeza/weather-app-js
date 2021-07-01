/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/app/weather.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/app/ui.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ \"./src/app/store.js\");\n\n\n;\n\n\n\nconst store = new _store__WEBPACK_IMPORTED_MODULE_2__.Store();\nconst { city, countryCode } = store.getLocationData();\nconst ui = new _ui__WEBPACK_IMPORTED_MODULE_1__.UI();\nconst weather = new _weather__WEBPACK_IMPORTED_MODULE_0__.Weather(city, countryCode);\n\nasync function fetchWeather(){\n  const data = await weather.getweather();\n  ui.render(data);\n}\n\ndocument.getElementById('w-change-btn').addEventListener('click', (e)=>{\n  const city = document.getElementById('city').value;\n  const countryCode = document.getElementById('contryCode').value;\n  weather.changeLocation(city, countryCode);\n  store.setLocationData(city, countryCode);\n  fetchWeather();\n  e.preventDefault();\n})\n\ndocument.addEventListener('DOMContentLoaded', fetchWeather)\n\n\n//# sourceURL=webpack://weather-app/./src/app/index.js?");

/***/ }),

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Store\": () => (/* binding */ Store)\n/* harmony export */ });\n\n\nclass Store{\n  constructor(){\n    this.city;\n    this.countryCode;\n    this.defaultCity = 'Caracas';\n    this.defaulCountryCode = 've'\n  }\n  getLocationData(){\n    if(localStorage.getItem('city') === null){\n      this.city = this.defaultCity;\n    }else{\n      this.city = localStorage.getItem('city')\n    }\n    if(localStorage.getItem('countryCode') === null){\n      this.countryCode = this.defaulCountryCode;\n    }else{\n      this.countryCode = localStorage.getItem('countryCode')\n    }\n    \n    return{\n      city: this.city,\n      countryCode: this.countryCode\n    }\n  }\n\n  setLocationData(city, countryCode){\n    localStorage.setItem('city', city);\n    localStorage.setItem('countryCode', countryCode);\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/app/store.js?");

/***/ }),

/***/ "./src/app/ui.js":
/*!***********************!*\
  !*** ./src/app/ui.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\n\n\nclass UI {\n  constructor(){\n    this.location = document.getElementById('weather-location');\n    this.desc = document.getElementById('weather-description');\n    this.string = document.getElementById('weather-string');\n    this.humidity = document.getElementById('weather-humidity');\n    this.wind = document.getElementById('weather-wind');\n  }\n\n  render(weather){\n    this.location.textContent = weather.name + ' / '+ weather.sys.country;\n    this.desc.textContent = weather.weather[0].description;\n    this.string.textContent = weather.main.temp + ' °c';\n    this.humidity.textContent = 'Humidity: '+weather.main.humidity+' %';\n    this.wind.textContent = 'wind: '+weather.wind.speed+' m/s';\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/app/ui.js?");

/***/ }),

/***/ "./src/app/weather.js":
/*!****************************!*\
  !*** ./src/app/weather.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Weather\": () => (/* binding */ Weather)\n/* harmony export */ });\n\n\n\nclass Weather {\n  constructor(city, countryCode){\n    this.city = city;\n    this.countryCode = contryCode;\n    this.apiKey = \"2162b9b02534035ed4c2687bee11ba9f\"\n  }\n\n  async getweather(){\n    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;\n    const response = await fetch(url);\n    const data = await response.json();\n    return data;\n  }\n\n  changeLocation(city, countryCode){\n    this.city = city;\n    this.countryCode = countryCode;\n  }\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/app/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/index.js");
/******/ 	
/******/ })()
;