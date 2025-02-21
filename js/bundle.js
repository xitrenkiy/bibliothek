/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/login.js":
/*!*****************************!*\
  !*** ./js/modules/login.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function login() {
	class User {
		constructor(login, password) {
			this.login = login;
			this.password = password;
		}
	}

	const admin = new User('admin', '12345678');

	const login = document.querySelector('input[name="login"]'),
		  password = document.querySelector('input[name="password"]'),
		  loginBtn = document.querySelector('button'),
		  wrapper = document.querySelector('.wrapper');
	
	loginBtn.addEventListener('click', (e) => {
		e.preventDefault();

		const existError = document.querySelector('.error');
		if (existError) {
			existError.remove();
		}

		if (login.value === admin.login && password.value === admin.password) {
			window.location.href = 'biblio.html';
		} else {
			const div = document.createElement('div');
			div.classList.add('error');

			if (login.value.trim() == '' || password.value.trim() == '') {
				div.textContent = 'Заполните все поля!';
				setTimeout(() => {
					div.remove();
				}, 3000);
			} else {
				div.textContent = 'У вас недостаточно прав, возможность регистрации будет предоставлена в ближайшем будущем.';
				setTimeout(() => {
					div.remove();
				}, 3000)
			}

			wrapper.appendChild(div);
		}
	});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function modal() {
	console.log('1');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./js/modules/server.js":
/*!******************************!*\
  !*** ./js/modules/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getData() {
	const url = "https://openlibrary.org/search.json?q=test";
	const headers = new Headers({
		"User-Agent": "MyAppName/1.0 (myemail@example.com)"
	});
	const options = {
		method: 'GET',
		headers: headers
	};
	fetch(url)
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(error => console.error('Error:', error));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(list, selector, listItem) {
	const all = document.querySelectorAll(selector),
		  ul = document.querySelector(list),
		  listStatus = document.querySelectorAll(listItem);

	ul.addEventListener('click', (e) => {
		const target = e.target;
		if (!target.matches(listItem)) return;
		
		listStatus.forEach(item => {
			item.classList.remove('clicked');
		});

		target.classList.add('clicked');
	});
	
	function setActiveById(id, selector) {
		const item = document.querySelector(id),
			  book = document.querySelector(selector);

		item.addEventListener('click', () => {
			all.forEach(item => {
				item.classList.remove('active');
			});
			book.classList.toggle('active');
		});
	}

	setActiveById('#read', '.read');
	setActiveById('#readed', '.readed');
	setActiveById('#future', '.future');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/login */ "./js/modules/login.js");
/* harmony import */ var _modules_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/server */ "./js/modules/server.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");







window.addEventListener('DOMContentLoaded', () => {

	(0,_modules_login__WEBPACK_IMPORTED_MODULE_0__["default"])();
	(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_2__["default"])('.list', '.books', '.list-item');
	(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map