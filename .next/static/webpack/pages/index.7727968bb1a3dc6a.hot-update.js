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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _Swal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Swal */ \"./src/components/Swal.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// reactstrap components\n\nfunction LinkRef(param) {\n    let { isOpen , toggle , current  } = param;\n    _s();\n    const [code, setCode] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [isLinkRefModalOpen, setIsLinkRefModalOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const toggleLinkRefModal = ()=>{\n        setIsLinkRefModalOpen(!isLinkRefModalOpen);\n    };\n    const handleLink = ()=>{\n        if (!isValidCode(code)) {\n            (0,_Swal__WEBPACK_IMPORTED_MODULE_2__.normalAlert)(\"ID kh\\xf4ng hợp lệ, vui l\\xf2ng thử lại!\", \"error\");\n            return;\n        }\n        let data = JSON.stringify({\n            \"current\": current,\n            \"code\": code\n        });\n        let config = {\n            method: \"post\",\n            maxBodyLength: Infinity,\n            url: \"https://jellyfish-app-kafzn.ondigitalocean.app/api/v1/auth/update-ref\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            data: data\n        };\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].request(config).then((response)=>{\n            console.log(response.status);\n            if (response.data.status === 200) {\n                (0,_Swal__WEBPACK_IMPORTED_MODULE_2__.normalAlert)(\"Cập nhật người giới thiệu th\\xe0nh c\\xf4ng!\", \"success\");\n                setTimeout(()=>{\n                    window.location.reload();\n                }, 1500);\n            } else if (response.data.status === 404) {\n                (0,_Swal__WEBPACK_IMPORTED_MODULE_2__.normalAlert)(\"ID người giới thiệu kh\\xf4ng tồn tại!\", \"error\");\n            } else {\n                (0,_Swal__WEBPACK_IMPORTED_MODULE_2__.normalAlert)(\"C\\xf3 lỗi xảy ra, vui l\\xf2ng thử lại sau!\", \"error\");\n            }\n        }).catch((error)=>{\n            (0,_Swal__WEBPACK_IMPORTED_MODULE_2__.normalAlert)(\"C\\xf3 lỗi xảy ra, vui l\\xf2ng thử lại sau!\", \"error\");\n            localStorage.clear();\n            setTimeout(()=>{\n                window.location.reload();\n            }, 1500);\n            return;\n        });\n    };\n    function isValidCode(code) {\n        const codeRegex = /^[0-9]+$/;\n        return codeRegex.test(code);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n            isOpen: isOpen,\n            toggle: toggle,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" modal-header\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \" modal-title text-black\",\n                        id: \"exampleModalLabel\",\n                        children: \"T\\xe0i khoản của bạn chưa li\\xean kết với người giới thiệu!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/LinkRef.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/LinkRef.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.ModalBody, {\n                    style: {\n                        color: \"black\",\n                        display: \"flex\",\n                        flexDirection: \"column\",\n                        gap: \"10px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"text\",\n                            placeholder: \"Nhập code người giới thiệu...\",\n                            value: code,\n                            style: {\n                                width: \"100%\"\n                            },\n                            onChange: (e)=>{\n                                setCode(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/LinkRef.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \" modal-title text-red\",\n                            id: \"exampleModalLabel\",\n                            children: \"Nếu kh\\xf4ng li\\xean kết, người giới thiệu của bạn sẽ kh\\xf4ng được hưởng quyền lợi!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/LinkRef.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            color: \"primary\",\n                            type: \"button\",\n                            onClick: handleLink,\n                            children: \"Li\\xean kết\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/LinkRef.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/LinkRef.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/LinkRef.js\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(LinkRef, \"jQCMehfP7c/PIs9ShowzhLswPew=\");\n_c = LinkRef;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkRef);\nvar _c;\n$RefreshReg$(_c, \"LinkRef\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IG5vcm1hbEFsZXJ0IH0gZnJvbSBcIi4vU3dhbFwiO1xuXG4vLyByZWFjdHN0cmFwIGNvbXBvbmVudHNcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIE1vZGFsQm9keSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmZ1bmN0aW9uIExpbmtSZWYoeyBpc09wZW4sIHRvZ2dsZSwgY3VycmVudCB9KSB7XG4gIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNMaW5rUmVmTW9kYWxPcGVuLCBzZXRJc0xpbmtSZWZNb2RhbE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZUxpbmtSZWZNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRJc0xpbmtSZWZNb2RhbE9wZW4oIWlzTGlua1JlZk1vZGFsT3Blbik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTGluayA9ICgpID0+IHtcbiAgICBpZiAoIWlzVmFsaWRDb2RlKGNvZGUpKSB7XG4gICAgICBub3JtYWxBbGVydChcIklEIGtow7RuZyBo4bujcCBs4buHLCB2dWkgbMOybmcgdGjhu60gbOG6oWkhXCIsIFwiZXJyb3JcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBcImN1cnJlbnRcIjogY3VycmVudCxcbiAgICAgIFwiY29kZVwiOiBjb2RlXG4gICAgfSk7XG5cbiAgICBsZXQgY29uZmlnID0ge1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBtYXhCb2R5TGVuZ3RoOiBJbmZpbml0eSxcbiAgICAgIHVybDogJ2h0dHBzOi8vamVsbHlmaXNoLWFwcC1rYWZ6bi5vbmRpZ2l0YWxvY2Vhbi5hcHAvYXBpL3YxL2F1dGgvdXBkYXRlLXJlZicsXG4gICAgICBoZWFkZXJzOiB7IFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgZGF0YSA6IGRhdGFcbiAgICB9O1xuXG4gICAgQXhpb3MucmVxdWVzdChjb25maWcpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBub3JtYWxBbGVydChcIkPhuq1wIG5o4bqtdCBuZ8aw4budaSBnaeG7m2kgdGhp4buHdSB0aMOgbmggY8O0bmchXCIsIFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgbm9ybWFsQWxlcnQoXCJJRCBuZ8aw4budaSBnaeG7m2kgdGhp4buHdSBraMO0bmcgdOG7k24gdOG6oWkhXCIsIFwiZXJyb3JcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9ybWFsQWxlcnQoXCJDw7MgbOG7l2kgeOG6o3kgcmEsIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUhXCIsIFwiZXJyb3JcIik7XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBub3JtYWxBbGVydChcIkPDsyBs4buXaSB44bqjeSByYSwgdnVpIGzDsm5nIHRo4butIGzhuqFpIHNhdSFcIiwgXCJlcnJvclwiKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNWYWxpZENvZGUoY29kZSkge1xuICAgIGNvbnN0IGNvZGVSZWdleCA9IC9eWzAtOV0rJC87XG4gICAgcmV0dXJuIGNvZGVSZWdleC50ZXN0KGNvZGUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1vZGFsIGlzT3Blbj17aXNPcGVufSB0b2dnbGU9e3RvZ2dsZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCIgbW9kYWwtdGl0bGUgdGV4dC1ibGFja1wiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5cbiAgICAgICAgICAgIFTDoGkga2hv4bqjbiBj4bunYSBi4bqhbiBjaMawYSBsacOqbiBr4bq/dCB24bubaSBuZ8aw4budaSBnaeG7m2kgdGhp4buHdSFcbiAgICAgICAgICA8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1vZGFsQm9keSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiBcIjEwcHhcIiB9fT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5o4bqtcCBjb2RlIG5nxrDhu51pIGdp4bubaSB0aGnhu4d1Li4uXCIgdmFsdWU9e2NvZGV9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHNldENvZGUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBtb2RhbC10aXRsZSB0ZXh0LXJlZFwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5cbiAgICAgICAgICAgIE7hur91IGtow7RuZyBsacOqbiBr4bq/dCwgbmfGsOG7nWkgZ2nhu5tpIHRoaeG7h3UgY+G7p2EgYuG6oW4gc+G6vSBraMO0bmcgxJHGsOG7o2MgaMaw4bufbmcgcXV54buBbiBs4bujaSFcbiAgICAgICAgICA8L2k+XG5cbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVMaW5rfT5cbiAgICAgICAgICAgIExpw6puIGvhur90XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgPC9Nb2RhbD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1JlZjsiXSwibmFtZXMiOlsiUmVhY3QiLCJBeGlvcyIsIm5vcm1hbEFsZXJ0IiwiQnV0dG9uIiwiTW9kYWwiLCJNb2RhbEJvZHkiLCJMaW5rUmVmIiwiaXNPcGVuIiwidG9nZ2xlIiwiY3VycmVudCIsImNvZGUiLCJzZXRDb2RlIiwidXNlU3RhdGUiLCJpc0xpbmtSZWZNb2RhbE9wZW4iLCJzZXRJc0xpbmtSZWZNb2RhbE9wZW4iLCJ0b2dnbGVMaW5rUmVmTW9kYWwiLCJoYW5kbGVMaW5rIiwiaXNWYWxpZENvZGUiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbmZpZyIsIm1ldGhvZCIsIm1heEJvZHlMZW5ndGgiLCJJbmZpbml0eSIsInVybCIsImhlYWRlcnMiLCJyZXF1ZXN0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImNhdGNoIiwiZXJyb3IiLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsImNvZGVSZWdleCIsInRlc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJoNSIsImlkIiwic3R5bGUiLCJjb2xvciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZ2FwIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIndpZHRoIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/LinkRef.js\n"));

/***/ })

});