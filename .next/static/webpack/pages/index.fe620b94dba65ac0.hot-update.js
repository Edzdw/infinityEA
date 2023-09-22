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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_sliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/sliderProps */ \"./src/sliderProps.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var _CurrentNetwork__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CurrentNetwork */ \"./src/components/sections/CurrentNetwork.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _Swal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Swal */ \"./src/components/Swal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst About = ()=>{\n    _s();\n    const [networks, setNetworks] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const email = localStorage.getItem(\"email\");\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (!email) {\n            (0,_Swal__WEBPACK_IMPORTED_MODULE_5__.normalAlert)(\"C\\xf3 lỗi xảy ra, vui l\\xf2ng thử lại sau!\", \"error\");\n            return;\n        }\n        let config = {\n            method: \"get\",\n            url: \"https://jellyfish-app-kafzn.ondigitalocean.app/api/v1/auth/getNetwork/\".concat(encodeURI(localStorage.getItem(\"email\")))\n        };\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].request(config).then((response)=>{\n            setNetworks(response.data);\n        }).catch((error)=>{\n            (0,_Swal__WEBPACK_IMPORTED_MODULE_5__.normalAlert)(\"C\\xf3 lỗi xảy ra, vui l\\xf2ng thử lại sau!\", \"error\");\n            console.log(error);\n        // localStorage.clear();\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"portfolio network main-section flex-column-mobile\",\n        id: \"network\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"custom-title\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"animated-layer fade-in-left-animation fadeInUp wow\",\n                            children: \"Our Network\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CurrentNetwork__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                currentNetworksnetworks: networks,\n                prevNetworks: []\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: \"\",\n                className: \"separator hide-mobile\",\n                src: \"assets/separator.png\"\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(About, \"nbXrnlk9XY2BCnsJk8UT8K68FLU=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9OZXR3b3JrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN3QjtBQUNDO0FBQ0w7QUFDcEI7QUFDWTtBQUV0QyxNQUFNTyxRQUFRLElBQU07O0lBQ2xCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCxxREFBYyxDQUFDLEVBQUU7SUFDakQsTUFBTVcsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO0lBQ25DYixzREFBZSxDQUFDLElBQU07UUFDcEIsSUFBSSxDQUFDVyxPQUFPO1lBQ1ZMLGtEQUFXQSxDQUFDLDhDQUF3QztZQUNwRDtRQUNGLENBQUM7UUFFRCxJQUFJUyxTQUFTO1lBQ1hDLFFBQVE7WUFDUkMsS0FBSyx5RUFBa0gsT0FBekNDLFVBQVVOLGFBQWFDLE9BQU8sQ0FBQztRQUMvRztRQUVBUixxREFBYSxDQUFDVSxRQUNYSyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUNsQlosWUFBWVksU0FBU0MsSUFBSTtRQUMzQixHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtZQUNoQmxCLGtEQUFXQSxDQUFDLDhDQUF3QztZQUNwRG1CLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWix3QkFBd0I7UUFDMUI7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0c7UUFDQ0MsV0FBVTtRQUNWQyxJQUFHOzswQkFHSCw4REFBQ0M7Z0JBQUlGLFdBQVU7MEJBRWIsNEVBQUNHOzhCQUNDLDRFQUFDQztrQ0FDQyw0RUFBQ0E7NEJBQUtKLFdBQVU7c0NBQXFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBUTNFLDhEQUFDeEIsdURBQWNBO2dCQUFDNkIseUJBQXlCekI7Z0JBQVUwQixjQUFjLEVBQUU7Ozs7OzswQkFDbkUsOERBQUNDO2dCQUNDQyxLQUFJO2dCQUNKUixXQUFVO2dCQUNWUyxLQUFJOzs7Ozs7Ozs7Ozs7QUFJWjtHQW5ETTlCO0tBQUFBO0FBb0ROLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL05ldHdvcmsuanM/ZTA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzYWxpbW92U2xpZGVyIH0gZnJvbSBcIkAvc3JjL3NsaWRlclByb3BzXCI7XG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xuaW1wb3J0IEN1cnJlbnROZXR3b3JrIGZyb20gXCIuL0N1cnJlbnROZXR3b3JrXCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBub3JtYWxBbGVydCB9IGZyb20gXCIuLi9Td2FsXCI7XG5cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICBjb25zdCBbbmV0d29ya3MsIHNldE5ldHdvcmtzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZW1haWwpIHtcbiAgICAgIG5vcm1hbEFsZXJ0KFwiQ8OzIGzhu5dpIHjhuqN5IHJhLCB2dWkgbMOybmcgdGjhu60gbOG6oWkgc2F1IVwiLCBcImVycm9yXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjb25maWcgPSB7XG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgdXJsOiBgaHR0cHM6Ly9qZWxseWZpc2gtYXBwLWthZnpuLm9uZGlnaXRhbG9jZWFuLmFwcC9hcGkvdjEvYXV0aC9nZXROZXR3b3JrLyR7ZW5jb2RlVVJJKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIikpfWBcbiAgICB9O1xuXG4gICAgQXhpb3MucmVxdWVzdChjb25maWcpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgc2V0TmV0d29ya3MocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBub3JtYWxBbGVydChcIkPDsyBs4buXaSB44bqjeSByYSwgdnVpIGzDsm5nIHRo4butIGzhuqFpIHNhdSFcIiwgXCJlcnJvclwiKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAvLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgY2xhc3NOYW1lPVwicG9ydGZvbGlvIG5ldHdvcmsgbWFpbi1zZWN0aW9uIGZsZXgtY29sdW1uLW1vYmlsZVwiXG4gICAgICBpZD1cIm5ldHdvcmtcIlxuICAgID5cbiAgICAgIHsvKiBUSVRMRSBTVEFSVFMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS10aXRsZVwiPlxuICAgICAgICB7LyogTUFJTiBUSVRMRSBTVEFSVFMgKi99XG4gICAgICAgIDxoMz5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuaW1hdGVkLWxheWVyIGZhZGUtaW4tbGVmdC1hbmltYXRpb24gZmFkZUluVXAgd293XCI+XG4gICAgICAgICAgICAgIE91ciBOZXR3b3JrXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2gzPlxuICAgICAgICB7LyogTUFJTiBUSVRMRSBFTkRTICovfVxuICAgICAgPC9kaXY+XG4gICAgICB7LyogVElUTEUgRU5EUyAqL31cbiAgICAgIDxDdXJyZW50TmV0d29yayBjdXJyZW50TmV0d29ya3NuZXR3b3Jrcz17bmV0d29ya3N9IHByZXZOZXR3b3Jrcz17W119Lz5cbiAgICAgIDxpbWdcbiAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgY2xhc3NOYW1lPVwic2VwYXJhdG9yIGhpZGUtbW9iaWxlXCJcbiAgICAgICAgc3JjPVwiYXNzZXRzL3NlcGFyYXRvci5wbmdcIlxuICAgICAgLz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzYWxpbW92U2xpZGVyIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJDdXJyZW50TmV0d29yayIsIkF4aW9zIiwibm9ybWFsQWxlcnQiLCJBYm91dCIsIm5ldHdvcmtzIiwic2V0TmV0d29ya3MiLCJ1c2VTdGF0ZSIsImVtYWlsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZUVmZmVjdCIsImNvbmZpZyIsIm1ldGhvZCIsInVybCIsImVuY29kZVVSSSIsInJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaWQiLCJkaXYiLCJoMyIsInNwYW4iLCJjdXJyZW50TmV0d29ya3NuZXR3b3JrcyIsInByZXZOZXR3b3JrcyIsImltZyIsImFsdCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/sections/Network.js\n"));

/***/ })

});