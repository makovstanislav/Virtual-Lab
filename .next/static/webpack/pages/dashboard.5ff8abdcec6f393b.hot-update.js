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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/ds-layout.module.css */ \"./styles/ds-layout.module.css\");\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./components/dashboard/header.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer */ \"./components/footer.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table */ \"./components/dashboard/table.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Layout() {\n    _s();\n    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.auth);\n    const [samplesUids, setSamplesUids] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        \"TBD\",\n        \"TBD\"\n    ]);\n    const [samplesData, setSamplesData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            uid: \"TBD\",\n            title: \"TDB\",\n            type: \"TBD\",\n            date: \"TBD\"\n        }\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (user) {\n            getSamplesUids(user.uid);\n        }\n    }, []);\n    // fetch\n    function fetchDB(path) {\n        const itemsrRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.database, path);\n        return new Promise((resolve, reject)=>{\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.onValue)(itemsrRef, (snapshot)=>{\n                resolve(snapshot.val());\n            }, (error)=>{\n                reject(error);\n            });\n        });\n    }\n    // sets a list of products uids\n    function getSamplesUids(userUid) {\n        const data = fetchDB(\"users/\" + userUid + \"/products\").then((data)=>{\n            // array\n            const uids = Object.keys(data);\n            setSamplesUids(uids);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }\n    // sets a list of objects with samples data\n    function getSamplesData(samplesUids) {\n        const samples = [];\n        samplesUids.forEach((uid)=>{\n            fetchDB(\"products/\" + uid)// \"{uid: ..., title: ..., type: ...}\"\n            .then((data)=>{\n                const mappedSample = {\n                    uid: uid,\n                    title: data.title,\n                    type: data.type,\n                    date: data.date_created\n                };\n                samples.push(mappedSample);\n            }).catch((error)=>{\n                console.log(error);\n            });\n        });\n        setSamplesData(samples);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().dashboard),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                    lineNumber: 73,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    samplesData: samplesData\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                    lineNumber: 76,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/layout.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"BKxNGS/KOV1DBDWu3MiecKjeupw=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9sYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ3pCO0FBQ3NCO0FBQ0o7QUFDQTtBQUNoQjtBQUNIO0FBQzZCO0FBQ2I7QUFFN0IsU0FBU1ksU0FBUzs7SUFFN0IsTUFBTSxDQUFDQyxNQUFNQyxTQUFTQyxNQUFNLEdBQUdMLHVFQUFZQSxDQUFDQyxpREFBSUE7SUFDaEQsTUFBTSxDQUFDSyxhQUFhQyxlQUFlLEdBQUdkLCtDQUFRQSxDQUFDO1FBQUM7UUFBTztLQUFNO0lBQzdELE1BQU0sQ0FBQ2UsYUFBYUMsZUFBZSxHQUFHaEIsK0NBQVFBLENBQUM7UUFBQztZQUFDaUIsS0FBSztZQUFPQyxPQUFPO1lBQU9DLE1BQU07WUFBT0MsTUFBTTtRQUFLO0tBQUU7SUFFckduQixnREFBU0EsQ0FBQyxJQUFNO1FBQ1osSUFBSVMsTUFBTTtZQUNOVyxlQUFlWCxLQUFLTyxHQUFHO1FBQzNCLENBQUM7SUFDTCxHQUFHLEVBQUU7SUFFTCxRQUFRO0lBQ1IsU0FBU0ssUUFBUUMsSUFBSSxFQUFFO1FBQ25CLE1BQU1DLFlBQVlyQixzREFBR0EsQ0FBQ0QscURBQVFBLEVBQUVxQjtRQUNoQyxPQUFPLElBQUlFLFFBQVEsQ0FBQ0MsU0FBU0MsU0FBVztZQUN0Q3ZCLDBEQUFPQSxDQUFDb0IsV0FBVyxDQUFDSSxXQUFhO2dCQUMvQkYsUUFBUUUsU0FBU0MsR0FBRztZQUN0QixHQUFHLENBQUNqQixRQUFVO2dCQUNaZSxPQUFPZjtZQUNUO1FBQ0Y7SUFDRjtJQUVGLCtCQUErQjtJQUMvQixTQUFTUyxlQUFlUyxPQUFPLEVBQUU7UUFDN0IsTUFBTUMsT0FBT1QsUUFBUSxXQUFXUSxVQUFVLGFBQ3JDRSxJQUFJLENBQUMsQ0FBQ0QsT0FBUztZQUNaLFFBQVE7WUFDUixNQUFNRSxPQUFPQyxPQUFPQyxJQUFJLENBQUNKO1lBQ3pCakIsZUFBZW1CO1FBQ25CLEdBQ0NHLEtBQUssQ0FBQyxDQUFDeEIsUUFBVTtZQUNkeUIsUUFBUUMsR0FBRyxDQUFDMUI7UUFDaEI7SUFDUjtJQUVBLDJDQUEyQztJQUMzQyxTQUFTMkIsZUFBZTFCLFdBQVcsRUFBRTtRQUNqQyxNQUFNMkIsVUFBVSxFQUFFO1FBQ2xCM0IsWUFBWTRCLE9BQU8sQ0FBQ3hCLENBQUFBLE1BQU87WUFDdkJLLFFBQVEsY0FBY0wsSUFDbEIsc0NBQXNDO2FBQ3JDZSxJQUFJLENBQUMsQ0FBQ0QsT0FBUztnQkFDWixNQUFNVyxlQUFlO29CQUNqQnpCLEtBQUtBO29CQUNMQyxPQUFPYSxLQUFLYixLQUFLO29CQUNqQkMsTUFBTVksS0FBS1osSUFBSTtvQkFDZkMsTUFBTVcsS0FBS1ksWUFBWTtnQkFDM0I7Z0JBQ0FILFFBQVFJLElBQUksQ0FBQ0Y7WUFDakIsR0FDQ04sS0FBSyxDQUFDLENBQUN4QixRQUFVO2dCQUNkeUIsUUFBUUMsR0FBRyxDQUFDMUI7WUFDaEI7UUFDSjtRQUNKSSxlQUFld0I7SUFDbkI7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNLO2dCQUFJQyxXQUFXakQsK0VBQW1COzBCQUMvQiw0RUFBQ0MsK0NBQU1BOzs7Ozs7Ozs7OzBCQUVYLDhEQUFDaUQ7MEJBQ0csNEVBQUN6Qyw4Q0FBS0E7b0JBQ0ZTLGFBQWFBOzs7Ozs7Ozs7OzswQkFHckIsOERBQUNWLCtDQUFNQTs7Ozs7OztBQUluQixDQUFDO0dBekV1Qkk7O1FBRVdGLG1FQUFZQTs7O0tBRnZCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Rhc2hib2FyZC9sYXlvdXQuanM/NjQ3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9kcy1sYXlvdXQubW9kdWxlLmNzcydcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInXG5pbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGRhdGFiYXNlIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlQ2xpZW50XCJcbmltcG9ydCB7IHJlZiwgb25WYWx1ZX0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyJztcbmltcG9ydCBUYWJsZSBmcm9tICcuL3RhYmxlJztcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uLy4uL2ZpcmViYXNlQ2xpZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KCkge1xuXG4gICAgY29uc3QgW3VzZXIsIGxvYWRpbmcsIGVycm9yXSA9IHVzZUF1dGhTdGF0ZShhdXRoKVxuICAgIGNvbnN0IFtzYW1wbGVzVWlkcywgc2V0U2FtcGxlc1VpZHNdID0gdXNlU3RhdGUoWydUQkQnLCAnVEJEJ10pXG4gICAgY29uc3QgW3NhbXBsZXNEYXRhLCBzZXRTYW1wbGVzRGF0YV0gPSB1c2VTdGF0ZShbe3VpZDogXCJUQkRcIiwgdGl0bGU6IFwiVERCXCIsIHR5cGU6IFwiVEJEXCIsIGRhdGU6IFwiVEJEXCJ9XSlcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgZ2V0U2FtcGxlc1VpZHModXNlci51aWQpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIC8vIGZldGNoXG4gICAgZnVuY3Rpb24gZmV0Y2hEQihwYXRoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zclJlZiA9IHJlZihkYXRhYmFzZSwgcGF0aClcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBvblZhbHVlKGl0ZW1zclJlZiwgKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHNuYXBzaG90LnZhbCgpKTtcbiAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICBcbiAgICAvLyBzZXRzIGEgbGlzdCBvZiBwcm9kdWN0cyB1aWRzXG4gICAgZnVuY3Rpb24gZ2V0U2FtcGxlc1VpZHModXNlclVpZCkge1xuICAgICAgICBjb25zdCBkYXRhID0gZmV0Y2hEQigndXNlcnMvJyArIHVzZXJVaWQgKyAnL3Byb2R1Y3RzJylcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gYXJyYXlcbiAgICAgICAgICAgICAgICBjb25zdCB1aWRzID0gT2JqZWN0LmtleXMoZGF0YSlcbiAgICAgICAgICAgICAgICBzZXRTYW1wbGVzVWlkcyh1aWRzKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gc2V0cyBhIGxpc3Qgb2Ygb2JqZWN0cyB3aXRoIHNhbXBsZXMgZGF0YVxuICAgIGZ1bmN0aW9uIGdldFNhbXBsZXNEYXRhKHNhbXBsZXNVaWRzKSB7XG4gICAgICAgIGNvbnN0IHNhbXBsZXMgPSBbXVxuICAgICAgICBzYW1wbGVzVWlkcy5mb3JFYWNoKHVpZCA9PiB7XG4gICAgICAgICAgICBmZXRjaERCKCdwcm9kdWN0cy8nICsgdWlkKVxuICAgICAgICAgICAgICAgIC8vIFwie3VpZDogLi4uLCB0aXRsZTogLi4uLCB0eXBlOiAuLi59XCJcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXBwZWRTYW1wbGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IHVpZCwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGRhdGEudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZV9jcmVhdGVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlcy5wdXNoKG1hcHBlZFNhbXBsZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIHNldFNhbXBsZXNEYXRhKHNhbXBsZXMpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2Rhc2hib2FyZCddfT5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICAgICAgICBzYW1wbGVzRGF0YT17c2FtcGxlc0RhdGF9IFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvPlxuICAgIClcbiAgICBcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwiSGVhZGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRhdGFiYXNlIiwicmVmIiwib25WYWx1ZSIsIkZvb3RlciIsIlRhYmxlIiwidXNlQXV0aFN0YXRlIiwiYXV0aCIsIkxheW91dCIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJzYW1wbGVzVWlkcyIsInNldFNhbXBsZXNVaWRzIiwic2FtcGxlc0RhdGEiLCJzZXRTYW1wbGVzRGF0YSIsInVpZCIsInRpdGxlIiwidHlwZSIsImRhdGUiLCJnZXRTYW1wbGVzVWlkcyIsImZldGNoREIiLCJwYXRoIiwiaXRlbXNyUmVmIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzbmFwc2hvdCIsInZhbCIsInVzZXJVaWQiLCJkYXRhIiwidGhlbiIsInVpZHMiLCJPYmplY3QiLCJrZXlzIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZ2V0U2FtcGxlc0RhdGEiLCJzYW1wbGVzIiwiZm9yRWFjaCIsIm1hcHBlZFNhbXBsZSIsImRhdGVfY3JlYXRlZCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dashboard/layout.js\n"));

/***/ })

});