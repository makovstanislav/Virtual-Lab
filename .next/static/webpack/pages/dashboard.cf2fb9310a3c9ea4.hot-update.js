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

/***/ "./components/dashboard/header.js":
/*!****************************************!*\
  !*** ./components/dashboard/header.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/ds-layout.module.css */ \"./styles/ds-layout.module.css\");\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _create_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-button */ \"./components/dashboard/create-button.js\");\n/* harmony import */ var _user_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-button */ \"./components/dashboard/user-button.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Header() {\n    _s();\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    function handleChange(event) {\n        setSearch((prev)=>event.target.value);\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n    }\n    function logOut() {\n        console.log(\"signed out\");\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_firebaseClient__WEBPACK_IMPORTED_MODULE_2__.auth).then(()=>{\n            setCookie(\"logged\", false);\n            console.log(\"signed out\");\n            router.push(\"/dashboard\");\n        // Sign-out successful.\n        }).catch((error)=>{\n        // An error happened.\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"navbar navbar-expand-sm bg-body-tertiary \".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().header1)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"navbar-brand \".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().logo)),\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/virtuallab_logo_v3_grey.png\",\n                    alt: \"Logo\",\n                    width: \"100%\",\n                    height: \"24\",\n                    class: \"d-inline-block align-text-top\"\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"d-flex \".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().search), \" \"),\n                role: \"search\",\n                onSubmit: handleSubmit,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    class: \"form-control me-2\",\n                    type: \"search\",\n                    placeholder: \"Search catalog...\",\n                    \"aria-label\": \"Search\",\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"box-right\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"create-button-container\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_create_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"box-root\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"profile-tools\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"settings-icon\"]),\n                                    title: \"Settings\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                            children: \"Settings\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                            cx: \"50\",\n                                            cy: \"50\",\n                                            r: \"40\",\n                                            fill: \"blue\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_user_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    logOut: logOut\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(Header, \"XTSRYpq6cOcoZJXUP2MOhw/+PLM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9oZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ1c7QUFDSjtBQUNBO0FBQ2U7QUFDWjtBQUNKO0FBRXZCLFNBQVNPLFNBQVM7O0lBRTdCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNVSxTQUFTUCxzREFBU0E7SUFFeEIsU0FBU1EsYUFBYUMsS0FBSyxFQUFFO1FBQ3pCSCxVQUFVSSxDQUFBQSxPQUFRRCxNQUFNRSxNQUFNLENBQUNDLEtBQUs7SUFDeEM7SUFFQSxTQUFTQyxhQUFhSixLQUFLLEVBQUU7UUFDekJBLE1BQU1LLGNBQWM7SUFDeEI7SUFFQSxTQUFTQyxTQUFTO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQztRQUNabEIsc0RBQU9BLENBQUNELGlEQUFJQSxFQUFFb0IsSUFBSSxDQUFDLElBQU07WUFDckJDLFVBQVUsVUFBVSxLQUFLO1lBQ3pCSCxRQUFRQyxHQUFHLENBQUM7WUFDWlYsT0FBT2EsSUFBSSxDQUFDO1FBQ2hCLHVCQUF1QjtRQUN2QixHQUFHQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtRQUNwQixxQkFBcUI7UUFDckI7SUFDSjtJQUVBLHFCQUNJLDhEQUFDQztRQUFPQyxXQUFXLDRDQUE4RCxPQUFsQnZCLDZFQUFpQjs7MEJBRTVFLDhEQUFDd0I7Z0JBQUVELFdBQVcsZ0JBQStCLE9BQWZ2QiwwRUFBYztnQkFBSXlCLE1BQUs7MEJBQ2pELDRFQUFDQztvQkFDR0MsS0FBSTtvQkFDSkMsS0FBSTtvQkFDSkMsT0FBTTtvQkFDTkMsUUFBTztvQkFDUEMsT0FBTTs7Ozs7Ozs7Ozs7MEJBSWQsOERBQUNDO2dCQUNHVCxXQUFXLFVBQTJCLE9BQWpCdkIsNEVBQWdCLEVBQUM7Z0JBQ3RDaUMsTUFBSztnQkFDTEMsVUFBVXRCOzBCQUNWLDRFQUFDdUI7b0JBQ0dKLE9BQU07b0JBQ05LLE1BQUs7b0JBQ0xDLGFBQVk7b0JBQ1pDLGNBQVc7b0JBQ1hDLFVBQVVoQzs7Ozs7Ozs7Ozs7MEJBSWxCLDhEQUFDaUM7Z0JBQUlqQixXQUFXdkIsa0ZBQW1COztrQ0FDL0IsOERBQUN3Qzt3QkFBSWpCLFdBQVd2QixnR0FBaUM7a0NBQzdDLDRFQUFDQyxzREFBWUE7Ozs7Ozs7Ozs7a0NBRWpCLDhEQUFDdUM7d0JBQUlqQixXQUFXdkIsaUZBQWtCO2tDQUM5Qiw0RUFBQ3dDOzRCQUFJakIsV0FBV3ZCLHNGQUF1Qjs7OENBQy9CLDhEQUFDeUM7b0NBQUlsQixXQUFXdkIsc0ZBQXVCO29DQUFFMEMsT0FBTTs7c0RBQzNDLDhEQUFDQTtzREFBTTs7Ozs7O3NEQUNQLDhEQUFDQzs0Q0FBT0MsSUFBRzs0Q0FBS0MsSUFBRzs0Q0FBS0MsR0FBRTs0Q0FBS0MsTUFBSzs7Ozs7Ozs7Ozs7OzhDQUU1Qyw4REFBQzdDLG9EQUFVQTtvQ0FBQ1ksUUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVDLENBQUM7R0FwRXVCWDs7UUFJTEosa0RBQVNBOzs7S0FKSkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvaGVhZGVyLmpzPzFjYzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vLi4vZmlyZWJhc2VDbGllbnRcIlxuaW1wb3J0IHsgc2lnbk91dCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2RzLWxheW91dC5tb2R1bGUuY3NzJ1xuaW1wb3J0IENyZWF0ZUJ1dHRvbiBmcm9tICcuL2NyZWF0ZS1idXR0b24nXG5pbXBvcnQgVXNlckJ1dHRvbiBmcm9tICcuL3VzZXItYnV0dG9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG5cbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpXG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHNldFNlYXJjaChwcmV2ID0+IGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvZ091dCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzaWduZWQgb3V0XCIpXG4gICAgICAgIHNpZ25PdXQoYXV0aCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRDb29raWUoJ2xvZ2dlZCcsIGZhbHNlKVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaWduZWQgb3V0XCIpXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpIFxuICAgICAgICAvLyBTaWduLW91dCBzdWNjZXNzZnVsLlxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgbmF2YmFyIG5hdmJhci1leHBhbmQtc20gYmctYm9keS10ZXJ0aWFyeSAke3N0eWxlc1snaGVhZGVyMSddfWB9PlxuXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BuYXZiYXItYnJhbmQgJHtzdHlsZXNbJ2xvZ28nXX1gfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvdmlydHVhbGxhYl9sb2dvX3YzX2dyZXkucG5nXCIgXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ29cIiBcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCIgXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0XCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdGV4dC10b3BcIiBcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICA8Zm9ybSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BkLWZsZXggJHtzdHlsZXNbJ3NlYXJjaCddfSBgfVxuICAgICAgICAgICAgICAgIHJvbGU9XCJzZWFyY2hcIiBcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIG1lLTJcIiBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBjYXRhbG9nLi4uXCIgXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcbiAgICAgICAgICAgICAgICAvPiAgIFxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydib3gtcmlnaHQnXX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snY3JlYXRlLWJ1dHRvbi1jb250YWluZXInXX0+XG4gICAgICAgICAgICAgICAgICAgIDxDcmVhdGVCdXR0b24gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydib3gtcm9vdCddfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sncHJvZmlsZS10b29scyddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17c3R5bGVzWydzZXR0aW5ncy1pY29uJ119IHRpdGxlPVwiU2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPlNldHRpbmdzPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCI0MFwiIGZpbGw9XCJibHVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyQnV0dG9uIGxvZ091dD17bG9nT3V0fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF1dGgiLCJzaWduT3V0IiwidXNlUm91dGVyIiwic3R5bGVzIiwiQ3JlYXRlQnV0dG9uIiwiVXNlckJ1dHRvbiIsIkhlYWRlciIsInNlYXJjaCIsInNldFNlYXJjaCIsInJvdXRlciIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwicHJldiIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJsb2dPdXQiLCJjb25zb2xlIiwibG9nIiwidGhlbiIsInNldENvb2tpZSIsInB1c2giLCJjYXRjaCIsImVycm9yIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImNsYXNzIiwiZm9ybSIsInJvbGUiLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXJpYS1sYWJlbCIsIm9uQ2hhbmdlIiwiZGl2Iiwic3ZnIiwidGl0bGUiLCJjaXJjbGUiLCJjeCIsImN5IiwiciIsImZpbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/dashboard/header.js\n"));

/***/ })

});