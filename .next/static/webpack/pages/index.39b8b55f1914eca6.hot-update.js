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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_sliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/sliderProps */ \"./src/sliderProps.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _Swal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Swal */ \"./src/components/Swal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst About = ()=>{\n    _s();\n    const [networks, setNetworks] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [networksF1, setNetworksF1] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (localStorage.getItem(\"email\")) {\n            let config = {\n                method: \"get\",\n                // https://jellyfish-app-kafzn.ondigitalocean.app\n                url: \"http://localhost:8080/api/v1/auth/getNetwork/\".concat(encodeURI(localStorage.getItem(\"email\")))\n            };\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].request(config).then((response)=>{\n                setNetworks(response.data);\n                networks.forEach((item)=>{\n                    if (item.level === 1) {\n                        setNetworksF1(item);\n                    }\n                });\n            }).catch(()=>{\n                (0,_Swal__WEBPACK_IMPORTED_MODULE_4__.normalAlert)(\"C\\xf3 lỗi xảy ra, vui l\\xf2ng thử lại sau!\", \"error\");\n                localStorage.clear();\n            });\n        } else {\n            return;\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"portfolio network main-section flex-column-mobile\",\n        id: \"network\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"custom-title\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"animated-layer fade-in-left-animation fadeInUp wow\",\n                            children: \"Our Network\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            networksF1.map((item)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: item.email\n                    }, void 0, false, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: \"\",\n                className: \"separator hide-mobile\",\n                src: \"assets/separator.png\"\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(About, \"LcWdH/zuZqzgLdDGT7gK0fRZrLg=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9OZXR3b3JrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3dCO0FBQ0M7QUFDekI7QUFDWTtBQUV0QyxNQUFNTSxRQUFRLElBQU07O0lBQ2xCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUixxREFBYyxDQUFDLEVBQUU7SUFDakQsTUFBTSxDQUFDVSxZQUFZQyxjQUFjLEdBQUdYLHFEQUFjLENBQUMsRUFBRTtJQUVyREEsc0RBQWUsQ0FBQyxJQUFNO1FBQ3BCLElBQUlhLGFBQWFDLE9BQU8sQ0FBQyxVQUFVO1lBQ2pDLElBQUlDLFNBQVM7Z0JBQ1hDLFFBQVE7Z0JBQ1IsaURBQWlEO2dCQUNqREMsS0FBSyxnREFBeUYsT0FBekNDLFVBQVVMLGFBQWFDLE9BQU8sQ0FBQztZQUN0RjtZQUVBVixxREFBYSxDQUFDVyxRQUNYSyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtnQkFDbEJiLFlBQVlhLFNBQVNDLElBQUk7Z0JBRXpCZixTQUFTZ0IsT0FBTyxDQUFDLENBQUNDLE9BQVM7b0JBQ3pCLElBQUlBLEtBQUtDLEtBQUssS0FBSyxHQUFHO3dCQUNwQmQsY0FBY2E7b0JBQ2hCLENBQUM7Z0JBQ0g7WUFDRixHQUNDRSxLQUFLLENBQUMsSUFBTTtnQkFDWHJCLGtEQUFXQSxDQUFDLDhDQUF3QztnQkFDcERRLGFBQWFjLEtBQUs7WUFDcEI7UUFHSixPQUFPO1lBQ0w7UUFDRixDQUFDO0lBQ0gsR0FBRyxFQUFFO0lBSUwscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVU7UUFDVkMsSUFBRzs7MEJBR0gsOERBQUNDO2dCQUFJRixXQUFVOzBCQUViLDRFQUFDRzs4QkFDQyw0RUFBQ0M7a0NBQ0MsNEVBQUNBOzRCQUFLSixXQUFVO3NDQUFxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUTFFbkIsV0FBV3dCLEdBQUcsQ0FBQyxDQUFDVixPQUFTO2dCQUN4QixxQkFBUTs4QkFDTiw0RUFBQ1M7a0NBQU1ULEtBQUtXLEtBQUs7Ozs7Ozs7WUFFckI7MEJBQ0EsOERBQUNDO2dCQUNDQyxLQUFJO2dCQUNKUixXQUFVO2dCQUNWUyxLQUFJOzs7Ozs7Ozs7Ozs7QUFJWjtHQWpFTWhDO0tBQUFBO0FBa0VOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL05ldHdvcmsuanM/ZTA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzYWxpbW92U2xpZGVyIH0gZnJvbSBcIkAvc3JjL3NsaWRlclByb3BzXCI7XG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgbm9ybWFsQWxlcnQgfSBmcm9tIFwiLi4vU3dhbFwiO1xuXG5jb25zdCBBYm91dCA9ICgpID0+IHtcbiAgY29uc3QgW25ldHdvcmtzLCBzZXROZXR3b3Jrc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtuZXR3b3Jrc0YxLCBzZXROZXR3b3Jrc0YxXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpKSB7XG4gICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAvLyBodHRwczovL2plbGx5ZmlzaC1hcHAta2Fmem4ub25kaWdpdGFsb2NlYW4uYXBwXG4gICAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvYXV0aC9nZXROZXR3b3JrLyR7ZW5jb2RlVVJJKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIikpfWBcbiAgICAgIH07XG5cbiAgICAgIEF4aW9zLnJlcXVlc3QoY29uZmlnKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBzZXROZXR3b3JrcyhyZXNwb25zZS5kYXRhKTtcblxuICAgICAgICAgIG5ldHdvcmtzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmxldmVsID09PSAxKSB7XG4gICAgICAgICAgICAgIHNldE5ldHdvcmtzRjEoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgbm9ybWFsQWxlcnQoXCJDw7MgbOG7l2kgeOG6o3kgcmEsIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUhXCIsIFwiZXJyb3JcIik7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSwgW10pO1xuXG5cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBjbGFzc05hbWU9XCJwb3J0Zm9saW8gbmV0d29yayBtYWluLXNlY3Rpb24gZmxleC1jb2x1bW4tbW9iaWxlXCJcbiAgICAgIGlkPVwibmV0d29ya1wiXG4gICAgPlxuICAgICAgey8qIFRJVExFIFNUQVJUUyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXRpdGxlXCI+XG4gICAgICAgIHsvKiBNQUlOIFRJVExFIFNUQVJUUyAqL31cbiAgICAgICAgPGgzPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5pbWF0ZWQtbGF5ZXIgZmFkZS1pbi1sZWZ0LWFuaW1hdGlvbiBmYWRlSW5VcCB3b3dcIj5cbiAgICAgICAgICAgICAgT3VyIE5ldHdvcmtcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvaDM+XG4gICAgICAgIHsvKiBNQUlOIFRJVExFIEVORFMgKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBUSVRMRSBFTkRTICovfVxuICAgICAge25ldHdvcmtzRjEubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICA8c3Bhbj57aXRlbS5lbWFpbH08L3NwYW4+XG4gICAgICAgIDwvPilcbiAgICAgIH0pfVxuICAgICAgPGltZ1xuICAgICAgICBhbHQ9XCJcIlxuICAgICAgICBjbGFzc05hbWU9XCJzZXBhcmF0b3IgaGlkZS1tb2JpbGVcIlxuICAgICAgICBzcmM9XCJhc3NldHMvc2VwYXJhdG9yLnBuZ1wiXG4gICAgICAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInNhbGltb3ZTbGlkZXIiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIkF4aW9zIiwibm9ybWFsQWxlcnQiLCJBYm91dCIsIm5ldHdvcmtzIiwic2V0TmV0d29ya3MiLCJ1c2VTdGF0ZSIsIm5ldHdvcmtzRjEiLCJzZXROZXR3b3Jrc0YxIiwidXNlRWZmZWN0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbmZpZyIsIm1ldGhvZCIsInVybCIsImVuY29kZVVSSSIsInJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJsZXZlbCIsImNhdGNoIiwiY2xlYXIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaWQiLCJkaXYiLCJoMyIsInNwYW4iLCJtYXAiLCJlbWFpbCIsImltZyIsImFsdCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/sections/Network.js\n"));

/***/ })

});