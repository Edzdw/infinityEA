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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_sliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/sliderProps */ \"./src/sliderProps.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var _CurrentNetwork__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CurrentNetwork */ \"./src/components/sections/CurrentNetwork.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _Swal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Swal */ \"./src/components/Swal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst About = ()=>{\n    _s();\n    const email = localStorage.getItem(\"email\");\n    const [networks, setNetworks] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [currentRoot, setCurrentRoot] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [prevRoot, setPrevRoot] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (!email) {\n            (0,_Swal__WEBPACK_IMPORTED_MODULE_5__.normalAlert)(\"C\\xf3 lỗi xảy ra, vui l\\xf2ng thử lại sau!\", \"error\");\n            return;\n        }\n        fetchNetwork(email);\n        setCurrentRoot(email);\n        setPrevRoot(\"\");\n    }, []);\n    const fetchNetwork = (input)=>{\n        let config = {\n            method: \"get\",\n            //https://jellyfish-app-kafzn.ondigitalocean.app\n            url: \"http://localhost:8080/api/v1/auth/getNetwork/\".concat(encodeURI(input))\n        };\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].request(config).then((response)=>{\n            setNetworks(response.data);\n        }).catch((error)=>{\n            (0,_Swal__WEBPACK_IMPORTED_MODULE_5__.normalAlert)(\"C\\xf3 lỗi xảy ra, vui l\\xf2ng thử lại sau!\", \"error\");\n            console.log(error);\n        });\n    };\n    const handleGoBack = ()=>{\n        console.log(currentRoot, prevRoot);\n    // fetchNetwork(root);\n    };\n    const handleShowNext = (input)=>{\n        fetchNetwork(input);\n        setRoot(input);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"portfolio network main-section flex-column-mobile\",\n        id: \"network\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"custom-title\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"animated-layer fade-in-left-animation fadeInUp wow\",\n                            children: \"Our Network\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleGoBack,\n                children: \"Quay lại\"\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            networks.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    onClick: ()=>{\n                        handleShowNext(item.email);\n                    },\n                    children: item.email\n                }, index, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                    lineNumber: 73,\n                    columnNumber: 39\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: \"\",\n                className: \"separator hide-mobile\",\n                src: \"assets/separator.png\"\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(About, \"gipdOa94XNZIRinmNs1Q/P8Tr0Q=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9OZXR3b3JrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN3QjtBQUNDO0FBQ0w7QUFDcEI7QUFDWTtBQUV0QyxNQUFNTyxRQUFRLElBQU07O0lBQ2xCLE1BQU1DLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztJQUNuQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1oscURBQWMsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ2MsYUFBYUMsZUFBZSxHQUFHZixxREFBYyxDQUFDO0lBQ3JELE1BQU0sQ0FBQ2dCLFVBQVVDLFlBQVksR0FBR2pCLHFEQUFjLENBQUM7SUFJL0NBLHNEQUFlLENBQUMsSUFBTTtRQUNwQixJQUFJLENBQUNRLE9BQU87WUFDVkYsa0RBQVdBLENBQUMsOENBQXdDO1lBQ3BEO1FBQ0YsQ0FBQztRQUVEYSxhQUFhWDtRQUNiTyxlQUFlUDtRQUNmUyxZQUFZO0lBQ2QsR0FBRyxFQUFFO0lBRUwsTUFBTUUsZUFBZSxDQUFDQyxRQUFVO1FBQzlCLElBQUlDLFNBQVM7WUFDWEMsUUFBUTtZQUNSLGdEQUFnRDtZQUNoREMsS0FBSyxnREFBaUUsT0FBakJDLFVBQVVKO1FBQ2pFO1FBRUFmLHFEQUFhLENBQUNnQixRQUNiSyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUNsQmYsWUFBWWUsU0FBU0MsSUFBSTtRQUMzQixHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtZQUNoQnhCLGtEQUFXQSxDQUFDLDhDQUF3QztZQUNwRHlCLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNGO0lBRUEsTUFBTUcsZUFBZSxJQUFNO1FBQ3pCRixRQUFRQyxHQUFHLENBQUNsQixhQUFhRTtJQUN6QixzQkFBc0I7SUFDeEI7SUFFQSxNQUFNa0IsaUJBQWlCLENBQUNkLFFBQVU7UUFDaENELGFBQWFDO1FBQ2JlLFFBQVFmO0lBQ1Y7SUFFQSxxQkFDRSw4REFBQ2dCO1FBQ0NDLFdBQVU7UUFDVkMsSUFBRzs7MEJBR0gsOERBQUNDO2dCQUFJRixXQUFVOzBCQUViLDRFQUFDRzs4QkFDQyw0RUFBQ0M7a0NBQ0MsNEVBQUNBOzRCQUFLSixXQUFVO3NDQUFxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVEzRSw4REFBQ0s7Z0JBQU9DLFNBQVNWOzBCQUFjOzs7Ozs7WUFDOUJ0QixTQUFTaUMsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUFXLDhEQUFDTDtvQkFBS0UsU0FBUyxJQUFNO3dCQUFDVCxlQUFlVyxLQUFLckMsS0FBSztvQkFBQzs4QkFBZ0JxQyxLQUFLckMsS0FBSzttQkFBbEJzQzs7Ozs7MEJBQ3hGLDhEQUFDQztnQkFDQ0MsS0FBSTtnQkFDSlgsV0FBVTtnQkFDVlksS0FBSTs7Ozs7Ozs7Ozs7O0FBSVo7R0F6RU0xQztLQUFBQTtBQTBFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9OZXR3b3JrLmpzP2UwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2FsaW1vdlNsaWRlciB9IGZyb20gXCJAL3NyYy9zbGlkZXJQcm9wc1wiO1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcbmltcG9ydCBDdXJyZW50TmV0d29yayBmcm9tIFwiLi9DdXJyZW50TmV0d29ya1wiO1xuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgbm9ybWFsQWxlcnQgfSBmcm9tIFwiLi4vU3dhbFwiO1xuXG5jb25zdCBBYm91dCA9ICgpID0+IHtcbiAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpO1xuICBjb25zdCBbbmV0d29ya3MsIHNldE5ldHdvcmtzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2N1cnJlbnRSb290LCBzZXRDdXJyZW50Um9vdF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3ByZXZSb290LCBzZXRQcmV2Um9vdF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcblxuICBcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZW1haWwpIHtcbiAgICAgIG5vcm1hbEFsZXJ0KFwiQ8OzIGzhu5dpIHjhuqN5IHJhLCB2dWkgbMOybmcgdGjhu60gbOG6oWkgc2F1IVwiLCBcImVycm9yXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZldGNoTmV0d29yayhlbWFpbCk7XG4gICAgc2V0Q3VycmVudFJvb3QoZW1haWwpO1xuICAgIHNldFByZXZSb290KFwiXCIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZmV0Y2hOZXR3b3JrID0gKGlucHV0KSA9PiB7XG4gICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAvL2h0dHBzOi8vamVsbHlmaXNoLWFwcC1rYWZ6bi5vbmRpZ2l0YWxvY2Vhbi5hcHBcbiAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvYXV0aC9nZXROZXR3b3JrLyR7ZW5jb2RlVVJJKGlucHV0KX1gXG4gICAgfTtcblxuICAgIEF4aW9zLnJlcXVlc3QoY29uZmlnKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0TmV0d29ya3MocmVzcG9uc2UuZGF0YSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBub3JtYWxBbGVydChcIkPDsyBs4buXaSB44bqjeSByYSwgdnVpIGzDsm5nIHRo4butIGzhuqFpIHNhdSFcIiwgXCJlcnJvclwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUdvQmFjayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50Um9vdCwgcHJldlJvb3QpO1xuICAgIC8vIGZldGNoTmV0d29yayhyb290KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaG93TmV4dCA9IChpbnB1dCkgPT4ge1xuICAgIGZldGNoTmV0d29yayhpbnB1dCk7XG4gICAgc2V0Um9vdChpbnB1dCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBjbGFzc05hbWU9XCJwb3J0Zm9saW8gbmV0d29yayBtYWluLXNlY3Rpb24gZmxleC1jb2x1bW4tbW9iaWxlXCJcbiAgICAgIGlkPVwibmV0d29ya1wiXG4gICAgPlxuICAgICAgey8qIFRJVExFIFNUQVJUUyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXRpdGxlXCI+XG4gICAgICAgIHsvKiBNQUlOIFRJVExFIFNUQVJUUyAqL31cbiAgICAgICAgPGgzPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5pbWF0ZWQtbGF5ZXIgZmFkZS1pbi1sZWZ0LWFuaW1hdGlvbiBmYWRlSW5VcCB3b3dcIj5cbiAgICAgICAgICAgICAgT3VyIE5ldHdvcmtcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvaDM+XG4gICAgICAgIHsvKiBNQUlOIFRJVExFIEVORFMgKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBUSVRMRSBFTkRTICovfVxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVHb0JhY2t9PlF1YXkgbOG6oWk8L2J1dHRvbj5cbiAgICAgIHtuZXR3b3Jrcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoPHNwYW4gb25DbGljaz17KCkgPT4ge2hhbmRsZVNob3dOZXh0KGl0ZW0uZW1haWwpfX0ga2V5PXtpbmRleH0+e2l0ZW0uZW1haWx9PC9zcGFuPikpfVxuICAgICAgPGltZ1xuICAgICAgICBhbHQ9XCJcIlxuICAgICAgICBjbGFzc05hbWU9XCJzZXBhcmF0b3IgaGlkZS1tb2JpbGVcIlxuICAgICAgICBzcmM9XCJhc3NldHMvc2VwYXJhdG9yLnBuZ1wiXG4gICAgICAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInNhbGltb3ZTbGlkZXIiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIkN1cnJlbnROZXR3b3JrIiwiQXhpb3MiLCJub3JtYWxBbGVydCIsIkFib3V0IiwiZW1haWwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibmV0d29ya3MiLCJzZXROZXR3b3JrcyIsInVzZVN0YXRlIiwiY3VycmVudFJvb3QiLCJzZXRDdXJyZW50Um9vdCIsInByZXZSb290Iiwic2V0UHJldlJvb3QiLCJ1c2VFZmZlY3QiLCJmZXRjaE5ldHdvcmsiLCJpbnB1dCIsImNvbmZpZyIsIm1ldGhvZCIsInVybCIsImVuY29kZVVSSSIsInJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVHb0JhY2siLCJoYW5kbGVTaG93TmV4dCIsInNldFJvb3QiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaWQiLCJkaXYiLCJoMyIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaW1nIiwiYWx0Iiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/sections/Network.js\n"));

/***/ })

});