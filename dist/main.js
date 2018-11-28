/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _some = __webpack_require__(/*! ./some */ \"./src/some.js\");\n\nvar _some2 = _interopRequireDefault(_some);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar myName = 3;\nvar myNewNum = (0, _some2.default)(myName);\n\nconsole.log(myNewNum);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJteU5hbWUiLCJteU5ld051bSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQUNBLElBQU1BLFNBQVMsQ0FBZjtBQUNBLElBQU1DLFdBQVcsb0JBQU9ELE1BQVAsQ0FBakI7O0FBRUFFLFFBQVFDLEdBQVIsQ0FBWUYsUUFBWiIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzcXVhcmUgZnJvbSAnLi9zb21lJztcbmNvbnN0IG15TmFtZSA9IDM7XG5jb25zdCBteU5ld051bSA9IHNxdWFyZShteU5hbWUpO1xuXG5jb25zb2xlLmxvZyhteU5ld051bSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/some.js":
/*!*********************!*\
  !*** ./src/some.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar testCurrent = function testCurrent(num) {\n  return num * num;\n};\n\nvar globalTest = function globalTest(num) {\n  document.body.innerHTML = 'квадрат вашего числа = ' + testCurrent(num);\n  return testCurrent(num);\n};\n\nexports.default = globalTest;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc29tZS5qcz9iN2IyIl0sIm5hbWVzIjpbInRlc3RDdXJyZW50IiwibnVtIiwiZ2xvYmFsVGVzdCIsImRvY3VtZW50IiwiYm9keSIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNBLE1BQU1BLEdBQWY7QUFBQSxDQUFwQjs7QUFFQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0QsR0FBRCxFQUFTO0FBQzFCRSxXQUFTQyxJQUFULENBQWNDLFNBQWQsR0FBMEIsNEJBQTRCTCxZQUFZQyxHQUFaLENBQXREO0FBQ0EsU0FBT0QsWUFBWUMsR0FBWixDQUFQO0FBQ0QsQ0FIRDs7a0JBTWVDLFUiLCJmaWxlIjoiLi9zcmMvc29tZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRlc3RDdXJyZW50ID0gKG51bSkgPT4gbnVtICogbnVtO1xuXG5jb25zdCBnbG9iYWxUZXN0ID0gKG51bSkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICfQutCy0LDQtNGA0LDRgiDQstCw0YjQtdCz0L4g0YfQuNGB0LvQsCA9ICcgKyB0ZXN0Q3VycmVudChudW0pO1xuICByZXR1cm4gdGVzdEN1cnJlbnQobnVtKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWxUZXN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/some.js\n");

/***/ })

/******/ });