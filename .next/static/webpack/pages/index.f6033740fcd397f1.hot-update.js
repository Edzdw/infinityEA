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

/***/ "./src/components/LinkRef.js":
/*!***********************************!*\
  !*** ./src/components/LinkRef.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _Swal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Swal */ \"./src/components/Swal.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// reactstrap components\n\nfunction LinkRef(param) {\n    let { isOpen , toggle , current  } = param;\n    _s();\n    const [code, setCode] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [isLinkRefModalOpen, setIsLinkRefModalOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const toggleLinkRefModal = ()=>{\n        setIsLinkRefModalOpen(!isLinkRefModalOpen);\n    };\n    const handleLink = ()=>{\n        if (!isValidCode(code)) {\n            (0,_Swal__WEBPACK_IMPORTED_MODULE_2__.normalAlert)(\"ID kh\\xf4ng hợp lệ, vui l\\xf2ng thử lại!\", \"error\");\n            return;\n        }\n        let data = JSON.stringify({\n            \"current\": current,\n            \"code\": code\n        });\n        let config = {\n            method: \"post\",\n            maxBodyLength: Infinity,\n            url: \"https://jellyfish-app-kafzn.ondigitalocean.app/api/v1/auth/update-ref\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            data: data\n        };\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].request(config).then((response)=>{\n            if (response.data.status === 200) {\n                (0,_Swal__WEBPACK_IMPORTED_MODULE_2__.normalAlert)(\"Cập nhật người giới thiệu th\\xe0nh c\\xf4ng!\", \"success\");\n                setTimeout(()=>{\n                    window.location.reload();\n                }, 1500);\n            } else if (response.data.status === 404) {\n                (0,_Swal__WEBPACK_IMPORTED_MODULE_2__.normalAlert)(\"ID người giới thiệu kh\\xf4ng tồn tại!\", \"error\");\n            } else {\n                (0,_Swal__WEBPACK_IMPORTED_MODULE_2__.normalAlert)(\"C\\xf3 lỗi xảy ra, vui l\\xf2ng thử lại sau!\", \"error\");\n            }\n        }).catch((error)=>{\n            (0,_Swal__WEBPACK_IMPORTED_MODULE_2__.normalAlert)(\"C\\xf3 lỗi xảy ra, vui l\\xf2ng thử lại sau!\", \"error\");\n            localStorage.clear();\n            setTimeout(()=>{\n                window.location.reload();\n            }, 1500);\n            return;\n        });\n    };\n    function isValidCode(code) {\n        const codeRegex = /^[0-9]+$/;\n        return codeRegex.test(code);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n            isOpen: isOpen,\n            toggle: toggle,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" modal-header\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \" modal-title text-black\",\n                        id: \"exampleModalLabel\",\n                        children: \"T\\xe0i khoản của bạn chưa li\\xean kết với người giới thiệu!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/LinkRef.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/LinkRef.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.ModalBody, {\n                    style: {\n                        color: \"black\",\n                        display: \"flex\",\n                        flexDirection: \"column\",\n                        gap: \"10px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"text\",\n                            placeholder: \"Nhập code người giới thiệu...\",\n                            value: code,\n                            style: {\n                                width: \"100%\"\n                            },\n                            onChange: (e)=>{\n                                setCode(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/LinkRef.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \" modal-title text-red\",\n                            id: \"exampleModalLabel\",\n                            children: \"Nếu kh\\xf4ng li\\xean kết, người giới thiệu của bạn sẽ kh\\xf4ng được hưởng quyền lợi!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/LinkRef.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            color: \"primary\",\n                            type: \"button\",\n                            onClick: handleLink,\n                            children: \"Li\\xean kết\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/LinkRef.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/LinkRef.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/LinkRef.js\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(LinkRef, \"jQCMehfP7c/PIs9ShowzhLswPew=\");\n_c = LinkRef;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkRef);\nvar _c;\n$RefreshReg$(_c, \"LinkRef\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MaW5rUmVmLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDQTtBQUNXO0FBRXJDLHdCQUF3QjtBQUM4QjtBQUV0RCxTQUFTTSxRQUFRLEtBQTJCLEVBQUU7UUFBN0IsRUFBRUMsT0FBTSxFQUFFQyxPQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUEzQjs7SUFDZixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1gscURBQWMsQ0FBQztJQUN2QyxNQUFNLENBQUNhLG9CQUFvQkMsc0JBQXNCLEdBQUdkLHFEQUFjLENBQUMsS0FBSztJQUV4RSxNQUFNZSxxQkFBcUIsSUFBTTtRQUMvQkQsc0JBQXNCLENBQUNEO0lBQ3pCO0lBRUEsTUFBTUcsYUFBYSxJQUFNO1FBQ3ZCLElBQUksQ0FBQ0MsWUFBWVAsT0FBTztZQUN0QlIsa0RBQVdBLENBQUMsNENBQXNDO1lBQ2xEO1FBQ0YsQ0FBQztRQUVELElBQUlnQixPQUFPQyxLQUFLQyxTQUFTLENBQUM7WUFDeEIsV0FBV1g7WUFDWCxRQUFRQztRQUNWO1FBRUEsSUFBSVcsU0FBUztZQUNYQyxRQUFRO1lBQ1JDLGVBQWVDO1lBQ2ZDLEtBQUs7WUFDTEMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQVIsTUFBT0E7UUFDVDtRQUVBakIscURBQWEsQ0FBQ29CLFFBQ1hPLElBQUksQ0FBQyxDQUFDQyxXQUFhO1lBQ2xCLElBQUlBLFNBQVNYLElBQUksQ0FBQ1ksTUFBTSxLQUFLLEtBQUs7Z0JBQ2hDNUIsa0RBQVdBLENBQUMsK0NBQXlDO2dCQUNyRDZCLFdBQVcsSUFBTTtvQkFDZkMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNO2dCQUN4QixHQUFHO1lBQ0wsT0FBTyxJQUFJTCxTQUFTWCxJQUFJLENBQUNZLE1BQU0sS0FBSyxLQUFLO2dCQUN2QzVCLGtEQUFXQSxDQUFDLHlDQUFzQztZQUNwRCxPQUFPO2dCQUNMQSxrREFBV0EsQ0FBQyw4Q0FBd0M7WUFDdEQsQ0FBQztRQUNILEdBQUdpQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtZQUNsQmxDLGtEQUFXQSxDQUFDLDhDQUF3QztZQUNwRG1DLGFBQWFDLEtBQUs7WUFDbEJQLFdBQVcsSUFBTTtnQkFDZkMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNO1lBQ3hCLEdBQUc7WUFDSDtRQUNGO0lBQ0o7SUFFQSxTQUFTakIsWUFBWVAsSUFBSSxFQUFFO1FBQ3pCLE1BQU02QixZQUFZO1FBQ2xCLE9BQU9BLFVBQVVDLElBQUksQ0FBQzlCO0lBQ3hCO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNOLDZDQUFLQTtZQUFDRyxRQUFRQTtZQUFRQyxRQUFRQTs7OEJBQzdCLDhEQUFDaUM7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUFHRCxXQUFVO3dCQUEwQkUsSUFBRztrQ0FBb0I7Ozs7Ozs7Ozs7OzhCQUlqRSw4REFBQ3ZDLGlEQUFTQTtvQkFBQ3dDLE9BQU87d0JBQUVDLE9BQU87d0JBQVNDLFNBQVM7d0JBQVFDLGVBQWU7d0JBQVVDLEtBQUs7b0JBQU87O3NDQUN4Riw4REFBQ0M7NEJBQU1DLE1BQUs7NEJBQU9QLElBQUc7NEJBQU9RLGFBQVk7NEJBQWdDQyxPQUFPM0M7NEJBQU1tQyxPQUFPO2dDQUFFUyxPQUFPOzRCQUFPOzRCQUMzR0MsVUFBVSxDQUFDQyxJQUFNO2dDQUNmN0MsUUFBUTZDLEVBQUVDLE1BQU0sQ0FBQ0osS0FBSzs0QkFDeEI7Ozs7OztzQ0FFRiw4REFBQ0s7NEJBQUVoQixXQUFVOzRCQUF3QkUsSUFBRztzQ0FBb0I7Ozs7OztzQ0FJNUQsOERBQUN6Qyw4Q0FBTUE7NEJBQUMyQyxPQUFNOzRCQUFVSyxNQUFLOzRCQUFTUSxTQUFTM0M7c0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckU7R0FqRlNWO0tBQUFBO0FBbUZULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xpbmtSZWYuanM/ZGU2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBub3JtYWxBbGVydCB9IGZyb20gXCIuL1N3YWxcIjtcblxuLy8gcmVhY3RzdHJhcCBjb21wb25lbnRzXG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCBNb2RhbEJvZHkgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5mdW5jdGlvbiBMaW5rUmVmKHsgaXNPcGVuLCB0b2dnbGUsIGN1cnJlbnQgfSkge1xuICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzTGlua1JlZk1vZGFsT3Blbiwgc2V0SXNMaW5rUmVmTW9kYWxPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVMaW5rUmVmTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0SXNMaW5rUmVmTW9kYWxPcGVuKCFpc0xpbmtSZWZNb2RhbE9wZW4pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxpbmsgPSAoKSA9PiB7XG4gICAgaWYgKCFpc1ZhbGlkQ29kZShjb2RlKSkge1xuICAgICAgbm9ybWFsQWxlcnQoXCJJRCBraMO0bmcgaOG7o3AgbOG7hywgdnVpIGzDsm5nIHRo4butIGzhuqFpIVwiLCBcImVycm9yXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgXCJjdXJyZW50XCI6IGN1cnJlbnQsXG4gICAgICBcImNvZGVcIjogY29kZVxuICAgIH0pO1xuXG4gICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgbWF4Qm9keUxlbmd0aDogSW5maW5pdHksXG4gICAgICB1cmw6ICdodHRwczovL2plbGx5ZmlzaC1hcHAta2Fmem4ub25kaWdpdGFsb2NlYW4uYXBwL2FwaS92MS9hdXRoL3VwZGF0ZS1yZWYnLFxuICAgICAgaGVhZGVyczogeyBcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGRhdGEgOiBkYXRhXG4gICAgfTtcblxuICAgIEF4aW9zLnJlcXVlc3QoY29uZmlnKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgbm9ybWFsQWxlcnQoXCJD4bqtcCBuaOG6rXQgbmfGsOG7nWkgZ2nhu5tpIHRoaeG7h3UgdGjDoG5oIGPDtG5nIVwiLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgIG5vcm1hbEFsZXJ0KFwiSUQgbmfGsOG7nWkgZ2nhu5tpIHRoaeG7h3Uga2jDtG5nIHThu5NuIHThuqFpIVwiLCBcImVycm9yXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vcm1hbEFsZXJ0KFwiQ8OzIGzhu5dpIHjhuqN5IHJhLCB2dWkgbMOybmcgdGjhu60gbOG6oWkgc2F1IVwiLCBcImVycm9yXCIpO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgbm9ybWFsQWxlcnQoXCJDw7MgbOG7l2kgeOG6o3kgcmEsIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUhXCIsIFwiZXJyb3JcIik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0sIDE1MDApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVmFsaWRDb2RlKGNvZGUpIHtcbiAgICBjb25zdCBjb2RlUmVnZXggPSAvXlswLTldKyQvO1xuICAgIHJldHVybiBjb2RlUmVnZXgudGVzdChjb2RlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb2RhbCBpc09wZW49e2lzT3Blbn0gdG9nZ2xlPXt0b2dnbGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiIG1vZGFsLXRpdGxlIHRleHQtYmxhY2tcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+XG4gICAgICAgICAgICBUw6BpIGtob+G6o24gY+G7p2EgYuG6oW4gY2jGsGEgbGnDqm4ga+G6v3QgduG7m2kgbmfGsOG7nWkgZ2nhu5tpIHRoaeG7h3UhXG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNb2RhbEJvZHkgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogXCIxMHB4XCIgfX0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOaOG6rXAgY29kZSBuZ8aw4budaSBnaeG7m2kgdGhp4buHdS4uLlwiIHZhbHVlPXtjb2RlfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRDb2RlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbW9kYWwtdGl0bGUgdGV4dC1yZWRcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+XG4gICAgICAgICAgICBO4bq/dSBraMO0bmcgbGnDqm4ga+G6v3QsIG5nxrDhu51pIGdp4bubaSB0aGnhu4d1IGPhu6dhIGLhuqFuIHPhur0ga2jDtG5nIMSRxrDhu6NjIGjGsOG7n25nIHF1eeG7gW4gbOG7o2khXG4gICAgICAgICAgPC9pPlxuXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlTGlua30+XG4gICAgICAgICAgICBMacOqbiBr4bq/dFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L01vZGFsQm9keT5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtSZWY7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQXhpb3MiLCJub3JtYWxBbGVydCIsIkJ1dHRvbiIsIk1vZGFsIiwiTW9kYWxCb2R5IiwiTGlua1JlZiIsImlzT3BlbiIsInRvZ2dsZSIsImN1cnJlbnQiLCJjb2RlIiwic2V0Q29kZSIsInVzZVN0YXRlIiwiaXNMaW5rUmVmTW9kYWxPcGVuIiwic2V0SXNMaW5rUmVmTW9kYWxPcGVuIiwidG9nZ2xlTGlua1JlZk1vZGFsIiwiaGFuZGxlTGluayIsImlzVmFsaWRDb2RlIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25maWciLCJtZXRob2QiLCJtYXhCb2R5TGVuZ3RoIiwiSW5maW5pdHkiLCJ1cmwiLCJoZWFkZXJzIiwicmVxdWVzdCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImNhdGNoIiwiZXJyb3IiLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsImNvZGVSZWdleCIsInRlc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJoNSIsImlkIiwic3R5bGUiLCJjb2xvciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZ2FwIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIndpZHRoIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/LinkRef.js\n"));

/***/ })

});