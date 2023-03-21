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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/ds-layout.module.css */ \"./styles/ds-layout.module.css\");\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./components/dashboard/header.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer */ \"./components/footer.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table */ \"./components/dashboard/table.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Layout() {\n    _s();\n    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.auth);\n    const [userUid, setUserUid] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(user);\n    const [samplesUids, setSamplesUids] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        \"bnhjkl;u4r\",\n        \"56789po[kjhg\"\n    ]);\n    const [samplesDetails, setSamplesDetails] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (user) {\n            setUserUid(user.uid);\n            getSamplesUids();\n        }\n    }, [\n        user\n    ]);\n    // fetch\n    function fetchDB(path) {\n        const itemsrRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.database, path);\n        return new Promise((resolve, reject)=>{\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.onValue)(itemsrRef, (snapshot)=>{\n                resolve(snapshot.val());\n            }, (error)=>{\n                reject(error);\n            });\n        });\n    }\n    // sets a list of products uids\n    function getSamplesUids() {\n        const data = fetchDB(\"users/\" + userUid + \"/products\").then((data)=>{\n            const uids = Object.keys(data);\n            setSamplesUids(uids);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().dashboard),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    samplesUids: samplesUids\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"fhknYciEky35eyve7OiDmIYaXQM=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9sYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ3pCO0FBQ3NCO0FBQ0o7QUFDQTtBQUNoQjtBQUNIO0FBQzZCO0FBQ2I7QUFFN0IsU0FBU1ksU0FBUzs7SUFFN0IsTUFBTSxDQUFDQyxNQUFNQyxTQUFTQyxNQUFNLEdBQUdMLHVFQUFZQSxDQUFDQyxpREFBSUE7SUFDaEQsTUFBTSxDQUFDSyxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDVTtJQUN2QyxNQUFNLENBQUNLLGFBQWFDLGVBQWUsR0FBR2hCLCtDQUFRQSxDQUFDO1FBQUM7UUFBYztLQUFlO0lBQzdFLE1BQU0sQ0FBQ2lCLGdCQUFnQkMsa0JBQWtCLEdBQUdsQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXZEQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osSUFBSVMsTUFBTTtZQUNOSSxXQUFXSixLQUFLUyxHQUFHO1lBQ25CQztRQUNKLENBQUM7SUFDTCxHQUFHO1FBQUNWO0tBQUs7SUFHVCxRQUFRO0lBQ1IsU0FBU1csUUFBUUMsSUFBSSxFQUFFO1FBQ25CLE1BQU1DLFlBQVlwQixzREFBR0EsQ0FBQ0QscURBQVFBLEVBQUVvQjtRQUNoQyxPQUFPLElBQUlFLFFBQVEsQ0FBQ0MsU0FBU0MsU0FBVztZQUN0Q3RCLDBEQUFPQSxDQUFDbUIsV0FBVyxDQUFDSSxXQUFhO2dCQUMvQkYsUUFBUUUsU0FBU0MsR0FBRztZQUN0QixHQUFHLENBQUNoQixRQUFVO2dCQUNaYyxPQUFPZDtZQUNUO1FBQ0Y7SUFDRjtJQUVGLCtCQUErQjtJQUMvQixTQUFTUSxpQkFBaUI7UUFDMUIsTUFBTVMsT0FBT1IsUUFBUSxXQUFXUixVQUFVLGFBQ3JDaUIsSUFBSSxDQUFDLENBQUNELE9BQVM7WUFDWixNQUFNRSxPQUFPQyxPQUFPQyxJQUFJLENBQUNKO1lBQ3pCYixlQUFlZTtRQUNuQixHQUNDRyxLQUFLLENBQUMsQ0FBQ3RCLFFBQVU7WUFDZHVCLFFBQVFDLEdBQUcsQ0FBQ3hCO1FBQ2hCO0lBQ0o7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUN5QjtnQkFBSUMsV0FBV3pDLCtFQUFtQjswQkFDL0IsNEVBQUNDLCtDQUFNQTs7Ozs7Ozs7OzswQkFFWCw4REFBQ3lDOzBCQUNHLDRFQUFDakMsOENBQUtBO29CQUNGUyxhQUFhQTs7Ozs7Ozs7Ozs7MEJBR3JCLDhEQUFDViwrQ0FBTUE7Ozs7Ozs7QUFJbkIsQ0FBQztHQXJEdUJJOztRQUVXRixtRUFBWUE7OztLQUZ2QkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvbGF5b3V0LmpzPzY0NzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvZHMtbGF5b3V0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xuaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gXCIuLi8uLi9maXJlYmFzZUNsaWVudFwiXG5pbXBvcnQgeyByZWYsIG9uVmFsdWV9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlcic7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi90YWJsZSc7XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJztcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi8uLi9maXJlYmFzZUNsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCgpIHtcblxuICAgIGNvbnN0IFt1c2VyLCBsb2FkaW5nLCBlcnJvcl0gPSB1c2VBdXRoU3RhdGUoYXV0aClcbiAgICBjb25zdCBbdXNlclVpZCwgc2V0VXNlclVpZF0gPSB1c2VTdGF0ZSh1c2VyKVxuICAgIGNvbnN0IFtzYW1wbGVzVWlkcywgc2V0U2FtcGxlc1VpZHNdID0gdXNlU3RhdGUoWydibmhqa2w7dTRyJywgJzU2Nzg5cG9ba2poZyddKVxuICAgIGNvbnN0IFtzYW1wbGVzRGV0YWlscywgc2V0U2FtcGxlc0RldGFpbHNdID0gdXNlU3RhdGUoW10pXG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIHNldFVzZXJVaWQodXNlci51aWQpXG4gICAgICAgICAgICBnZXRTYW1wbGVzVWlkcygpXG4gICAgICAgIH1cbiAgICB9LCBbdXNlcl0pXG4gICAgXG5cbiAgICAvLyBmZXRjaFxuICAgIGZ1bmN0aW9uIGZldGNoREIocGF0aCkge1xuICAgICAgICBjb25zdCBpdGVtc3JSZWYgPSByZWYoZGF0YWJhc2UsIHBhdGgpXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgb25WYWx1ZShpdGVtc3JSZWYsIChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShzbmFwc2hvdC52YWwoKSk7XG4gICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgXG4gICAgLy8gc2V0cyBhIGxpc3Qgb2YgcHJvZHVjdHMgdWlkc1xuICAgIGZ1bmN0aW9uIGdldFNhbXBsZXNVaWRzKCkge1xuICAgIGNvbnN0IGRhdGEgPSBmZXRjaERCKCd1c2Vycy8nICsgdXNlclVpZCArICcvcHJvZHVjdHMnKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdWlkcyA9IE9iamVjdC5rZXlzKGRhdGEpXG4gICAgICAgICAgICBzZXRTYW1wbGVzVWlkcyh1aWRzKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZGFzaGJvYXJkJ119PlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZXNVaWRzPXtzYW1wbGVzVWlkc30gXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC8+XG4gICAgKVxuICAgIFxufSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJIZWFkZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZGF0YWJhc2UiLCJyZWYiLCJvblZhbHVlIiwiRm9vdGVyIiwiVGFibGUiLCJ1c2VBdXRoU3RhdGUiLCJhdXRoIiwiTGF5b3V0IiwidXNlciIsImxvYWRpbmciLCJlcnJvciIsInVzZXJVaWQiLCJzZXRVc2VyVWlkIiwic2FtcGxlc1VpZHMiLCJzZXRTYW1wbGVzVWlkcyIsInNhbXBsZXNEZXRhaWxzIiwic2V0U2FtcGxlc0RldGFpbHMiLCJ1aWQiLCJnZXRTYW1wbGVzVWlkcyIsImZldGNoREIiLCJwYXRoIiwiaXRlbXNyUmVmIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzbmFwc2hvdCIsInZhbCIsImRhdGEiLCJ0aGVuIiwidWlkcyIsIk9iamVjdCIsImtleXMiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dashboard/layout.js\n"));

/***/ })

});