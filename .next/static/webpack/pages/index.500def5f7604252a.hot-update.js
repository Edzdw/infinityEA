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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction CurrentNetwork(param) {\n    let { networks  } = param;\n    _s();\n    const [currentLevel, setCurrentLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [currentList, setCurrentList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        networks.forEach((item)=>{\n            if (item.level === currentLevel) {\n                setCurrentList([\n                    ...currentList,\n                    item\n                ]);\n            }\n        });\n    }, []);\n    const [previousLists, setPreviousLists] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleAccountClick = (email)=>{\n        console.log(\"Clicked on account:\", email, \"with level:\", level);\n        // Lọc tài khoản theo level\n        // const filteredAccounts = networks.filter((account) => account.level === level);\n        // // Cập nhật danh sách hiện tại và level\n        // setCurrentList(filteredAccounts);\n        // setCurrentLevel(level);\n        // // Lưu danh sách trước đó vào danh sách trước\n        setPreviousLists(currentList);\n    };\n    const handleGoBack = ()=>{\n        // Trở lại danh sách trước đó\n        if (previousLists.length > 0) {\n            const previousList = previousLists.pop();\n            setCurrentList(previousList);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleGoBack,\n                children: \"Quay lại\"\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/CurrentNetwork.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: currentList.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            onClick: console.log(item.email),\n                            children: item.email\n                        }, void 0, false, {\n                            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/CurrentNetwork.js\",\n                            lineNumber: 44,\n                            columnNumber: 25\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/CurrentNetwork.js\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/CurrentNetwork.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/CurrentNetwork.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_s(CurrentNetwork, \"s3GmM74Fe2xSIhHDsv6HaYepPJ0=\");\n_c = CurrentNetwork;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CurrentNetwork);\nvar _c;\n$RefreshReg$(_c, \"CurrentNetwork\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9DdXJyZW50TmV0d29yay5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBRXhDLFNBQVNFLGVBQWUsS0FBWSxFQUFFO1FBQWQsRUFBRUMsU0FBUSxFQUFFLEdBQVo7O0lBQ3BCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ0ssYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRWpERCxzREFBZSxDQUFDLElBQU07UUFDbEJHLFNBQVNNLE9BQU8sQ0FBQyxDQUFDQyxPQUFTO1lBQ3ZCLElBQUlBLEtBQUtDLEtBQUssS0FBS1AsY0FBYztnQkFDN0JHLGVBQWU7dUJBQUlEO29CQUFhSTtpQkFBSztZQUN6QyxDQUFDO1FBQ0w7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNLENBQUNFLGVBQWVDLGlCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJELE1BQU1hLHFCQUFxQixDQUFDQyxRQUFVO1FBQ2xDQyxRQUFRQyxHQUFHLENBQUMsdUJBQXVCRixPQUFPLGVBQWVKO1FBQ3pELDJCQUEyQjtRQUMzQixrRkFBa0Y7UUFFbEYsMENBQTBDO1FBQzFDLG9DQUFvQztRQUNwQywwQkFBMEI7UUFFMUIsZ0RBQWdEO1FBQ2hERSxpQkFBaUJQO0lBQ3JCO0lBRUEsTUFBTVksZUFBZSxJQUFNO1FBQ3ZCLDZCQUE2QjtRQUM3QixJQUFJTixjQUFjTyxNQUFNLEdBQUcsR0FBRztZQUMxQixNQUFNQyxlQUFlUixjQUFjUyxHQUFHO1lBQ3RDZCxlQUFlYTtRQUNuQixDQUFDO0lBQ0w7SUFFQSxxQkFDSSw4REFBQ0U7OzBCQUNHLDhEQUFDQztnQkFBT0MsU0FBU047MEJBQWM7Ozs7OzswQkFDL0IsOERBQUNPOzBCQUNJbkIsWUFBWW9CLEdBQUcsQ0FBQyxDQUFDaEIsTUFBTWlCLHNCQUNwQiw4REFBQ0M7a0NBQ0csNEVBQUNDOzRCQUFLTCxTQUFTUixRQUFRQyxHQUFHLENBQUNQLEtBQUtLLEtBQUs7c0NBQUlMLEtBQUtLLEtBQUs7Ozs7Ozt1QkFEOUNZOzs7Ozs7Ozs7Ozs7Ozs7O0FBTzdCO0dBL0NTekI7S0FBQUE7QUFpRFQsK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvQ3VycmVudE5ldHdvcmsuanM/NjRiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQ3VycmVudE5ldHdvcmsoeyBuZXR3b3JrcyB9KSB7XG4gICAgY29uc3QgW2N1cnJlbnRMZXZlbCwgc2V0Q3VycmVudExldmVsXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IFtjdXJyZW50TGlzdCwgc2V0Q3VycmVudExpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbmV0d29ya3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0ubGV2ZWwgPT09IGN1cnJlbnRMZXZlbCkge1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRMaXN0KFsuLi5jdXJyZW50TGlzdCwgaXRlbV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBbcHJldmlvdXNMaXN0cywgc2V0UHJldmlvdXNMaXN0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBjb25zdCBoYW5kbGVBY2NvdW50Q2xpY2sgPSAoZW1haWwpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDbGlja2VkIG9uIGFjY291bnQ6XCIsIGVtYWlsLCBcIndpdGggbGV2ZWw6XCIsIGxldmVsKTtcbiAgICAgICAgLy8gTOG7jWMgdMOgaSBraG/huqNuIHRoZW8gbGV2ZWxcbiAgICAgICAgLy8gY29uc3QgZmlsdGVyZWRBY2NvdW50cyA9IG5ldHdvcmtzLmZpbHRlcigoYWNjb3VudCkgPT4gYWNjb3VudC5sZXZlbCA9PT0gbGV2ZWwpO1xuXG4gICAgICAgIC8vIC8vIEPhuq1wIG5o4bqtdCBkYW5oIHPDoWNoIGhp4buHbiB04bqhaSB2w6AgbGV2ZWxcbiAgICAgICAgLy8gc2V0Q3VycmVudExpc3QoZmlsdGVyZWRBY2NvdW50cyk7XG4gICAgICAgIC8vIHNldEN1cnJlbnRMZXZlbChsZXZlbCk7XG5cbiAgICAgICAgLy8gLy8gTMawdSBkYW5oIHPDoWNoIHRyxrDhu5tjIMSRw7MgdsOgbyBkYW5oIHPDoWNoIHRyxrDhu5tjXG4gICAgICAgIHNldFByZXZpb3VzTGlzdHMoY3VycmVudExpc3QpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVHb0JhY2sgPSAoKSA9PiB7XG4gICAgICAgIC8vIFRy4bufIGzhuqFpIGRhbmggc8OhY2ggdHLGsOG7m2MgxJHDs1xuICAgICAgICBpZiAocHJldmlvdXNMaXN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0xpc3QgPSBwcmV2aW91c0xpc3RzLnBvcCgpO1xuICAgICAgICAgICAgc2V0Q3VycmVudExpc3QocHJldmlvdXNMaXN0KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVHb0JhY2t9PlF1YXkgbOG6oWk8L2J1dHRvbj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7Y3VycmVudExpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtjb25zb2xlLmxvZyhpdGVtLmVtYWlsKX0+e2l0ZW0uZW1haWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VycmVudE5ldHdvcms7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkN1cnJlbnROZXR3b3JrIiwibmV0d29ya3MiLCJjdXJyZW50TGV2ZWwiLCJzZXRDdXJyZW50TGV2ZWwiLCJjdXJyZW50TGlzdCIsInNldEN1cnJlbnRMaXN0IiwidXNlRWZmZWN0IiwiZm9yRWFjaCIsIml0ZW0iLCJsZXZlbCIsInByZXZpb3VzTGlzdHMiLCJzZXRQcmV2aW91c0xpc3RzIiwiaGFuZGxlQWNjb3VudENsaWNrIiwiZW1haWwiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlR29CYWNrIiwibGVuZ3RoIiwicHJldmlvdXNMaXN0IiwicG9wIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsInVsIiwibWFwIiwiaW5kZXgiLCJsaSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/sections/CurrentNetwork.js\n"));

/***/ })

});