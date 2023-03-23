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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/ds-layout.module.css */ \"./styles/ds-layout.module.css\");\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./components/dashboard/header.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer */ \"./components/footer.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n// vt\n\n\n\n\n// vt\n\n\nfunction Layout(param) {\n    let { children  } = param;\n    _s();\n    // vt\n    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.auth);\n    // vt\n    const [samplesData, setSamplesData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    // vt\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (user) {\n            getSamplesData(user.uid);\n        }\n    }, [\n        user\n    ]);\n    // vt\n    // fetch\n    function fetchDB(path) {\n        const itemsrRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.database, path);\n        return new Promise((resolve, reject)=>{\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.onValue)(itemsrRef, (snapshot)=>{\n                resolve(snapshot.val());\n            }, (error)=>{\n                reject(error);\n            });\n        });\n    }\n    // vt\n    // sets a list of objects with samples data\n    function getSamplesData(userUid) {\n        fetchDB(\"users/\" + userUid + \"/products\").then((data)=>{\n            const promises = Object.keys(data).map((uid)=>fetchDB(\"products/\" + uid).then((productData)=>({\n                        uid: uid,\n                        title: productData.title,\n                        type: productData.type,\n                        date: productData.date_created\n                    })).catch((error)=>{\n                    console.log(error);\n                }));\n            Promise.all(promises).then((samples)=>{\n                setSamplesData(samples);\n            });\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().dashboard),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().tbd)),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            class: \"btn btn-primary\",\n                            type: \"submit\",\n                            children: \"Share new specimen\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, this),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"z7veLmPdB9hFRgei1HKWCxYYKy4=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9sYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDekI7QUFDN0IsS0FBSztBQUM4QztBQUNKO0FBRUE7QUFDaEI7QUFDL0IsS0FBSztBQUNvRDtBQUNiO0FBRTdCLFNBQVNXLE9BQU8sS0FBVSxFQUFFO1FBQVosRUFBQ0MsU0FBUSxFQUFDLEdBQVY7O0lBRTNCLEtBQUs7SUFDTCxNQUFNLENBQUNDLE1BQU1DLFNBQVNDLE1BQU0sR0FBR04sdUVBQVlBLENBQUNDLGlEQUFJQTtJQUNoRCxLQUFLO0lBQ0wsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdkLCtDQUFRQSxDQUFDLEVBQUU7SUFFakQsS0FBSztJQUNMQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osSUFBSVMsTUFBTTtZQUNOSyxlQUFlTCxLQUFLTSxHQUFHO1FBQzNCLENBQUM7SUFDTCxHQUFHO1FBQUNOO0tBQUs7SUFFVCxLQUFLO0lBQ0wsUUFBUTtJQUNSLFNBQVNPLFFBQVFDLElBQUksRUFBRTtRQUNuQixNQUFNQyxZQUFZaEIsc0RBQUdBLENBQUNELHFEQUFRQSxFQUFFZ0I7UUFDaEMsT0FBTyxJQUFJRSxRQUFRLENBQUNDLFNBQVNDLFNBQVc7WUFDcENsQiwwREFBT0EsQ0FBQ2UsV0FBVyxDQUFDSSxXQUFhO2dCQUM3QkYsUUFBUUUsU0FBU0MsR0FBRztZQUN4QixHQUFHLENBQUNaLFFBQVU7Z0JBQ1ZVLE9BQU9WO1lBQ1g7UUFDSjtJQUNKO0lBRUEsS0FBSztJQUNMLDJDQUEyQztJQUMzQyxTQUFTRyxlQUFlVSxPQUFPLEVBQUU7UUFDN0JSLFFBQVEsV0FBV1EsVUFBVSxhQUN4QkMsSUFBSSxDQUFDLENBQUNDLE9BQVM7WUFDWixNQUFNQyxXQUFXQyxPQUFPQyxJQUFJLENBQUNILE1BQU1JLEdBQUcsQ0FBQ2YsQ0FBQUEsTUFDbkNDLFFBQVEsY0FBY0QsS0FDakJVLElBQUksQ0FBQyxDQUFDTSxjQUFpQjt3QkFDcEJoQixLQUFLQTt3QkFDTGlCLE9BQU9ELFlBQVlDLEtBQUs7d0JBQ3hCQyxNQUFNRixZQUFZRSxJQUFJO3dCQUN0QkMsTUFBTUgsWUFBWUksWUFBWTtvQkFDbEMsSUFDQ0MsS0FBSyxDQUFDLENBQUN6QixRQUFVO29CQUNkMEIsUUFBUUMsR0FBRyxDQUFDM0I7Z0JBQ2hCO1lBRVJRLFFBQVFvQixHQUFHLENBQUNaLFVBQVVGLElBQUksQ0FBQ2UsQ0FBQUEsVUFBVztnQkFDbEMzQixlQUFlMkI7WUFDbkI7UUFDSixHQUNDSixLQUFLLENBQUMsQ0FBQ3pCLFFBQVU7WUFDZDBCLFFBQVFDLEdBQUcsQ0FBQzNCO1FBQ2hCO0lBQ1I7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUM4QjtnQkFBSUMsV0FBVzlDLCtFQUFtQjswQkFDL0IsNEVBQUNDLCtDQUFNQTs7Ozs7Ozs7OzswQkFFWCw4REFBQzhDOztrQ0FDRyw4REFBQ0Y7d0JBQUlDLFdBQVcsR0FBaUIsT0FBZDlDLHlFQUFhO2tDQUM1Qiw0RUFBQ2dEOzRCQUFPQyxPQUFNOzRCQUFrQlosTUFBSztzQ0FBUzs7Ozs7Ozs7Ozs7b0JBRWpEekI7Ozs7Ozs7MEJBRUwsOERBQUNKLCtDQUFNQTs7Ozs7OztBQUduQixDQUFDO0dBbkV1Qkc7O1FBR1dGLG1FQUFZQTs7O0tBSHZCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Rhc2hib2FyZC9sYXlvdXQuanM/NjQ3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9kcy1sYXlvdXQubW9kdWxlLmNzcydcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInXG4vLyB2dFxuaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gXCIuLi8uLi9maXJlYmFzZUNsaWVudFwiXG5cbmltcG9ydCB7IHJlZiwgb25WYWx1ZX0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyJztcbi8vIHZ0XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJztcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi8uLi9maXJlYmFzZUNsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7Y2hpbGRyZW59KSB7XG5cbiAgICAvLyB2dFxuICAgIGNvbnN0IFt1c2VyLCBsb2FkaW5nLCBlcnJvcl0gPSB1c2VBdXRoU3RhdGUoYXV0aClcbiAgICAvLyB2dFxuICAgIGNvbnN0IFtzYW1wbGVzRGF0YSwgc2V0U2FtcGxlc0RhdGFdID0gdXNlU3RhdGUoW10pXG4gICAgXG4gICAgLy8gdnRcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgZ2V0U2FtcGxlc0RhdGEodXNlci51aWQpO1xuICAgICAgICB9XG4gICAgfSwgW3VzZXJdKTtcbiAgICBcbiAgICAvLyB2dFxuICAgIC8vIGZldGNoXG4gICAgZnVuY3Rpb24gZmV0Y2hEQihwYXRoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zclJlZiA9IHJlZihkYXRhYmFzZSwgcGF0aClcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIG9uVmFsdWUoaXRlbXNyUmVmLCAoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHNuYXBzaG90LnZhbCgpKTtcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICAvLyB2dFxuICAgIC8vIHNldHMgYSBsaXN0IG9mIG9iamVjdHMgd2l0aCBzYW1wbGVzIGRhdGFcbiAgICBmdW5jdGlvbiBnZXRTYW1wbGVzRGF0YSh1c2VyVWlkKSB7XG4gICAgICAgIGZldGNoREIoJ3VzZXJzLycgKyB1c2VyVWlkICsgJy9wcm9kdWN0cycpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKHVpZCA9PlxuICAgICAgICAgICAgICAgICAgICBmZXRjaERCKCdwcm9kdWN0cy8nICsgdWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHByb2R1Y3REYXRhKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogdWlkLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcHJvZHVjdERhdGEudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogcHJvZHVjdERhdGEudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBwcm9kdWN0RGF0YS5kYXRlX2NyZWF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oc2FtcGxlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNhbXBsZXNEYXRhKHNhbXBsZXMpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydkYXNoYm9hcmQnXX0+XG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzWyd0YmQnXX1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5TaGFyZSBuZXcgc3BlY2ltZW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwiSGVhZGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRhdGFiYXNlIiwicmVmIiwib25WYWx1ZSIsIkZvb3RlciIsInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJzYW1wbGVzRGF0YSIsInNldFNhbXBsZXNEYXRhIiwiZ2V0U2FtcGxlc0RhdGEiLCJ1aWQiLCJmZXRjaERCIiwicGF0aCIsIml0ZW1zclJlZiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic25hcHNob3QiLCJ2YWwiLCJ1c2VyVWlkIiwidGhlbiIsImRhdGEiLCJwcm9taXNlcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJwcm9kdWN0RGF0YSIsInRpdGxlIiwidHlwZSIsImRhdGUiLCJkYXRlX2NyZWF0ZWQiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJhbGwiLCJzYW1wbGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImJ1dHRvbiIsImNsYXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dashboard/layout.js\n"));

/***/ })

});