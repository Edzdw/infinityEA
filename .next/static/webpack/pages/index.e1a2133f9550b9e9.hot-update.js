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

/***/ "./src/components/ForgotPass.js":
/*!**************************************!*\
  !*** ./src/components/ForgotPass.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Swal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Swal */ \"./src/components/Swal.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// reactstrap components\n\nfunction ForgotPass(param) {\n    let { isOpen , toggle , success  } = param;\n    _s();\n    const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [newPassword, setNewPassword] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [confirmPassword, setConfirmPassword] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [code, setCode] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const handleForgot = ()=>{};\n    function isValidEmail(email) {\n        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;\n        return emailRegex.test(email);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n            isOpen: isOpen,\n            toggle: toggle,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" modal-header\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \" modal-main-title \",\n                        id: \"exampleModalLabel\",\n                        children: \"Kh\\xf4i phục mật khẩu\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/ForgotPass.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/ForgotPass.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.ModalBody, {\n                    style: {\n                        color: \"black\",\n                        display: \"flex\",\n                        flexDirection: \"column\",\n                        gap: \"10px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-group\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \" Email \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/ForgotPass.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"form-field\",\n                                    type: \"email\",\n                                    id: \"email\",\n                                    placeholder: \"Nhập email...\",\n                                    value: email,\n                                    style: {\n                                        width: \"100%\"\n                                    },\n                                    onChange: (e)=>{\n                                        setEmail(e.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/ForgotPass.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/ForgotPass.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            color: \"primary\",\n                            type: \"button\",\n                            onClick: handleForgot,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \" Sign In \"\n                            }, void 0, false, {\n                                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/ForgotPass.js\",\n                                lineNumber: 45,\n                                columnNumber: 14\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/ForgotPass.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/ForgotPass.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/ForgotPass.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(ForgotPass, \"25aoP4qQgk2MQDzimccF7/pM+JU=\");\n_c = ForgotPass;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ForgotPass);\nvar _c;\n$RefreshReg$(_c, \"ForgotPass\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3Jnb3RQYXNzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNBO0FBQ1c7QUFFckMsd0JBQXdCO0FBQzhCO0FBRXRELFNBQVNNLFdBQVcsS0FBMkIsRUFBRTtRQUE3QixFQUFFQyxPQUFNLEVBQUVDLE9BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQTNCOztJQUNsQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1gscURBQWMsQ0FBQztJQUN6QyxNQUFNLENBQUNhLGFBQWFDLGVBQWUsR0FBR2QscURBQWMsQ0FBQztJQUNyRCxNQUFNLENBQUNlLGlCQUFpQkMsbUJBQW1CLEdBQUdoQixxREFBYyxDQUFDO0lBQzdELE1BQU0sQ0FBQ2lCLE1BQU1DLFFBQVEsR0FBR2xCLHFEQUFjLENBQUM7SUFHdkMsTUFBTW1CLGVBQWUsSUFBTSxDQUUzQjtJQUVBLFNBQVNDLGFBQWFWLEtBQUssRUFBRTtRQUMzQixNQUFNVyxhQUFhO1FBQ25CLE9BQU9BLFdBQVdDLElBQUksQ0FBQ1o7SUFDekI7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ04sNkNBQUtBO1lBQUNHLFFBQVFBO1lBQVFDLFFBQVFBOzs4QkFDN0IsOERBQUNlO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBR0QsV0FBVTt3QkFBcUJFLElBQUc7a0NBQW9COzs7Ozs7Ozs7Ozs4QkFJNUQsOERBQUNyQixpREFBU0E7b0JBQUNzQixPQUFPO3dCQUFFQyxPQUFPO3dCQUFTQyxTQUFTO3dCQUFRQyxlQUFlO3dCQUFVQyxLQUFLO29CQUFPOztzQ0FFeEYsOERBQUNSOzRCQUFJQyxXQUFZOzs4Q0FDZiw4REFBQ1E7OENBQUs7Ozs7Ozs4Q0FFTiw4REFBQ0M7b0NBQU1ULFdBQVc7b0NBQWFVLE1BQUs7b0NBQVFSLElBQUc7b0NBQVFTLGFBQVk7b0NBQWdCQyxPQUFPMUI7b0NBQU9pQixPQUFPO3dDQUFFVSxPQUFPO29DQUFPO29DQUN0SEMsVUFBVSxDQUFDQyxJQUFNO3dDQUNmNUIsU0FBUzRCLEVBQUVDLE1BQU0sQ0FBQ0osS0FBSztvQ0FDekI7Ozs7Ozs7Ozs7OztzQ0FJSiw4REFBQ2pDLDhDQUFNQTs0QkFBQ3lCLE9BQU07NEJBQVVNLE1BQUs7NEJBQVNPLFNBQVN0QjtzQ0FDNUMsNEVBQUNhOzBDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkI7R0EzQ1MxQjtLQUFBQTtBQTZDVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb3Jnb3RQYXNzLmpzP2IwN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgbm9ybWFsQWxlcnQgfSBmcm9tIFwiLi9Td2FsXCI7XG5cbi8vIHJlYWN0c3RyYXAgY29tcG9uZW50c1xuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgTW9kYWxCb2R5IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuZnVuY3Rpb24gRm9yZ290UGFzcyh7IGlzT3BlbiwgdG9nZ2xlLCBzdWNjZXNzIH0pIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW25ld1Bhc3N3b3JkLCBzZXROZXdQYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NvbmZpcm1QYXNzd29yZCwgc2V0Q29uZmlybVBhc3N3b3JkXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcblxuXG4gIGNvbnN0IGhhbmRsZUZvcmdvdCA9ICgpID0+IHtcbiAgICBcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVmFsaWRFbWFpbChlbWFpbCkge1xuICAgIGNvbnN0IGVtYWlsUmVnZXggPSAvXlthLXpBLVowLTkuXy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVpdezIsNH0kLztcbiAgICByZXR1cm4gZW1haWxSZWdleC50ZXN0KGVtYWlsKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb2RhbCBpc09wZW49e2lzT3Blbn0gdG9nZ2xlPXt0b2dnbGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiIG1vZGFsLW1haW4tdGl0bGUgXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPlxuICAgICAgICAgICAgIEtow7RpIHBo4bulYyBt4bqtdCBraOG6qXVcbiAgICAgICAgICA8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1vZGFsQm9keSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiBcIjEwcHhcIiB9fT5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPHNwYW4+IEVtYWlsIDwvc3Bhbj5cblxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZSA9XCJmb3JtLWZpZWxkXCIgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiTmjhuq1wIGVtYWlsLi4uXCIgdmFsdWU9e2VtYWlsfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlRm9yZ290fT5cbiAgICAgICAgICAgICA8c3Bhbj4gU2lnbiBJbiA8L3NwYW4+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgPC9Nb2RhbD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yZ290UGFzczsiXSwibmFtZXMiOlsiUmVhY3QiLCJBeGlvcyIsIm5vcm1hbEFsZXJ0IiwiQnV0dG9uIiwiTW9kYWwiLCJNb2RhbEJvZHkiLCJGb3Jnb3RQYXNzIiwiaXNPcGVuIiwidG9nZ2xlIiwic3VjY2VzcyIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VTdGF0ZSIsIm5ld1Bhc3N3b3JkIiwic2V0TmV3UGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJzZXRDb25maXJtUGFzc3dvcmQiLCJjb2RlIiwic2V0Q29kZSIsImhhbmRsZUZvcmdvdCIsImlzVmFsaWRFbWFpbCIsImVtYWlsUmVnZXgiLCJ0ZXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDUiLCJpZCIsInN0eWxlIiwiY29sb3IiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImdhcCIsInNwYW4iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwid2lkdGgiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ForgotPass.js\n"));

/***/ })

});