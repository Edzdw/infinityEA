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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_sliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/sliderProps */ \"./src/sliderProps.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _Swal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Swal */ \"./src/components/Swal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst About = ()=>{\n    _s();\n    const [networks, setNetworks] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (localStorage.getItem(\"email\")) {\n            let config = {\n                method: \"get\",\n                // https://jellyfish-app-kafzn.ondigitalocean.app\n                url: \"https://jellyfish-app-kafzn.ondigitalocean.app/api/v1/auth/getNetwork/\".concat(encodeURI(localStorage.getItem(\"email\")))\n            };\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].request(config).then((response)=>{\n                setNetworks(response.data);\n            }).catch((error)=>{\n                (0,_Swal__WEBPACK_IMPORTED_MODULE_4__.normalAlert)(\"C\\xf3 lỗi xảy ra, vui l\\xf2ng thử lại sau!\", \"error\");\n                console.log(error);\n            // localStorage.clear();\n            });\n        } else {\n            return;\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"portfolio network main-section flex-column-mobile\",\n        id: \"network\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"custom-title\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"animated-layer fade-in-left-animation fadeInUp wow\",\n                            children: \"Our Network\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            networks.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: item.level === 1 ? item.email : \"\"\n                }, index, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)),\n            networks.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: item.level === 2 ? item.email : \"\"\n                }, index, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)),\n            networks.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: item.level === 3 ? item.email : \"\"\n                }, index, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined)),\n            networks.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: item.level === 4 ? item.email : \"\"\n                }, index, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined)),\n            networks.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: item.level === 5 ? item.email : \"\"\n                }, index, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: \"\",\n                className: \"separator hide-mobile\",\n                src: \"assets/separator.png\"\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(About, \"nbXrnlk9XY2BCnsJk8UT8K68FLU=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9OZXR3b3JrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3dCO0FBQ0M7QUFDekI7QUFDWTtBQUV0QyxNQUFNTSxRQUFRLElBQU07O0lBQ2xCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUixxREFBYyxDQUFDLEVBQUU7SUFFakRBLHNEQUFlLENBQUMsSUFBTTtRQUNwQixJQUFJVyxhQUFhQyxPQUFPLENBQUMsVUFBVTtZQUNqQyxJQUFJQyxTQUFTO2dCQUNYQyxRQUFRO2dCQUNSLGlEQUFpRDtnQkFDakRDLEtBQUsseUVBQWtILE9BQXpDQyxVQUFVTCxhQUFhQyxPQUFPLENBQUM7WUFDL0c7WUFFQVIscURBQWEsQ0FBQ1MsUUFDWEssSUFBSSxDQUFDLENBQUNDLFdBQWE7Z0JBQ2xCWCxZQUFZVyxTQUFTQyxJQUFJO1lBQzNCLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQyxRQUFVO2dCQUNoQmpCLGtEQUFXQSxDQUFDLDhDQUF3QztnQkFDcERrQixRQUFRQyxHQUFHLENBQUNGO1lBQ1osd0JBQXdCO1lBQzFCO1FBQ0osT0FBTztZQUNMO1FBQ0YsQ0FBQztJQUNILEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRztRQUNDQyxXQUFVO1FBQ1ZDLElBQUc7OzBCQUdILDhEQUFDQztnQkFBSUYsV0FBVTswQkFFYiw0RUFBQ0c7OEJBQ0MsNEVBQUNDO2tDQUNDLDRFQUFDQTs0QkFBS0osV0FBVTtzQ0FBcUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVExRW5CLFNBQVN3QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ25CLDhEQUFDSDs4QkFBa0JFLEtBQUtFLEtBQUssS0FBSyxJQUFJRixLQUFLRyxLQUFLLEdBQUcsRUFBRTttQkFBMUNGOzs7OztZQUdaMUIsU0FBU3dCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbkIsOERBQUNIOzhCQUFrQkUsS0FBS0UsS0FBSyxLQUFLLElBQUlGLEtBQUtHLEtBQUssR0FBRyxFQUFFO21CQUExQ0Y7Ozs7O1lBR1oxQixTQUFTd0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNuQiw4REFBQ0g7OEJBQWtCRSxLQUFLRSxLQUFLLEtBQUssSUFBSUYsS0FBS0csS0FBSyxHQUFHLEVBQUU7bUJBQTFDRjs7Ozs7WUFHWjFCLFNBQVN3QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ25CLDhEQUFDSDs4QkFBa0JFLEtBQUtFLEtBQUssS0FBSyxJQUFJRixLQUFLRyxLQUFLLEdBQUcsRUFBRTttQkFBMUNGOzs7OztZQUdaMUIsU0FBU3dCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbkIsOERBQUNIOzhCQUFrQkUsS0FBS0UsS0FBSyxLQUFLLElBQUlGLEtBQUtHLEtBQUssR0FBRyxFQUFFO21CQUExQ0Y7Ozs7OzBCQUViLDhEQUFDRztnQkFDQ0MsS0FBSTtnQkFDSlgsV0FBVTtnQkFDVlksS0FBSTs7Ozs7Ozs7Ozs7O0FBSVo7R0FyRU1oQztLQUFBQTtBQXNFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9OZXR3b3JrLmpzP2UwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2FsaW1vdlNsaWRlciB9IGZyb20gXCJAL3NyYy9zbGlkZXJQcm9wc1wiO1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IG5vcm1hbEFsZXJ0IH0gZnJvbSBcIi4uL1N3YWxcIjtcblxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IFtuZXR3b3Jrcywgc2V0TmV0d29ya3NdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIikpIHtcbiAgICAgIGxldCBjb25maWcgPSB7XG4gICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgIC8vIGh0dHBzOi8vamVsbHlmaXNoLWFwcC1rYWZ6bi5vbmRpZ2l0YWxvY2Vhbi5hcHBcbiAgICAgICAgdXJsOiBgaHR0cHM6Ly9qZWxseWZpc2gtYXBwLWthZnpuLm9uZGlnaXRhbG9jZWFuLmFwcC9hcGkvdjEvYXV0aC9nZXROZXR3b3JrLyR7ZW5jb2RlVVJJKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIikpfWBcbiAgICAgIH07XG5cbiAgICAgIEF4aW9zLnJlcXVlc3QoY29uZmlnKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBzZXROZXR3b3JrcyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIG5vcm1hbEFsZXJ0KFwiQ8OzIGzhu5dpIHjhuqN5IHJhLCB2dWkgbMOybmcgdGjhu60gbOG6oWkgc2F1IVwiLCBcImVycm9yXCIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBjbGFzc05hbWU9XCJwb3J0Zm9saW8gbmV0d29yayBtYWluLXNlY3Rpb24gZmxleC1jb2x1bW4tbW9iaWxlXCJcbiAgICAgIGlkPVwibmV0d29ya1wiXG4gICAgPlxuICAgICAgey8qIFRJVExFIFNUQVJUUyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXRpdGxlXCI+XG4gICAgICAgIHsvKiBNQUlOIFRJVExFIFNUQVJUUyAqL31cbiAgICAgICAgPGgzPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5pbWF0ZWQtbGF5ZXIgZmFkZS1pbi1sZWZ0LWFuaW1hdGlvbiBmYWRlSW5VcCB3b3dcIj5cbiAgICAgICAgICAgICAgT3VyIE5ldHdvcmtcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvaDM+XG4gICAgICAgIHsvKiBNQUlOIFRJVExFIEVORFMgKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBUSVRMRSBFTkRTICovfVxuICAgICAge25ldHdvcmtzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+e2l0ZW0ubGV2ZWwgPT09IDEgPyBpdGVtLmVtYWlsIDogXCJcIn08L3NwYW4+XG4gICAgICApKX1cblxuICAgICAge25ldHdvcmtzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+e2l0ZW0ubGV2ZWwgPT09IDIgPyBpdGVtLmVtYWlsIDogXCJcIn08L3NwYW4+XG4gICAgICApKX1cblxuICAgICAge25ldHdvcmtzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+e2l0ZW0ubGV2ZWwgPT09IDMgPyBpdGVtLmVtYWlsIDogXCJcIn08L3NwYW4+XG4gICAgICApKX1cblxuICAgICAge25ldHdvcmtzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+e2l0ZW0ubGV2ZWwgPT09IDQgPyBpdGVtLmVtYWlsIDogXCJcIn08L3NwYW4+XG4gICAgICApKX1cblxuICAgICAge25ldHdvcmtzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+e2l0ZW0ubGV2ZWwgPT09IDUgPyBpdGVtLmVtYWlsIDogXCJcIn08L3NwYW4+XG4gICAgICApKX1cbiAgICAgIDxpbWdcbiAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgY2xhc3NOYW1lPVwic2VwYXJhdG9yIGhpZGUtbW9iaWxlXCJcbiAgICAgICAgc3JjPVwiYXNzZXRzL3NlcGFyYXRvci5wbmdcIlxuICAgICAgLz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzYWxpbW92U2xpZGVyIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJBeGlvcyIsIm5vcm1hbEFsZXJ0IiwiQWJvdXQiLCJuZXR3b3JrcyIsInNldE5ldHdvcmtzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uZmlnIiwibWV0aG9kIiwidXJsIiwiZW5jb2RlVVJJIiwicmVxdWVzdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpZCIsImRpdiIsImgzIiwic3BhbiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxldmVsIiwiZW1haWwiLCJpbWciLCJhbHQiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/sections/Network.js\n"));

/***/ })

});