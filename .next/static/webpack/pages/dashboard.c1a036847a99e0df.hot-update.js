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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/ds-layout.module.css */ \"./styles/ds-layout.module.css\");\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./components/dashboard/header.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer */ \"./components/footer.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table */ \"./components/dashboard/table.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Layout() {\n    _s();\n    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.auth);\n    const [userUid, setUserUid] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [samplesUids, setSamplesUids] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [samplesDetails, setSamplesDetails] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (user) {\n            console.log(user);\n            setUserUid(user.uid);\n        }\n        1;\n    }, [\n        user\n    ]);\n    function fetchDB(path) {\n        const itemsrRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.database, path);\n        return new Promise((resolve, reject)=>{\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.onValue)(itemsrRef, (snapshot)=>{\n                resolve(snapshot.val());\n            }, (error)=>{\n                reject(error);\n            });\n        });\n    }\n    // returns a list of products uids\n    function getSamplesUids() {\n        console.log(userUid);\n        const data = fetchDB(\"users/\" + userUid + \"/products\").then((data)=>{\n            console.log(data);\n            const uids = Object.keys(data);\n            setSamplesUids(uids);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().dashboard),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    sa: true\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"gPTsopdgSXcYpi05JC47upygoWU=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9sYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ3pCO0FBQ3NCO0FBQ0o7QUFDQTtBQUNoQjtBQUNIO0FBQzZCO0FBQ2I7QUFFN0IsU0FBU1ksU0FBUzs7SUFFN0IsTUFBTSxDQUFDQyxNQUFNQyxTQUFTQyxNQUFNLEdBQUdMLHVFQUFZQSxDQUFDQyxpREFBSUE7SUFDaEQsTUFBTSxDQUFDSyxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2UsYUFBYUMsZUFBZSxHQUFHaEIsK0NBQVFBLENBQUMsRUFBRTtJQUNqRCxNQUFNLENBQUNpQixnQkFBZ0JDLGtCQUFrQixHQUFHbEIsK0NBQVFBLENBQUMsRUFBRTtJQUV2REMsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLElBQUlTLE1BQU07WUFDTlMsUUFBUUMsR0FBRyxDQUFDVjtZQUNaSSxXQUFXSixLQUFLVyxHQUFHO1FBQ3ZCLENBQUM7UUFBQTtJQUNMLEdBQUc7UUFBQ1g7S0FBSztJQUVULFNBQVNZLFFBQVFDLElBQUksRUFBRTtRQUNuQixNQUFNQyxZQUFZckIsc0RBQUdBLENBQUNELHFEQUFRQSxFQUFFcUI7UUFDaEMsT0FBTyxJQUFJRSxRQUFRLENBQUNDLFNBQVNDLFNBQVc7WUFDdEN2QiwwREFBT0EsQ0FBQ29CLFdBQVcsQ0FBQ0ksV0FBYTtnQkFDL0JGLFFBQVFFLFNBQVNDLEdBQUc7WUFDdEIsR0FBRyxDQUFDakIsUUFBVTtnQkFDWmUsT0FBT2Y7WUFDVDtRQUNGO0lBQ0Y7SUFFRixrQ0FBa0M7SUFDbEMsU0FBU2tCLGlCQUFpQjtRQUMxQlgsUUFBUUMsR0FBRyxDQUFDUDtRQUNaLE1BQU1rQixPQUFPVCxRQUFRLFdBQVdULFVBQVUsYUFDckNtQixJQUFJLENBQUMsQ0FBQ0QsT0FBUztZQUNaWixRQUFRQyxHQUFHLENBQUNXO1lBQ1osTUFBTUUsT0FBT0MsT0FBT0MsSUFBSSxDQUFDSjtZQUN6QmYsZUFBZWlCO1FBQ25CLEdBQ0NHLEtBQUssQ0FBQyxDQUFDeEIsUUFBVTtZQUNkTyxRQUFRQyxHQUFHLENBQUNSO1FBQ2hCO0lBQ0o7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUN5QjtnQkFBSUMsV0FBV3pDLCtFQUFtQjswQkFDL0IsNEVBQUNDLCtDQUFNQTs7Ozs7Ozs7OzswQkFFWCw4REFBQ3lDOzBCQUNHLDRFQUFDakMsOENBQUtBO29CQUNGa0MsRUFBRTs7Ozs7Ozs7Ozs7MEJBR1YsOERBQUNuQywrQ0FBTUE7Ozs7Ozs7QUFJbkIsQ0FBQztHQXJEdUJJOztRQUVXRixtRUFBWUE7OztLQUZ2QkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvbGF5b3V0LmpzPzY0NzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvZHMtbGF5b3V0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xuaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gXCIuLi8uLi9maXJlYmFzZUNsaWVudFwiXG5pbXBvcnQgeyByZWYsIG9uVmFsdWV9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlcic7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi90YWJsZSc7XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJztcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi8uLi9maXJlYmFzZUNsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCgpIHtcblxuICAgIGNvbnN0IFt1c2VyLCBsb2FkaW5nLCBlcnJvcl0gPSB1c2VBdXRoU3RhdGUoYXV0aClcbiAgICBjb25zdCBbdXNlclVpZCwgc2V0VXNlclVpZF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbc2FtcGxlc1VpZHMsIHNldFNhbXBsZXNVaWRzXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtzYW1wbGVzRGV0YWlscywgc2V0U2FtcGxlc0RldGFpbHNdID0gdXNlU3RhdGUoW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2codXNlcilcbiAgICAgICAgICAgIHNldFVzZXJVaWQodXNlci51aWQpXG4gICAgICAgIH0xXG4gICAgfSwgW3VzZXJdKVxuICAgIFxuICAgIGZ1bmN0aW9uIGZldGNoREIocGF0aCkge1xuICAgICAgICBjb25zdCBpdGVtc3JSZWYgPSByZWYoZGF0YWJhc2UsIHBhdGgpXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgb25WYWx1ZShpdGVtc3JSZWYsIChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShzbmFwc2hvdC52YWwoKSk7XG4gICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgXG4gICAgLy8gcmV0dXJucyBhIGxpc3Qgb2YgcHJvZHVjdHMgdWlkc1xuICAgIGZ1bmN0aW9uIGdldFNhbXBsZXNVaWRzKCkge1xuICAgIGNvbnNvbGUubG9nKHVzZXJVaWQpXG4gICAgY29uc3QgZGF0YSA9IGZldGNoREIoJ3VzZXJzLycgKyB1c2VyVWlkICsgJy9wcm9kdWN0cycpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgY29uc3QgdWlkcyA9IE9iamVjdC5rZXlzKGRhdGEpXG4gICAgICAgICAgICBzZXRTYW1wbGVzVWlkcyh1aWRzKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZGFzaGJvYXJkJ119PlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgICAgIHNhIFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvPlxuICAgIClcbiAgICBcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwiSGVhZGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRhdGFiYXNlIiwicmVmIiwib25WYWx1ZSIsIkZvb3RlciIsIlRhYmxlIiwidXNlQXV0aFN0YXRlIiwiYXV0aCIsIkxheW91dCIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VyVWlkIiwic2V0VXNlclVpZCIsInNhbXBsZXNVaWRzIiwic2V0U2FtcGxlc1VpZHMiLCJzYW1wbGVzRGV0YWlscyIsInNldFNhbXBsZXNEZXRhaWxzIiwiY29uc29sZSIsImxvZyIsInVpZCIsImZldGNoREIiLCJwYXRoIiwiaXRlbXNyUmVmIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzbmFwc2hvdCIsInZhbCIsImdldFNhbXBsZXNVaWRzIiwiZGF0YSIsInRoZW4iLCJ1aWRzIiwiT2JqZWN0Iiwia2V5cyIsImNhdGNoIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsInNhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dashboard/layout.js\n"));

/***/ })

});