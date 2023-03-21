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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/ds-layout.module.css */ \"./styles/ds-layout.module.css\");\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./components/dashboard/header.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer */ \"./components/footer.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table */ \"./components/dashboard/table.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Layout() {\n    _s();\n    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.auth);\n    const [samplesUids, setSamplesUids] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        \"TBD\",\n        \"TBD\"\n    ]);\n    const [samplesDetails, setSamplesDetails] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            uid: \"TBD\",\n            title: \"TDB\",\n            type: \"TBD\",\n            date: \"TBD\"\n        }\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (user) {\n            getSamplesUids(user.uid);\n        }\n    }, [\n        user\n    ]);\n    // fetch\n    function fetchDB(path) {\n        const itemsrRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.database, path);\n        return new Promise((resolve, reject)=>{\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.onValue)(itemsrRef, (snapshot)=>{\n                resolve(snapshot.val());\n            }, (error)=>{\n                reject(error);\n            });\n        });\n    }\n    // sets a list of products uids\n    function getSamplesUids(userUid) {\n        const data = fetchDB(\"users/\" + userUid + \"/products\").then((data)=>{\n            const uids = Object.keys(data);\n            setSamplesUids(uids);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }\n    // sets a list of objects with samples data\n    function getSamplesData() {\n        const productsArr = [];\n        samplesUids.forEach((uid)=>{\n            const itemsrRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.database, \"products/\" + uid);\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.onValue)(itemsrRef, (snapshot)=>{\n                const product = snapshot.val();\n                console.log(product);\n                const attributes = Object.keys(product);\n                attributes.forEach((key)=>{\n                    productsArr.push([\n                        product[key].uid,\n                        product[key].title,\n                        product[key].type\n                    ]);\n                });\n            });\n        });\n        setSamplesDetails(productsArr);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().dashboard),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    samplesDetails: samplesDetails\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                    lineNumber: 70,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"G8cjr5CHVnnS/bxhdK/T+IlZczw=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9sYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ3pCO0FBQ3NCO0FBQ0o7QUFDQTtBQUNoQjtBQUNIO0FBQzZCO0FBQ2I7QUFFN0IsU0FBU1ksU0FBUzs7SUFFN0IsTUFBTSxDQUFDQyxNQUFNQyxTQUFTQyxNQUFNLEdBQUdMLHVFQUFZQSxDQUFDQyxpREFBSUE7SUFDaEQsTUFBTSxDQUFDSyxhQUFhQyxlQUFlLEdBQUdkLCtDQUFRQSxDQUFDO1FBQUM7UUFBTztLQUFNO0lBQzdELE1BQU0sQ0FBQ2UsZ0JBQWdCQyxrQkFBa0IsR0FBR2hCLCtDQUFRQSxDQUFDO1FBQUM7WUFBQ2lCLEtBQUs7WUFBT0MsT0FBTztZQUFPQyxNQUFNO1lBQU9DLE1BQU07UUFBSztLQUFFO0lBRTNHbkIsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLElBQUlTLE1BQU07WUFDTlcsZUFBZVgsS0FBS08sR0FBRztRQUMzQixDQUFDO0lBQ0wsR0FBRztRQUFDUDtLQUFLO0lBRVQsUUFBUTtJQUNSLFNBQVNZLFFBQVFDLElBQUksRUFBRTtRQUNuQixNQUFNQyxZQUFZckIsc0RBQUdBLENBQUNELHFEQUFRQSxFQUFFcUI7UUFDaEMsT0FBTyxJQUFJRSxRQUFRLENBQUNDLFNBQVNDLFNBQVc7WUFDdEN2QiwwREFBT0EsQ0FBQ29CLFdBQVcsQ0FBQ0ksV0FBYTtnQkFDL0JGLFFBQVFFLFNBQVNDLEdBQUc7WUFDdEIsR0FBRyxDQUFDakIsUUFBVTtnQkFDWmUsT0FBT2Y7WUFDVDtRQUNGO0lBQ0Y7SUFFRiwrQkFBK0I7SUFDL0IsU0FBU1MsZUFBZVMsT0FBTyxFQUFFO1FBQzdCLE1BQU1DLE9BQU9ULFFBQVEsV0FBV1EsVUFBVSxhQUNyQ0UsSUFBSSxDQUFDLENBQUNELE9BQVM7WUFDWixNQUFNRSxPQUFPQyxPQUFPQyxJQUFJLENBQUNKO1lBQ3pCakIsZUFBZW1CO1FBQ25CLEdBQ0NHLEtBQUssQ0FBQyxDQUFDeEIsUUFBVTtZQUNkeUIsUUFBUUMsR0FBRyxDQUFDMUI7UUFDaEI7SUFDUjtJQUVBLDJDQUEyQztJQUMzQyxTQUFTMkIsaUJBQWlCO1FBQ3RCLE1BQU1DLGNBQWMsRUFBRTtRQUN0QjNCLFlBQVk0QixPQUFPLENBQUN4QixDQUFBQSxNQUFPO1lBQ3ZCLE1BQU1PLFlBQVlyQixzREFBR0EsQ0FBQ0QscURBQVFBLEVBQUUsY0FBY2U7WUFDOUNiLDBEQUFPQSxDQUFDb0IsV0FBVyxDQUFDSSxXQUFhO2dCQUM3QixNQUFNYyxVQUFVZCxTQUFTQyxHQUFHO2dCQUM1QlEsUUFBUUMsR0FBRyxDQUFDSTtnQkFDWixNQUFNQyxhQUFhVCxPQUFPQyxJQUFJLENBQUNPO2dCQUMvQkMsV0FBV0YsT0FBTyxDQUFDRyxDQUFBQSxNQUFPO29CQUN0QkosWUFBWUssSUFBSSxDQUFDO3dCQUFDSCxPQUFPLENBQUNFLElBQUksQ0FBQzNCLEdBQUc7d0JBQUV5QixPQUFPLENBQUNFLElBQUksQ0FBQzFCLEtBQUs7d0JBQUV3QixPQUFPLENBQUNFLElBQUksQ0FBQ3pCLElBQUk7cUJBQUM7Z0JBQzlFO1lBQ0o7UUFDSjtRQUNBSCxrQkFBa0J3QjtJQUN0QjtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ007Z0JBQUlDLFdBQVdsRCwrRUFBbUI7MEJBQy9CLDRFQUFDQywrQ0FBTUE7Ozs7Ozs7Ozs7MEJBRVgsOERBQUNrRDswQkFDRyw0RUFBQzFDLDhDQUFLQTtvQkFDRlMsZ0JBQWdCQTs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDViwrQ0FBTUE7Ozs7Ozs7QUFJbkIsQ0FBQztHQW5FdUJJOztRQUVXRixtRUFBWUE7OztLQUZ2QkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvbGF5b3V0LmpzPzY0NzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvZHMtbGF5b3V0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xuaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gXCIuLi8uLi9maXJlYmFzZUNsaWVudFwiXG5pbXBvcnQgeyByZWYsIG9uVmFsdWV9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlcic7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi90YWJsZSc7XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJztcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi8uLi9maXJlYmFzZUNsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCgpIHtcblxuICAgIGNvbnN0IFt1c2VyLCBsb2FkaW5nLCBlcnJvcl0gPSB1c2VBdXRoU3RhdGUoYXV0aClcbiAgICBjb25zdCBbc2FtcGxlc1VpZHMsIHNldFNhbXBsZXNVaWRzXSA9IHVzZVN0YXRlKFsnVEJEJywgJ1RCRCddKVxuICAgIGNvbnN0IFtzYW1wbGVzRGV0YWlscywgc2V0U2FtcGxlc0RldGFpbHNdID0gdXNlU3RhdGUoW3t1aWQ6IFwiVEJEXCIsIHRpdGxlOiBcIlREQlwiLCB0eXBlOiBcIlRCRFwiLCBkYXRlOiBcIlRCRFwifV0pXG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIGdldFNhbXBsZXNVaWRzKHVzZXIudWlkKVxuICAgICAgICB9XG4gICAgfSwgW3VzZXJdKVxuXG4gICAgLy8gZmV0Y2hcbiAgICBmdW5jdGlvbiBmZXRjaERCKHBhdGgpIHtcbiAgICAgICAgY29uc3QgaXRlbXNyUmVmID0gcmVmKGRhdGFiYXNlLCBwYXRoKVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIG9uVmFsdWUoaXRlbXNyUmVmLCAoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoc25hcHNob3QudmFsKCkpO1xuICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIFxuICAgIC8vIHNldHMgYSBsaXN0IG9mIHByb2R1Y3RzIHVpZHNcbiAgICBmdW5jdGlvbiBnZXRTYW1wbGVzVWlkcyh1c2VyVWlkKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBmZXRjaERCKCd1c2Vycy8nICsgdXNlclVpZCArICcvcHJvZHVjdHMnKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1aWRzID0gT2JqZWN0LmtleXMoZGF0YSlcbiAgICAgICAgICAgICAgICBzZXRTYW1wbGVzVWlkcyh1aWRzKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gc2V0cyBhIGxpc3Qgb2Ygb2JqZWN0cyB3aXRoIHNhbXBsZXMgZGF0YVxuICAgIGZ1bmN0aW9uIGdldFNhbXBsZXNEYXRhKCkge1xuICAgICAgICBjb25zdCBwcm9kdWN0c0FyciA9IFtdXG4gICAgICAgIHNhbXBsZXNVaWRzLmZvckVhY2godWlkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zclJlZiA9IHJlZihkYXRhYmFzZSwgJ3Byb2R1Y3RzLycgKyB1aWQpXG4gICAgICAgICAgICBvblZhbHVlKGl0ZW1zclJlZiwgKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IHNuYXBzaG90LnZhbCgpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdClcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmtleXMocHJvZHVjdClcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHNBcnIucHVzaChbcHJvZHVjdFtrZXldLnVpZCwgcHJvZHVjdFtrZXldLnRpdGxlLCBwcm9kdWN0W2tleV0udHlwZV0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pICBcbiAgICAgICAgfSlcbiAgICAgICAgc2V0U2FtcGxlc0RldGFpbHMocHJvZHVjdHNBcnIpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2Rhc2hib2FyZCddfT5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICAgICAgICBzYW1wbGVzRGV0YWlscz17c2FtcGxlc0RldGFpbHN9IFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvPlxuICAgIClcbiAgICBcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwiSGVhZGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRhdGFiYXNlIiwicmVmIiwib25WYWx1ZSIsIkZvb3RlciIsIlRhYmxlIiwidXNlQXV0aFN0YXRlIiwiYXV0aCIsIkxheW91dCIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJzYW1wbGVzVWlkcyIsInNldFNhbXBsZXNVaWRzIiwic2FtcGxlc0RldGFpbHMiLCJzZXRTYW1wbGVzRGV0YWlscyIsInVpZCIsInRpdGxlIiwidHlwZSIsImRhdGUiLCJnZXRTYW1wbGVzVWlkcyIsImZldGNoREIiLCJwYXRoIiwiaXRlbXNyUmVmIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzbmFwc2hvdCIsInZhbCIsInVzZXJVaWQiLCJkYXRhIiwidGhlbiIsInVpZHMiLCJPYmplY3QiLCJrZXlzIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZ2V0U2FtcGxlc0RhdGEiLCJwcm9kdWN0c0FyciIsImZvckVhY2giLCJwcm9kdWN0IiwiYXR0cmlidXRlcyIsImtleSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dashboard/layout.js\n"));

/***/ })

});