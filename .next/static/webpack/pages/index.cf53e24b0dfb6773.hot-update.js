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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_sliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/sliderProps */ \"./src/sliderProps.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var _CurrentNetwork__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CurrentNetwork */ \"./src/components/sections/CurrentNetwork.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _Swal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Swal */ \"./src/components/Swal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst About = ()=>{\n    _s();\n    const email = localStorage.getItem(\"email\");\n    const [networks, setNetworks] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [prevNetworks, setPrevtNetworks] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [root, setRoot] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(email);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (!email) {\n            (0,_Swal__WEBPACK_IMPORTED_MODULE_5__.normalAlert)(\"C\\xf3 lỗi xảy ra, vui l\\xf2ng thử lại sau!\", \"error\");\n            return;\n        }\n        fetchNetwork(email);\n    }, []);\n    const fetchNetwork = (input)=>{\n        let config = {\n            method: \"get\",\n            //https://jellyfish-app-kafzn.ondigitalocean.app\n            url: \"http://localhost:8080/api/v1/auth/getNetwork/\".concat(encodeURI(input))\n        };\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].request(config).then((response)=>{\n            setNetworks(response.data);\n        }).catch((error)=>{\n            (0,_Swal__WEBPACK_IMPORTED_MODULE_5__.normalAlert)(\"C\\xf3 lỗi xảy ra, vui l\\xf2ng thử lại sau!\", \"error\");\n            console.log(error);\n        });\n    };\n    const handleGoBack = (email)=>{\n        console.log(email);\n    };\n    const handleShowNext = (email)=>{\n        console.log(email);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"portfolio network main-section flex-column-mobile\",\n        id: \"network\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"custom-title\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"animated-layer fade-in-left-animation fadeInUp wow\",\n                            children: \"Our Network\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleGoBack,\n                children: \"Quay lại\"\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            networks.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    onClick: ()=>{\n                        handleShowNext(item.email);\n                    },\n                    children: item.email\n                }, index, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                    lineNumber: 69,\n                    columnNumber: 39\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: \"\",\n                className: \"separator hide-mobile\",\n                src: \"assets/separator.png\"\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(About, \"VrDszmRhhifCcz0TFIxuBaMAVec=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9OZXR3b3JrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN3QjtBQUNDO0FBQ0w7QUFDcEI7QUFDWTtBQUV0QyxNQUFNTyxRQUFRLElBQU07O0lBQ2xCLE1BQU1DLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztJQUNuQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1oscURBQWMsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ2MsY0FBY0MsaUJBQWlCLEdBQUdmLHFEQUFjLENBQUMsRUFBRTtJQUMxRCxNQUFNLENBQUNnQixNQUFNQyxRQUFRLEdBQUdqQixxREFBYyxDQUFDUTtJQUl2Q1Isc0RBQWUsQ0FBQyxJQUFNO1FBQ3BCLElBQUksQ0FBQ1EsT0FBTztZQUNWRixrREFBV0EsQ0FBQyw4Q0FBd0M7WUFDcEQ7UUFDRixDQUFDO1FBRURhLGFBQWFYO0lBQ2YsR0FBRyxFQUFFO0lBRUwsTUFBTVcsZUFBZSxDQUFDQyxRQUFVO1FBQzlCLElBQUlDLFNBQVM7WUFDWEMsUUFBUTtZQUNSLGdEQUFnRDtZQUNoREMsS0FBSyxnREFBaUUsT0FBakJDLFVBQVVKO1FBQ2pFO1FBRUFmLHFEQUFhLENBQUNnQixRQUNiSyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUNsQmYsWUFBWWUsU0FBU0MsSUFBSTtRQUMzQixHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtZQUNoQnhCLGtEQUFXQSxDQUFDLDhDQUF3QztZQUNwRHlCLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNGO0lBRUEsTUFBTUcsZUFBZSxDQUFDekIsUUFBVTtRQUM5QnVCLFFBQVFDLEdBQUcsQ0FBQ3hCO0lBQ2Q7SUFFQSxNQUFNMEIsaUJBQWlCLENBQUMxQixRQUFVO1FBQ2hDdUIsUUFBUUMsR0FBRyxDQUFDeEI7SUFDZDtJQUVBLHFCQUNFLDhEQUFDMkI7UUFDQ0MsV0FBVTtRQUNWQyxJQUFHOzswQkFHSCw4REFBQ0M7Z0JBQUlGLFdBQVU7MEJBRWIsNEVBQUNHOzhCQUNDLDRFQUFDQztrQ0FDQyw0RUFBQ0E7NEJBQUtKLFdBQVU7c0NBQXFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBUTNFLDhEQUFDSztnQkFBT0MsU0FBU1Q7MEJBQWM7Ozs7OztZQUM5QnRCLFNBQVNnQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQVcsOERBQUNMO29CQUFLRSxTQUFTLElBQU07d0JBQUNSLGVBQWVVLEtBQUtwQyxLQUFLO29CQUFDOzhCQUFnQm9DLEtBQUtwQyxLQUFLO21CQUFsQnFDOzs7OzswQkFDeEYsOERBQUNDO2dCQUNDQyxLQUFJO2dCQUNKWCxXQUFVO2dCQUNWWSxLQUFJOzs7Ozs7Ozs7Ozs7QUFJWjtHQXJFTXpDO0tBQUFBO0FBc0VOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL05ldHdvcmsuanM/ZTA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzYWxpbW92U2xpZGVyIH0gZnJvbSBcIkAvc3JjL3NsaWRlclByb3BzXCI7XG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xuaW1wb3J0IEN1cnJlbnROZXR3b3JrIGZyb20gXCIuL0N1cnJlbnROZXR3b3JrXCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBub3JtYWxBbGVydCB9IGZyb20gXCIuLi9Td2FsXCI7XG5cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XG4gIGNvbnN0IFtuZXR3b3Jrcywgc2V0TmV0d29ya3NdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICBjb25zdCBbcHJldk5ldHdvcmtzLCBzZXRQcmV2dE5ldHdvcmtzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Jvb3QsIHNldFJvb3RdID0gUmVhY3QudXNlU3RhdGUoZW1haWwpO1xuXG4gIFxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFlbWFpbCkge1xuICAgICAgbm9ybWFsQWxlcnQoXCJDw7MgbOG7l2kgeOG6o3kgcmEsIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUhXCIsIFwiZXJyb3JcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmV0Y2hOZXR3b3JrKGVtYWlsKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGZldGNoTmV0d29yayA9IChpbnB1dCkgPT4ge1xuICAgIGxldCBjb25maWcgPSB7XG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgLy9odHRwczovL2plbGx5ZmlzaC1hcHAta2Fmem4ub25kaWdpdGFsb2NlYW4uYXBwXG4gICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3YxL2F1dGgvZ2V0TmV0d29yay8ke2VuY29kZVVSSShpbnB1dCl9YFxuICAgIH07XG5cbiAgICBBeGlvcy5yZXF1ZXN0KGNvbmZpZylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldE5ldHdvcmtzKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgbm9ybWFsQWxlcnQoXCJDw7MgbOG7l2kgeOG6o3kgcmEsIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUhXCIsIFwiZXJyb3JcIik7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVHb0JhY2sgPSAoZW1haWwpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2hvd05leHQgPSAoZW1haWwpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBjbGFzc05hbWU9XCJwb3J0Zm9saW8gbmV0d29yayBtYWluLXNlY3Rpb24gZmxleC1jb2x1bW4tbW9iaWxlXCJcbiAgICAgIGlkPVwibmV0d29ya1wiXG4gICAgPlxuICAgICAgey8qIFRJVExFIFNUQVJUUyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXRpdGxlXCI+XG4gICAgICAgIHsvKiBNQUlOIFRJVExFIFNUQVJUUyAqL31cbiAgICAgICAgPGgzPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5pbWF0ZWQtbGF5ZXIgZmFkZS1pbi1sZWZ0LWFuaW1hdGlvbiBmYWRlSW5VcCB3b3dcIj5cbiAgICAgICAgICAgICAgT3VyIE5ldHdvcmtcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvaDM+XG4gICAgICAgIHsvKiBNQUlOIFRJVExFIEVORFMgKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBUSVRMRSBFTkRTICovfVxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVHb0JhY2t9PlF1YXkgbOG6oWk8L2J1dHRvbj5cbiAgICAgIHtuZXR3b3Jrcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoPHNwYW4gb25DbGljaz17KCkgPT4ge2hhbmRsZVNob3dOZXh0KGl0ZW0uZW1haWwpfX0ga2V5PXtpbmRleH0+e2l0ZW0uZW1haWx9PC9zcGFuPikpfVxuICAgICAgPGltZ1xuICAgICAgICBhbHQ9XCJcIlxuICAgICAgICBjbGFzc05hbWU9XCJzZXBhcmF0b3IgaGlkZS1tb2JpbGVcIlxuICAgICAgICBzcmM9XCJhc3NldHMvc2VwYXJhdG9yLnBuZ1wiXG4gICAgICAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInNhbGltb3ZTbGlkZXIiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIkN1cnJlbnROZXR3b3JrIiwiQXhpb3MiLCJub3JtYWxBbGVydCIsIkFib3V0IiwiZW1haWwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibmV0d29ya3MiLCJzZXROZXR3b3JrcyIsInVzZVN0YXRlIiwicHJldk5ldHdvcmtzIiwic2V0UHJldnROZXR3b3JrcyIsInJvb3QiLCJzZXRSb290IiwidXNlRWZmZWN0IiwiZmV0Y2hOZXR3b3JrIiwiaW5wdXQiLCJjb25maWciLCJtZXRob2QiLCJ1cmwiLCJlbmNvZGVVUkkiLCJyZXF1ZXN0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlR29CYWNrIiwiaGFuZGxlU2hvd05leHQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaWQiLCJkaXYiLCJoMyIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaW1nIiwiYWx0Iiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/sections/Network.js\n"));

/***/ })

});