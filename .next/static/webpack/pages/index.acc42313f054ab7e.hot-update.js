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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_sliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/sliderProps */ \"./src/sliderProps.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var _CurrentNetwork__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CurrentNetwork */ \"./src/components/sections/CurrentNetwork.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _Swal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Swal */ \"./src/components/Swal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst About = ()=>{\n    _s();\n    const email = localStorage.getItem(\"email\");\n    const [networks, setNetworks] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [prevNetworks, setPrevtNetworks] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [root, setRoot] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(email);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (!email) {\n            (0,_Swal__WEBPACK_IMPORTED_MODULE_5__.normalAlert)(\"C\\xf3 lỗi xảy ra, vui l\\xf2ng thử lại sau!\", \"error\");\n            return;\n        }\n        let config = {\n            method: \"get\",\n            //https://jellyfish-app-kafzn.ondigitalocean.app\n            url: \"http://localhost:8080/api/v1/auth/getNetwork/\".concat(encodeURI(email))\n        };\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].request(config).then((response)=>{\n            setNetworks(response.data);\n        }).catch((error)=>{\n            (0,_Swal__WEBPACK_IMPORTED_MODULE_5__.normalAlert)(\"C\\xf3 lỗi xảy ra, vui l\\xf2ng thử lại sau!\", \"error\");\n            console.log(error);\n        });\n    }, []);\n    const handleGoBack = (email)=>{\n        console.log(email);\n    };\n    const handleShowNext = (email)=>{\n        console.log(email);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"portfolio network main-section flex-column-mobile\",\n        id: \"network\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"custom-title\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"animated-layer fade-in-left-animation fadeInUp wow\",\n                            children: \"Our Network\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onclick: handleGoBack,\n                children: \"Quay lại\"\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            networks.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    onClick: handleShowNext,\n                    children: item.email\n                }, index, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                    lineNumber: 62,\n                    columnNumber: 39\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: \"\",\n                className: \"separator hide-mobile\",\n                src: \"assets/separator.png\"\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(About, \"VrDszmRhhifCcz0TFIxuBaMAVec=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9OZXR3b3JrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN3QjtBQUNDO0FBQ0w7QUFDcEI7QUFDWTtBQUV0QyxNQUFNTyxRQUFRLElBQU07O0lBQ2xCLE1BQU1DLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztJQUNuQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1oscURBQWMsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ2MsY0FBY0MsaUJBQWlCLEdBQUdmLHFEQUFjLENBQUMsRUFBRTtJQUMxRCxNQUFNLENBQUNnQixNQUFNQyxRQUFRLEdBQUdqQixxREFBYyxDQUFDUTtJQUN2Q1Isc0RBQWUsQ0FBQyxJQUFNO1FBQ3BCLElBQUksQ0FBQ1EsT0FBTztZQUNWRixrREFBV0EsQ0FBQyw4Q0FBd0M7WUFDcEQ7UUFDRixDQUFDO1FBRUQsSUFBSWEsU0FBUztZQUNYQyxRQUFRO1lBQ1IsZ0RBQWdEO1lBQ2hEQyxLQUFLLGdEQUFpRSxPQUFqQkMsVUFBVWQ7UUFDakU7UUFFQUgscURBQWEsQ0FBQ2MsUUFDWEssSUFBSSxDQUFDLENBQUNDLFdBQWE7WUFDbEJiLFlBQVlhLFNBQVNDLElBQUk7UUFDM0IsR0FDQ0MsS0FBSyxDQUFDLENBQUNDLFFBQVU7WUFDaEJ0QixrREFBV0EsQ0FBQyw4Q0FBd0M7WUFDcER1QixRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNRyxlQUFlLENBQUN2QixRQUFVO1FBQzlCcUIsUUFBUUMsR0FBRyxDQUFDdEI7SUFDZDtJQUVBLE1BQU13QixpQkFBaUIsQ0FBQ3hCLFFBQVU7UUFDaENxQixRQUFRQyxHQUFHLENBQUN0QjtJQUNkO0lBRUEscUJBQ0UsOERBQUN5QjtRQUNDQyxXQUFVO1FBQ1ZDLElBQUc7OzBCQUdILDhEQUFDQztnQkFBSUYsV0FBVTswQkFFYiw0RUFBQ0c7OEJBQ0MsNEVBQUNDO2tDQUNDLDRFQUFDQTs0QkFBS0osV0FBVTtzQ0FBcUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRM0UsOERBQUNLO2dCQUFPQyxTQUFTVDswQkFBYzs7Ozs7O1lBQzlCcEIsU0FBUzhCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFBVyw4REFBQ0w7b0JBQUtNLFNBQVNaOzhCQUE2QlUsS0FBS2xDLEtBQUs7bUJBQWxCbUM7Ozs7OzBCQUNwRSw4REFBQ0U7Z0JBQ0NDLEtBQUk7Z0JBQ0paLFdBQVU7Z0JBQ1ZhLEtBQUk7Ozs7Ozs7Ozs7OztBQUlaO0dBOURNeEM7S0FBQUE7QUErRE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvTmV0d29yay5qcz9lMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNhbGltb3ZTbGlkZXIgfSBmcm9tIFwiQC9zcmMvc2xpZGVyUHJvcHNcIjtcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XG5pbXBvcnQgQ3VycmVudE5ldHdvcmsgZnJvbSBcIi4vQ3VycmVudE5ldHdvcmtcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IG5vcm1hbEFsZXJ0IH0gZnJvbSBcIi4uL1N3YWxcIjtcblxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGVtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKTtcbiAgY29uc3QgW25ldHdvcmtzLCBzZXROZXR3b3Jrc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwcmV2TmV0d29ya3MsIHNldFByZXZ0TmV0d29ya3NdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICBjb25zdCBbcm9vdCwgc2V0Um9vdF0gPSBSZWFjdC51c2VTdGF0ZShlbWFpbCk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFlbWFpbCkge1xuICAgICAgbm9ybWFsQWxlcnQoXCJDw7MgbOG7l2kgeOG6o3kgcmEsIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUhXCIsIFwiZXJyb3JcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAvL2h0dHBzOi8vamVsbHlmaXNoLWFwcC1rYWZ6bi5vbmRpZ2l0YWxvY2Vhbi5hcHBcbiAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvYXV0aC9nZXROZXR3b3JrLyR7ZW5jb2RlVVJJKGVtYWlsKX1gXG4gICAgfTtcblxuICAgIEF4aW9zLnJlcXVlc3QoY29uZmlnKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHNldE5ldHdvcmtzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgbm9ybWFsQWxlcnQoXCJDw7MgbOG7l2kgeOG6o3kgcmEsIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUhXCIsIFwiZXJyb3JcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlR29CYWNrID0gKGVtYWlsKSA9PiB7XG4gICAgY29uc29sZS5sb2coZW1haWwpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNob3dOZXh0ID0gKGVtYWlsKSA9PiB7XG4gICAgY29uc29sZS5sb2coZW1haWwpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgY2xhc3NOYW1lPVwicG9ydGZvbGlvIG5ldHdvcmsgbWFpbi1zZWN0aW9uIGZsZXgtY29sdW1uLW1vYmlsZVwiXG4gICAgICBpZD1cIm5ldHdvcmtcIlxuICAgID5cbiAgICAgIHsvKiBUSVRMRSBTVEFSVFMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS10aXRsZVwiPlxuICAgICAgICB7LyogTUFJTiBUSVRMRSBTVEFSVFMgKi99XG4gICAgICAgIDxoMz5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuaW1hdGVkLWxheWVyIGZhZGUtaW4tbGVmdC1hbmltYXRpb24gZmFkZUluVXAgd293XCI+XG4gICAgICAgICAgICAgIE91ciBOZXR3b3JrXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2gzPlxuICAgICAgICB7LyogTUFJTiBUSVRMRSBFTkRTICovfVxuICAgICAgPC9kaXY+XG4gICAgICB7LyogVElUTEUgRU5EUyAqL31cbiAgICAgIDxidXR0b24gb25jbGljaz17aGFuZGxlR29CYWNrfT5RdWF5IGzhuqFpPC9idXR0b24+XG4gICAgICB7bmV0d29ya3MubWFwKChpdGVtLCBpbmRleCkgPT4gKDxzcGFuIG9uQ2xpY2s9e2hhbmRsZVNob3dOZXh0fSBrZXk9e2luZGV4fT57aXRlbS5lbWFpbH08L3NwYW4+KSl9XG4gICAgICA8aW1nXG4gICAgICAgIGFsdD1cIlwiXG4gICAgICAgIGNsYXNzTmFtZT1cInNlcGFyYXRvciBoaWRlLW1vYmlsZVwiXG4gICAgICAgIHNyYz1cImFzc2V0cy9zZXBhcmF0b3IucG5nXCJcbiAgICAgIC8+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic2FsaW1vdlNsaWRlciIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiQ3VycmVudE5ldHdvcmsiLCJBeGlvcyIsIm5vcm1hbEFsZXJ0IiwiQWJvdXQiLCJlbWFpbCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJuZXR3b3JrcyIsInNldE5ldHdvcmtzIiwidXNlU3RhdGUiLCJwcmV2TmV0d29ya3MiLCJzZXRQcmV2dE5ldHdvcmtzIiwicm9vdCIsInNldFJvb3QiLCJ1c2VFZmZlY3QiLCJjb25maWciLCJtZXRob2QiLCJ1cmwiLCJlbmNvZGVVUkkiLCJyZXF1ZXN0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlR29CYWNrIiwiaGFuZGxlU2hvd05leHQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaWQiLCJkaXYiLCJoMyIsInNwYW4iLCJidXR0b24iLCJvbmNsaWNrIiwibWFwIiwiaXRlbSIsImluZGV4Iiwib25DbGljayIsImltZyIsImFsdCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/sections/Network.js\n"));

/***/ })

});