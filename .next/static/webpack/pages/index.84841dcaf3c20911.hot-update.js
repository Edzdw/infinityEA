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

/***/ "./src/components/sections/Network.js":
/*!********************************************!*\
  !*** ./src/components/sections/Network.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_sliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/sliderProps */ \"./src/sliderProps.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _Swal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Swal */ \"./src/components/Swal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst About = ()=>{\n    _s();\n    const [networks, setNetworks] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [networksF1, setNetworksF1] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (localStorage.getItem(\"email\")) {\n            let config = {\n                method: \"get\",\n                // https://jellyfish-app-kafzn.ondigitalocean.app\n                url: \"http://localhost:8080/api/v1/auth/getNetwork/\".concat(encodeURI(localStorage.getItem(\"email\")))\n            };\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].request(config).then((response)=>{\n                setNetworks(response.data);\n                response.data.forEach((item)=>{\n                    if (response.data.level === 1) {\n                        setNetworksF1([\n                            ...item\n                        ]);\n                    }\n                });\n            }).catch(()=>{\n                (0,_Swal__WEBPACK_IMPORTED_MODULE_4__.normalAlert)(\"C\\xf3 lỗi xảy ra, vui l\\xf2ng thử lại sau!\", \"error\");\n                localStorage.clear();\n            });\n        } else {\n            return;\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"portfolio network main-section flex-column-mobile\",\n        id: \"network\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"custom-title\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"animated-layer fade-in-left-animation fadeInUp wow\",\n                            children: \"Our Network\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            networksF1 === null || networksF1 === void 0 ? void 0 : networksF1.map((item)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: item.email\n                    }, void 0, false, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: \"\",\n                className: \"separator hide-mobile\",\n                src: \"assets/separator.png\"\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(About, \"LcWdH/zuZqzgLdDGT7gK0fRZrLg=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9OZXR3b3JrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3dCO0FBQ0M7QUFDekI7QUFDWTtBQUV0QyxNQUFNTSxRQUFRLElBQU07O0lBQ2xCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUixxREFBYyxDQUFDLEVBQUU7SUFDakQsTUFBTSxDQUFDVSxZQUFZQyxjQUFjLEdBQUdYLHFEQUFjLENBQUMsRUFBRTtJQUVyREEsc0RBQWUsQ0FBQyxJQUFNO1FBQ3BCLElBQUlhLGFBQWFDLE9BQU8sQ0FBQyxVQUFVO1lBQ2pDLElBQUlDLFNBQVM7Z0JBQ1hDLFFBQVE7Z0JBQ1IsaURBQWlEO2dCQUNqREMsS0FBSyxnREFBeUYsT0FBekNDLFVBQVVMLGFBQWFDLE9BQU8sQ0FBQztZQUN0RjtZQUVBVixxREFBYSxDQUFDVyxRQUNYSyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtnQkFDbEJiLFlBQVlhLFNBQVNDLElBQUk7Z0JBQ3pCRCxTQUFTQyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDQyxPQUFTO29CQUM5QixJQUFJSCxTQUFTQyxJQUFJLENBQUNHLEtBQUssS0FBSyxHQUFHO3dCQUM3QmQsY0FBYzsrQkFBSWE7eUJBQUs7b0JBQ3pCLENBQUM7Z0JBQ0g7WUFDRixHQUNDRSxLQUFLLENBQUMsSUFBTTtnQkFDWHJCLGtEQUFXQSxDQUFDLDhDQUF3QztnQkFDcERRLGFBQWFjLEtBQUs7WUFDcEI7UUFDSixPQUFPO1lBQ0w7UUFDRixDQUFDO0lBQ0gsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVU7UUFDVkMsSUFBRzs7MEJBR0gsOERBQUNDO2dCQUFJRixXQUFVOzBCQUViLDRFQUFDRzs4QkFDQyw0RUFBQ0M7a0NBQ0MsNEVBQUNBOzRCQUFLSixXQUFVO3NDQUFxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUXhFbkIsdUJBQUFBLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFZd0IsR0FBRyxDQUFDLENBQUNWLE9BQVM7Z0JBQ3pCLHFCQUFROzhCQUNOLDRFQUFDUztrQ0FBTVQsS0FBS1csS0FBSzs7Ozs7OztZQUVyQjswQkFDRiw4REFBQ0M7Z0JBQ0NDLEtBQUk7Z0JBQ0pSLFdBQVU7Z0JBQ1ZTLEtBQUk7Ozs7Ozs7Ozs7OztBQUlaO0dBNURNaEM7S0FBQUE7QUE2RE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvTmV0d29yay5qcz9lMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNhbGltb3ZTbGlkZXIgfSBmcm9tIFwiQC9zcmMvc2xpZGVyUHJvcHNcIjtcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBub3JtYWxBbGVydCB9IGZyb20gXCIuLi9Td2FsXCI7XG5cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICBjb25zdCBbbmV0d29ya3MsIHNldE5ldHdvcmtzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25ldHdvcmtzRjEsIHNldE5ldHdvcmtzRjFdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIikpIHtcbiAgICAgIGxldCBjb25maWcgPSB7XG4gICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgIC8vIGh0dHBzOi8vamVsbHlmaXNoLWFwcC1rYWZ6bi5vbmRpZ2l0YWxvY2Vhbi5hcHBcbiAgICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS9hdXRoL2dldE5ldHdvcmsvJHtlbmNvZGVVUkkobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKSl9YFxuICAgICAgfTtcblxuICAgICAgQXhpb3MucmVxdWVzdChjb25maWcpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHNldE5ldHdvcmtzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGV2ZWwgPT09IDEpIHtcbiAgICAgICAgICAgICAgc2V0TmV0d29ya3NGMShbLi4uaXRlbV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIG5vcm1hbEFsZXJ0KFwiQ8OzIGzhu5dpIHjhuqN5IHJhLCB2dWkgbMOybmcgdGjhu60gbOG6oWkgc2F1IVwiLCBcImVycm9yXCIpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIGNsYXNzTmFtZT1cInBvcnRmb2xpbyBuZXR3b3JrIG1haW4tc2VjdGlvbiBmbGV4LWNvbHVtbi1tb2JpbGVcIlxuICAgICAgaWQ9XCJuZXR3b3JrXCJcbiAgICA+XG4gICAgICB7LyogVElUTEUgU1RBUlRTICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tdGl0bGVcIj5cbiAgICAgICAgey8qIE1BSU4gVElUTEUgU1RBUlRTICovfVxuICAgICAgICA8aDM+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbmltYXRlZC1sYXllciBmYWRlLWluLWxlZnQtYW5pbWF0aW9uIGZhZGVJblVwIHdvd1wiPlxuICAgICAgICAgICAgICBPdXIgTmV0d29ya1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9oMz5cbiAgICAgICAgey8qIE1BSU4gVElUTEUgRU5EUyAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIFRJVExFIEVORFMgKi99XG4gICAgICAgIHtuZXR3b3Jrc0YxPy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICA8c3Bhbj57aXRlbS5lbWFpbH08L3NwYW4+XG4gICAgICAgICAgPC8+KVxuICAgICAgICB9KX1cbiAgICAgIDxpbWdcbiAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgY2xhc3NOYW1lPVwic2VwYXJhdG9yIGhpZGUtbW9iaWxlXCJcbiAgICAgICAgc3JjPVwiYXNzZXRzL3NlcGFyYXRvci5wbmdcIlxuICAgICAgLz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzYWxpbW92U2xpZGVyIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJBeGlvcyIsIm5vcm1hbEFsZXJ0IiwiQWJvdXQiLCJuZXR3b3JrcyIsInNldE5ldHdvcmtzIiwidXNlU3RhdGUiLCJuZXR3b3Jrc0YxIiwic2V0TmV0d29ya3NGMSIsInVzZUVmZmVjdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25maWciLCJtZXRob2QiLCJ1cmwiLCJlbmNvZGVVUkkiLCJyZXF1ZXN0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImZvckVhY2giLCJpdGVtIiwibGV2ZWwiLCJjYXRjaCIsImNsZWFyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImlkIiwiZGl2IiwiaDMiLCJzcGFuIiwibWFwIiwiZW1haWwiLCJpbWciLCJhbHQiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/sections/Network.js\n"));

/***/ })

});