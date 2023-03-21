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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/ds-layout.module.css */ \"./styles/ds-layout.module.css\");\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _create_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-button */ \"./components/dashboard/create-button.js\");\n/* harmony import */ var _user_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-button */ \"./components/dashboard/user-button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer */ \"./components/footer.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table */ \"./components/dashboard/table.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Layout() {\n    _s();\n    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuthState)(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.auth);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [samplesUids, setSamplesUids] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [samplesDetails, setSamplesDetails] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    console.log(\" immediately before useEffect\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        console.log(\"useEffect\");\n        getProductsDetails();\n    }, []);\n    //handlers\n    function handleChange(event) {\n        setSearch((prev)=>event.target.value);\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n    }\n    function getProductsUids() {\n        const uid = user.uid;\n        const itemsrRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.database, \"users/\" + uid + \"/products\");\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.onValue)(itemsrRef, (snapshot)=>{\n            const data = snapshot.val();\n            if (data) {\n                const uids = Object.keys(data);\n                setSamplesUids(uids);\n            }\n        });\n    }\n    async function getProductsDetails() {\n        await getProductsUids();\n        const productsArr = [];\n        samplesUids.forEach((uid)=>{\n            const itemsrRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.database, \"products/\" + uid);\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.onValue)(itemsrRef, (snapshot)=>{\n                const product = snapshot.val();\n                console.log(product);\n                const attributes = Object.keys(product);\n                attributes.forEach((key)=>{\n                    productsArr.push([\n                        product[key].uid,\n                        product[key].title,\n                        product[key].type\n                    ]);\n                });\n            });\n        });\n        setSamplesDetails(productsArr);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().dashboard),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \"navbar navbar-expand-sm bg-body-tertiary \".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().header1)),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"navbar-brand \".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().logo)),\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/virtuallab_logo_v3_grey.png\",\n                                    alt: \"Logo\",\n                                    width: \"100%\",\n                                    height: \"24\",\n                                    class: \"d-inline-block align-text-top\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"d-flex \".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().search), \" \"),\n                                role: \"search\",\n                                onSubmit: handleSubmit,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    class: \"form-control me-2\",\n                                    type: \"search\",\n                                    placeholder: \"Search catalog...\",\n                                    \"aria-label\": \"Search\",\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                lineNumber: 84,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"box-right\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"create-button-container\"]),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_create_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                            lineNumber: 100,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"box-root\"]),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"profile-tools\"]),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                    className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"settings-icon\"]),\n                                                    title: \"Settings\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                                            children: \"Settings\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                                            lineNumber: 105,\n                                                            columnNumber: 41\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                                            cx: \"50\",\n                                                            cy: \"50\",\n                                                            r: \"40\",\n                                                            fill: \"blue\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                                            lineNumber: 106,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_user_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                                    lineNumber: 108,\n                                                    columnNumber: 33\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                lineNumber: 98,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().header2)\n                    }, void 0, false, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                        lineNumber: 116,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    content: samplesDetails\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                    lineNumber: 120,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 119,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 124,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"zyNPpM6bIhqtNJqwM3IoSvJO3xg=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuthState\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0Q7d0NBQUlDLFdBQVduRCxnR0FBaUM7a0RBQzdDLDRFQUFDQyxzREFBWUE7Ozs7Ozs7Ozs7a0RBRWpCLDhEQUFDaUQ7d0NBQUlDLFdBQVduRCxpRkFBa0I7a0RBQzlCLDRFQUFDa0Q7NENBQUlDLFdBQVduRCxzRkFBdUI7OzhEQUMvQiw4REFBQ29FO29EQUFJakIsV0FBV25ELHNGQUF1QjtvREFBRWdELE9BQU07O3NFQUMzQyw4REFBQ0E7c0VBQU07Ozs7OztzRUFDUCw4REFBQ3FCOzREQUFPQyxJQUFHOzREQUFLQyxJQUFHOzREQUFLQyxHQUFFOzREQUFLQyxNQUFLOzs7Ozs7Ozs7Ozs7OERBRTVDLDhEQUFDdkUsb0RBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQVEzQiw4REFBQ2tEO3dCQUFPRCxXQUFXbkQsNkVBQWlCOzs7Ozs7Ozs7Ozs7MEJBR3hDLDhEQUFDMEU7MEJBQ0csNEVBQUNoRSw4Q0FBS0E7b0JBQ0ZpRSxTQUFTdEQ7Ozs7Ozs7Ozs7OzBCQUdqQiw4REFBQ1osK0NBQU1BOzs7Ozs7O0FBSW5CLENBQUM7R0EvR3VCSTs7UUFDV0YsbUVBQVlBOzs7S0FEdkJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL2xheW91dC5qcz82NDczIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvZHMtbGF5b3V0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IENyZWF0ZUJ1dHRvbiBmcm9tICcuL2NyZWF0ZS1idXR0b24nXG5pbXBvcnQgVXNlckJ1dHRvbiBmcm9tICcuL3VzZXItYnV0dG9uJ1xuXG5pbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGRhdGFiYXNlIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlQ2xpZW50XCJcbmltcG9ydCB7IHJlZiwgb25WYWx1ZX0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCJcblxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXInO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vdGFibGUnO1xuXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJztcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi8uLi9maXJlYmFzZUNsaWVudCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KCkge1xuICAgIGNvbnN0IFt1c2VyLCBsb2FkaW5nLCBlcnJvcl0gPSB1c2VBdXRoU3RhdGUoYXV0aClcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3NhbXBsZXNVaWRzLCBzZXRTYW1wbGVzVWlkc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbc2FtcGxlc0RldGFpbHMsIHNldFNhbXBsZXNEZXRhaWxzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgY29uc29sZS5sb2coXCIgaW1tZWRpYXRlbHkgYmVmb3JlIHVzZUVmZmVjdFwiKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VFZmZlY3RcIilcbiAgICAgICAgZ2V0UHJvZHVjdHNEZXRhaWxzKClcbiAgICB9LCBbXSlcblxuXG4gICAgLy9oYW5kbGVyc1xuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBzZXRTZWFyY2gocHJldiA9PiBldmVudC50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0UHJvZHVjdHNVaWRzKCkge1xuICAgICAgICBjb25zdCB1aWQgPSB1c2VyLnVpZFxuICAgICAgICBjb25zdCBpdGVtc3JSZWYgPSByZWYoZGF0YWJhc2UsICd1c2Vycy8nICsgdWlkICsgJy9wcm9kdWN0cycpXG4gICAgICAgIG9uVmFsdWUoaXRlbXNyUmVmLCAoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBzbmFwc2hvdC52YWwoKTtcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdWlkcyA9IE9iamVjdC5rZXlzKGRhdGEpXG4gICAgICAgICAgICAgICAgc2V0U2FtcGxlc1VpZHModWlkcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgICBcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0RldGFpbHMoKSB7XG4gICAgICAgIGF3YWl0IGdldFByb2R1Y3RzVWlkcygpXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzQXJyID0gW11cbiAgICAgICAgc2FtcGxlc1VpZHMuZm9yRWFjaCh1aWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbXNyUmVmID0gcmVmKGRhdGFiYXNlLCAncHJvZHVjdHMvJyArIHVpZClcbiAgICAgICAgICAgIG9uVmFsdWUoaXRlbXNyUmVmLCAoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gc25hcHNob3QudmFsKClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0KVxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3Qua2V5cyhwcm9kdWN0KVxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0c0Fyci5wdXNoKFtwcm9kdWN0W2tleV0udWlkLCBwcm9kdWN0W2tleV0udGl0bGUsIHByb2R1Y3Rba2V5XS50eXBlXSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkgIFxuICAgICAgICB9KVxuICAgICAgICBzZXRTYW1wbGVzRGV0YWlscyhwcm9kdWN0c0FycilcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZGFzaGJvYXJkJ119PlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgbmF2YmFyIG5hdmJhci1leHBhbmQtc20gYmctYm9keS10ZXJ0aWFyeSAke3N0eWxlc1snaGVhZGVyMSddfWB9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YG5hdmJhci1icmFuZCAke3N0eWxlc1snbG9nbyddfWB9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvdmlydHVhbGxhYl9sb2dvX3YzX2dyZXkucG5nXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9nb1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWlubGluZS1ibG9jayBhbGlnbi10ZXh0LXRvcFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZC1mbGV4ICR7c3R5bGVzWydzZWFyY2gnXX0gYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJzZWFyY2hcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIG1lLTJcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggY2F0YWxvZy4uLlwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYm94LXJpZ2h0J119PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snY3JlYXRlLWJ1dHRvbi1jb250YWluZXInXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyZWF0ZUJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydib3gtcm9vdCddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydwcm9maWxlLXRvb2xzJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e3N0eWxlc1snc2V0dGluZ3MtaWNvbiddfSB0aXRsZT1cIlNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPlNldHRpbmdzPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjQwXCIgZmlsbD1cImJsdWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyQnV0dG9uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzWydoZWFkZXIyJ119PlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8VGFibGUgXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3NhbXBsZXNEZXRhaWxzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICAgKVxuICAgIFxufSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJDcmVhdGVCdXR0b24iLCJVc2VyQnV0dG9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRhdGFiYXNlIiwicmVmIiwib25WYWx1ZSIsIkZvb3RlciIsIlRhYmxlIiwidXNlQXV0aFN0YXRlIiwiYXV0aCIsIkxheW91dCIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJzYW1wbGVzVWlkcyIsInNldFNhbXBsZXNVaWRzIiwic2FtcGxlc0RldGFpbHMiLCJzZXRTYW1wbGVzRGV0YWlscyIsImNvbnNvbGUiLCJsb2ciLCJnZXRQcm9kdWN0c0RldGFpbHMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXYiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZ2V0UHJvZHVjdHNVaWRzIiwidWlkIiwiaXRlbXNyUmVmIiwic25hcHNob3QiLCJkYXRhIiwidmFsIiwidWlkcyIsIk9iamVjdCIsImtleXMiLCJwcm9kdWN0c0FyciIsImZvckVhY2giLCJwcm9kdWN0IiwiYXR0cmlidXRlcyIsImtleSIsInB1c2giLCJ0aXRsZSIsInR5cGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJhIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiY2xhc3MiLCJmb3JtIiwicm9sZSIsIm9uU3VibWl0IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsImFyaWEtbGFiZWwiLCJvbkNoYW5nZSIsInN2ZyIsImNpcmNsZSIsImN4IiwiY3kiLCJyIiwiZmlsbCIsIm1haW4iLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dashboard/layout.js\n"));

/***/ })

});