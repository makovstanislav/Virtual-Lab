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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/ds-layout.module.css */ \"./styles/ds-layout.module.css\");\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _create_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-button */ \"./components/dashboard/create-button.js\");\n/* harmony import */ var _user_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-button */ \"./components/dashboard/user-button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer */ \"./components/footer.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table */ \"./components/dashboard/table.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Layout() {\n    _s();\n    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuthState)(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.auth);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [samplesUids, setSamplesUids] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [samplesDetails, setSamplesDetails] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getProductsDetails();\n    }, []);\n    //handlers\n    function handleChange(event) {\n        setSearch((prev)=>event.target.value);\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n    }\n    function getProductsUids() {\n        const uid = user.uid;\n        const itemsrRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.database, \"users/\" + uid + \"/products\");\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.onValue)(itemsrRef, (snapshot)=>{\n            const data = snapshot.val();\n            if (data) {\n                const uids = Object.keys(data);\n                setSamplesUids(uids);\n            }\n        });\n    }\n    async function getProductsDetails() {\n        await getProductsUids();\n        const productsArr = [];\n        samplesUids.forEach((uid)=>{\n            const itemsrRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.database, \"products/\" + uid);\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.onValue)(itemsrRef, (snapshot)=>{\n                const product = snapshot.val();\n                console.log(product);\n                const attributes = Object.keys(product);\n                attributes.forEach((key)=>{\n                    productsArr.push([\n                        product[key].uid,\n                        product[key].title,\n                        product[key].type\n                    ]);\n                });\n            });\n        });\n        setSamplesDetails(productsArr);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().dashboard),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \"navbar navbar-expand-sm bg-body-tertiary \".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().header1)),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"navbar-brand \".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().logo)),\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/virtuallab_logo_v3_grey.png\",\n                                    alt: \"Logo\",\n                                    width: \"100%\",\n                                    height: \"24\",\n                                    class: \"d-inline-block align-text-top\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                lineNumber: 70,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"d-flex \".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().search), \" \"),\n                                role: \"search\",\n                                onSubmit: handleSubmit,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    class: \"form-control me-2\",\n                                    type: \"search\",\n                                    placeholder: \"Search catalog...\",\n                                    \"aria-label\": \"Search\",\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"box-right\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"create-button-container\"]),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_create_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                            lineNumber: 96,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"box-root\"]),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"profile-tools\"]),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                    className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"settings-icon\"]),\n                                                    title: \"Settings\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                                            children: \"Settings\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                                            lineNumber: 101,\n                                                            columnNumber: 41\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                                            cx: \"50\",\n                                                            cy: \"50\",\n                                                            r: \"40\",\n                                                            fill: \"blue\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                                            lineNumber: 102,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_user_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 33\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                lineNumber: 94,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().header2)\n                    }, void 0, false, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                        lineNumber: 112,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    content: samplesDetails\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                    lineNumber: 116,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 115,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 120,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"zyNPpM6bIhqtNJqwM3IoSvJO3xg=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuthState\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7a0RBRWpCLDhEQUFDaUQ7d0NBQUlDLFdBQVduRCxpRkFBa0I7a0RBQzlCLDRFQUFDa0Q7NENBQUlDLFdBQVduRCxzRkFBdUI7OzhEQUMvQiw4REFBQ29FO29EQUFJakIsV0FBV25ELHNGQUF1QjtvREFBRWdELE9BQU07O3NFQUMzQyw4REFBQ0E7c0VBQU07Ozs7OztzRUFDUCw4REFBQ3FCOzREQUFPQyxJQUFHOzREQUFLQyxJQUFHOzREQUFLQyxHQUFFOzREQUFLQyxNQUFLOzs7Ozs7Ozs7Ozs7OERBRTVDLDhEQUFDdkUsb0RBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQVEzQiw4REFBQ2tEO3dCQUFPRCxXQUFXbkQsNkVBQWlCOzs7Ozs7Ozs7Ozs7MEJBR3hDLDhEQUFDMEU7MEJBQ0csNEVBQUNoRSw4Q0FBS0E7b0JBQ0ZpRSxTQUFTdEQ7Ozs7Ozs7Ozs7OzBCQUdqQiw4REFBQ1osK0NBQU1BOzs7Ozs7O0FBSW5CLENBQUM7R0EzR3VCSTs7UUFDV0YsbUVBQVlBOzs7S0FEdkJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL2xheW91dC5qcz82NDczIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvZHMtbGF5b3V0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IENyZWF0ZUJ1dHRvbiBmcm9tICcuL2NyZWF0ZS1idXR0b24nXG5pbXBvcnQgVXNlckJ1dHRvbiBmcm9tICcuL3VzZXItYnV0dG9uJ1xuXG5pbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGRhdGFiYXNlIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlQ2xpZW50XCJcbmltcG9ydCB7IHJlZiwgb25WYWx1ZX0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCJcblxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXInO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vdGFibGUnO1xuXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJztcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi8uLi9maXJlYmFzZUNsaWVudCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KCkge1xuICAgIGNvbnN0IFt1c2VyLCBsb2FkaW5nLCBlcnJvcl0gPSB1c2VBdXRoU3RhdGUoYXV0aClcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3NhbXBsZXNVaWRzLCBzZXRTYW1wbGVzVWlkc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbc2FtcGxlc0RldGFpbHMsIHNldFNhbXBsZXNEZXRhaWxzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0UHJvZHVjdHNEZXRhaWxzKClcbiAgICB9LCBbXSlcblxuICAgIC8vaGFuZGxlcnNcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgc2V0U2VhcmNoKHByZXYgPT4gZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGdldFByb2R1Y3RzVWlkcygpIHtcbiAgICAgICAgY29uc3QgdWlkID0gdXNlci51aWRcbiAgICAgICAgY29uc3QgaXRlbXNyUmVmID0gcmVmKGRhdGFiYXNlLCAndXNlcnMvJyArIHVpZCArICcvcHJvZHVjdHMnKVxuICAgICAgICBvblZhbHVlKGl0ZW1zclJlZiwgKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gc25hcHNob3QudmFsKCk7XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVpZHMgPSBPYmplY3Qua2V5cyhkYXRhKVxuICAgICAgICAgICAgICAgIHNldFNhbXBsZXNVaWRzKHVpZHMpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pICAgXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHNEZXRhaWxzKCkge1xuICAgICAgICBhd2FpdCBnZXRQcm9kdWN0c1VpZHMoKVxuICAgICAgICBjb25zdCBwcm9kdWN0c0FyciA9IFtdXG4gICAgICAgIHNhbXBsZXNVaWRzLmZvckVhY2godWlkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zclJlZiA9IHJlZihkYXRhYmFzZSwgJ3Byb2R1Y3RzLycgKyB1aWQpXG4gICAgICAgICAgICBvblZhbHVlKGl0ZW1zclJlZiwgKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IHNuYXBzaG90LnZhbCgpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdClcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmtleXMocHJvZHVjdClcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHNBcnIucHVzaChbcHJvZHVjdFtrZXldLnVpZCwgcHJvZHVjdFtrZXldLnRpdGxlLCBwcm9kdWN0W2tleV0udHlwZV0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pICBcbiAgICAgICAgfSlcbiAgICAgICAgc2V0U2FtcGxlc0RldGFpbHMocHJvZHVjdHNBcnIpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2Rhc2hib2FyZCddfT5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YG5hdmJhciBuYXZiYXItZXhwYW5kLXNtIGJnLWJvZHktdGVydGlhcnkgJHtzdHlsZXNbJ2hlYWRlcjEnXX1gfT5cblxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BuYXZiYXItYnJhbmQgJHtzdHlsZXNbJ2xvZ28nXX1gfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3ZpcnR1YWxsYWJfbG9nb192M19ncmV5LnBuZ1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ29cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdGV4dC10b3BcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGQtZmxleCAke3N0eWxlc1snc2VhcmNoJ119IGB9XG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwic2VhcmNoXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBtZS0yXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGNhdGFsb2cuLi5cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2JveC1yaWdodCddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2NyZWF0ZS1idXR0b24tY29udGFpbmVyJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGVCdXR0b24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYm94LXJvb3QnXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sncHJvZmlsZS10b29scyddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtzdHlsZXNbJ3NldHRpbmdzLWljb24nXX0gdGl0bGU9XCJTZXR0aW5nc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5TZXR0aW5nczwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCI0MFwiIGZpbGw9XCJibHVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlckJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlc1snaGVhZGVyMiddfT5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgPFRhYmxlIFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtzYW1wbGVzRGV0YWlsc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICAgIClcbiAgICBcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwiQ3JlYXRlQnV0dG9uIiwiVXNlckJ1dHRvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkYXRhYmFzZSIsInJlZiIsIm9uVmFsdWUiLCJGb290ZXIiLCJUYWJsZSIsInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJMYXlvdXQiLCJ1c2VyIiwibG9hZGluZyIsImVycm9yIiwic2VhcmNoIiwic2V0U2VhcmNoIiwic2FtcGxlc1VpZHMiLCJzZXRTYW1wbGVzVWlkcyIsInNhbXBsZXNEZXRhaWxzIiwic2V0U2FtcGxlc0RldGFpbHMiLCJnZXRQcm9kdWN0c0RldGFpbHMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXYiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZ2V0UHJvZHVjdHNVaWRzIiwidWlkIiwiaXRlbXNyUmVmIiwic25hcHNob3QiLCJkYXRhIiwidmFsIiwidWlkcyIsIk9iamVjdCIsImtleXMiLCJwcm9kdWN0c0FyciIsImZvckVhY2giLCJwcm9kdWN0IiwiY29uc29sZSIsImxvZyIsImF0dHJpYnV0ZXMiLCJrZXkiLCJwdXNoIiwidGl0bGUiLCJ0eXBlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiYSIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImNsYXNzIiwiZm9ybSIsInJvbGUiLCJvblN1Ym1pdCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJhcmlhLWxhYmVsIiwib25DaGFuZ2UiLCJzdmciLCJjaXJjbGUiLCJjeCIsImN5IiwiciIsImZpbGwiLCJtYWluIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/dashboard/layout.js\n"));

/***/ })

});