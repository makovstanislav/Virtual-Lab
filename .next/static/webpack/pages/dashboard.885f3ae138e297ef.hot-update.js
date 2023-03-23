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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_dashboard_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dashboard/layout */ \"./components/dashboard/layout.js\");\n/* harmony import */ var _components_dashboard_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dashboard/table */ \"./components/dashboard/table.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/ds-layout.module.css */ \"./styles/ds-layout.module.css\");\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_firebaseClient__WEBPACK_IMPORTED_MODULE_6__.auth);\n    const [samplesData, setSamplesData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (user) {\n            getSamplesData(user.uid);\n        }\n    }, [\n        user\n    ]);\n    // fetch\n    function fetchDB(path) {\n        const itemsrRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_6__.database, path);\n        return new Promise((resolve, reject)=>{\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.onValue)(itemsrRef, (snapshot)=>{\n                resolve(snapshot.val());\n            }, (error)=>{\n                reject(error);\n            });\n        });\n    }\n    // sets a list of objects with samples data\n    function getSamplesData(userUid) {\n        fetchDB(\"users/\" + userUid + \"/products\").then((data)=>{\n            const promises = Object.keys(data).map((uid)=>fetchDB(\"products/\" + uid).then((productData)=>({\n                        uid: uid,\n                        title: productData.title,\n                        type: productData.type,\n                        date: productData.date_created\n                    })).catch((error)=>{\n                    console.log(error);\n                }));\n            Promise.all(promises).then((samples)=>{\n                setSamplesData(samples);\n            });\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().tbd)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/dashboard.js\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            class: \"btn btn-primary\",\n                            type: \"submit\",\n                            children: \"Share new specimen\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/dashboard.js\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/dashboard.js\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    samplesData: samplesData\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/dashboard.js\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/dashboard.js\",\n            lineNumber: 61,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/dashboard.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this);\n}\n_s(Dashboard, \"z7veLmPdB9hFRgei1HKWCxYYKy4=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDTztBQUNSO0FBQ0g7QUFDSTtBQUNLO0FBQ047QUFHbkMsU0FBU1csWUFBWTs7SUFFaEMsTUFBTSxDQUFDQyxNQUFNQyxTQUFTQyxNQUFNLEdBQUdOLHVFQUFZQSxDQUFDQyxpREFBSUE7SUFDaEQsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdiLCtDQUFRQSxDQUFDLEVBQUU7SUFFakRDLGdEQUFTQSxDQUFDLElBQU07UUFDWixJQUFJUSxNQUFNO1lBQ05LLGVBQWVMLEtBQUtNLEdBQUc7UUFDM0IsQ0FBQztJQUNMLEdBQUc7UUFBQ047S0FBSztJQUVULFFBQVE7SUFDUixTQUFTTyxRQUFRQyxJQUFJLEVBQUU7UUFDbkIsTUFBTUMsWUFBWWhCLHNEQUFHQSxDQUFDSyxxREFBUUEsRUFBRVU7UUFDaEMsT0FBTyxJQUFJRSxRQUFRLENBQUNDLFNBQVNDLFNBQVc7WUFDcENsQiwwREFBT0EsQ0FBQ2UsV0FBVyxDQUFDSSxXQUFhO2dCQUM3QkYsUUFBUUUsU0FBU0MsR0FBRztZQUN4QixHQUFHLENBQUNaLFFBQVU7Z0JBQ1ZVLE9BQU9WO1lBQ1g7UUFDSjtJQUNKO0lBRUEsMkNBQTJDO0lBQzNDLFNBQVNHLGVBQWVVLE9BQU8sRUFBRTtRQUM3QlIsUUFBUSxXQUFXUSxVQUFVLGFBQ3hCQyxJQUFJLENBQUMsQ0FBQ0MsT0FBUztZQUNaLE1BQU1DLFdBQVdDLE9BQU9DLElBQUksQ0FBQ0gsTUFBTUksR0FBRyxDQUFDZixDQUFBQSxNQUNuQ0MsUUFBUSxjQUFjRCxLQUNqQlUsSUFBSSxDQUFDLENBQUNNLGNBQWlCO3dCQUNwQmhCLEtBQUtBO3dCQUNMaUIsT0FBT0QsWUFBWUMsS0FBSzt3QkFDeEJDLE1BQU1GLFlBQVlFLElBQUk7d0JBQ3RCQyxNQUFNSCxZQUFZSSxZQUFZO29CQUNsQyxJQUNDQyxLQUFLLENBQUMsQ0FBQ3pCLFFBQVU7b0JBQ2QwQixRQUFRQyxHQUFHLENBQUMzQjtnQkFDaEI7WUFFUlEsUUFBUW9CLEdBQUcsQ0FBQ1osVUFBVUYsSUFBSSxDQUFDZSxDQUFBQSxVQUFXO2dCQUNsQzNCLGVBQWUyQjtZQUNuQjtRQUNKLEdBQ0NKLEtBQUssQ0FBQyxDQUFDekIsUUFBVTtZQUNkMEIsUUFBUUMsR0FBRyxDQUFDM0I7UUFDaEI7SUFDUjtJQUdBLHFCQUNJLDhEQUFDOEI7a0JBQ0csNEVBQUM1QyxvRUFBTUE7OzhCQUNILDhEQUFDNEM7b0JBQUlDLFdBQVcsR0FBaUIsT0FBZHRDLHlFQUFhOztzQ0FDNUIsOERBQUN1Qzs0QkFBRUMsTUFBSzs7Ozs7O3NDQUNSLDhEQUFDQzs0QkFBT0MsT0FBTTs0QkFBa0JiLE1BQUs7c0NBQVU7Ozs7Ozs7Ozs7Ozs4QkFFbkQsOERBQUNuQyxtRUFBY0E7b0JBQ1hjLGFBQWFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtqQyxDQUFDO0dBOUR1Qko7O1FBRVdILG1FQUFZQTs7O0tBRnZCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kYXNoYm9hcmQuanM/MGU1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2Rhc2hib2FyZC9sYXlvdXRcIlxuaW1wb3J0IFRhYmxlQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL3RhYmxlJ1xuaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlZiwgb25WYWx1ZX0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2RzLWxheW91dC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCdcbmltcG9ydCB7IGF1dGgsIGRhdGFiYXNlIH0gZnJvbSBcIi4uL2ZpcmViYXNlQ2xpZW50XCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG5cbiAgICBjb25zdCBbdXNlciwgbG9hZGluZywgZXJyb3JdID0gdXNlQXV0aFN0YXRlKGF1dGgpXG4gICAgY29uc3QgW3NhbXBsZXNEYXRhLCBzZXRTYW1wbGVzRGF0YV0gPSB1c2VTdGF0ZShbXSlcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgZ2V0U2FtcGxlc0RhdGEodXNlci51aWQpXG4gICAgICAgIH1cbiAgICB9LCBbdXNlcl0pO1xuICAgIFxuICAgIC8vIGZldGNoXG4gICAgZnVuY3Rpb24gZmV0Y2hEQihwYXRoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zclJlZiA9IHJlZihkYXRhYmFzZSwgcGF0aClcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIG9uVmFsdWUoaXRlbXNyUmVmLCAoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHNuYXBzaG90LnZhbCgpKTtcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIHNldHMgYSBsaXN0IG9mIG9iamVjdHMgd2l0aCBzYW1wbGVzIGRhdGFcbiAgICBmdW5jdGlvbiBnZXRTYW1wbGVzRGF0YSh1c2VyVWlkKSB7XG4gICAgICAgIGZldGNoREIoJ3VzZXJzLycgKyB1c2VyVWlkICsgJy9wcm9kdWN0cycpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKHVpZCA9PlxuICAgICAgICAgICAgICAgICAgICBmZXRjaERCKCdwcm9kdWN0cy8nICsgdWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHByb2R1Y3REYXRhKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogdWlkLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcHJvZHVjdERhdGEudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogcHJvZHVjdERhdGEudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBwcm9kdWN0RGF0YS5kYXRlX2NyZWF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oc2FtcGxlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNhbXBsZXNEYXRhKHNhbXBsZXMpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlc1sndGJkJ119YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiID5TaGFyZSBuZXcgc3BlY2ltZW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8VGFibGVDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlc0RhdGE9e3NhbXBsZXNEYXRhfSBcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiTGF5b3V0IiwiVGFibGVDb21wb25lbnQiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicmVmIiwib25WYWx1ZSIsInN0eWxlcyIsInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJkYXRhYmFzZSIsIkRhc2hib2FyZCIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJzYW1wbGVzRGF0YSIsInNldFNhbXBsZXNEYXRhIiwiZ2V0U2FtcGxlc0RhdGEiLCJ1aWQiLCJmZXRjaERCIiwicGF0aCIsIml0ZW1zclJlZiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic25hcHNob3QiLCJ2YWwiLCJ1c2VyVWlkIiwidGhlbiIsImRhdGEiLCJwcm9taXNlcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJwcm9kdWN0RGF0YSIsInRpdGxlIiwidHlwZSIsImRhdGUiLCJkYXRlX2NyZWF0ZWQiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJhbGwiLCJzYW1wbGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJidXR0b24iLCJjbGFzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n"));

/***/ })

});