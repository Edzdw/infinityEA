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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_sliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/sliderProps */ \"./src/sliderProps.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var _CurrentNetwork__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CurrentNetwork */ \"./src/components/sections/CurrentNetwork.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _Swal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Swal */ \"./src/components/Swal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst About = ()=>{\n    _s();\n    const email = localStorage.getItem(\"email\");\n    const [networks, setNetworks] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [currentRoot, setCurrentRoot] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [prevRoot, setPrevRoot] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (!email) {\n            (0,_Swal__WEBPACK_IMPORTED_MODULE_5__.normalAlert)(\"C\\xf3 lỗi xảy ra, vui l\\xf2ng thử lại sau!\", \"error\");\n            return;\n        }\n        fetchNetwork(email);\n        setCurrentRoot(email);\n        setPrevRoot(\"\");\n    }, []);\n    const fetchNetwork = (input)=>{\n        let config = {\n            method: \"get\",\n            //https://jellyfish-app-kafzn.ondigitalocean.app\n            url: \"http://localhost:8080/api/v1/auth/getNetwork/\".concat(encodeURI(input))\n        };\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].request(config).then((response)=>{\n            setNetworks(response.data);\n        }).catch((error)=>{\n            (0,_Swal__WEBPACK_IMPORTED_MODULE_5__.normalAlert)(\"C\\xf3 lỗi xảy ra, vui l\\xf2ng thử lại sau!\", \"error\");\n            console.log(error);\n        });\n    };\n    const handleGoBack = ()=>{\n        console.log(root);\n    // fetchNetwork(root);\n    };\n    const handleShowNext = (input)=>{\n        fetchNetwork(input);\n        setRoot(input);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"portfolio network main-section flex-column-mobile\",\n        id: \"network\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"custom-title\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"animated-layer fade-in-left-animation fadeInUp wow\",\n                            children: \"Our Network\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleGoBack,\n                children: \"Quay lại\"\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            networks.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    onClick: ()=>{\n                        handleShowNext(item.email);\n                    },\n                    children: item.email\n                }, index, false, {\n                    fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                    lineNumber: 73,\n                    columnNumber: 39\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: \"\",\n                className: \"separator hide-mobile\",\n                src: \"assets/separator.png\"\n            }, void 0, false, {\n                fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jason/Desktop/alex-front-end/infinityEA/src/components/sections/Network.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(About, \"gipdOa94XNZIRinmNs1Q/P8Tr0Q=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9OZXR3b3JrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN3QjtBQUNDO0FBQ0w7QUFDcEI7QUFDWTtBQUV0QyxNQUFNTyxRQUFRLElBQU07O0lBQ2xCLE1BQU1DLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztJQUNuQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1oscURBQWMsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ2MsYUFBYUMsZUFBZSxHQUFHZixxREFBYyxDQUFDO0lBQ3JELE1BQU0sQ0FBQ2dCLFVBQVVDLFlBQVksR0FBR2pCLHFEQUFjLENBQUM7SUFJL0NBLHNEQUFlLENBQUMsSUFBTTtRQUNwQixJQUFJLENBQUNRLE9BQU87WUFDVkYsa0RBQVdBLENBQUMsOENBQXdDO1lBQ3BEO1FBQ0YsQ0FBQztRQUVEYSxhQUFhWDtRQUNiTyxlQUFlUDtRQUNmUyxZQUFZO0lBQ2QsR0FBRyxFQUFFO0lBRUwsTUFBTUUsZUFBZSxDQUFDQyxRQUFVO1FBQzlCLElBQUlDLFNBQVM7WUFDWEMsUUFBUTtZQUNSLGdEQUFnRDtZQUNoREMsS0FBSyxnREFBaUUsT0FBakJDLFVBQVVKO1FBQ2pFO1FBRUFmLHFEQUFhLENBQUNnQixRQUNiSyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUNsQmYsWUFBWWUsU0FBU0MsSUFBSTtRQUMzQixHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtZQUNoQnhCLGtEQUFXQSxDQUFDLDhDQUF3QztZQUNwRHlCLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNGO0lBRUEsTUFBTUcsZUFBZSxJQUFNO1FBQ3pCRixRQUFRQyxHQUFHLENBQUNFO0lBQ1osc0JBQXNCO0lBQ3hCO0lBRUEsTUFBTUMsaUJBQWlCLENBQUNmLFFBQVU7UUFDaENELGFBQWFDO1FBQ2JnQixRQUFRaEI7SUFDVjtJQUVBLHFCQUNFLDhEQUFDaUI7UUFDQ0MsV0FBVTtRQUNWQyxJQUFHOzswQkFHSCw4REFBQ0M7Z0JBQUlGLFdBQVU7MEJBRWIsNEVBQUNHOzhCQUNDLDRFQUFDQztrQ0FDQyw0RUFBQ0E7NEJBQUtKLFdBQVU7c0NBQXFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBUTNFLDhEQUFDSztnQkFBT0MsU0FBU1g7MEJBQWM7Ozs7OztZQUM5QnRCLFNBQVNrQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQVcsOERBQUNMO29CQUFLRSxTQUFTLElBQU07d0JBQUNULGVBQWVXLEtBQUt0QyxLQUFLO29CQUFDOzhCQUFnQnNDLEtBQUt0QyxLQUFLO21CQUFsQnVDOzs7OzswQkFDeEYsOERBQUNDO2dCQUNDQyxLQUFJO2dCQUNKWCxXQUFVO2dCQUNWWSxLQUFJOzs7Ozs7Ozs7Ozs7QUFJWjtHQXpFTTNDO0tBQUFBO0FBMEVOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL05ldHdvcmsuanM/ZTA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzYWxpbW92U2xpZGVyIH0gZnJvbSBcIkAvc3JjL3NsaWRlclByb3BzXCI7XG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xuaW1wb3J0IEN1cnJlbnROZXR3b3JrIGZyb20gXCIuL0N1cnJlbnROZXR3b3JrXCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBub3JtYWxBbGVydCB9IGZyb20gXCIuLi9Td2FsXCI7XG5cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XG4gIGNvbnN0IFtuZXR3b3Jrcywgc2V0TmV0d29ya3NdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICBjb25zdCBbY3VycmVudFJvb3QsIHNldEN1cnJlbnRSb290XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcHJldlJvb3QsIHNldFByZXZSb290XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuXG4gIFxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFlbWFpbCkge1xuICAgICAgbm9ybWFsQWxlcnQoXCJDw7MgbOG7l2kgeOG6o3kgcmEsIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUhXCIsIFwiZXJyb3JcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmV0Y2hOZXR3b3JrKGVtYWlsKTtcbiAgICBzZXRDdXJyZW50Um9vdChlbWFpbCk7XG4gICAgc2V0UHJldlJvb3QoXCJcIik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBmZXRjaE5ldHdvcmsgPSAoaW5wdXQpID0+IHtcbiAgICBsZXQgY29uZmlnID0ge1xuICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgIC8vaHR0cHM6Ly9qZWxseWZpc2gtYXBwLWthZnpuLm9uZGlnaXRhbG9jZWFuLmFwcFxuICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS9hdXRoL2dldE5ldHdvcmsvJHtlbmNvZGVVUkkoaW5wdXQpfWBcbiAgICB9O1xuXG4gICAgQXhpb3MucmVxdWVzdChjb25maWcpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXROZXR3b3JrcyhyZXNwb25zZS5kYXRhKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIG5vcm1hbEFsZXJ0KFwiQ8OzIGzhu5dpIHjhuqN5IHJhLCB2dWkgbMOybmcgdGjhu60gbOG6oWkgc2F1IVwiLCBcImVycm9yXCIpO1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlR29CYWNrID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJvb3QpO1xuICAgIC8vIGZldGNoTmV0d29yayhyb290KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaG93TmV4dCA9IChpbnB1dCkgPT4ge1xuICAgIGZldGNoTmV0d29yayhpbnB1dCk7XG4gICAgc2V0Um9vdChpbnB1dCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBjbGFzc05hbWU9XCJwb3J0Zm9saW8gbmV0d29yayBtYWluLXNlY3Rpb24gZmxleC1jb2x1bW4tbW9iaWxlXCJcbiAgICAgIGlkPVwibmV0d29ya1wiXG4gICAgPlxuICAgICAgey8qIFRJVExFIFNUQVJUUyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXRpdGxlXCI+XG4gICAgICAgIHsvKiBNQUlOIFRJVExFIFNUQVJUUyAqL31cbiAgICAgICAgPGgzPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5pbWF0ZWQtbGF5ZXIgZmFkZS1pbi1sZWZ0LWFuaW1hdGlvbiBmYWRlSW5VcCB3b3dcIj5cbiAgICAgICAgICAgICAgT3VyIE5ldHdvcmtcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvaDM+XG4gICAgICAgIHsvKiBNQUlOIFRJVExFIEVORFMgKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBUSVRMRSBFTkRTICovfVxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVHb0JhY2t9PlF1YXkgbOG6oWk8L2J1dHRvbj5cbiAgICAgIHtuZXR3b3Jrcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoPHNwYW4gb25DbGljaz17KCkgPT4ge2hhbmRsZVNob3dOZXh0KGl0ZW0uZW1haWwpfX0ga2V5PXtpbmRleH0+e2l0ZW0uZW1haWx9PC9zcGFuPikpfVxuICAgICAgPGltZ1xuICAgICAgICBhbHQ9XCJcIlxuICAgICAgICBjbGFzc05hbWU9XCJzZXBhcmF0b3IgaGlkZS1tb2JpbGVcIlxuICAgICAgICBzcmM9XCJhc3NldHMvc2VwYXJhdG9yLnBuZ1wiXG4gICAgICAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInNhbGltb3ZTbGlkZXIiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIkN1cnJlbnROZXR3b3JrIiwiQXhpb3MiLCJub3JtYWxBbGVydCIsIkFib3V0IiwiZW1haWwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibmV0d29ya3MiLCJzZXROZXR3b3JrcyIsInVzZVN0YXRlIiwiY3VycmVudFJvb3QiLCJzZXRDdXJyZW50Um9vdCIsInByZXZSb290Iiwic2V0UHJldlJvb3QiLCJ1c2VFZmZlY3QiLCJmZXRjaE5ldHdvcmsiLCJpbnB1dCIsImNvbmZpZyIsIm1ldGhvZCIsInVybCIsImVuY29kZVVSSSIsInJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVHb0JhY2siLCJyb290IiwiaGFuZGxlU2hvd05leHQiLCJzZXRSb290Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImlkIiwiZGl2IiwiaDMiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImltZyIsImFsdCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/sections/Network.js\n"));

/***/ })

});