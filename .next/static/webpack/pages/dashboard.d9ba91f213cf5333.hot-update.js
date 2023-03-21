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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/ds-layout.module.css */ \"./styles/ds-layout.module.css\");\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _create_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-button */ \"./components/dashboard/create-button.js\");\n/* harmony import */ var _user_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-button */ \"./components/dashboard/user-button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer */ \"./components/footer.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table */ \"./components/dashboard/table.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Layout() {\n    _s();\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [samplesUids, setSamplesUids] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [samplesDetails, setSamplesDetails] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuthState)(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.auth);\n    //handlers\n    function handleChange(event) {\n        setSearch((prev)=>event.target.value);\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n        getProductsDetails();\n    }\n    function getProductsUids() {\n        const uid = user.uid;\n        const itemsrRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.database, \"users/\" + uid + \"/products\");\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.onValue)(itemsrRef, (snapshot)=>{\n            const data = snapshot.val();\n            if (data) {\n                const uids = Object.keys(data);\n                setSamplesUids(uids);\n            }\n        });\n    }\n    function getProductsDetails() {\n        getProductsUids();\n        const productsArr = [];\n        samplesUids.forEach((uid)=>{\n            const itemsrRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.database, \"products/\" + uid);\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.onValue)(itemsrRef, (snapshot)=>{\n                const product = snapshot.val();\n                console.log(product);\n                const attributes = Object.keys(product);\n                attributes.forEach((key)=>{\n                    productsArr.push([\n                        product[key].uid,\n                        product[key].title,\n                        product[key].type\n                    ]);\n                });\n            });\n        });\n        setSamplesDetails(productsArr);\n    }\n    console.log(samplesDetails);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().dashboard),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \"navbar navbar-expand-sm bg-body-tertiary \".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().header1)),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"navbar-brand \".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().logo)),\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/virtuallab_logo_v3_grey.png\",\n                                    alt: \"Logo\",\n                                    width: \"100%\",\n                                    height: \"24\",\n                                    class: \"d-inline-block align-text-top\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                lineNumber: 70,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"d-flex \".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().search), \" \"),\n                                role: \"search\",\n                                onSubmit: handleSubmit,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    class: \"form-control me-2\",\n                                    type: \"search\",\n                                    placeholder: \"Search catalog...\",\n                                    \"aria-label\": \"Search\",\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"box-right\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"create-button-container\"]),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_create_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                            lineNumber: 96,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"box-root\"]),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"profile-tools\"]),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                    className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"settings-icon\"]),\n                                                    title: \"Settings\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                                            children: \"Settings\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                                            lineNumber: 101,\n                                                            columnNumber: 41\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                                            cx: \"50\",\n                                                            cy: \"50\",\n                                                            r: \"40\",\n                                                            fill: \"blue\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                                            lineNumber: 102,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_user_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 33\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                                lineNumber: 94,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().header2)\n                    }, void 0, false, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                        lineNumber: 112,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    content: samplesDetails\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                    lineNumber: 116,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 115,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 120,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"kaM5bN0rJYuLCaZck9hO0tXO2ZM=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuthState\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBSUMsV0FBV25ELGlGQUFrQjtrREFDOUIsNEVBQUNrRDs0Q0FBSUMsV0FBV25ELHNGQUF1Qjs7OERBQy9CLDhEQUFDb0U7b0RBQUlqQixXQUFXbkQsc0ZBQXVCO29EQUFFZ0QsT0FBTTs7c0VBQzNDLDhEQUFDQTtzRUFBTTs7Ozs7O3NFQUNQLDhEQUFDcUI7NERBQU9DLElBQUc7NERBQUtDLElBQUc7NERBQUtDLEdBQUU7NERBQUtDLE1BQUs7Ozs7Ozs7Ozs7Ozs4REFFNUMsOERBQUN2RSxvREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBUTNCLDhEQUFDa0Q7d0JBQU9ELFdBQVduRCw2RUFBaUI7Ozs7Ozs7Ozs7OzswQkFHeEMsOERBQUMwRTswQkFDRyw0RUFBQ2hFLDhDQUFLQTtvQkFDRmlFLFNBQVN6RDs7Ozs7Ozs7Ozs7MEJBR2pCLDhEQUFDVCwrQ0FBTUE7Ozs7Ozs7QUFJbkIsQ0FBQztHQTNHdUJJOztRQUlXRixtRUFBWUE7OztLQUp2QkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvbGF5b3V0LmpzPzY0NzMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9kcy1sYXlvdXQubW9kdWxlLmNzcyc7XG5pbXBvcnQgQ3JlYXRlQnV0dG9uIGZyb20gJy4vY3JlYXRlLWJ1dHRvbidcbmltcG9ydCBVc2VyQnV0dG9uIGZyb20gJy4vdXNlci1idXR0b24nXG5cbmltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vZmlyZWJhc2VDbGllbnRcIlxuaW1wb3J0IHsgcmVmLCBvblZhbHVlfSBmcm9tIFwiZmlyZWJhc2UvZGF0YWJhc2VcIlxuXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlcic7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi90YWJsZSc7XG5cbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uLy4uL2ZpcmViYXNlQ2xpZW50JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoKSB7XG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtzYW1wbGVzVWlkcywgc2V0U2FtcGxlc1VpZHNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW3NhbXBsZXNEZXRhaWxzLCBzZXRTYW1wbGVzRGV0YWlsc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbdXNlciwgbG9hZGluZywgZXJyb3JdID0gdXNlQXV0aFN0YXRlKGF1dGgpXG5cbiAgICBcbiAgICAvL2hhbmRsZXJzXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHNldFNlYXJjaChwcmV2ID0+IGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBnZXRQcm9kdWN0c0RldGFpbHMoKVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBnZXRQcm9kdWN0c1VpZHMoKSB7XG4gICAgICAgIGNvbnN0IHVpZCA9IHVzZXIudWlkXG4gICAgICAgIGNvbnN0IGl0ZW1zclJlZiA9IHJlZihkYXRhYmFzZSwgJ3VzZXJzLycgKyB1aWQgKyAnL3Byb2R1Y3RzJylcbiAgICAgICAgb25WYWx1ZShpdGVtc3JSZWYsIChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHNuYXBzaG90LnZhbCgpO1xuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1aWRzID0gT2JqZWN0LmtleXMoZGF0YSlcbiAgICAgICAgICAgICAgICBzZXRTYW1wbGVzVWlkcyh1aWRzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByb2R1Y3RzRGV0YWlscygpIHtcbiAgICAgICAgZ2V0UHJvZHVjdHNVaWRzKClcbiAgICAgICAgY29uc3QgcHJvZHVjdHNBcnIgPSBbXVxuICAgICAgICBzYW1wbGVzVWlkcy5mb3JFYWNoKHVpZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtc3JSZWYgPSByZWYoZGF0YWJhc2UsICdwcm9kdWN0cy8nICsgdWlkKVxuICAgICAgICAgICAgb25WYWx1ZShpdGVtc3JSZWYsIChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBzbmFwc2hvdC52YWwoKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IE9iamVjdC5rZXlzKHByb2R1Y3QpXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzQXJyLnB1c2goW3Byb2R1Y3Rba2V5XS51aWQsIHByb2R1Y3Rba2V5XS50aXRsZSwgcHJvZHVjdFtrZXldLnR5cGVdKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSAgXG4gICAgICAgIH0pXG4gICAgICAgIHNldFNhbXBsZXNEZXRhaWxzKHByb2R1Y3RzQXJyKVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKHNhbXBsZXNEZXRhaWxzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2Rhc2hib2FyZCddfT5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YG5hdmJhciBuYXZiYXItZXhwYW5kLXNtIGJnLWJvZHktdGVydGlhcnkgJHtzdHlsZXNbJ2hlYWRlcjEnXX1gfT5cblxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BuYXZiYXItYnJhbmQgJHtzdHlsZXNbJ2xvZ28nXX1gfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3ZpcnR1YWxsYWJfbG9nb192M19ncmV5LnBuZ1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ29cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdGV4dC10b3BcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGQtZmxleCAke3N0eWxlc1snc2VhcmNoJ119IGB9XG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwic2VhcmNoXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBtZS0yXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGNhdGFsb2cuLi5cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2JveC1yaWdodCddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2NyZWF0ZS1idXR0b24tY29udGFpbmVyJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGVCdXR0b24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYm94LXJvb3QnXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sncHJvZmlsZS10b29scyddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtzdHlsZXNbJ3NldHRpbmdzLWljb24nXX0gdGl0bGU9XCJTZXR0aW5nc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5TZXR0aW5nczwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCI0MFwiIGZpbGw9XCJibHVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlckJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlc1snaGVhZGVyMiddfT5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgPFRhYmxlIFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtzYW1wbGVzRGV0YWlsc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICAgIClcbiAgICBcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwiQ3JlYXRlQnV0dG9uIiwiVXNlckJ1dHRvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkYXRhYmFzZSIsInJlZiIsIm9uVmFsdWUiLCJGb290ZXIiLCJUYWJsZSIsInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJMYXlvdXQiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJzYW1wbGVzVWlkcyIsInNldFNhbXBsZXNVaWRzIiwic2FtcGxlc0RldGFpbHMiLCJzZXRTYW1wbGVzRGV0YWlscyIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXYiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZ2V0UHJvZHVjdHNEZXRhaWxzIiwiZ2V0UHJvZHVjdHNVaWRzIiwidWlkIiwiaXRlbXNyUmVmIiwic25hcHNob3QiLCJkYXRhIiwidmFsIiwidWlkcyIsIk9iamVjdCIsImtleXMiLCJwcm9kdWN0c0FyciIsImZvckVhY2giLCJwcm9kdWN0IiwiY29uc29sZSIsImxvZyIsImF0dHJpYnV0ZXMiLCJrZXkiLCJwdXNoIiwidGl0bGUiLCJ0eXBlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiYSIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImNsYXNzIiwiZm9ybSIsInJvbGUiLCJvblN1Ym1pdCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJhcmlhLWxhYmVsIiwib25DaGFuZ2UiLCJzdmciLCJjaXJjbGUiLCJjeCIsImN5IiwiciIsImZpbGwiLCJtYWluIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/dashboard/layout.js\n"));

/***/ })

});