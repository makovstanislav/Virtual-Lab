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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/ds-layout.module.css */ \"./styles/ds-layout.module.css\");\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _create_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-button */ \"./components/dashboard/create-button.js\");\n/* harmony import */ var _user_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-button */ \"./components/dashboard/user-button.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Header() {\n    _s();\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    function handleChange(event) {\n        setSearch((prev)=>event.target.value);\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n    }\n    async function logOut() {\n        console.log(\"...logging out\");\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_firebaseClient__WEBPACK_IMPORTED_MODULE_2__.auth).then(()=>{\n            setCookie(\"logged\", false);\n            console.log(\"signed out\");\n            router.push(\"/dashboard\");\n        // Sign-out successful.\n        }).catch((error)=>{\n        // An error happened.\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"navbar navbar-expand-sm bg-body-tertiary \".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().header1)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"navbar-brand \".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().logo)),\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/virtuallab_logo_v3_grey.png\",\n                    alt: \"Logo\",\n                    width: \"100%\",\n                    height: \"24\",\n                    class: \"d-inline-block align-text-top\"\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"d-flex \".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().search), \" \"),\n                role: \"search\",\n                onSubmit: handleSubmit,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    class: \"form-control me-2\",\n                    type: \"search\",\n                    placeholder: \"Search catalog...\",\n                    \"aria-label\": \"Search\",\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"box-right\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"create-button-container\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_create_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"box-root\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"profile-tools\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"settings-icon\"]),\n                                    title: \"Settings\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                            children: \"Settings\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                            cx: \"50\",\n                                            cy: \"50\",\n                                            r: \"40\",\n                                            fill: \"blue\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_user_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    logOut: logOut\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/header.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(Header, \"XTSRYpq6cOcoZJXUP2MOhw/+PLM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9oZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ1c7QUFDSjtBQUNBO0FBQ2U7QUFDWjtBQUNKO0FBRXZCLFNBQVNPLFNBQVM7O0lBRTdCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNVSxTQUFTUCxzREFBU0E7SUFFeEIsU0FBU1EsYUFBYUMsS0FBSyxFQUFFO1FBQ3pCSCxVQUFVSSxDQUFBQSxPQUFRRCxNQUFNRSxNQUFNLENBQUNDLEtBQUs7SUFDeEM7SUFFQSxTQUFTQyxhQUFhSixLQUFLLEVBQUU7UUFDekJBLE1BQU1LLGNBQWM7SUFDeEI7SUFFQSxlQUFlQyxTQUFTO1FBQ3BCQyxRQUFRQyxHQUFHLENBQUM7UUFDWmxCLHNEQUFPQSxDQUFDRCxpREFBSUEsRUFBRW9CLElBQUksQ0FBQyxJQUFNO1lBQ3JCQyxVQUFVLFVBQVUsS0FBSztZQUN6QkgsUUFBUUMsR0FBRyxDQUFDO1lBQ1pWLE9BQU9hLElBQUksQ0FBQztRQUNoQix1QkFBdUI7UUFDdkIsR0FBR0MsS0FBSyxDQUFDLENBQUNDLFFBQVU7UUFDcEIscUJBQXFCO1FBQ3JCO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0M7UUFBT0MsV0FBVyw0Q0FBOEQsT0FBbEJ2Qiw2RUFBaUI7OzBCQUU1RSw4REFBQ3dCO2dCQUFFRCxXQUFXLGdCQUErQixPQUFmdkIsMEVBQWM7Z0JBQUl5QixNQUFLOzBCQUNqRCw0RUFBQ0M7b0JBQ0dDLEtBQUk7b0JBQ0pDLEtBQUk7b0JBQ0pDLE9BQU07b0JBQ05DLFFBQU87b0JBQ1BDLE9BQU07Ozs7Ozs7Ozs7OzBCQUlkLDhEQUFDQztnQkFDR1QsV0FBVyxVQUEyQixPQUFqQnZCLDRFQUFnQixFQUFDO2dCQUN0Q2lDLE1BQUs7Z0JBQ0xDLFVBQVV0QjswQkFDViw0RUFBQ3VCO29CQUNHSixPQUFNO29CQUNOSyxNQUFLO29CQUNMQyxhQUFZO29CQUNaQyxjQUFXO29CQUNYQyxVQUFVaEM7Ozs7Ozs7Ozs7OzBCQUlsQiw4REFBQ2lDO2dCQUFJakIsV0FBV3ZCLGtGQUFtQjs7a0NBQy9CLDhEQUFDd0M7d0JBQUlqQixXQUFXdkIsZ0dBQWlDO2tDQUM3Qyw0RUFBQ0Msc0RBQVlBOzs7Ozs7Ozs7O2tDQUVqQiw4REFBQ3VDO3dCQUFJakIsV0FBV3ZCLGlGQUFrQjtrQ0FDOUIsNEVBQUN3Qzs0QkFBSWpCLFdBQVd2QixzRkFBdUI7OzhDQUMvQiw4REFBQ3lDO29DQUFJbEIsV0FBV3ZCLHNGQUF1QjtvQ0FBRTBDLE9BQU07O3NEQUMzQyw4REFBQ0E7c0RBQU07Ozs7OztzREFDUCw4REFBQ0M7NENBQU9DLElBQUc7NENBQUtDLElBQUc7NENBQUtDLEdBQUU7NENBQUtDLE1BQUs7Ozs7Ozs7Ozs7Ozs4Q0FFNUMsOERBQUM3QyxvREFBVUE7b0NBQUNZLFFBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01QyxDQUFDO0dBcEV1Qlg7O1FBSUxKLGtEQUFTQTs7O0tBSkpJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL2hlYWRlci5qcz8xY2M1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlQ2xpZW50XCJcbmltcG9ydCB7IHNpZ25PdXQgfSBmcm9tICdmaXJlYmFzZS9hdXRoJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9kcy1sYXlvdXQubW9kdWxlLmNzcydcbmltcG9ydCBDcmVhdGVCdXR0b24gZnJvbSAnLi9jcmVhdGUtYnV0dG9uJ1xuaW1wb3J0IFVzZXJCdXR0b24gZnJvbSAnLi91c2VyLWJ1dHRvbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBzZXRTZWFyY2gocHJldiA9PiBldmVudC50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBsb2dPdXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLi4ubG9nZ2luZyBvdXRcIilcbiAgICAgICAgc2lnbk91dChhdXRoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldENvb2tpZSgnbG9nZ2VkJywgZmFsc2UpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNpZ25lZCBvdXRcIilcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJykgXG4gICAgICAgIC8vIFNpZ24tb3V0IHN1Y2Nlc3NmdWwuXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2BuYXZiYXIgbmF2YmFyLWV4cGFuZC1zbSBiZy1ib2R5LXRlcnRpYXJ5ICR7c3R5bGVzWydoZWFkZXIxJ119YH0+XG5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YG5hdmJhci1icmFuZCAke3N0eWxlc1snbG9nbyddfWB9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy92aXJ0dWFsbGFiX2xvZ29fdjNfZ3JleS5wbmdcIiBcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9nb1wiIFxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIiBcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWlubGluZS1ibG9jayBhbGlnbi10ZXh0LXRvcFwiIFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgIDxmb3JtIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGQtZmxleCAke3N0eWxlc1snc2VhcmNoJ119IGB9XG4gICAgICAgICAgICAgICAgcm9sZT1cInNlYXJjaFwiIFxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbWUtMlwiIFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGNhdGFsb2cuLi5cIiBcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxuICAgICAgICAgICAgICAgIC8+ICAgXG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2JveC1yaWdodCddfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydjcmVhdGUtYnV0dG9uLWNvbnRhaW5lciddfT5cbiAgICAgICAgICAgICAgICAgICAgPENyZWF0ZUJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2JveC1yb290J119PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydwcm9maWxlLXRvb2xzJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtzdHlsZXNbJ3NldHRpbmdzLWljb24nXX0gdGl0bGU9XCJTZXR0aW5nc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+U2V0dGluZ3M8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjQwXCIgZmlsbD1cImJsdWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJCdXR0b24gbG9nT3V0PXtsb2dPdXR9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXV0aCIsInNpZ25PdXQiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJDcmVhdGVCdXR0b24iLCJVc2VyQnV0dG9uIiwiSGVhZGVyIiwic2VhcmNoIiwic2V0U2VhcmNoIiwicm91dGVyIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwcmV2IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImxvZ091dCIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwic2V0Q29va2llIiwicHVzaCIsImNhdGNoIiwiZXJyb3IiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJhIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiY2xhc3MiLCJmb3JtIiwicm9sZSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhcmlhLWxhYmVsIiwib25DaGFuZ2UiLCJkaXYiLCJzdmciLCJ0aXRsZSIsImNpcmNsZSIsImN4IiwiY3kiLCJyIiwiZmlsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/dashboard/header.js\n"));

/***/ })

});