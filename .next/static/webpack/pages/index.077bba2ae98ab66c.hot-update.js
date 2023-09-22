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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_sliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/sliderProps */ \"./src/sliderProps.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var _CurrentNetwork__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CurrentNetwork */ \"./src/components/sections/CurrentNetwork.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _Swal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Swal */ \"./src/components/Swal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst About = ()=>{\n    _s();\n    const [networks, setNetworks] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [root, setRoot] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(email);\n    const [prevNetworks, setPrevtNetworks] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const email = localStorage.getItem(\"email\");\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (!email) {\n            (0,_Swal__WEBPACK_IMPORTED_MODULE_5__.normalAlert)(\"C\\xf3 lỗi xảy ra, vui l\\xf2ng thử lại sau!\", \"error\");\n            return;\n        }\n        let config = {\n            method: \"get\",\n            //https://jellyfish-app-kafzn.ondigitalocean.app\n            url: \"http://localhost:8080/api/v1/auth/getNetwork/\".concat(encodeURI(localStorage.getItem(\"email\")))\n        };\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].request(config).then((response)=>{\n            setNetworks(response.data);\n        }).catch((error)=>{\n            (0,_Swal__WEBPACK_IMPORTED_MODULE_5__.normalAlert)(\"C\\xf3 lỗi xảy ra, vui l\\xf2ng thử lại sau!\", \"error\");\n            console.log(error);\n        // localStorage.clear();\n        });\n    }, []);\n    const handleGoBack = (email)=>{\n        console.log(email);\n    };\n    const handleShowNext = (email)=>{\n        console.log(email);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"portfolio network main-section flex-column-mobile\",\n        id: \"network\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"custom-title\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"animated-layer fade-in-left-animation fadeInUp wow\",\n                            children: \"Our Network\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onclick: handleGoBack,\n                children: \"Quay lại\"\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            networks.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    onClick: handleShowNext,\n                    children: item.email\n                }, index, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                    lineNumber: 64,\n                    columnNumber: 39\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: \"\",\n                className: \"separator hide-mobile\",\n                src: \"assets/separator.png\"\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(About, \"BnFfj64l5fFGCfgH3XS4K29O0zU=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9OZXR3b3JrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN3QjtBQUNDO0FBQ0w7QUFDcEI7QUFDWTtBQUV0QyxNQUFNTyxRQUFRLElBQU07O0lBQ2xCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCxxREFBYyxDQUFDLEVBQUU7SUFDakQsTUFBTSxDQUFDVyxNQUFNQyxRQUFRLEdBQUdaLHFEQUFjLENBQUNhO0lBQ3ZDLE1BQU0sQ0FBQ0MsY0FBY0MsaUJBQWlCLEdBQUdmLHFEQUFjLENBQUMsRUFBRTtJQUUxRCxNQUFNYSxRQUFRRyxhQUFhQyxPQUFPLENBQUM7SUFDbkNqQixzREFBZSxDQUFDLElBQU07UUFDcEIsSUFBSSxDQUFDYSxPQUFPO1lBQ1ZQLGtEQUFXQSxDQUFDLDhDQUF3QztZQUNwRDtRQUNGLENBQUM7UUFFRCxJQUFJYSxTQUFTO1lBQ1hDLFFBQVE7WUFDUixnREFBZ0Q7WUFDaERDLEtBQUssZ0RBQXlGLE9BQXpDQyxVQUFVTixhQUFhQyxPQUFPLENBQUM7UUFDdEY7UUFFQVoscURBQWEsQ0FBQ2MsUUFDWEssSUFBSSxDQUFDLENBQUNDLFdBQWE7WUFDbEJoQixZQUFZZ0IsU0FBU0MsSUFBSTtRQUMzQixHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtZQUNoQnRCLGtEQUFXQSxDQUFDLDhDQUF3QztZQUNwRHVCLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWix3QkFBd0I7UUFDMUI7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNRyxlQUFlLENBQUNsQixRQUFVO1FBQzlCZ0IsUUFBUUMsR0FBRyxDQUFDakI7SUFDZDtJQUVBLE1BQU1tQixpQkFBaUIsQ0FBQ25CLFFBQVU7UUFDaENnQixRQUFRQyxHQUFHLENBQUNqQjtJQUNkO0lBRUEscUJBQ0UsOERBQUNvQjtRQUNDQyxXQUFVO1FBQ1ZDLElBQUc7OzBCQUdILDhEQUFDQztnQkFBSUYsV0FBVTswQkFFYiw0RUFBQ0c7OEJBQ0MsNEVBQUNDO2tDQUNDLDRFQUFDQTs0QkFBS0osV0FBVTtzQ0FBcUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRM0UsOERBQUNLO2dCQUFPQyxTQUFTVDswQkFBYzs7Ozs7O1lBQzlCdkIsU0FBU2lDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFBVyw4REFBQ0w7b0JBQUtNLFNBQVNaOzhCQUE2QlUsS0FBSzdCLEtBQUs7bUJBQWxCOEI7Ozs7OzBCQUNwRSw4REFBQ0U7Z0JBQ0NDLEtBQUk7Z0JBQ0paLFdBQVU7Z0JBQ1ZhLEtBQUk7Ozs7Ozs7Ozs7OztBQUlaO0dBaEVNeEM7S0FBQUE7QUFpRU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvTmV0d29yay5qcz9lMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNhbGltb3ZTbGlkZXIgfSBmcm9tIFwiQC9zcmMvc2xpZGVyUHJvcHNcIjtcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XG5pbXBvcnQgQ3VycmVudE5ldHdvcmsgZnJvbSBcIi4vQ3VycmVudE5ldHdvcmtcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IG5vcm1hbEFsZXJ0IH0gZnJvbSBcIi4uL1N3YWxcIjtcblxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IFtuZXR3b3Jrcywgc2V0TmV0d29ya3NdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICBjb25zdCBbcm9vdCwgc2V0Um9vdF0gPSBSZWFjdC51c2VTdGF0ZShlbWFpbCk7XG4gIGNvbnN0IFtwcmV2TmV0d29ya3MsIHNldFByZXZ0TmV0d29ya3NdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGVtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWVtYWlsKSB7XG4gICAgICBub3JtYWxBbGVydChcIkPDsyBs4buXaSB44bqjeSByYSwgdnVpIGzDsm5nIHRo4butIGzhuqFpIHNhdSFcIiwgXCJlcnJvclwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY29uZmlnID0ge1xuICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgIC8vaHR0cHM6Ly9qZWxseWZpc2gtYXBwLWthZnpuLm9uZGlnaXRhbG9jZWFuLmFwcFxuICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS9hdXRoL2dldE5ldHdvcmsvJHtlbmNvZGVVUkkobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKSl9YFxuICAgIH07XG5cbiAgICBBeGlvcy5yZXF1ZXN0KGNvbmZpZylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBzZXROZXR3b3JrcyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIG5vcm1hbEFsZXJ0KFwiQ8OzIGzhu5dpIHjhuqN5IHJhLCB2dWkgbMOybmcgdGjhu60gbOG6oWkgc2F1IVwiLCBcImVycm9yXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVHb0JhY2sgPSAoZW1haWwpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2hvd05leHQgPSAoZW1haWwpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBjbGFzc05hbWU9XCJwb3J0Zm9saW8gbmV0d29yayBtYWluLXNlY3Rpb24gZmxleC1jb2x1bW4tbW9iaWxlXCJcbiAgICAgIGlkPVwibmV0d29ya1wiXG4gICAgPlxuICAgICAgey8qIFRJVExFIFNUQVJUUyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXRpdGxlXCI+XG4gICAgICAgIHsvKiBNQUlOIFRJVExFIFNUQVJUUyAqL31cbiAgICAgICAgPGgzPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5pbWF0ZWQtbGF5ZXIgZmFkZS1pbi1sZWZ0LWFuaW1hdGlvbiBmYWRlSW5VcCB3b3dcIj5cbiAgICAgICAgICAgICAgT3VyIE5ldHdvcmtcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvaDM+XG4gICAgICAgIHsvKiBNQUlOIFRJVExFIEVORFMgKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBUSVRMRSBFTkRTICovfVxuICAgICAgPGJ1dHRvbiBvbmNsaWNrPXtoYW5kbGVHb0JhY2t9PlF1YXkgbOG6oWk8L2J1dHRvbj5cbiAgICAgIHtuZXR3b3Jrcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoPHNwYW4gb25DbGljaz17aGFuZGxlU2hvd05leHR9IGtleT17aW5kZXh9PntpdGVtLmVtYWlsfTwvc3Bhbj4pKX1cbiAgICAgIDxpbWdcbiAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgY2xhc3NOYW1lPVwic2VwYXJhdG9yIGhpZGUtbW9iaWxlXCJcbiAgICAgICAgc3JjPVwiYXNzZXRzL3NlcGFyYXRvci5wbmdcIlxuICAgICAgLz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzYWxpbW92U2xpZGVyIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJDdXJyZW50TmV0d29yayIsIkF4aW9zIiwibm9ybWFsQWxlcnQiLCJBYm91dCIsIm5ldHdvcmtzIiwic2V0TmV0d29ya3MiLCJ1c2VTdGF0ZSIsInJvb3QiLCJzZXRSb290IiwiZW1haWwiLCJwcmV2TmV0d29ya3MiLCJzZXRQcmV2dE5ldHdvcmtzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZUVmZmVjdCIsImNvbmZpZyIsIm1ldGhvZCIsInVybCIsImVuY29kZVVSSSIsInJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVHb0JhY2siLCJoYW5kbGVTaG93TmV4dCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpZCIsImRpdiIsImgzIiwic3BhbiIsImJ1dHRvbiIsIm9uY2xpY2siLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJvbkNsaWNrIiwiaW1nIiwiYWx0Iiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/sections/Network.js\n"));

/***/ })

});