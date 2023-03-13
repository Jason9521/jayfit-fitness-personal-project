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

// ID's

const openMenu = document.getElementById("openMenu");
const dropDown = document.getElementById("dropDown");
const macrosPageOptions = document.getElementById('macrosPageOptions')

const userName = document.getElementById('userName')
const objOneAnswer = document.getElementById('objOneAnswer')
const objTwoAnswer = document.getElementById('objTwoAnswer')

const openPersonal = document.getElementById('openPersonal')
const namePersonal = document.getElementById('namePersonal')
const weightCurrent = document.getElementById('weightCurrent')
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



// Global Variables

let personalStorage = {
    namePersonal : "",
    weightCurrent : "",
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

// Sets text in goal banner based on given user information
function setGoalBanner() {

    fetchPersonalInfo()

    userName.textContent = "Welcome, " + personalStorage.namePersonal
    objOneAnswer.textContent = personalStorage.weightCurrent + " lbs"
    
    Object.entries(personalStorage).forEach(([key, value]) => {
        if (value == true) {
            if (key == "weightGain") {
                objTwoAnswer.textContent = "To Gain Weight"
            }
            else if (key == "weightLoss") {
                objTwoAnswer.textContent = "To Lose Weight"
            }
            else if (key == "muscleGain") {
                objTwoAnswer.textContent = "To Gain Muscle"
            }
            else {
                objTwoAnswer.textContent = "To Tone Up"
            }           
        }
    })
}


isPersonalStored()
setGoalBanner()



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7OztBQ0xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMzSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0xEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZm9CO0FBQ0c7QUFDRDtBQUN0QjtBQUM4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXlmaXQtZml0bmVzcy1wZXJzb25hbC1wcm9qZWN0Ly4vc3JjL2V4ZXJjaXNlcy5qcyIsIndlYnBhY2s6Ly9qYXlmaXQtZml0bmVzcy1wZXJzb25hbC1wcm9qZWN0Ly4vc3JjL21hY3Jvcy5qcyIsIndlYnBhY2s6Ly9qYXlmaXQtZml0bmVzcy1wZXJzb25hbC1wcm9qZWN0Ly4vc3JjL3dvcmtvdXRzLmpzIiwid2VicGFjazovL2pheWZpdC1maXRuZXNzLXBlcnNvbmFsLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF5Zml0LWZpdG5lc3MtcGVyc29uYWwtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXlmaXQtZml0bmVzcy1wZXJzb25hbC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXlmaXQtZml0bmVzcy1wZXJzb25hbC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamF5Zml0LWZpdG5lc3MtcGVyc29uYWwtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pheWZpdC1maXRuZXNzLXBlcnNvbmFsLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXlmaXQtZml0bmVzcy1wZXJzb25hbC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2pheWZpdC1maXRuZXNzLXBlcnNvbmFsLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW5NZW51XCIpO1xyXG5jb25zdCBkcm9wRG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcERvd25cIik7XHJcblxyXG5vcGVuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRyb3BEb3duLmNsYXNzTGlzdC50b2dnbGUoXCJkcm9wZG93bi10b2dnbGVcIilcclxufSkiLCIvLyBJRCdzXHJcblxyXG5jb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbk1lbnVcIik7XHJcbmNvbnN0IGRyb3BEb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wRG93blwiKTtcclxuY29uc3QgbWFjcm9zUGFnZU9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFjcm9zUGFnZU9wdGlvbnMnKVxyXG5cclxuY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlck5hbWUnKVxyXG5jb25zdCBvYmpPbmVBbnN3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2JqT25lQW5zd2VyJylcclxuY29uc3Qgb2JqVHdvQW5zd2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29ialR3b0Fuc3dlcicpXHJcblxyXG5jb25zdCBvcGVuUGVyc29uYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3BlblBlcnNvbmFsJylcclxuY29uc3QgbmFtZVBlcnNvbmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWVQZXJzb25hbCcpXHJcbmNvbnN0IHdlaWdodEN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VpZ2h0Q3VycmVudCcpXHJcbmNvbnN0IHdlaWdodFVTID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlaWdodFVTJylcclxuY29uc3Qgd2VpZ2h0TWV0cmljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlaWdodE1ldHJpYycpXHJcbmNvbnN0IHdlaWdodExvc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VpZ2h0TG9zcycpXHJcbmNvbnN0IHdlaWdodEdhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VpZ2h0R2FpbicpXHJcbmNvbnN0IG11c2NsZUdhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXVzY2xlR2FpbicpXHJcbmNvbnN0IHRvbmVVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b25lVXAnKVxyXG5jb25zdCBwZXJzb25hbFN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZXJzb25hbFN1Ym1pdCcpXHJcblxyXG5jb25zdCBvcGVuTWFjcm9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5NYWNyb3MnKVxyXG5jb25zdCBvcGVuQ2Fsb3JpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3BlbkNhbG9yaWVzJylcclxuY29uc3QgcGVyc29uYWxNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGVyc29uYWxNb2RhbFwiKVxyXG5jb25zdCBwZXJzb25hbENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BlcnNvbmFsQ2xvc2UnKVxyXG5jb25zdCBtYWNyb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hY3JvTW9kYWwnKVxyXG5jb25zdCBtYWNyb0Nsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hY3JvQ2xvc2UnKVxyXG5cclxuY29uc3QgY2Fsb3JpZXNNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYWxvcmllc01vZGFsJylcclxuY29uc3QgY2Fsb3JpZXNDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYWxvcmllc0Nsb3NlJylcclxuXHJcblxyXG5cclxuLy8gR2xvYmFsIFZhcmlhYmxlc1xyXG5cclxubGV0IHBlcnNvbmFsU3RvcmFnZSA9IHtcclxuICAgIG5hbWVQZXJzb25hbCA6IFwiXCIsXHJcbiAgICB3ZWlnaHRDdXJyZW50IDogXCJcIixcclxuICAgIHdlaWdodFVTIDogXCJcIixcclxuICAgIHdlaWdodE1ldHJpYyA6IFwiXCIsXHJcbiAgICB3ZWlnaHRMb3NzIDogXCJcIixcclxuICAgIHdlaWdodEdhaW4gOiBcIlwiLFxyXG4gICAgbXVzY2xlR2FpbiA6IFwiXCIsXHJcbiAgICB0b25lVXAgOiBcIlwiLFxyXG59XHJcblxyXG4vLyBFdmVudCBMaXN0ZW5lcnNcclxuXHJcbm9wZW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZHJvcERvd24uY2xhc3NMaXN0LnRvZ2dsZShcImRyb3Bkb3duLXRvZ2dsZVwiKVxyXG4gICAgbWFjcm9zUGFnZU9wdGlvbnMuY2xhc3NMaXN0LnRvZ2dsZShcIm1hY3Jvcy1vcHRpb25zLXRvZ2dsZVwiKVxyXG59KVxyXG5cclxub3BlblBlcnNvbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcGVyc29uYWxNb2RhbC5zaG93TW9kYWwoKVxyXG59KVxyXG5cclxuLy8gcGVyc29uYWxTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbi8vICAgICBzdG9yZVBlcnNvbmFsSW5mbygpXHJcbi8vIH0pXHJcblxyXG5wZXJzb25hbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcGVyc29uYWxNb2RhbC5jbG9zZSgpXHJcbn0pXHJcblxyXG5vcGVuTWFjcm9zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbWFjcm9Nb2RhbC5zaG93TW9kYWwoKVxyXG59KVxyXG5cclxubWFjcm9DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1hY3JvTW9kYWwuY2xvc2UoKVxyXG59KVxyXG5cclxub3BlbkNhbG9yaWVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY2Fsb3JpZXNNb2RhbC5zaG93TW9kYWwoKVxyXG59KVxyXG5cclxuY2Fsb3JpZXNDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNhbG9yaWVzTW9kYWwuY2xvc2UoKVxyXG59KVxyXG5cclxuLy8gRnVuY3Rpb25zXHJcblxyXG5mdW5jdGlvbiBzdG9yZVBlcnNvbmFsSW5mbygpIHtcclxuICAgIHBlcnNvbmFsU3RvcmFnZS5uYW1lUGVyc29uYWwgPSBuYW1lUGVyc29uYWwudmFsdWVcclxuICAgIHBlcnNvbmFsU3RvcmFnZS53ZWlnaHRDdXJyZW50ID0gd2VpZ2h0Q3VycmVudC52YWx1ZVxyXG4gICAgcGVyc29uYWxTdG9yYWdlLndlaWdodFVTID0gd2VpZ2h0VVMuY2hlY2tlZFxyXG4gICAgcGVyc29uYWxTdG9yYWdlLndlaWdodE1ldHJpYyA9IHdlaWdodE1ldHJpYy5jaGVja2VkXHJcbiAgICBwZXJzb25hbFN0b3JhZ2Uud2VpZ2h0TG9zcyA9IHdlaWdodExvc3MuY2hlY2tlZFxyXG4gICAgcGVyc29uYWxTdG9yYWdlLndlaWdodEdhaW4gPSB3ZWlnaHRHYWluLmNoZWNrZWRcclxuICAgIHBlcnNvbmFsU3RvcmFnZS5tdXNjbGVHYWluID0gbXVzY2xlR2Fpbi5jaGVja2VkXHJcbiAgICBwZXJzb25hbFN0b3JhZ2UudG9uZVVwID0gdG9uZVVwLmNoZWNrZWRcclxuXHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwZXJzb25hbFN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkocGVyc29uYWxTdG9yYWdlKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZmV0Y2hQZXJzb25hbEluZm8oKSB7XHJcbiAgIGxldCBnZXRQZXJzb25hbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwZXJzb25hbFN0b3JhZ2VcIilcclxuICAgcGVyc29uYWxTdG9yYWdlID0gSlNPTi5wYXJzZShnZXRQZXJzb25hbFN0b3JhZ2UpXHJcbn1cclxuXHJcblxyXG4vLyBDaGVja3MgZm9yIHBlcnNvbmFsU3RvcmFnZSBkYXRhIGluIGxvY2FsU3RvcmFnZVxyXG5mdW5jdGlvbiBpc1BlcnNvbmFsU3RvcmVkKCkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5wZXJzb25hbFN0b3JhZ2UpIHtcclxuXHJcbiAgICAgICAgb3Blbk1hY3Jvcy5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKVxyXG4gICAgICAgIG9wZW5DYWxvcmllcy5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKVxyXG4gICAgICAgIG9wZW5NYWNyb3MuY2xhc3NMaXN0LnJlbW92ZSgnbWFjcm8tb3B0aW9uLWRpc2FibGUnKVxyXG4gICAgICAgIG9wZW5DYWxvcmllcy5jbGFzc0xpc3QucmVtb3ZlKCdtYWNyby1vcHRpb24tZGlzYWJsZScpXHJcbiAgICAgICAgb3Blbk1hY3Jvcy5vbm1vdXNlb3ZlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgb3Blbk1hY3Jvcy5jbGFzc0xpc3QuYWRkKFwibWFjcm8tb3B0aW9uLWVuYWJsZVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBvcGVuTWFjcm9zLm9ubW91c2VsZWF2ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgb3Blbk1hY3Jvcy5jbGFzc0xpc3QucmVtb3ZlKFwibWFjcm8tb3B0aW9uLWVuYWJsZVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBvcGVuQ2Fsb3JpZXMub25tb3VzZW92ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIG9wZW5DYWxvcmllcy5jbGFzc0xpc3QuYWRkKFwibWFjcm8tb3B0aW9uLWVuYWJsZVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBvcGVuQ2Fsb3JpZXMub25tb3VzZWxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBvcGVuQ2Fsb3JpZXMuY2xhc3NMaXN0LnJlbW92ZShcIm1hY3JvLW9wdGlvbi1lbmFibGVcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpXHJcbn1cclxuXHJcbi8vIFNldHMgdGV4dCBpbiBnb2FsIGJhbm5lciBiYXNlZCBvbiBnaXZlbiB1c2VyIGluZm9ybWF0aW9uXHJcbmZ1bmN0aW9uIHNldEdvYWxCYW5uZXIoKSB7XHJcblxyXG4gICAgZmV0Y2hQZXJzb25hbEluZm8oKVxyXG5cclxuICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gXCJXZWxjb21lLCBcIiArIHBlcnNvbmFsU3RvcmFnZS5uYW1lUGVyc29uYWxcclxuICAgIG9iak9uZUFuc3dlci50ZXh0Q29udGVudCA9IHBlcnNvbmFsU3RvcmFnZS53ZWlnaHRDdXJyZW50ICsgXCIgbGJzXCJcclxuICAgIFxyXG4gICAgT2JqZWN0LmVudHJpZXMocGVyc29uYWxTdG9yYWdlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09IFwid2VpZ2h0R2FpblwiKSB7XHJcbiAgICAgICAgICAgICAgICBvYmpUd29BbnN3ZXIudGV4dENvbnRlbnQgPSBcIlRvIEdhaW4gV2VpZ2h0XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgPT0gXCJ3ZWlnaHRMb3NzXCIpIHtcclxuICAgICAgICAgICAgICAgIG9ialR3b0Fuc3dlci50ZXh0Q29udGVudCA9IFwiVG8gTG9zZSBXZWlnaHRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PSBcIm11c2NsZUdhaW5cIikge1xyXG4gICAgICAgICAgICAgICAgb2JqVHdvQW5zd2VyLnRleHRDb250ZW50ID0gXCJUbyBHYWluIE11c2NsZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvYmpUd29BbnN3ZXIudGV4dENvbnRlbnQgPSBcIlRvIFRvbmUgVXBcIlxyXG4gICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuaXNQZXJzb25hbFN0b3JlZCgpXHJcbnNldEdvYWxCYW5uZXIoKVxyXG5cclxuIiwiY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW5NZW51XCIpO1xyXG5jb25zdCBkcm9wRG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcERvd25cIik7XHJcblxyXG5vcGVuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRyb3BEb3duLmNsYXNzTGlzdC50b2dnbGUoXCJkcm9wZG93bi10b2dnbGVcIilcclxufSlcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgXCIuL21hY3Jvcy5qc1wiXHJcbmltcG9ydCBcIi4vZXhlcmNpc2VzLmpzXCJcclxuaW1wb3J0IFwiLi93b3Jrb3V0cy5qc1wiXHJcblxyXG5pbXBvcnQgdHJlYWRtaWxsIGZyb20gXCIuL2ltYWdlcy90cmVhZG1pbGwuanBnXCJcclxuXHJcbmNvbnN0IG9wZW5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuTWVudVwiKTtcclxuY29uc3QgZHJvcERvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3BEb3duXCIpO1xyXG5cclxub3Blbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkcm9wRG93bi5jbGFzc0xpc3QudG9nZ2xlKFwiZHJvcGRvd24tdG9nZ2xlXCIpXHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9