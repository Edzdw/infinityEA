"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/sections/CurrentNetwork.js":
/*!***************************************************!*\
  !*** ./src/components/sections/CurrentNetwork.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction CurrentNetwork(param) {\n    let { networks  } = param;\n    _s();\n    console.log(networks);\n    const [currentLevel, setCurrentLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [currentList, setCurrentList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(networks.filter((item)=>item.level === currentLevel));\n    console.log(currentList);\n    const [previousLists, setPreviousLists] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleAccountClick = (email, level)=>{\n        console.log(\"Clicked on account:\", email, \"with level:\", level);\n        setCurrentLevel(level + 1);\n        setPreviousLists([\n            ...previousLists,\n            currentList\n        ]);\n        setCurrentList(networks.filter((item)=>item.referrer === email));\n    };\n    const handleGoBack = ()=>{\n        if (previousLists.length > 0) {\n            const previousList = previousLists.pop();\n            setCurrentList(previousList);\n            setCurrentLevel(currentLevel - 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleGoBack,\n                children: \"Quay lại\"\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/CurrentNetwork.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: currentList.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: item.email\n                            }, void 0, false, {\n                                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/CurrentNetwork.js\",\n                                lineNumber: 35,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleAccountClick(item.email, item.level),\n                                children: \"Xem tiếp\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/CurrentNetwork.js\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/CurrentNetwork.js\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/CurrentNetwork.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/CurrentNetwork.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_s(CurrentNetwork, \"EPRZ0ZbvEeb7K12UGdgXfRJ0BU8=\");\n_c = CurrentNetwork;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CurrentNetwork);\nvar _c;\n$RefreshReg$(_c, \"CurrentNetwork\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9DdXJyZW50TmV0d29yay5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBRXhDLFNBQVNFLGVBQWUsS0FBWSxFQUFFO1FBQWQsRUFBRUMsU0FBUSxFQUFFLEdBQVo7O0lBQ3BCQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1osTUFBTSxDQUFDRyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDTyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUMxQ0UsU0FBU08sTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEtBQUssS0FBS047SUFHN0NGLFFBQVFDLEdBQUcsQ0FBQ0c7SUFDWixNQUFNLENBQUNLLGVBQWVDLGlCQUFpQixHQUFHYiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJELE1BQU1jLHFCQUFxQixDQUFDQyxPQUFPSixRQUFVO1FBQ3pDUixRQUFRQyxHQUFHLENBQUMsdUJBQXVCVyxPQUFPLGVBQWVKO1FBRXpETCxnQkFBZ0JLLFFBQVE7UUFDeEJFLGlCQUFpQjtlQUFJRDtZQUFlTDtTQUFZO1FBQ2hEQyxlQUFlTixTQUFTTyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS00sUUFBUSxLQUFLRDtJQUMvRDtJQUVBLE1BQU1FLGVBQWUsSUFBTTtRQUN2QixJQUFJTCxjQUFjTSxNQUFNLEdBQUcsR0FBRztZQUMxQixNQUFNQyxlQUFlUCxjQUFjUSxHQUFHO1lBQ3RDWixlQUFlVztZQUNmYixnQkFBZ0JELGVBQWU7UUFDbkMsQ0FBQztJQUNMO0lBRUEscUJBQ0ksOERBQUNnQjs7MEJBQ0csOERBQUNDO2dCQUFPQyxTQUFTTjswQkFBYzs7Ozs7OzBCQUMvQiw4REFBQ087MEJBQ0lqQixZQUFZa0IsR0FBRyxDQUFDLENBQUNmLE1BQU1nQixzQkFDcEIsOERBQUNDOzswQ0FDRyw4REFBQ0M7MENBQU1sQixLQUFLSyxLQUFLOzs7Ozs7MENBQ2pCLDhEQUFDTztnQ0FBT0MsU0FBUyxJQUFNVCxtQkFBbUJKLEtBQUtLLEtBQUssRUFBRUwsS0FBS0MsS0FBSzswQ0FBRzs7Ozs7Ozt1QkFGOURlOzs7Ozs7Ozs7Ozs7Ozs7O0FBVTdCO0dBekNTekI7S0FBQUE7QUEyQ1QsK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvQ3VycmVudE5ldHdvcmsuanM/NjRiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQ3VycmVudE5ldHdvcmsoeyBuZXR3b3JrcyB9KSB7XG4gICAgY29uc29sZS5sb2cobmV0d29ya3MpO1xuICAgIGNvbnN0IFtjdXJyZW50TGV2ZWwsIHNldEN1cnJlbnRMZXZlbF0gPSB1c2VTdGF0ZSgxKTtcbiAgICBjb25zdCBbY3VycmVudExpc3QsIHNldEN1cnJlbnRMaXN0XSA9IHVzZVN0YXRlKFxuICAgICAgICBuZXR3b3Jrcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ubGV2ZWwgPT09IGN1cnJlbnRMZXZlbClcbiAgICApO1xuXG4gICAgY29uc29sZS5sb2coY3VycmVudExpc3QpO1xuICAgIGNvbnN0IFtwcmV2aW91c0xpc3RzLCBzZXRQcmV2aW91c0xpc3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZUFjY291bnRDbGljayA9IChlbWFpbCwgbGV2ZWwpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDbGlja2VkIG9uIGFjY291bnQ6XCIsIGVtYWlsLCBcIndpdGggbGV2ZWw6XCIsIGxldmVsKTtcbiAgICAgICAgXG4gICAgICAgIHNldEN1cnJlbnRMZXZlbChsZXZlbCArIDEpO1xuICAgICAgICBzZXRQcmV2aW91c0xpc3RzKFsuLi5wcmV2aW91c0xpc3RzLCBjdXJyZW50TGlzdF0pO1xuICAgICAgICBzZXRDdXJyZW50TGlzdChuZXR3b3Jrcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ucmVmZXJyZXIgPT09IGVtYWlsKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUdvQmFjayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHByZXZpb3VzTGlzdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNMaXN0ID0gcHJldmlvdXNMaXN0cy5wb3AoKTtcbiAgICAgICAgICAgIHNldEN1cnJlbnRMaXN0KHByZXZpb3VzTGlzdCk7XG4gICAgICAgICAgICBzZXRDdXJyZW50TGV2ZWwoY3VycmVudExldmVsIC0gMSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlR29CYWNrfT5RdWF5IGzhuqFpPC9idXR0b24+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2N1cnJlbnRMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uZW1haWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBY2NvdW50Q2xpY2soaXRlbS5lbWFpbCwgaXRlbS5sZXZlbCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhlbSB0aeG6v3BcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VycmVudE5ldHdvcms7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkN1cnJlbnROZXR3b3JrIiwibmV0d29ya3MiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudExldmVsIiwic2V0Q3VycmVudExldmVsIiwiY3VycmVudExpc3QiLCJzZXRDdXJyZW50TGlzdCIsImZpbHRlciIsIml0ZW0iLCJsZXZlbCIsInByZXZpb3VzTGlzdHMiLCJzZXRQcmV2aW91c0xpc3RzIiwiaGFuZGxlQWNjb3VudENsaWNrIiwiZW1haWwiLCJyZWZlcnJlciIsImhhbmRsZUdvQmFjayIsImxlbmd0aCIsInByZXZpb3VzTGlzdCIsInBvcCIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsIm1hcCIsImluZGV4IiwibGkiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/sections/CurrentNetwork.js\n"));

/***/ })

});