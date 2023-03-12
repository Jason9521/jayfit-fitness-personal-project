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


let personalStorage = {
    namePersonal : "",
    weightCurrent : "",
    weightTarget : "",
    weightUS : "",
    weightMetric : "",
    weightLoss : "",
    weightGain : "",
    muscleGain : "",
    toneUp : "",
}

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

// Functions

function storePersonalInfo() {
    personalStorage.namePersonal = namePersonal.value
    personalStorage.weightCurrent = weightCurrent.value
    personalStorage.weightTarget = weightTarget.value
    personalStorage.weightUS = weightUS.checked
    personalStorage.weightMetric = weightMetric.checked
    personalStorage.weightLoss = weightLoss.checked
    personalStorage.weightGain = weightGain.checked
    personalStorage.muscleGain = muscleGain.checked
    personalStorage.toneUp = toneUp.checked

    window.localStorage.setItem("personalStorage", JSON.stringify(personalStorage))
}

function fetchPersonalInfo() {
   let getPersonalStorage = window.localStorage.getItem("personalStorage")
   personalStorage = JSON.parse(getPersonalStorage)
}


// Checks for personalStorage data in localStorage
function isPersonalStored() {
    if (localStorage.personalStorage) {

        openMacros.removeAttribute("disabled")
        openCalories.removeAttribute("disabled")
        openMacros.classList.remove('macro-option-disable')
        openCalories.classList.remove('macro-option-disable')
        openMacros.onmouseover = () => {
            openMacros.classList.add("macro-option-enable")
        }
        openMacros.onmouseleave = () => {
            openMacros.classList.remove("macro-option-enable")
        }
        openCalories.onmouseover = () => {
            openCalories.classList.add("macro-option-enable")
        }
        openCalories.onmouseleave = () => {
            openCalories.classList.remove("macro-option-enable")
        }
    }
    console.log(localStorage)
}


isPersonalStored()




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7OztBQ0xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0xEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZm9CO0FBQ0c7QUFDRDtBQUN0QjtBQUM4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXlmaXQtZml0bmVzcy1wZXJzb25hbC1wcm9qZWN0Ly4vc3JjL2V4ZXJjaXNlcy5qcyIsIndlYnBhY2s6Ly9qYXlmaXQtZml0bmVzcy1wZXJzb25hbC1wcm9qZWN0Ly4vc3JjL21hY3Jvcy5qcyIsIndlYnBhY2s6Ly9qYXlmaXQtZml0bmVzcy1wZXJzb25hbC1wcm9qZWN0Ly4vc3JjL3dvcmtvdXRzLmpzIiwid2VicGFjazovL2pheWZpdC1maXRuZXNzLXBlcnNvbmFsLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF5Zml0LWZpdG5lc3MtcGVyc29uYWwtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXlmaXQtZml0bmVzcy1wZXJzb25hbC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXlmaXQtZml0bmVzcy1wZXJzb25hbC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamF5Zml0LWZpdG5lc3MtcGVyc29uYWwtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pheWZpdC1maXRuZXNzLXBlcnNvbmFsLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXlmaXQtZml0bmVzcy1wZXJzb25hbC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2pheWZpdC1maXRuZXNzLXBlcnNvbmFsLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW5NZW51XCIpO1xyXG5jb25zdCBkcm9wRG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcERvd25cIik7XHJcblxyXG5vcGVuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRyb3BEb3duLmNsYXNzTGlzdC50b2dnbGUoXCJkcm9wZG93bi10b2dnbGVcIilcclxufSkiLCJjb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbk1lbnVcIik7XHJcbmNvbnN0IGRyb3BEb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wRG93blwiKTtcclxuY29uc3QgbWFjcm9zUGFnZU9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFjcm9zUGFnZU9wdGlvbnMnKVxyXG5jb25zdCBvcGVuUGVyc29uYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3BlblBlcnNvbmFsJylcclxuY29uc3QgbmFtZVBlcnNvbmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWVQZXJzb25hbCcpXHJcbmNvbnN0IHdlaWdodEN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VpZ2h0Q3VycmVudCcpXHJcbmNvbnN0IHdlaWdodFRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWlnaHRUYXJnZXQnKVxyXG5jb25zdCB3ZWlnaHRVUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWlnaHRVUycpXHJcbmNvbnN0IHdlaWdodE1ldHJpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWlnaHRNZXRyaWMnKVxyXG5jb25zdCB3ZWlnaHRMb3NzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlaWdodExvc3MnKVxyXG5jb25zdCB3ZWlnaHRHYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlaWdodEdhaW4nKVxyXG5jb25zdCBtdXNjbGVHYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ211c2NsZUdhaW4nKVxyXG5jb25zdCB0b25lVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9uZVVwJylcclxuY29uc3QgcGVyc29uYWxTdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVyc29uYWxTdWJtaXQnKVxyXG5jb25zdCBvcGVuTWFjcm9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5NYWNyb3MnKVxyXG5jb25zdCBvcGVuQ2Fsb3JpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3BlbkNhbG9yaWVzJylcclxuY29uc3QgcGVyc29uYWxNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGVyc29uYWxNb2RhbFwiKVxyXG5jb25zdCBwZXJzb25hbENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BlcnNvbmFsQ2xvc2UnKVxyXG5jb25zdCBtYWNyb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hY3JvTW9kYWwnKVxyXG5jb25zdCBtYWNyb0Nsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hY3JvQ2xvc2UnKVxyXG5jb25zdCBjYWxvcmllc01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbG9yaWVzTW9kYWwnKVxyXG5jb25zdCBjYWxvcmllc0Nsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbG9yaWVzQ2xvc2UnKVxyXG5cclxuXHJcbmxldCBwZXJzb25hbFN0b3JhZ2UgPSB7XHJcbiAgICBuYW1lUGVyc29uYWwgOiBcIlwiLFxyXG4gICAgd2VpZ2h0Q3VycmVudCA6IFwiXCIsXHJcbiAgICB3ZWlnaHRUYXJnZXQgOiBcIlwiLFxyXG4gICAgd2VpZ2h0VVMgOiBcIlwiLFxyXG4gICAgd2VpZ2h0TWV0cmljIDogXCJcIixcclxuICAgIHdlaWdodExvc3MgOiBcIlwiLFxyXG4gICAgd2VpZ2h0R2FpbiA6IFwiXCIsXHJcbiAgICBtdXNjbGVHYWluIDogXCJcIixcclxuICAgIHRvbmVVcCA6IFwiXCIsXHJcbn1cclxuXHJcbi8vIEV2ZW50IExpc3RlbmVyc1xyXG5cclxub3Blbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkcm9wRG93bi5jbGFzc0xpc3QudG9nZ2xlKFwiZHJvcGRvd24tdG9nZ2xlXCIpXHJcbiAgICBtYWNyb3NQYWdlT3B0aW9ucy5jbGFzc0xpc3QudG9nZ2xlKFwibWFjcm9zLW9wdGlvbnMtdG9nZ2xlXCIpXHJcbn0pXHJcblxyXG5vcGVuUGVyc29uYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBwZXJzb25hbE1vZGFsLnNob3dNb2RhbCgpXHJcbn0pXHJcblxyXG4vLyBwZXJzb25hbFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuLy8gICAgIHN0b3JlUGVyc29uYWxJbmZvKClcclxuLy8gfSlcclxuXHJcbnBlcnNvbmFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBwZXJzb25hbE1vZGFsLmNsb3NlKClcclxufSlcclxuXHJcbm9wZW5NYWNyb3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBtYWNyb01vZGFsLnNob3dNb2RhbCgpXHJcbn0pXHJcblxyXG5tYWNyb0Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbWFjcm9Nb2RhbC5jbG9zZSgpXHJcbn0pXHJcblxyXG5vcGVuQ2Fsb3JpZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjYWxvcmllc01vZGFsLnNob3dNb2RhbCgpXHJcbn0pXHJcblxyXG5jYWxvcmllc0Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY2Fsb3JpZXNNb2RhbC5jbG9zZSgpXHJcbn0pXHJcblxyXG4vLyBGdW5jdGlvbnNcclxuXHJcbmZ1bmN0aW9uIHN0b3JlUGVyc29uYWxJbmZvKCkge1xyXG4gICAgcGVyc29uYWxTdG9yYWdlLm5hbWVQZXJzb25hbCA9IG5hbWVQZXJzb25hbC52YWx1ZVxyXG4gICAgcGVyc29uYWxTdG9yYWdlLndlaWdodEN1cnJlbnQgPSB3ZWlnaHRDdXJyZW50LnZhbHVlXHJcbiAgICBwZXJzb25hbFN0b3JhZ2Uud2VpZ2h0VGFyZ2V0ID0gd2VpZ2h0VGFyZ2V0LnZhbHVlXHJcbiAgICBwZXJzb25hbFN0b3JhZ2Uud2VpZ2h0VVMgPSB3ZWlnaHRVUy5jaGVja2VkXHJcbiAgICBwZXJzb25hbFN0b3JhZ2Uud2VpZ2h0TWV0cmljID0gd2VpZ2h0TWV0cmljLmNoZWNrZWRcclxuICAgIHBlcnNvbmFsU3RvcmFnZS53ZWlnaHRMb3NzID0gd2VpZ2h0TG9zcy5jaGVja2VkXHJcbiAgICBwZXJzb25hbFN0b3JhZ2Uud2VpZ2h0R2FpbiA9IHdlaWdodEdhaW4uY2hlY2tlZFxyXG4gICAgcGVyc29uYWxTdG9yYWdlLm11c2NsZUdhaW4gPSBtdXNjbGVHYWluLmNoZWNrZWRcclxuICAgIHBlcnNvbmFsU3RvcmFnZS50b25lVXAgPSB0b25lVXAuY2hlY2tlZFxyXG5cclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBlcnNvbmFsU3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShwZXJzb25hbFN0b3JhZ2UpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBmZXRjaFBlcnNvbmFsSW5mbygpIHtcclxuICAgbGV0IGdldFBlcnNvbmFsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBlcnNvbmFsU3RvcmFnZVwiKVxyXG4gICBwZXJzb25hbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGdldFBlcnNvbmFsU3RvcmFnZSlcclxufVxyXG5cclxuXHJcbi8vIENoZWNrcyBmb3IgcGVyc29uYWxTdG9yYWdlIGRhdGEgaW4gbG9jYWxTdG9yYWdlXHJcbmZ1bmN0aW9uIGlzUGVyc29uYWxTdG9yZWQoKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLnBlcnNvbmFsU3RvcmFnZSkge1xyXG5cclxuICAgICAgICBvcGVuTWFjcm9zLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpXHJcbiAgICAgICAgb3BlbkNhbG9yaWVzLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpXHJcbiAgICAgICAgb3Blbk1hY3Jvcy5jbGFzc0xpc3QucmVtb3ZlKCdtYWNyby1vcHRpb24tZGlzYWJsZScpXHJcbiAgICAgICAgb3BlbkNhbG9yaWVzLmNsYXNzTGlzdC5yZW1vdmUoJ21hY3JvLW9wdGlvbi1kaXNhYmxlJylcclxuICAgICAgICBvcGVuTWFjcm9zLm9ubW91c2VvdmVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBvcGVuTWFjcm9zLmNsYXNzTGlzdC5hZGQoXCJtYWNyby1vcHRpb24tZW5hYmxlXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9wZW5NYWNyb3Mub25tb3VzZWxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBvcGVuTWFjcm9zLmNsYXNzTGlzdC5yZW1vdmUoXCJtYWNyby1vcHRpb24tZW5hYmxlXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9wZW5DYWxvcmllcy5vbm1vdXNlb3ZlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgb3BlbkNhbG9yaWVzLmNsYXNzTGlzdC5hZGQoXCJtYWNyby1vcHRpb24tZW5hYmxlXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9wZW5DYWxvcmllcy5vbm1vdXNlbGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIG9wZW5DYWxvcmllcy5jbGFzc0xpc3QucmVtb3ZlKFwibWFjcm8tb3B0aW9uLWVuYWJsZVwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSlcclxufVxyXG5cclxuXHJcbmlzUGVyc29uYWxTdG9yZWQoKVxyXG5cclxuXHJcbiIsImNvbnN0IG9wZW5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuTWVudVwiKTtcclxuY29uc3QgZHJvcERvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3BEb3duXCIpO1xyXG5cclxub3Blbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkcm9wRG93bi5jbGFzc0xpc3QudG9nZ2xlKFwiZHJvcGRvd24tdG9nZ2xlXCIpXHJcbn0pXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi9tYWNyb3MuanNcIlxyXG5pbXBvcnQgXCIuL2V4ZXJjaXNlcy5qc1wiXHJcbmltcG9ydCBcIi4vd29ya291dHMuanNcIlxyXG5cclxuaW1wb3J0IHRyZWFkbWlsbCBmcm9tIFwiLi9pbWFnZXMvdHJlYWRtaWxsLmpwZ1wiXHJcblxyXG5jb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbk1lbnVcIik7XHJcbmNvbnN0IGRyb3BEb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wRG93blwiKTtcclxuXHJcbm9wZW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZHJvcERvd24uY2xhc3NMaXN0LnRvZ2dsZShcImRyb3Bkb3duLXRvZ2dsZVwiKVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==