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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/ds-layout.module.css */ \"./styles/ds-layout.module.css\");\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./components/dashboard/header.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer */ \"./components/footer.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table */ \"./components/dashboard/table.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Layout() {\n    _s();\n    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.auth);\n    const [samplesUids, setSamplesUids] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        \"TBD\",\n        \"TBD\"\n    ]);\n    const [samplesDetails, setSamplesDetails] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (user) {\n            getSamplesUids(user.uid);\n        }\n    }, [\n        user\n    ]);\n    // fetch\n    function fetchDB(path) {\n        const itemsrRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.database, path);\n        return new Promise((resolve, reject)=>{\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.onValue)(itemsrRef, (snapshot)=>{\n                resolve(snapshot.val());\n            }, (error)=>{\n                reject(error);\n            });\n        });\n    }\n    // sets a list of products uids\n    function getSamplesUids(userUid) {\n        const data = fetchDB(\"users/\" + userUid + \"/products\").then((data)=>{\n            const uids = Object.keys(data);\n            setSamplesUids(uids);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().dashboard),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    samplesUids: samplesUids\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"auPhPcEaCmjI2gT3U1ycr9P7/cg=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9sYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ3pCO0FBQ3NCO0FBQ0o7QUFDQTtBQUNoQjtBQUNIO0FBQzZCO0FBQ2I7QUFFN0IsU0FBU1ksU0FBUzs7SUFFN0IsTUFBTSxDQUFDQyxNQUFNQyxTQUFTQyxNQUFNLEdBQUdMLHVFQUFZQSxDQUFDQyxpREFBSUE7SUFDaEQsTUFBTSxDQUFDSyxhQUFhQyxlQUFlLEdBQUdkLCtDQUFRQSxDQUFDO1FBQUM7UUFBTztLQUFNO0lBQzdELE1BQU0sQ0FBQ2UsZ0JBQWdCQyxrQkFBa0IsR0FBR2hCLCtDQUFRQSxDQUFDLENBQUM7SUFFdERDLGdEQUFTQSxDQUFDLElBQU07UUFDWixJQUFJUyxNQUFNO1lBQ05PLGVBQWVQLEtBQUtRLEdBQUc7UUFDM0IsQ0FBQztJQUNMLEdBQUc7UUFBQ1I7S0FBSztJQUVULFFBQVE7SUFDUixTQUFTUyxRQUFRQyxJQUFJLEVBQUU7UUFDbkIsTUFBTUMsWUFBWWxCLHNEQUFHQSxDQUFDRCxxREFBUUEsRUFBRWtCO1FBQ2hDLE9BQU8sSUFBSUUsUUFBUSxDQUFDQyxTQUFTQyxTQUFXO1lBQ3RDcEIsMERBQU9BLENBQUNpQixXQUFXLENBQUNJLFdBQWE7Z0JBQy9CRixRQUFRRSxTQUFTQyxHQUFHO1lBQ3RCLEdBQUcsQ0FBQ2QsUUFBVTtnQkFDWlksT0FBT1o7WUFDVDtRQUNGO0lBQ0Y7SUFFRiwrQkFBK0I7SUFDL0IsU0FBU0ssZUFBZVUsT0FBTyxFQUFFO1FBQzdCLE1BQU1DLE9BQU9ULFFBQVEsV0FBV1EsVUFBVSxhQUNyQ0UsSUFBSSxDQUFDLENBQUNELE9BQVM7WUFDWixNQUFNRSxPQUFPQyxPQUFPQyxJQUFJLENBQUNKO1lBQ3pCZCxlQUFlZ0I7UUFDbkIsR0FDQ0csS0FBSyxDQUFDLENBQUNyQixRQUFVO1lBQ2RzQixRQUFRQyxHQUFHLENBQUN2QjtRQUNoQjtJQUNSO0lBRUEscUJBQ0k7OzBCQUNJLDhEQUFDd0I7Z0JBQUlDLFdBQVd4QywrRUFBbUI7MEJBQy9CLDRFQUFDQywrQ0FBTUE7Ozs7Ozs7Ozs7MEJBRVgsOERBQUN3QzswQkFDRyw0RUFBQ2hDLDhDQUFLQTtvQkFDRk8sYUFBYUE7Ozs7Ozs7Ozs7OzBCQUdyQiw4REFBQ1IsK0NBQU1BOzs7Ozs7O0FBSW5CLENBQUM7R0FsRHVCSTs7UUFFV0YsbUVBQVlBOzs7S0FGdkJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL2xheW91dC5qcz82NDczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2RzLWxheW91dC5tb2R1bGUuY3NzJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcidcbmltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vZmlyZWJhc2VDbGllbnRcIlxuaW1wb3J0IHsgcmVmLCBvblZhbHVlfSBmcm9tIFwiZmlyZWJhc2UvZGF0YWJhc2VcIlxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXInO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vdGFibGUnO1xuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCc7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2VDbGllbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoKSB7XG5cbiAgICBjb25zdCBbdXNlciwgbG9hZGluZywgZXJyb3JdID0gdXNlQXV0aFN0YXRlKGF1dGgpXG4gICAgY29uc3QgW3NhbXBsZXNVaWRzLCBzZXRTYW1wbGVzVWlkc10gPSB1c2VTdGF0ZShbJ1RCRCcsICdUQkQnXSlcbiAgICBjb25zdCBbc2FtcGxlc0RldGFpbHMsIHNldFNhbXBsZXNEZXRhaWxzXSA9IHVzZVN0YXRlKHt9KVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICBnZXRTYW1wbGVzVWlkcyh1c2VyLnVpZClcbiAgICAgICAgfVxuICAgIH0sIFt1c2VyXSlcblxuICAgIC8vIGZldGNoXG4gICAgZnVuY3Rpb24gZmV0Y2hEQihwYXRoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zclJlZiA9IHJlZihkYXRhYmFzZSwgcGF0aClcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBvblZhbHVlKGl0ZW1zclJlZiwgKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHNuYXBzaG90LnZhbCgpKTtcbiAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICBcbiAgICAvLyBzZXRzIGEgbGlzdCBvZiBwcm9kdWN0cyB1aWRzXG4gICAgZnVuY3Rpb24gZ2V0U2FtcGxlc1VpZHModXNlclVpZCkge1xuICAgICAgICBjb25zdCBkYXRhID0gZmV0Y2hEQigndXNlcnMvJyArIHVzZXJVaWQgKyAnL3Byb2R1Y3RzJylcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdWlkcyA9IE9iamVjdC5rZXlzKGRhdGEpXG4gICAgICAgICAgICAgICAgc2V0U2FtcGxlc1VpZHModWlkcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydkYXNoYm9hcmQnXX0+XG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlc1VpZHM9e3NhbXBsZXNVaWRzfSBcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8Lz5cbiAgICApXG4gICAgXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIkhlYWRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkYXRhYmFzZSIsInJlZiIsIm9uVmFsdWUiLCJGb290ZXIiLCJUYWJsZSIsInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJMYXlvdXQiLCJ1c2VyIiwibG9hZGluZyIsImVycm9yIiwic2FtcGxlc1VpZHMiLCJzZXRTYW1wbGVzVWlkcyIsInNhbXBsZXNEZXRhaWxzIiwic2V0U2FtcGxlc0RldGFpbHMiLCJnZXRTYW1wbGVzVWlkcyIsInVpZCIsImZldGNoREIiLCJwYXRoIiwiaXRlbXNyUmVmIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzbmFwc2hvdCIsInZhbCIsInVzZXJVaWQiLCJkYXRhIiwidGhlbiIsInVpZHMiLCJPYmplY3QiLCJrZXlzIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/dashboard/layout.js\n"));

/***/ })

});