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

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_dashboard_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dashboard/layout */ \"./components/dashboard/layout.js\");\n/* harmony import */ var _components_dashboard_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dashboard/table */ \"./components/dashboard/table.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/ds-layout.module.css */ \"./styles/ds-layout.module.css\");\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    const [user, loading, error] = useAuthState(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.auth);\n    const [samplesData, setSamplesData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (user) {\n            getSamplesData(user.uid);\n        }\n    }, [\n        user\n    ]);\n    // fetch\n    function fetchDB(path) {\n        const itemsrRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.database, path);\n        return new Promise((resolve, reject)=>{\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.onValue)(itemsrRef, (snapshot)=>{\n                resolve(snapshot.val());\n            }, (error)=>{\n                reject(error);\n            });\n        });\n    }\n    // sets a list of objects with samples data\n    function getSamplesData(userUid) {\n        fetchDB(\"users/\" + userUid + \"/products\").then((data)=>{\n            const promises = Object.keys(data).map((uid)=>fetchDB(\"products/\" + uid).then((productData)=>({\n                        uid: uid,\n                        title: productData.title,\n                        type: productData.type,\n                        date: productData.date_created\n                    })).catch((error)=>{\n                    console.log(error);\n                }));\n            Promise.all(promises).then((samples)=>{\n                setSamplesData(samples);\n            });\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_6___default().tbd)),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        class: \"btn btn-primary\",\n                        type: \"submit\",\n                        children: \"Share new specimen\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/dashboard.js\",\n                        lineNumber: 61,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/dashboard.js\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    samplesData: samplesData\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/dashboard.js\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/dashboard.js\",\n            lineNumber: 59,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/dashboard.js\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, this);\n}\n_s(Dashboard, \"z7veLmPdB9hFRgei1HKWCxYYKy4=\", true);\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNPO0FBQ1I7QUFDQTtBQUNIO0FBQ0k7QUFFcEMsU0FBU1UsWUFBWTs7SUFFL0IsTUFBTSxDQUFDQyxNQUFNQyxTQUFTQyxNQUFNLEdBQUdDLGFBQWFULGlEQUFJQTtJQUNoRCxNQUFNLENBQUNVLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUMsRUFBRTtJQUVqREMsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLElBQUlPLE1BQU07WUFDTk0sZUFBZU4sS0FBS08sR0FBRztRQUMzQixDQUFDO0lBQ0wsR0FBRztRQUFDUDtLQUFLO0lBRVQsUUFBUTtJQUNSLFNBQVNRLFFBQVFDLElBQUksRUFBRTtRQUNuQixNQUFNQyxZQUFZZCxzREFBR0EsQ0FBQ0QscURBQVFBLEVBQUVjO1FBQ2hDLE9BQU8sSUFBSUUsUUFBUSxDQUFDQyxTQUFTQyxTQUFXO1lBQ3BDaEIsMERBQU9BLENBQUNhLFdBQVcsQ0FBQ0ksV0FBYTtnQkFDN0JGLFFBQVFFLFNBQVNDLEdBQUc7WUFDeEIsR0FBRyxDQUFDYixRQUFVO2dCQUNWVyxPQUFPWDtZQUNYO1FBQ0o7SUFDSjtJQUVBLDJDQUEyQztJQUMzQyxTQUFTSSxlQUFlVSxPQUFPLEVBQUU7UUFDN0JSLFFBQVEsV0FBV1EsVUFBVSxhQUN4QkMsSUFBSSxDQUFDLENBQUNDLE9BQVM7WUFDWixNQUFNQyxXQUFXQyxPQUFPQyxJQUFJLENBQUNILE1BQU1JLEdBQUcsQ0FBQ2YsQ0FBQUEsTUFDbkNDLFFBQVEsY0FBY0QsS0FDakJVLElBQUksQ0FBQyxDQUFDTSxjQUFpQjt3QkFDcEJoQixLQUFLQTt3QkFDTGlCLE9BQU9ELFlBQVlDLEtBQUs7d0JBQ3hCQyxNQUFNRixZQUFZRSxJQUFJO3dCQUN0QkMsTUFBTUgsWUFBWUksWUFBWTtvQkFDbEMsSUFDQ0MsS0FBSyxDQUFDLENBQUMxQixRQUFVO29CQUNkMkIsUUFBUUMsR0FBRyxDQUFDNUI7Z0JBQ2hCO1lBRVJTLFFBQVFvQixHQUFHLENBQUNaLFVBQVVGLElBQUksQ0FBQ2UsQ0FBQUEsVUFBVztnQkFDbEMzQixlQUFlMkI7WUFDbkI7UUFDSixHQUNDSixLQUFLLENBQUMsQ0FBQzFCLFFBQVU7WUFDZDJCLFFBQVFDLEdBQUcsQ0FBQzVCO1FBQ2hCO0lBQ1I7SUFHRCxxQkFDSSw4REFBQytCO2tCQUNHLDRFQUFDNUMsb0VBQU1BOzs4QkFDSCw4REFBQzRDO29CQUFJQyxXQUFXLEdBQWlCLE9BQWRwQyx5RUFBYTs4QkFDNUIsNEVBQUNxQzt3QkFBT0MsT0FBTTt3QkFBa0JYLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7OzhCQUVsRCw4REFBQ25DLG1FQUFjQTtvQkFDWGMsYUFBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pDLENBQUM7R0E3RHVCTDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kYXNoYm9hcmQuanM/MGU1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2Rhc2hib2FyZC9sYXlvdXRcIlxuaW1wb3J0IFRhYmxlQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL3RhYmxlJ1xuaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGF1dGgsIGRhdGFiYXNlIH0gZnJvbSBcIi4uL2ZpcmViYXNlQ2xpZW50XCJcbmltcG9ydCB7IHJlZiwgb25WYWx1ZX0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2RzLWxheW91dC5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG5cbiAgICAgY29uc3QgW3VzZXIsIGxvYWRpbmcsIGVycm9yXSA9IHVzZUF1dGhTdGF0ZShhdXRoKVxuICAgICBjb25zdCBbc2FtcGxlc0RhdGEsIHNldFNhbXBsZXNEYXRhXSA9IHVzZVN0YXRlKFtdKVxuICAgICBcbiAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgZ2V0U2FtcGxlc0RhdGEodXNlci51aWQpO1xuICAgICAgICAgfVxuICAgICB9LCBbdXNlcl0pO1xuICAgICBcbiAgICAgLy8gZmV0Y2hcbiAgICAgZnVuY3Rpb24gZmV0Y2hEQihwYXRoKSB7XG4gICAgICAgICBjb25zdCBpdGVtc3JSZWYgPSByZWYoZGF0YWJhc2UsIHBhdGgpXG4gICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgIG9uVmFsdWUoaXRlbXNyUmVmLCAoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgICAgICAgcmVzb2x2ZShzbmFwc2hvdC52YWwoKSk7XG4gICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgfSlcbiAgICAgICAgIH0pXG4gICAgIH1cbiAgICBcbiAgICAgLy8gc2V0cyBhIGxpc3Qgb2Ygb2JqZWN0cyB3aXRoIHNhbXBsZXMgZGF0YVxuICAgICBmdW5jdGlvbiBnZXRTYW1wbGVzRGF0YSh1c2VyVWlkKSB7XG4gICAgICAgICBmZXRjaERCKCd1c2Vycy8nICsgdXNlclVpZCArICcvcHJvZHVjdHMnKVxuICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKHVpZCA9PlxuICAgICAgICAgICAgICAgICAgICAgZmV0Y2hEQigncHJvZHVjdHMvJyArIHVpZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocHJvZHVjdERhdGEpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogdWlkLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHByb2R1Y3REYXRhLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBwcm9kdWN0RGF0YS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBwcm9kdWN0RGF0YS5kYXRlX2NyZWF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oc2FtcGxlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICBzZXRTYW1wbGVzRGF0YShzYW1wbGVzKVxuICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICB9KVxuICAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXNbJ3RiZCddfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlNoYXJlIG5ldyBzcGVjaW1lbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxUYWJsZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICBzYW1wbGVzRGF0YT17c2FtcGxlc0RhdGF9IFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJUYWJsZUNvbXBvbmVudCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhdXRoIiwiZGF0YWJhc2UiLCJyZWYiLCJvblZhbHVlIiwic3R5bGVzIiwiRGFzaGJvYXJkIiwidXNlciIsImxvYWRpbmciLCJlcnJvciIsInVzZUF1dGhTdGF0ZSIsInNhbXBsZXNEYXRhIiwic2V0U2FtcGxlc0RhdGEiLCJnZXRTYW1wbGVzRGF0YSIsInVpZCIsImZldGNoREIiLCJwYXRoIiwiaXRlbXNyUmVmIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzbmFwc2hvdCIsInZhbCIsInVzZXJVaWQiLCJ0aGVuIiwiZGF0YSIsInByb21pc2VzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInByb2R1Y3REYXRhIiwidGl0bGUiLCJ0eXBlIiwiZGF0ZSIsImRhdGVfY3JlYXRlZCIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImFsbCIsInNhbXBsZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJjbGFzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n"));

/***/ })

});