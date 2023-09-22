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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_sliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/sliderProps */ \"./src/sliderProps.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _Swal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Swal */ \"./src/components/Swal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst About = ()=>{\n    _s();\n    const [networks, setNetworks] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [networksF1, setNetworksF1] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (localStorage.getItem(\"email\")) {\n            let config = {\n                method: \"get\",\n                // https://jellyfish-app-kafzn.ondigitalocean.app\n                url: \"http://localhost:8080/api/v1/auth/getNetwork/\".concat(encodeURI(localStorage.getItem(\"email\")))\n            };\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].request(config).then((response)=>{\n                setNetworks(response.data);\n                response.data.forEach((item)=>{\n                    if (response.data.level === 1) {\n                        setNetworksF1([\n                            item\n                        ]);\n                    }\n                });\n            }).catch(()=>{\n                (0,_Swal__WEBPACK_IMPORTED_MODULE_4__.normalAlert)(\"C\\xf3 lỗi xảy ra, vui l\\xf2ng thử lại sau!\", \"error\");\n                localStorage.clear();\n            });\n        } else {\n            return;\n        }\n    }, []);\n    console.log(networksF1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"portfolio network main-section flex-column-mobile\",\n        id: \"network\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"custom-title\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"animated-layer fade-in-left-animation fadeInUp wow\",\n                            children: \"Our Network\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            networksF1.map((item)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: item.email\n                    }, void 0, false, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: \"\",\n                className: \"separator hide-mobile\",\n                src: \"assets/separator.png\"\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(About, \"LcWdH/zuZqzgLdDGT7gK0fRZrLg=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9OZXR3b3JrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3dCO0FBQ0M7QUFDekI7QUFDWTtBQUV0QyxNQUFNTSxRQUFRLElBQU07O0lBQ2xCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUixxREFBYyxDQUFDLEVBQUU7SUFDakQsTUFBTSxDQUFDVSxZQUFZQyxjQUFjLEdBQUdYLHFEQUFjLENBQUMsRUFBRTtJQUVyREEsc0RBQWUsQ0FBQyxJQUFNO1FBQ3BCLElBQUlhLGFBQWFDLE9BQU8sQ0FBQyxVQUFVO1lBQ2pDLElBQUlDLFNBQVM7Z0JBQ1hDLFFBQVE7Z0JBQ1IsaURBQWlEO2dCQUNqREMsS0FBSyxnREFBeUYsT0FBekNDLFVBQVVMLGFBQWFDLE9BQU8sQ0FBQztZQUN0RjtZQUVBVixxREFBYSxDQUFDVyxRQUNYSyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtnQkFDbEJiLFlBQVlhLFNBQVNDLElBQUk7Z0JBQ3pCRCxTQUFTQyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDQyxPQUFTO29CQUM5QixJQUFJSCxTQUFTQyxJQUFJLENBQUNHLEtBQUssS0FBSyxHQUFHO3dCQUM3QmQsY0FBYzs0QkFBQ2E7eUJBQUs7b0JBQ3RCLENBQUM7Z0JBQ0g7WUFDRixHQUNDRSxLQUFLLENBQUMsSUFBTTtnQkFDWHJCLGtEQUFXQSxDQUFDLDhDQUF3QztnQkFDcERRLGFBQWFjLEtBQUs7WUFDcEI7UUFDSixPQUFPO1lBQ0w7UUFDRixDQUFDO0lBQ0gsR0FBRyxFQUFFO0lBRUxDLFFBQVFDLEdBQUcsQ0FBQ25CO0lBRVoscUJBQ0UsOERBQUNvQjtRQUNDQyxXQUFVO1FBQ1ZDLElBQUc7OzBCQUdILDhEQUFDQztnQkFBSUYsV0FBVTswQkFFYiw0RUFBQ0c7OEJBQ0MsNEVBQUNDO2tDQUNDLDRFQUFDQTs0QkFBS0osV0FBVTtzQ0FBcUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVF4RXJCLFdBQVcwQixHQUFHLENBQUMsQ0FBQ1osT0FBUztnQkFDeEIscUJBQVE7OEJBQ04sNEVBQUNXO2tDQUFNWCxLQUFLYSxLQUFLOzs7Ozs7O1lBRXJCOzBCQUNGLDhEQUFDQztnQkFDQ0MsS0FBSTtnQkFDSlIsV0FBVTtnQkFDVlMsS0FBSTs7Ozs7Ozs7Ozs7O0FBSVo7R0E5RE1sQztLQUFBQTtBQStETiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9OZXR3b3JrLmpzP2UwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2FsaW1vdlNsaWRlciB9IGZyb20gXCJAL3NyYy9zbGlkZXJQcm9wc1wiO1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IG5vcm1hbEFsZXJ0IH0gZnJvbSBcIi4uL1N3YWxcIjtcblxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IFtuZXR3b3Jrcywgc2V0TmV0d29ya3NdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICBjb25zdCBbbmV0d29ya3NGMSwgc2V0TmV0d29ya3NGMV0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKSkge1xuICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgLy8gaHR0cHM6Ly9qZWxseWZpc2gtYXBwLWthZnpuLm9uZGlnaXRhbG9jZWFuLmFwcFxuICAgICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3YxL2F1dGgvZ2V0TmV0d29yay8ke2VuY29kZVVSSShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpKX1gXG4gICAgICB9O1xuXG4gICAgICBBeGlvcy5yZXF1ZXN0KGNvbmZpZylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgc2V0TmV0d29ya3MocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZXZlbCA9PT0gMSkge1xuICAgICAgICAgICAgICBzZXROZXR3b3Jrc0YxKFtpdGVtXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgbm9ybWFsQWxlcnQoXCJDw7MgbOG7l2kgeOG6o3kgcmEsIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUhXCIsIFwiZXJyb3JcIik7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc29sZS5sb2cobmV0d29ya3NGMSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgY2xhc3NOYW1lPVwicG9ydGZvbGlvIG5ldHdvcmsgbWFpbi1zZWN0aW9uIGZsZXgtY29sdW1uLW1vYmlsZVwiXG4gICAgICBpZD1cIm5ldHdvcmtcIlxuICAgID5cbiAgICAgIHsvKiBUSVRMRSBTVEFSVFMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS10aXRsZVwiPlxuICAgICAgICB7LyogTUFJTiBUSVRMRSBTVEFSVFMgKi99XG4gICAgICAgIDxoMz5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuaW1hdGVkLWxheWVyIGZhZGUtaW4tbGVmdC1hbmltYXRpb24gZmFkZUluVXAgd293XCI+XG4gICAgICAgICAgICAgIE91ciBOZXR3b3JrXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2gzPlxuICAgICAgICB7LyogTUFJTiBUSVRMRSBFTkRTICovfVxuICAgICAgPC9kaXY+XG4gICAgICB7LyogVElUTEUgRU5EUyAqL31cbiAgICAgICAge25ldHdvcmtzRjEubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgPHNwYW4+e2l0ZW0uZW1haWx9PC9zcGFuPlxuICAgICAgICAgIDwvPilcbiAgICAgICAgfSl9XG4gICAgICA8aW1nXG4gICAgICAgIGFsdD1cIlwiXG4gICAgICAgIGNsYXNzTmFtZT1cInNlcGFyYXRvciBoaWRlLW1vYmlsZVwiXG4gICAgICAgIHNyYz1cImFzc2V0cy9zZXBhcmF0b3IucG5nXCJcbiAgICAgIC8+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic2FsaW1vdlNsaWRlciIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiQXhpb3MiLCJub3JtYWxBbGVydCIsIkFib3V0IiwibmV0d29ya3MiLCJzZXROZXR3b3JrcyIsInVzZVN0YXRlIiwibmV0d29ya3NGMSIsInNldE5ldHdvcmtzRjEiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uZmlnIiwibWV0aG9kIiwidXJsIiwiZW5jb2RlVVJJIiwicmVxdWVzdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJmb3JFYWNoIiwiaXRlbSIsImxldmVsIiwiY2F0Y2giLCJjbGVhciIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaWQiLCJkaXYiLCJoMyIsInNwYW4iLCJtYXAiLCJlbWFpbCIsImltZyIsImFsdCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/sections/Network.js\n"));

/***/ })

});