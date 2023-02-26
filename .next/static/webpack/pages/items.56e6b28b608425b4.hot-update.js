"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/items",{

/***/ "./pages/items.js":
/*!************************!*\
  !*** ./pages/items.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Items; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Items() {\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetchItems();\n    }, []);\n    function fetchItems() {\n        const itemsrRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.database, \"items/\");\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.onValue)(itemsrRef, (snapshot)=>{\n            const data = snapshot.val();\n            setItems(()=>{\n                const fetchedItems = [];\n                const itemsList = Object.keys(data);\n                itemsList.forEach((key)=>{\n                    fetchedItems.push([\n                        data[key].name,\n                        data[key].description,\n                        data[key].price\n                    ]);\n                });\n                return fetchedItems;\n            });\n            console.log(items);\n        });\n    }\n    const itemsMarkup = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/items.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"hi\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/items.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            items\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/items.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(Items, \"E85yb7BhBnl3/OpymRdjFiQJ97s=\");\n_c = Items;\nvar _c;\n$RefreshReg$(_c, \"Items\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pdGVtcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDSDtBQUNIO0FBRzdCLFNBQVNNLFFBQVE7O0lBRTVCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDQyxnREFBU0EsQ0FBQyxXQUFXO1FBQ2pCTztJQUNKLEdBQUcsRUFBRTtJQUVMLFNBQVNBLGFBQWE7UUFDbEIsTUFBTUMsWUFBWVAsc0RBQUdBLENBQUNFLHFEQUFRQSxFQUFFO1FBQ2hDRCwwREFBT0EsQ0FBQ00sV0FBVyxDQUFDQyxXQUFhO1lBQzdCLE1BQU1DLE9BQU9ELFNBQVNFLEdBQUc7WUFDekJMLFNBQVMsSUFBTTtnQkFDWCxNQUFNTSxlQUFlLEVBQUU7Z0JBQ3ZCLE1BQU1DLFlBQVlDLE9BQU9DLElBQUksQ0FBQ0w7Z0JBQzlCRyxVQUFVRyxPQUFPLENBQUMsQ0FBQ0MsTUFBUTtvQkFDdkJMLGFBQWFNLElBQUksQ0FBQzt3QkFBQ1IsSUFBSSxDQUFDTyxJQUFJLENBQUNFLElBQUk7d0JBQUVULElBQUksQ0FBQ08sSUFBSSxDQUFDRyxXQUFXO3dCQUFFVixJQUFJLENBQUNPLElBQUksQ0FBQ0ksS0FBSztxQkFBQztnQkFDOUU7Z0JBQ0EsT0FBT1Q7WUFDWDtZQUNBVSxRQUFRQyxHQUFHLENBQUNsQjtRQUNoQjtJQUVKO0lBRUEsTUFBTW1CLDRCQUNGLDhEQUFDQzs7Ozs7SUFJTCxxQkFDSSw4REFBQ0E7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7O1lBQ0hyQjs7Ozs7OztBQUdiLENBQUM7R0FwQ3VCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pdGVtcy5qcz8wYzc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHJlZiwgb25WYWx1ZX0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCJcbmltcG9ydCB7IGRhdGFiYXNlIH0gZnJvbSBcIi4uL2ZpcmViYXNlQ2xpZW50XCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtcygpIHtcblxuICAgIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pXG5cbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZldGNoSXRlbXMoKVxuICAgIH0sIFtdKSBcblxuICAgIGZ1bmN0aW9uIGZldGNoSXRlbXMoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zclJlZiA9IHJlZihkYXRhYmFzZSwgJ2l0ZW1zLycpXG4gICAgICAgIG9uVmFsdWUoaXRlbXNyUmVmLCAoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBzbmFwc2hvdC52YWwoKTtcbiAgICAgICAgICAgIHNldEl0ZW1zKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmZXRjaGVkSXRlbXMgPSBbXVxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zTGlzdCA9IE9iamVjdC5rZXlzKGRhdGEpXG4gICAgICAgICAgICAgICAgaXRlbXNMaXN0LmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaGVkSXRlbXMucHVzaChbZGF0YVtrZXldLm5hbWUsIGRhdGFba2V5XS5kZXNjcmlwdGlvbiwgZGF0YVtrZXldLnByaWNlXSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaGVkSXRlbXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtcylcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfSBcblxuICAgIGNvbnN0IGl0ZW1zTWFya3VwID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPmhpPC9oMT5cbiAgICAgICAgICAgIHtpdGVtc31cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicmVmIiwib25WYWx1ZSIsImRhdGFiYXNlIiwiSXRlbXMiLCJpdGVtcyIsInNldEl0ZW1zIiwiZmV0Y2hJdGVtcyIsIml0ZW1zclJlZiIsInNuYXBzaG90IiwiZGF0YSIsInZhbCIsImZldGNoZWRJdGVtcyIsIml0ZW1zTGlzdCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicHVzaCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiY29uc29sZSIsImxvZyIsIml0ZW1zTWFya3VwIiwiZGl2IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/items.js\n"));

/***/ })

});