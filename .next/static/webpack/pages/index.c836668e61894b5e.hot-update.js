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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction CurrentNetwork(param) {\n    let { networks  } = param;\n    _s();\n    console.log(networks);\n    const [currentLevel, setCurrentLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [currentList, setCurrentList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        networks.forEach((item)=>{\n            if (item.level === currentLevel) {\n                setCurrentList([\n                    ...currentList,\n                    item\n                ]);\n            }\n        });\n    }, []);\n    const [previousLists, setPreviousLists] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const test = (e)=>{\n        console.log(e);\n    };\n    const handleAccountClick = (email, level)=>{\n        console.log(\"Clicked on account:\", email, \"with level:\", level);\n        // Lọc tài khoản theo level\n        const filteredAccounts = networks.filter((account)=>account.level === level);\n        // Cập nhật danh sách hiện tại và level\n        setCurrentList(filteredAccounts);\n        setCurrentLevel(level);\n        // Lưu danh sách trước đó vào danh sách trước\n        setPreviousLists([\n            ...previousLists,\n            currentList\n        ]);\n    };\n    const handleGoBack = ()=>{\n        // Trở lại danh sách trước đó\n        if (previousLists.length > 0) {\n            const previousList = previousLists.pop();\n            setCurrentList(previousList);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleGoBack,\n                children: \"Quay lại\"\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/CurrentNetwork.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: currentList.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            onClick: test(\"123123123\"),\n                            children: item.email\n                        }, void 0, false, {\n                            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/CurrentNetwork.js\",\n                            lineNumber: 49,\n                            columnNumber: 25\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/CurrentNetwork.js\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/CurrentNetwork.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/CurrentNetwork.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this);\n}\n_s(CurrentNetwork, \"s3GmM74Fe2xSIhHDsv6HaYepPJ0=\");\n_c = CurrentNetwork;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CurrentNetwork);\nvar _c;\n$RefreshReg$(_c, \"CurrentNetwork\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9DdXJyZW50TmV0d29yay5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBRXhDLFNBQVNFLGVBQWUsS0FBWSxFQUFFO1FBQWQsRUFBRUMsU0FBUSxFQUFFLEdBQVo7O0lBQ3BCQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1osTUFBTSxDQUFDRyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDTyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFFakRELHNEQUFlLENBQUMsSUFBTTtRQUNsQkcsU0FBU1EsT0FBTyxDQUFDLENBQUNDLE9BQVM7WUFDdkIsSUFBSUEsS0FBS0MsS0FBSyxLQUFLUCxjQUFjO2dCQUM3QkcsZUFBZTt1QkFBSUQ7b0JBQWFJO2lCQUFLO1lBQ3pDLENBQUM7UUFDTDtJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU0sQ0FBQ0UsZUFBZUMsaUJBQWlCLEdBQUdkLCtDQUFRQSxDQUFDLEVBQUU7SUFFckQsTUFBTWUsT0FBTyxDQUFDQyxJQUFNO1FBQ2hCYixRQUFRQyxHQUFHLENBQUNZO0lBQ2hCO0lBRUEsTUFBTUMscUJBQXFCLENBQUNDLE9BQU9OLFFBQVU7UUFDekNULFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJjLE9BQU8sZUFBZU47UUFDekQsMkJBQTJCO1FBQzNCLE1BQU1PLG1CQUFtQmpCLFNBQVNrQixNQUFNLENBQUMsQ0FBQ0MsVUFBWUEsUUFBUVQsS0FBSyxLQUFLQTtRQUV4RSx1Q0FBdUM7UUFDdkNKLGVBQWVXO1FBQ2ZiLGdCQUFnQk07UUFFaEIsNkNBQTZDO1FBQzdDRSxpQkFBaUI7ZUFBSUQ7WUFBZU47U0FBWTtJQUNwRDtJQUVBLE1BQU1lLGVBQWUsSUFBTTtRQUN2Qiw2QkFBNkI7UUFDN0IsSUFBSVQsY0FBY1UsTUFBTSxHQUFHLEdBQUc7WUFDMUIsTUFBTUMsZUFBZVgsY0FBY1ksR0FBRztZQUN0Q2pCLGVBQWVnQjtRQUNuQixDQUFDO0lBQ0w7SUFFQSxxQkFDSSw4REFBQ0U7OzBCQUNHLDhEQUFDQztnQkFBT0MsU0FBU047MEJBQWM7Ozs7OzswQkFDL0IsOERBQUNPOzBCQUNJdEIsWUFBWXVCLEdBQUcsQ0FBQyxDQUFDbkIsTUFBTW9CLHNCQUNwQiw4REFBQ0M7a0NBQ0csNEVBQUNDOzRCQUFLTCxTQUFTYixLQUFLO3NDQUFlSixLQUFLTyxLQUFLOzs7Ozs7dUJBRHhDYTs7Ozs7Ozs7Ozs7Ozs7OztBQU83QjtHQXBEUzlCO0tBQUFBO0FBc0RULCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL0N1cnJlbnROZXR3b3JrLmpzPzY0YmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIEN1cnJlbnROZXR3b3JrKHsgbmV0d29ya3MgfSkge1xuICAgIGNvbnNvbGUubG9nKG5ldHdvcmtzKTtcbiAgICBjb25zdCBbY3VycmVudExldmVsLCBzZXRDdXJyZW50TGV2ZWxdID0gdXNlU3RhdGUoMSk7XG4gICAgY29uc3QgW2N1cnJlbnRMaXN0LCBzZXRDdXJyZW50TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBuZXR3b3Jrcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5sZXZlbCA9PT0gY3VycmVudExldmVsKSB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudExpc3QoWy4uLmN1cnJlbnRMaXN0LCBpdGVtXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IFtwcmV2aW91c0xpc3RzLCBzZXRQcmV2aW91c0xpc3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IHRlc3QgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVBY2NvdW50Q2xpY2sgPSAoZW1haWwsIGxldmVsKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2xpY2tlZCBvbiBhY2NvdW50OlwiLCBlbWFpbCwgXCJ3aXRoIGxldmVsOlwiLCBsZXZlbCk7XG4gICAgICAgIC8vIEzhu41jIHTDoGkga2hv4bqjbiB0aGVvIGxldmVsXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkQWNjb3VudHMgPSBuZXR3b3Jrcy5maWx0ZXIoKGFjY291bnQpID0+IGFjY291bnQubGV2ZWwgPT09IGxldmVsKTtcblxuICAgICAgICAvLyBD4bqtcCBuaOG6rXQgZGFuaCBzw6FjaCBoaeG7h24gdOG6oWkgdsOgIGxldmVsXG4gICAgICAgIHNldEN1cnJlbnRMaXN0KGZpbHRlcmVkQWNjb3VudHMpO1xuICAgICAgICBzZXRDdXJyZW50TGV2ZWwobGV2ZWwpO1xuXG4gICAgICAgIC8vIEzGsHUgZGFuaCBzw6FjaCB0csaw4bubYyDEkcOzIHbDoG8gZGFuaCBzw6FjaCB0csaw4bubY1xuICAgICAgICBzZXRQcmV2aW91c0xpc3RzKFsuLi5wcmV2aW91c0xpc3RzLCBjdXJyZW50TGlzdF0pO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVHb0JhY2sgPSAoKSA9PiB7XG4gICAgICAgIC8vIFRy4bufIGzhuqFpIGRhbmggc8OhY2ggdHLGsOG7m2MgxJHDs1xuICAgICAgICBpZiAocHJldmlvdXNMaXN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0xpc3QgPSBwcmV2aW91c0xpc3RzLnBvcCgpO1xuICAgICAgICAgICAgc2V0Q3VycmVudExpc3QocHJldmlvdXNMaXN0KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVHb0JhY2t9PlF1YXkgbOG6oWk8L2J1dHRvbj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7Y3VycmVudExpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0ZXN0KFwiMTIzMTIzMTIzXCIpfT57aXRlbS5lbWFpbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDdXJyZW50TmV0d29yaztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ3VycmVudE5ldHdvcmsiLCJuZXR3b3JrcyIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50TGV2ZWwiLCJzZXRDdXJyZW50TGV2ZWwiLCJjdXJyZW50TGlzdCIsInNldEN1cnJlbnRMaXN0IiwidXNlRWZmZWN0IiwiZm9yRWFjaCIsIml0ZW0iLCJsZXZlbCIsInByZXZpb3VzTGlzdHMiLCJzZXRQcmV2aW91c0xpc3RzIiwidGVzdCIsImUiLCJoYW5kbGVBY2NvdW50Q2xpY2siLCJlbWFpbCIsImZpbHRlcmVkQWNjb3VudHMiLCJmaWx0ZXIiLCJhY2NvdW50IiwiaGFuZGxlR29CYWNrIiwibGVuZ3RoIiwicHJldmlvdXNMaXN0IiwicG9wIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsInVsIiwibWFwIiwiaW5kZXgiLCJsaSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/sections/CurrentNetwork.js\n"));

/***/ })

});