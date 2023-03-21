"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./components/dashboard/layout.js":
/*!****************************************!*\
  !*** ./components/dashboard/layout.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/ds-layout.module.css */ \"./styles/ds-layout.module.css\");\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _create_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-button */ \"./components/dashboard/create-button.js\");\n/* harmony import */ var _user_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-button */ \"./components/dashboard/user-button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer */ \"./components/footer.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table */ \"./components/dashboard/table.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Layout() {\n    _s();\n    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuthState)(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.auth);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [samplesUids, setSamplesUids] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [samplesDetails, setSamplesDetails] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    console.log(\" top\");\n    //handlers\n    function handleChange(event) {\n        setSearch((prev)=>event.target.value);\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n    }\n    function getProductsUids() {\n        const uid = user.uid;\n        const itemsrRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.database, \"users/\" + uid + \"/products\");\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.onValue)(itemsrRef, (snapshot)=>{\n            const data = snapshot.val();\n            if (data) {\n                const uids = Object.keys(data);\n                setSamplesUids(uids);\n            }\n        });\n    }\n    function getProductsDetails() {\n        getProductsUids();\n        const productsArr = [];\n        samplesUids.forEach((uid)=>{\n            const itemsrRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.database, \"products/\" + uid);\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.onValue)(itemsrRef, (snapshot)=>{\n                const product = snapshot.val();\n                console.log(product);\n                const attributes = Object.keys(product);\n                attributes.forEach((key)=>{\n                    productsArr.push([\n                        product[key].uid,\n                        product[key].title,\n                        product[key].type\n                    ]);\n                });\n            });\n        });\n        setSamplesDetails(productsArr);\n    }\n    console.log(\"immediately before return\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        console.log(\"mounted\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().dashboard),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \"navbar navbar-expand-sm bg-body-tertiary \".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().header1)),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"navbar-brand \".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().logo)),\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/virtuallab_logo_v3_grey.png\",\n                                    alt: \"Logo\",\n                                    width: \"100%\",\n                                    height: \"24\",\n                                    class: \"d-inline-block align-text-top\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"d-flex \".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().search), \" \"),\n                                role: \"search\",\n                                onSubmit: handleSubmit,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    class: \"form-control me-2\",\n                                    type: \"search\",\n                                    placeholder: \"Search catalog...\",\n                                    \"aria-label\": \"Search\",\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                lineNumber: 89,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"box-right\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"create-button-container\"]),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_create_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                            lineNumber: 105,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"box-root\"]),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"profile-tools\"]),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                    className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"settings-icon\"]),\n                                                    title: \"Settings\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                                            children: \"Settings\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                                            lineNumber: 110,\n                                                            columnNumber: 41\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                                            cx: \"50\",\n                                                            cy: \"50\",\n                                                            r: \"40\",\n                                                            fill: \"blue\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                                            lineNumber: 111,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                                    lineNumber: 109,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_user_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                                    lineNumber: 113,\n                                                    columnNumber: 33\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                            lineNumber: 108,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                lineNumber: 103,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().header2)\n                    }, void 0, false, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                        lineNumber: 121,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                    lineNumber: 125,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 124,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 128,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"zyNPpM6bIhqtNJqwM3IoSvJO3xg=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuthState\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztrREFDL0IsOERBQUNrRDt3Q0FBSUMsV0FBV25ELGdHQUFpQztrREFDN0MsNEVBQUNDLHNEQUFZQTs7Ozs7Ozs7OztrREFFakIsOERBQUNpRDt3Q0FBSUMsV0FBV25ELGlGQUFrQjtrREFDOUIsNEVBQUNrRDs0Q0FBSUMsV0FBV25ELHNGQUF1Qjs7OERBQy9CLDhEQUFDb0U7b0RBQUlqQixXQUFXbkQsc0ZBQXVCO29EQUFFZ0QsT0FBTTs7c0VBQzNDLDhEQUFDQTtzRUFBTTs7Ozs7O3NFQUNQLDhEQUFDcUI7NERBQU9DLElBQUc7NERBQUtDLElBQUc7NERBQUtDLEdBQUU7NERBQUtDLE1BQUs7Ozs7Ozs7Ozs7Ozs4REFFNUMsOERBQUN2RSxvREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBUTNCLDhEQUFDa0Q7d0JBQU9ELFdBQVduRCw2RUFBaUI7Ozs7Ozs7Ozs7OzswQkFHeEMsOERBQUMwRTswQkFDRyw0RUFBQ2hFLDhDQUFLQTs7Ozs7Ozs7OzswQkFHViw4REFBQ0QsK0NBQU1BOzs7Ozs7O0FBSW5CLENBQUM7R0FuSHVCSTs7UUFFV0YsbUVBQVlBOzs7S0FGdkJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL2xheW91dC5qcz82NDczIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvZHMtbGF5b3V0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IENyZWF0ZUJ1dHRvbiBmcm9tICcuL2NyZWF0ZS1idXR0b24nXG5pbXBvcnQgVXNlckJ1dHRvbiBmcm9tICcuL3VzZXItYnV0dG9uJ1xuXG5pbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGRhdGFiYXNlIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlQ2xpZW50XCJcbmltcG9ydCB7IHJlZiwgb25WYWx1ZX0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCJcblxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXInO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vdGFibGUnO1xuXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJztcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi8uLi9maXJlYmFzZUNsaWVudCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KCkge1xuICAgIFxuICAgIGNvbnN0IFt1c2VyLCBsb2FkaW5nLCBlcnJvcl0gPSB1c2VBdXRoU3RhdGUoYXV0aClcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3NhbXBsZXNVaWRzLCBzZXRTYW1wbGVzVWlkc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbc2FtcGxlc0RldGFpbHMsIHNldFNhbXBsZXNEZXRhaWxzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgY29uc29sZS5sb2coXCIgdG9wXCIpXG5cbiAgICBcblxuICAgIFxuXG4gICAgLy9oYW5kbGVyc1xuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBzZXRTZWFyY2gocHJldiA9PiBldmVudC50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0UHJvZHVjdHNVaWRzKCkge1xuICAgICAgICBjb25zdCB1aWQgPSB1c2VyLnVpZFxuICAgICAgICBjb25zdCBpdGVtc3JSZWYgPSByZWYoZGF0YWJhc2UsICd1c2Vycy8nICsgdWlkICsgJy9wcm9kdWN0cycpXG4gICAgICAgIG9uVmFsdWUoaXRlbXNyUmVmLCAoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBzbmFwc2hvdC52YWwoKTtcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdWlkcyA9IE9iamVjdC5rZXlzKGRhdGEpXG4gICAgICAgICAgICAgICAgc2V0U2FtcGxlc1VpZHModWlkcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9kdWN0c0RldGFpbHMoKSB7XG4gICAgICAgIGdldFByb2R1Y3RzVWlkcygpXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzQXJyID0gW11cbiAgICAgICAgc2FtcGxlc1VpZHMuZm9yRWFjaCh1aWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbXNyUmVmID0gcmVmKGRhdGFiYXNlLCAncHJvZHVjdHMvJyArIHVpZClcbiAgICAgICAgICAgIG9uVmFsdWUoaXRlbXNyUmVmLCAoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gc25hcHNob3QudmFsKClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0KVxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3Qua2V5cyhwcm9kdWN0KVxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0c0Fyci5wdXNoKFtwcm9kdWN0W2tleV0udWlkLCBwcm9kdWN0W2tleV0udGl0bGUsIHByb2R1Y3Rba2V5XS50eXBlXSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkgIFxuICAgICAgICB9KVxuICAgICAgICBzZXRTYW1wbGVzRGV0YWlscyhwcm9kdWN0c0FycilcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImltbWVkaWF0ZWx5IGJlZm9yZSByZXR1cm5cIilcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibW91bnRlZFwiKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2Rhc2hib2FyZCddfT5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YG5hdmJhciBuYXZiYXItZXhwYW5kLXNtIGJnLWJvZHktdGVydGlhcnkgJHtzdHlsZXNbJ2hlYWRlcjEnXX1gfT5cblxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BuYXZiYXItYnJhbmQgJHtzdHlsZXNbJ2xvZ28nXX1gfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3ZpcnR1YWxsYWJfbG9nb192M19ncmV5LnBuZ1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ29cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdGV4dC10b3BcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGQtZmxleCAke3N0eWxlc1snc2VhcmNoJ119IGB9XG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwic2VhcmNoXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBtZS0yXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGNhdGFsb2cuLi5cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2JveC1yaWdodCddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2NyZWF0ZS1idXR0b24tY29udGFpbmVyJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGVCdXR0b24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYm94LXJvb3QnXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sncHJvZmlsZS10b29scyddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtzdHlsZXNbJ3NldHRpbmdzLWljb24nXX0gdGl0bGU9XCJTZXR0aW5nc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5TZXR0aW5nczwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCI0MFwiIGZpbGw9XCJibHVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlckJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlc1snaGVhZGVyMiddfT5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgPFRhYmxlIFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICAgKVxuICAgIFxufSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJDcmVhdGVCdXR0b24iLCJVc2VyQnV0dG9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRhdGFiYXNlIiwicmVmIiwib25WYWx1ZSIsIkZvb3RlciIsIlRhYmxlIiwidXNlQXV0aFN0YXRlIiwiYXV0aCIsIkxheW91dCIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJzYW1wbGVzVWlkcyIsInNldFNhbXBsZXNVaWRzIiwic2FtcGxlc0RldGFpbHMiLCJzZXRTYW1wbGVzRGV0YWlscyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXYiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZ2V0UHJvZHVjdHNVaWRzIiwidWlkIiwiaXRlbXNyUmVmIiwic25hcHNob3QiLCJkYXRhIiwidmFsIiwidWlkcyIsIk9iamVjdCIsImtleXMiLCJnZXRQcm9kdWN0c0RldGFpbHMiLCJwcm9kdWN0c0FyciIsImZvckVhY2giLCJwcm9kdWN0IiwiYXR0cmlidXRlcyIsImtleSIsInB1c2giLCJ0aXRsZSIsInR5cGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJhIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiY2xhc3MiLCJmb3JtIiwicm9sZSIsIm9uU3VibWl0IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsImFyaWEtbGFiZWwiLCJvbkNoYW5nZSIsInN2ZyIsImNpcmNsZSIsImN4IiwiY3kiLCJyIiwiZmlsbCIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/dashboard/layout.js\n"));

/***/ })

});