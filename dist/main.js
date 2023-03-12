/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/exercises.js":
/*!**************************!*\
  !*** ./src/exercises.js ***!
  \**************************/
/***/ (() => {

const openMenu = document.getElementById("openMenu");
const dropDown = document.getElementById("dropDown");

openMenu.addEventListener('click', () => {
    dropDown.classList.toggle("dropdown-toggle")
})

/***/ }),

/***/ "./src/macros.js":
/*!***********************!*\
  !*** ./src/macros.js ***!
  \***********************/
/***/ (() => {

const openMenu = document.getElementById("openMenu");
const dropDown = document.getElementById("dropDown");
const macrosPageOptions = document.getElementById('macrosPageOptions')
const openPersonal = document.getElementById('openPersonal')
const namePersonal = document.getElementById('namePersonal')
const weightCurrent = document.getElementById('weightCurrent')
const weightTarget = document.getElementById('weightTarget')
const weightUS = document.getElementById('weightUS')
const weightMetric = document.getElementById('weightMetric')
const weightLoss = document.getElementById('weightLoss')
const weightGain = document.getElementById('weightGain')
const muscleGain = document.getElementById('muscleGain')
const toneUp = document.getElementById('toneUp')
const personalSubmit = document.getElementById('personalSubmit')
const openMacros = document.getElementById('openMacros')
const openCalories = document.getElementById('openCalories')
const personalModal = document.getElementById("personalModal")
const personalClose = document.getElementById('personalClose')
const macroModal = document.getElementById('macroModal')
const macroClose = document.getElementById('macroClose')
const caloriesModal = document.getElementById('caloriesModal')
const caloriesClose = document.getElementById('caloriesClose')


// Event Listeners

openMenu.addEventListener('click', () => {
    dropDown.classList.toggle("dropdown-toggle")
    macrosPageOptions.classList.toggle("macros-options-toggle")
})

openPersonal.addEventListener('click', () => {
    personalModal.showModal()
})

// personalSubmit.addEventListener('click', () => {
//     storePersonalInfo()
// })

personalClose.addEventListener('click', () => {
    personalModal.close()
})

openMacros.addEventListener('click', () => {
    macroModal.showModal()
})

macroClose.addEventListener('click', () => {
    macroModal.close()
})

openCalories.addEventListener('click', () => {
    caloriesModal.showModal()
})

caloriesClose.addEventListener('click', () => {
    caloriesModal.close()
})

function storePersonalInfo() {
    window.localStorage.setItem('namePersonal', namePersonal.value)
    window.localStorage.setItem('weightCurrent', weightCurrent.value)
    window.localStorage.setItem('weightTarget', weightTarget.value)
    window.localStorage.setItem('weightUS', weightUS.value)
    window.localStorage.setItem('weightMetric', weightMetric.value)
    window.localStorage.setItem('weightLoss', weightLoss.value)
    window.localStorage.setItem('weightGain', weightGain.value)
    window.localStorage.setItem('muscleGain', muscleGain.value)
    window.localStorage.setItem('toneUp', toneUp.value)
}
console.log(localStorage)
// personalModal.showModal()
// macroModal.showModal()
// caloriesModal.showModal()

/***/ }),

/***/ "./src/workouts.js":
/*!*************************!*\
  !*** ./src/workouts.js ***!
  \*************************/
/***/ (() => {

const openMenu = document.getElementById("openMenu");
const dropDown = document.getElementById("dropDown");

openMenu.addEventListener('click', () => {
    dropDown.classList.toggle("dropdown-toggle")
})


/***/ }),

/***/ "./src/images/treadmill.jpg":
/*!**********************************!*\
  !*** ./src/images/treadmill.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ad490fc8acec16e5d41a.jpg";

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _macros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./macros.js */ "./src/macros.js");
/* harmony import */ var _macros_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_macros_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _exercises_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercises.js */ "./src/exercises.js");
/* harmony import */ var _exercises_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_exercises_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _workouts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workouts.js */ "./src/workouts.js");
/* harmony import */ var _workouts_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_workouts_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_treadmill_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/treadmill.jpg */ "./src/images/treadmill.jpg");






const openMenu = document.getElementById("openMenu");
const dropDown = document.getElementById("dropDown");

openMenu.addEventListener('click', () => {
    dropDown.classList.toggle("dropdown-toggle")
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7OztBQ0xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNMRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZvQjtBQUNHO0FBQ0Q7QUFDdEI7QUFDOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF5Zml0LWZpdG5lc3MtcGVyc29uYWwtcHJvamVjdC8uL3NyYy9leGVyY2lzZXMuanMiLCJ3ZWJwYWNrOi8vamF5Zml0LWZpdG5lc3MtcGVyc29uYWwtcHJvamVjdC8uL3NyYy9tYWNyb3MuanMiLCJ3ZWJwYWNrOi8vamF5Zml0LWZpdG5lc3MtcGVyc29uYWwtcHJvamVjdC8uL3NyYy93b3Jrb3V0cy5qcyIsIndlYnBhY2s6Ly9qYXlmaXQtZml0bmVzcy1wZXJzb25hbC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pheWZpdC1maXRuZXNzLXBlcnNvbmFsLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamF5Zml0LWZpdG5lc3MtcGVyc29uYWwtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF5Zml0LWZpdG5lc3MtcGVyc29uYWwtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2pheWZpdC1maXRuZXNzLXBlcnNvbmFsLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXlmaXQtZml0bmVzcy1wZXJzb25hbC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF5Zml0LWZpdG5lc3MtcGVyc29uYWwtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qYXlmaXQtZml0bmVzcy1wZXJzb25hbC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9wZW5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuTWVudVwiKTtcclxuY29uc3QgZHJvcERvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3BEb3duXCIpO1xyXG5cclxub3Blbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkcm9wRG93bi5jbGFzc0xpc3QudG9nZ2xlKFwiZHJvcGRvd24tdG9nZ2xlXCIpXHJcbn0pIiwiY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW5NZW51XCIpO1xyXG5jb25zdCBkcm9wRG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcERvd25cIik7XHJcbmNvbnN0IG1hY3Jvc1BhZ2VPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hY3Jvc1BhZ2VPcHRpb25zJylcclxuY29uc3Qgb3BlblBlcnNvbmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5QZXJzb25hbCcpXHJcbmNvbnN0IG5hbWVQZXJzb25hbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lUGVyc29uYWwnKVxyXG5jb25zdCB3ZWlnaHRDdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlaWdodEN1cnJlbnQnKVxyXG5jb25zdCB3ZWlnaHRUYXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VpZ2h0VGFyZ2V0JylcclxuY29uc3Qgd2VpZ2h0VVMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VpZ2h0VVMnKVxyXG5jb25zdCB3ZWlnaHRNZXRyaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VpZ2h0TWV0cmljJylcclxuY29uc3Qgd2VpZ2h0TG9zcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWlnaHRMb3NzJylcclxuY29uc3Qgd2VpZ2h0R2FpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWlnaHRHYWluJylcclxuY29uc3QgbXVzY2xlR2FpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtdXNjbGVHYWluJylcclxuY29uc3QgdG9uZVVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvbmVVcCcpXHJcbmNvbnN0IHBlcnNvbmFsU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BlcnNvbmFsU3VibWl0JylcclxuY29uc3Qgb3Blbk1hY3JvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuTWFjcm9zJylcclxuY29uc3Qgb3BlbkNhbG9yaWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5DYWxvcmllcycpXHJcbmNvbnN0IHBlcnNvbmFsTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlcnNvbmFsTW9kYWxcIilcclxuY29uc3QgcGVyc29uYWxDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZXJzb25hbENsb3NlJylcclxuY29uc3QgbWFjcm9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWNyb01vZGFsJylcclxuY29uc3QgbWFjcm9DbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWNyb0Nsb3NlJylcclxuY29uc3QgY2Fsb3JpZXNNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYWxvcmllc01vZGFsJylcclxuY29uc3QgY2Fsb3JpZXNDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYWxvcmllc0Nsb3NlJylcclxuXHJcblxyXG4vLyBFdmVudCBMaXN0ZW5lcnNcclxuXHJcbm9wZW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZHJvcERvd24uY2xhc3NMaXN0LnRvZ2dsZShcImRyb3Bkb3duLXRvZ2dsZVwiKVxyXG4gICAgbWFjcm9zUGFnZU9wdGlvbnMuY2xhc3NMaXN0LnRvZ2dsZShcIm1hY3Jvcy1vcHRpb25zLXRvZ2dsZVwiKVxyXG59KVxyXG5cclxub3BlblBlcnNvbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcGVyc29uYWxNb2RhbC5zaG93TW9kYWwoKVxyXG59KVxyXG5cclxuLy8gcGVyc29uYWxTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbi8vICAgICBzdG9yZVBlcnNvbmFsSW5mbygpXHJcbi8vIH0pXHJcblxyXG5wZXJzb25hbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcGVyc29uYWxNb2RhbC5jbG9zZSgpXHJcbn0pXHJcblxyXG5vcGVuTWFjcm9zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbWFjcm9Nb2RhbC5zaG93TW9kYWwoKVxyXG59KVxyXG5cclxubWFjcm9DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1hY3JvTW9kYWwuY2xvc2UoKVxyXG59KVxyXG5cclxub3BlbkNhbG9yaWVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY2Fsb3JpZXNNb2RhbC5zaG93TW9kYWwoKVxyXG59KVxyXG5cclxuY2Fsb3JpZXNDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNhbG9yaWVzTW9kYWwuY2xvc2UoKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gc3RvcmVQZXJzb25hbEluZm8oKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25hbWVQZXJzb25hbCcsIG5hbWVQZXJzb25hbC52YWx1ZSlcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2VpZ2h0Q3VycmVudCcsIHdlaWdodEN1cnJlbnQudmFsdWUpXHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dlaWdodFRhcmdldCcsIHdlaWdodFRhcmdldC52YWx1ZSlcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2VpZ2h0VVMnLCB3ZWlnaHRVUy52YWx1ZSlcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2VpZ2h0TWV0cmljJywgd2VpZ2h0TWV0cmljLnZhbHVlKVxyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3ZWlnaHRMb3NzJywgd2VpZ2h0TG9zcy52YWx1ZSlcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2VpZ2h0R2FpbicsIHdlaWdodEdhaW4udmFsdWUpXHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ211c2NsZUdhaW4nLCBtdXNjbGVHYWluLnZhbHVlKVxyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b25lVXAnLCB0b25lVXAudmFsdWUpXHJcbn1cclxuY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKVxyXG4vLyBwZXJzb25hbE1vZGFsLnNob3dNb2RhbCgpXHJcbi8vIG1hY3JvTW9kYWwuc2hvd01vZGFsKClcclxuLy8gY2Fsb3JpZXNNb2RhbC5zaG93TW9kYWwoKSIsImNvbnN0IG9wZW5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuTWVudVwiKTtcclxuY29uc3QgZHJvcERvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3BEb3duXCIpO1xyXG5cclxub3Blbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkcm9wRG93bi5jbGFzc0xpc3QudG9nZ2xlKFwiZHJvcGRvd24tdG9nZ2xlXCIpXHJcbn0pXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi9tYWNyb3MuanNcIlxyXG5pbXBvcnQgXCIuL2V4ZXJjaXNlcy5qc1wiXHJcbmltcG9ydCBcIi4vd29ya291dHMuanNcIlxyXG5cclxuaW1wb3J0IHRyZWFkbWlsbCBmcm9tIFwiLi9pbWFnZXMvdHJlYWRtaWxsLmpwZ1wiXHJcblxyXG5jb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbk1lbnVcIik7XHJcbmNvbnN0IGRyb3BEb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wRG93blwiKTtcclxuXHJcbm9wZW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZHJvcERvd24uY2xhc3NMaXN0LnRvZ2dsZShcImRyb3Bkb3duLXRvZ2dsZVwiKVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==