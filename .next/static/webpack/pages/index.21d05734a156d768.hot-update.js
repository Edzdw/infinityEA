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

/***/ "./src/components/Signin.js":
/*!**********************************!*\
  !*** ./src/components/Signin.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _Signup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Signup */ \"./src/components/Signup.js\");\n/* harmony import */ var _Swal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Swal */ \"./src/components/Swal.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// reactstrap components\n\nfunction Signin(param) {\n    let { isOpen , toggle  } = param;\n    _s();\n    const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [isSignupModalOpen, setIsSignupModalOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const toggleSignupModal = ()=>{\n        setIsSignupModalOpen(!isSignupModalOpen);\n    };\n    const handleSignin = ()=>{\n        if (email === \"\" || password === \"\") {\n            (0,_Swal__WEBPACK_IMPORTED_MODULE_3__.normalAlert)(\"Vui l\\xf2ng nhập id v\\xe0 mật khẩu để đăng nhập!\", \"error\");\n            return;\n        } else if (!isValidEmail(email)) {\n            (0,_Swal__WEBPACK_IMPORTED_MODULE_3__.normalAlert)(\"Email kh\\xf4ng hợp lệ, vui l\\xf2ng thử lại!\", \"error\");\n            return;\n        }\n        let data = JSON.stringify({\n            \"email\": email,\n            \"password\": password\n        });\n        let config = {\n            method: \"post\",\n            url: \"https://jellyfish-app-kafzn.ondigitalocean.app/api/v1/auth/authenticate\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            data: data\n        };\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].request(config).then((response)=>{\n            if (response.status === 200) {\n                (0,_Swal__WEBPACK_IMPORTED_MODULE_3__.normalAlert)(\"Đăng nhập th\\xe0nh c\\xf4ng!\", \"success\");\n                localStorage.setItem(\"email\", email);\n                localStorage.setItem(\"access_token\", response.data.access_token);\n                window.location.reload();\n            } else if (error.response.status == 403) {\n                (0,_Swal__WEBPACK_IMPORTED_MODULE_3__.normalAlert)(\"Email hoặc mật khẩu kh\\xf4ng ch\\xednh x\\xe1c, xin vui l\\xf2ng thử lại!\", \"error\");\n            }\n        }).catch((error1)=>{\n            console.log(\"error\", error1);\n            localStorage.clear();\n        });\n    };\n    function isValidEmail(email) {\n        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;\n        return emailRegex.test(email);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                isOpen: isOpen,\n                toggle: toggle,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" modal-header\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \" modal-main-title \",\n                                id: \"exampleModalLabel\",\n                                children: \"Đăng nhập\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/Signin.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                className: \"modal-sub-title\",\n                                onClick: toggleSignupModal,\n                                id: \"\",\n                                children: \"Đăng k\\xed\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/Signin.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/Signin.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.ModalBody, {\n                        style: {\n                            color: \"black\",\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            gap: \"10px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"form-group\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \" Email \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/Signin.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        class: \"form-field\",\n                                        type: \"email\",\n                                        id: \"email\",\n                                        placeholder: \"Nhập email...\",\n                                        value: email,\n                                        style: {\n                                            width: \"100%\"\n                                        },\n                                        onChange: (e)=>{\n                                            setEmail(e.target.value);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/Signin.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/Signin.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"form-group\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        class: \"form-field\",\n                                        type: \"password\",\n                                        id: \"password\",\n                                        placeholder: \"Nhập mật khẩu...\",\n                                        value: password,\n                                        style: {\n                                            width: \"100%\"\n                                        },\n                                        onChange: (e)=>{\n                                            setPassword(e.target.value);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/Signin.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \" Password \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/Signin.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/Signin.js\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                color: \"primary\",\n                                type: \"button\",\n                                onClick: handleSignin,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \" Sign In \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/Signin.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 14\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/Signin.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/Signin.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.ModalFooter, {\n                        style: {\n                            color: \"black\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            children: [\n                                \"Qu\\xean mật khẩu? Nhấn v\\xe0o \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"sign-up-link\",\n                                    style: {\n                                        color: \"#ffb400\",\n                                        cursor: \"pointer\"\n                                    },\n                                    onClick: toggleForgotModal,\n                                    children: \"đ\\xe2y\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/Signin.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 38\n                                }, this),\n                                \" để tạo lại mật khẩu\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/Signin.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/Signin.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/Signin.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Signup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isOpen: isSignupModalOpen,\n                toggle: toggleSignupModal\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/Signin.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Forgot, {\n                isOpen: isForgotModalOpen,\n                toggle: toggleForgotModal,\n                success: toggleForgotModal\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/Signin.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Signin, \"sSqrKErx72SCuoedRNlNGmGNk90=\");\n_c = Signin;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signin);\nvar _c;\n$RefreshReg$(_c, \"Signin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW1CQyxPQUFPL0M7d0NBQVVxQyxPQUFPOzRDQUFFVyxPQUFPO3dDQUFPO3dDQUM5SEMsVUFBVSxDQUFDQyxJQUFNOzRDQUNmakQsWUFBWWlELEVBQUVDLE1BQU0sQ0FBQ0osS0FBSzt3Q0FDNUI7Ozs7OztrREFFRiw4REFBQ0o7a0RBQUs7Ozs7Ozs7Ozs7OzswQ0FJUiw4REFBQ3JELDhDQUFNQTtnQ0FBQ2dELE9BQU07Z0NBQVVPLE1BQUs7Z0NBQVNULFNBQVMvQjswQ0FDNUMsNEVBQUNzQzs4Q0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSVgsOERBQUNsRCxtREFBV0E7d0JBQUM0QyxPQUFPOzRCQUFFQyxPQUFPO3dCQUFRO2tDQUNuQyw0RUFBQ2M7O2dDQUFFOzhDQUF3Qiw4REFBQ1Q7b0NBQUtYLFdBQVU7b0NBQWVLLE9BQU87d0NBQUVDLE9BQU87d0NBQVdlLFFBQVE7b0NBQVU7b0NBQUdqQixTQUFTa0I7OENBQW1COzs7Ozs7Z0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHcEosOERBQUNsRSwrQ0FBTUE7Z0JBQUNPLFFBQVFPO2dCQUFtQk4sUUFBUVE7Ozs7OzswQkFDM0MsOERBQUNtRDtnQkFBTzVELFFBQVE2RDtnQkFBbUI1RCxRQUFRMEQ7Z0JBQW1CRyxTQUFTSDs7Ozs7Ozs7QUFHN0U7R0F0R1M1RDtLQUFBQTtBQXdHVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWduaW4uanM/MDc4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgU2lnbnVwIGZyb20gXCIuL1NpZ251cFwiO1xuaW1wb3J0IHsgbm9ybWFsQWxlcnQgfSBmcm9tIFwiLi9Td2FsXCI7XG5cbi8vIHJlYWN0c3RyYXAgY29tcG9uZW50c1xuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgTW9kYWxCb2R5LCBNb2RhbEZvb3RlciB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmZ1bmN0aW9uIFNpZ25pbih7IGlzT3BlbiwgdG9nZ2xlIH0pIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzU2lnbnVwTW9kYWxPcGVuLCBzZXRJc1NpZ251cE1vZGFsT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlU2lnbnVwTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0SXNTaWdudXBNb2RhbE9wZW4oIWlzU2lnbnVwTW9kYWxPcGVuKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaWduaW4gPSAoKSA9PiB7XG4gICAgaWYgKGVtYWlsID09PSBcIlwiIHx8IHBhc3N3b3JkID09PSBcIlwiKSB7XG4gICAgICBub3JtYWxBbGVydChcIlZ1aSBsw7JuZyBuaOG6rXAgaWQgdsOgIG3huq10IGto4bqpdSDEkeG7gyDEkcSDbmcgbmjhuq1wIVwiLCBcImVycm9yXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoIWlzVmFsaWRFbWFpbChlbWFpbCkpIHtcbiAgICAgIG5vcm1hbEFsZXJ0KFwiRW1haWwga2jDtG5nIGjhu6NwIGzhu4csIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaSFcIiwgXCJlcnJvclwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIFwiZW1haWxcIjogZW1haWwsXG4gICAgICBcInBhc3N3b3JkXCI6IHBhc3N3b3JkXG4gICAgfSk7XG5cbiAgICBsZXQgY29uZmlnID0ge1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICB1cmw6ICdodHRwczovL2plbGx5ZmlzaC1hcHAta2Fmem4ub25kaWdpdGFsb2NlYW4uYXBwL2FwaS92MS9hdXRoL2F1dGhlbnRpY2F0ZScsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfTtcblxuICAgIEF4aW9zLnJlcXVlc3QoY29uZmlnKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIG5vcm1hbEFsZXJ0KFwixJDEg25nIG5o4bqtcCB0aMOgbmggY8O0bmchXCIsIFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImVtYWlsXCIsIGVtYWlsKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjY2Vzc190b2tlblwiLCByZXNwb25zZS5kYXRhLmFjY2Vzc190b2tlbik7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDMpIHtcbiAgICAgICAgICBub3JtYWxBbGVydChcIkVtYWlsIGhv4bq3YyBt4bqtdCBraOG6qXUga2jDtG5nIGNow61uaCB4w6FjLCB4aW4gdnVpIGzDsm5nIHRo4butIGzhuqFpIVwiLCBcImVycm9yXCIpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVmFsaWRFbWFpbChlbWFpbCkge1xuICAgIGNvbnN0IGVtYWlsUmVnZXggPSAvXlthLXpBLVowLTkuXy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVpdezIsNH0kLztcbiAgICByZXR1cm4gZW1haWxSZWdleC50ZXN0KGVtYWlsKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb2RhbCBpc09wZW49e2lzT3Blbn0gdG9nZ2xlPXt0b2dnbGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiIG1vZGFsLW1haW4tdGl0bGUgXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPlxuICAgICAgICAgICAgIMSQxINuZyBuaOG6rXBcbiAgICAgICAgICA8L2g1PlxuXG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1vZGFsLXN1Yi10aXRsZVwiIG9uQ2xpY2s9e3RvZ2dsZVNpZ251cE1vZGFsfSBpZCA9IFwiXCI+XG4gICAgICAgICAgICAgIMSQxINuZyBrw61cbiAgICAgICAgICA8L2g2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TW9kYWxCb2R5IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IFwiMTBweFwiIH19PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxzcGFuPiBFbWFpbCA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcyA9XCJmb3JtLWZpZWxkXCIgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiTmjhuq1wIGVtYWlsLi4uXCIgdmFsdWU9e2VtYWlsfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcyA9IFwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzID1cImZvcm0tZmllbGRcIiB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJOaOG6rXAgbeG6rXQga2jhuql1Li4uXCIgdmFsdWU9e3Bhc3N3b3JkfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuPiBQYXNzd29yZCA8L3NwYW4+XG5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVNpZ25pbn0+XG4gICAgICAgICAgICAgPHNwYW4+IFNpZ24gSW4gPC9zcGFuPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L01vZGFsQm9keT5cblxuICAgICAgICA8TW9kYWxGb290ZXIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cbiAgICAgICAgICA8aT5RdcOqbiBt4bqtdCBraOG6qXU/IE5o4bqlbiB2w6BvIDxzcGFuIGNsYXNzTmFtZT1cInNpZ24tdXAtbGlua1wiIHN0eWxlPXt7IGNvbG9yOiBcIiNmZmI0MDBcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fSBvbkNsaWNrPXt0b2dnbGVGb3Jnb3RNb2RhbH0+xJHDonk8L3NwYW4+IMSR4buDIHThuqFvIGzhuqFpIG3huq10IGto4bqpdTwvaT5cbiAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgIDwvTW9kYWw+XG4gICAgICA8U2lnbnVwIGlzT3Blbj17aXNTaWdudXBNb2RhbE9wZW59IHRvZ2dsZT17dG9nZ2xlU2lnbnVwTW9kYWx9IC8+XG4gICAgICA8Rm9yZ290IGlzT3Blbj17aXNGb3Jnb3RNb2RhbE9wZW59IHRvZ2dsZT17dG9nZ2xlRm9yZ290TW9kYWx9IHN1Y2Nlc3M9e3RvZ2dsZUZvcmdvdE1vZGFsfSAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduaW47Il0sIm5hbWVzIjpbIlJlYWN0IiwiQXhpb3MiLCJTaWdudXAiLCJub3JtYWxBbGVydCIsIkJ1dHRvbiIsIk1vZGFsIiwiTW9kYWxCb2R5IiwiTW9kYWxGb290ZXIiLCJTaWduaW4iLCJpc09wZW4iLCJ0b2dnbGUiLCJlbWFpbCIsInNldEVtYWlsIiwidXNlU3RhdGUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaXNTaWdudXBNb2RhbE9wZW4iLCJzZXRJc1NpZ251cE1vZGFsT3BlbiIsInRvZ2dsZVNpZ251cE1vZGFsIiwiaGFuZGxlU2lnbmluIiwiaXNWYWxpZEVtYWlsIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25maWciLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwicmVxdWVzdCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJhY2Nlc3NfdG9rZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImVycm9yIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiY2xlYXIiLCJlbWFpbFJlZ2V4IiwidGVzdCIsImRpdiIsImNsYXNzTmFtZSIsImg1IiwiaWQiLCJoNiIsIm9uQ2xpY2siLCJzdHlsZSIsImNvbG9yIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJjbGFzcyIsInNwYW4iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwid2lkdGgiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJpIiwiY3Vyc29yIiwidG9nZ2xlRm9yZ290TW9kYWwiLCJGb3Jnb3QiLCJpc0ZvcmdvdE1vZGFsT3BlbiIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Signin.js\n"));

/***/ })

});