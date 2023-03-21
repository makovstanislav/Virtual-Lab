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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/ds-layout.module.css */ \"./styles/ds-layout.module.css\");\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _create_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-button */ \"./components/dashboard/create-button.js\");\n/* harmony import */ var _user_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-button */ \"./components/dashboard/user-button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer */ \"./components/footer.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table */ \"./components/dashboard/table.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Layout() {\n    _s();\n    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuthState)(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.auth);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [samplesUids, setSamplesUids] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [samplesDetails, setSamplesDetails] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    console.log(\" immediately before useEffect\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        console.log(\"useEffect\");\n        getProductsDetails();\n    }, []);\n    console.log(\"immediately after useEffect\");\n    //handlers\n    function handleChange(event) {\n        setSearch((prev)=>event.target.value);\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n    }\n    function getProductsUids() {\n        const uid = user.uid;\n        const itemsrRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.database, \"users/\" + uid + \"/products\");\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.onValue)(itemsrRef, (snapshot)=>{\n            const data = snapshot.val();\n            if (data) {\n                const uids = Object.keys(data);\n                setSamplesUids(uids);\n            }\n        });\n    }\n    async function getProductsDetails() {\n        await getProductsUids();\n        const productsArr = [];\n        samplesUids.forEach((uid)=>{\n            const itemsrRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.database, \"products/\" + uid);\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.onValue)(itemsrRef, (snapshot)=>{\n                const product = snapshot.val();\n                console.log(product);\n                const attributes = Object.keys(product);\n                attributes.forEach((key)=>{\n                    productsArr.push([\n                        product[key].uid,\n                        product[key].title,\n                        product[key].type\n                    ]);\n                });\n            });\n        });\n        setSamplesDetails(productsArr);\n    }\n    console.log(\"immediately before return\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().dashboard),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \"navbar navbar-expand-sm bg-body-tertiary \".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().header1)),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"navbar-brand \".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().logo)),\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/virtuallab_logo_v3_grey.png\",\n                                    alt: \"Logo\",\n                                    width: \"100%\",\n                                    height: \"24\",\n                                    class: \"d-inline-block align-text-top\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                lineNumber: 77,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"d-flex \".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().search), \" \"),\n                                role: \"search\",\n                                onSubmit: handleSubmit,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    class: \"form-control me-2\",\n                                    type: \"search\",\n                                    placeholder: \"Search catalog...\",\n                                    \"aria-label\": \"Search\",\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                lineNumber: 87,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"box-right\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"create-button-container\"]),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_create_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"box-root\"]),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"profile-tools\"]),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                    className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"settings-icon\"]),\n                                                    title: \"Settings\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                                            children: \"Settings\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                                            lineNumber: 108,\n                                                            columnNumber: 41\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                                            cx: \"50\",\n                                                            cy: \"50\",\n                                                            r: \"40\",\n                                                            fill: \"blue\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                                            lineNumber: 109,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                                    lineNumber: 107,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_user_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                                    lineNumber: 111,\n                                                    columnNumber: 33\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                lineNumber: 101,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().header2)\n                    }, void 0, false, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                        lineNumber: 119,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    content: samplesDetails\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                    lineNumber: 123,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 122,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 127,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"zyNPpM6bIhqtNJqwM3IoSvJO3xg=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuthState\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S2xCLDhEQUFDd0I7Z0NBQUlDLFdBQVduRCxrRkFBbUI7O2tEQUMvQiw4REFBQ2tEO3dDQUFJQyxXQUFXbkQsZ0dBQWlDO2tEQUM3Qyw0RUFBQ0Msc0RBQVlBOzs7Ozs7Ozs7O2tEQUVqQiw4REFBQ2lEO3dDQUFJQyxXQUFXbkQsaUZBQWtCO2tEQUM5Qiw0RUFBQ2tEOzRDQUFJQyxXQUFXbkQsc0ZBQXVCOzs4REFDL0IsOERBQUNvRTtvREFBSWpCLFdBQVduRCxzRkFBdUI7b0RBQUVnRCxPQUFNOztzRUFDM0MsOERBQUNBO3NFQUFNOzs7Ozs7c0VBQ1AsOERBQUNxQjs0REFBT0MsSUFBRzs0REFBS0MsSUFBRzs0REFBS0MsR0FBRTs0REFBS0MsTUFBSzs7Ozs7Ozs7Ozs7OzhEQUU1Qyw4REFBQ3ZFLG9EQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FRM0IsOERBQUNrRDt3QkFBT0QsV0FBV25ELDZFQUFpQjs7Ozs7Ozs7Ozs7OzBCQUd4Qyw4REFBQzBFOzBCQUNHLDRFQUFDaEUsOENBQUtBO29CQUNGaUUsU0FBU3REOzs7Ozs7Ozs7OzswQkFHakIsOERBQUNaLCtDQUFNQTs7Ozs7OztBQUluQixDQUFDO0dBbEh1Qkk7O1FBQ1dGLG1FQUFZQTs7O0tBRHZCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Rhc2hib2FyZC9sYXlvdXQuanM/NjQ3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2RzLWxheW91dC5tb2R1bGUuY3NzJztcbmltcG9ydCBDcmVhdGVCdXR0b24gZnJvbSAnLi9jcmVhdGUtYnV0dG9uJ1xuaW1wb3J0IFVzZXJCdXR0b24gZnJvbSAnLi91c2VyLWJ1dHRvbidcblxuaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gXCIuLi8uLi9maXJlYmFzZUNsaWVudFwiXG5pbXBvcnQgeyByZWYsIG9uVmFsdWV9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiXG5cbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyJztcbmltcG9ydCBUYWJsZSBmcm9tICcuL3RhYmxlJztcblxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCc7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2VDbGllbnQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCgpIHtcbiAgICBjb25zdCBbdXNlciwgbG9hZGluZywgZXJyb3JdID0gdXNlQXV0aFN0YXRlKGF1dGgpXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtzYW1wbGVzVWlkcywgc2V0U2FtcGxlc1VpZHNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW3NhbXBsZXNEZXRhaWxzLCBzZXRTYW1wbGVzRGV0YWlsc10gPSB1c2VTdGF0ZShbXSlcblxuICAgIGNvbnNvbGUubG9nKFwiIGltbWVkaWF0ZWx5IGJlZm9yZSB1c2VFZmZlY3RcIilcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlRWZmZWN0XCIpXG4gICAgICAgIGdldFByb2R1Y3RzRGV0YWlscygpXG4gICAgfSwgW10pXG5cbiAgICBjb25zb2xlLmxvZyhcImltbWVkaWF0ZWx5IGFmdGVyIHVzZUVmZmVjdFwiKVxuXG4gICAgLy9oYW5kbGVyc1xuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBzZXRTZWFyY2gocHJldiA9PiBldmVudC50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0UHJvZHVjdHNVaWRzKCkge1xuICAgICAgICBjb25zdCB1aWQgPSB1c2VyLnVpZFxuICAgICAgICBjb25zdCBpdGVtc3JSZWYgPSByZWYoZGF0YWJhc2UsICd1c2Vycy8nICsgdWlkICsgJy9wcm9kdWN0cycpXG4gICAgICAgIG9uVmFsdWUoaXRlbXNyUmVmLCAoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBzbmFwc2hvdC52YWwoKTtcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdWlkcyA9IE9iamVjdC5rZXlzKGRhdGEpXG4gICAgICAgICAgICAgICAgc2V0U2FtcGxlc1VpZHModWlkcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgICBcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0RldGFpbHMoKSB7XG4gICAgICAgIGF3YWl0IGdldFByb2R1Y3RzVWlkcygpXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzQXJyID0gW11cbiAgICAgICAgc2FtcGxlc1VpZHMuZm9yRWFjaCh1aWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbXNyUmVmID0gcmVmKGRhdGFiYXNlLCAncHJvZHVjdHMvJyArIHVpZClcbiAgICAgICAgICAgIG9uVmFsdWUoaXRlbXNyUmVmLCAoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gc25hcHNob3QudmFsKClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0KVxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3Qua2V5cyhwcm9kdWN0KVxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0c0Fyci5wdXNoKFtwcm9kdWN0W2tleV0udWlkLCBwcm9kdWN0W2tleV0udGl0bGUsIHByb2R1Y3Rba2V5XS50eXBlXSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkgIFxuICAgICAgICB9KVxuICAgICAgICBzZXRTYW1wbGVzRGV0YWlscyhwcm9kdWN0c0FycilcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImltbWVkaWF0ZWx5IGJlZm9yZSByZXR1cm5cIilcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydkYXNoYm9hcmQnXX0+XG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2BuYXZiYXIgbmF2YmFyLWV4cGFuZC1zbSBiZy1ib2R5LXRlcnRpYXJ5ICR7c3R5bGVzWydoZWFkZXIxJ119YH0+XG5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgbmF2YmFyLWJyYW5kICR7c3R5bGVzWydsb2dvJ119YH0gaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy92aXJ0dWFsbGFiX2xvZ29fdjNfZ3JleS5wbmdcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dvXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRleHQtdG9wXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BkLWZsZXggJHtzdHlsZXNbJ3NlYXJjaCddfSBgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInNlYXJjaFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbWUtMlwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBjYXRhbG9nLi4uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydib3gtcmlnaHQnXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydjcmVhdGUtYnV0dG9uLWNvbnRhaW5lciddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlQnV0dG9uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2JveC1yb290J119PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3Byb2ZpbGUtdG9vbHMnXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17c3R5bGVzWydzZXR0aW5ncy1pY29uJ119IHRpdGxlPVwiU2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+U2V0dGluZ3M8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiNDBcIiBmaWxsPVwiYmx1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJCdXR0b24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXNbJ2hlYWRlcjInXX0+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIDxUYWJsZSBcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17c2FtcGxlc0RldGFpbHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgICApXG4gICAgXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIkNyZWF0ZUJ1dHRvbiIsIlVzZXJCdXR0b24iLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZGF0YWJhc2UiLCJyZWYiLCJvblZhbHVlIiwiRm9vdGVyIiwiVGFibGUiLCJ1c2VBdXRoU3RhdGUiLCJhdXRoIiwiTGF5b3V0IiwidXNlciIsImxvYWRpbmciLCJlcnJvciIsInNlYXJjaCIsInNldFNlYXJjaCIsInNhbXBsZXNVaWRzIiwic2V0U2FtcGxlc1VpZHMiLCJzYW1wbGVzRGV0YWlscyIsInNldFNhbXBsZXNEZXRhaWxzIiwiY29uc29sZSIsImxvZyIsImdldFByb2R1Y3RzRGV0YWlscyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwicHJldiIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJnZXRQcm9kdWN0c1VpZHMiLCJ1aWQiLCJpdGVtc3JSZWYiLCJzbmFwc2hvdCIsImRhdGEiLCJ2YWwiLCJ1aWRzIiwiT2JqZWN0Iiwia2V5cyIsInByb2R1Y3RzQXJyIiwiZm9yRWFjaCIsInByb2R1Y3QiLCJhdHRyaWJ1dGVzIiwia2V5IiwicHVzaCIsInRpdGxlIiwidHlwZSIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImEiLCJocmVmIiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzcyIsImZvcm0iLCJyb2xlIiwib25TdWJtaXQiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwiYXJpYS1sYWJlbCIsIm9uQ2hhbmdlIiwic3ZnIiwiY2lyY2xlIiwiY3giLCJjeSIsInIiLCJmaWxsIiwibWFpbiIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/dashboard/layout.js\n"));

/***/ })

});