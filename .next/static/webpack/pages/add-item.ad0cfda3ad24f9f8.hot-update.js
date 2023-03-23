"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/add-item",{

/***/ "./pages/add-item.js":
/*!***************************!*\
  !*** ./pages/add-item.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _components_forms_add_item_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/forms/add-item-form */ \"./components/forms/add-item-form.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var _components_dashboard_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/dashboard/layout */ \"./components/dashboard/layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AddItem() {\n    _s();\n    //states\n    const [details, setDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        description: \"\",\n        mouse_strain: \"\",\n        tissue: \"\",\n        type: \"\",\n        storage_condition: \"\"\n    });\n    const [isSubmitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //handlers\n    function handleChange(event) {\n        console.log();\n        setDetails((prev)=>{\n            return {\n                ...prev,\n                [event.target.name]: event.target.value\n            };\n        });\n    }\n    async function handleSubmit(event) {\n        event.preventDefault();\n        const addToBd = await addItem();\n        const switchSubmitted = await setSubmitted(true);\n    }\n    // adding to db\n    function addItem() {\n        const { name , description , price  } = details;\n        const uid = (0,uuid__WEBPACK_IMPORTED_MODULE_6__.v4)();\n        console.log(uid);\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.database, \"products/\" + uid), {\n            title: details.title,\n            description: details.description,\n            mouse_strain: details.mouse_strain,\n            tissue: details.tissue,\n            type: details.type,\n            storage_condition: details.storage_condition,\n            user_id: \"????\"\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            children: !isSubmitted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_add_item_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handleChange: handleChange,\n                handleSubmit: handleSubmit,\n                details: details\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/add-item.js\",\n                lineNumber: 58,\n                columnNumber: 34\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/add-item.js\",\n            lineNumber: 57,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/add-item.js\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, this);\n}\n_s(AddItem, \"hCy+WUhxYPZFmrDF0YJAeGV/MgM=\");\n_c = AddItem;\nvar _c;\n$RefreshReg$(_c, \"AddItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZGQtaXRlbS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDSztBQUNlO0FBQ2xDO0FBQ21CO0FBQ087QUFFcEMsU0FBU1EsVUFBVTs7SUFFOUIsUUFBUTtJQUNSLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztRQUNuQ1UsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLGNBQWM7UUFDZEMsUUFBUTtRQUNSQyxNQUFNO1FBQ05DLG1CQUFtQjtJQUN2QjtJQUVBLE1BQU0sQ0FBQ0MsYUFBYUMsYUFBYSxHQUFHakIsK0NBQVFBLENBQUMsS0FBSztJQUVsRCxVQUFVO0lBQ1YsU0FBU2tCLGFBQWFDLEtBQUssRUFBRTtRQUN6QkMsUUFBUUMsR0FBRztRQUNYWixXQUFXYSxDQUFBQSxPQUFRO1lBQ2YsT0FBTztnQkFDUCxHQUFHQSxJQUFJO2dCQUNQLENBQUNILE1BQU1JLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVMLE1BQU1JLE1BQU0sQ0FBQ0UsS0FBSztZQUN2QztRQUNKO0lBQ0o7SUFFQSxlQUFlQyxhQUFhUCxLQUFLLEVBQUU7UUFDL0JBLE1BQU1RLGNBQWM7UUFDcEIsTUFBTUMsVUFBVSxNQUFNQztRQUN0QixNQUFNQyxrQkFBa0IsTUFBTWIsYUFBYSxJQUFJO0lBQ25EO0lBRUEsZUFBZTtJQUNmLFNBQVNZLFVBQVU7UUFDZixNQUFNLEVBQUNMLEtBQUksRUFBRWIsWUFBVyxFQUFFb0IsTUFBSyxFQUFDLEdBQUd2QjtRQUNuQyxNQUFNd0IsTUFBTTVCLHdDQUFFQTtRQUNkZ0IsUUFBUUMsR0FBRyxDQUFDVztRQUNaOUIsc0RBQUdBLENBQUNELHNEQUFHQSxDQUFDSSxxREFBUUEsRUFBRSxjQUFjMkIsTUFBTTtZQUNsQ3RCLE9BQU9GLFFBQVFFLEtBQUs7WUFDcEJDLGFBQWFILFFBQVFHLFdBQVc7WUFDaENDLGNBQWNKLFFBQVFJLFlBQVk7WUFDbENDLFFBQVFMLFFBQVFLLE1BQU07WUFDdEJDLE1BQU1OLFFBQVFNLElBQUk7WUFDbEJDLG1CQUFtQlAsUUFBUU8saUJBQWlCO1lBQzVDa0IsU0FBUztRQUNiO0lBQ0o7SUFFQSxxQkFDSSw4REFBQzNCLG9FQUFNQTtrQkFDSCw0RUFBQzRCO3NCQUNJLENBQUNsQiw2QkFBZSw4REFBQ2IsdUVBQVdBO2dCQUN6QmUsY0FBY0E7Z0JBQ2RRLGNBQWNBO2dCQUNkbEIsU0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0IsQ0FBQztHQTNEdUJEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkZC1pdGVtLmpzPzU3MDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHJlZiwgc2V0IH0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCJcbmltcG9ydCBBZGRJdGVtRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3Jtcy9hZGQtaXRlbS1mb3JtXCJcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIlxuaW1wb3J0IHsgZGF0YWJhc2UgfSBmcm9tIFwiLi4vZmlyZWJhc2VDbGllbnRcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvbGF5b3V0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkSXRlbSgpIHtcblxuICAgIC8vc3RhdGVzXG4gICAgY29uc3QgW2RldGFpbHMsIHNldERldGFpbHNdID0gdXNlU3RhdGUoe1xuICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIG1vdXNlX3N0cmFpbjogXCJcIixcbiAgICAgICAgdGlzc3VlOiBcIlwiLFxuICAgICAgICB0eXBlOiBcIlwiLCBcbiAgICAgICAgc3RvcmFnZV9jb25kaXRpb246IFwiXCIsXG4gICAgfSlcblxuICAgIGNvbnN0IFtpc1N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIFxuICAgIC8vaGFuZGxlcnNcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coKVxuICAgICAgICBzZXREZXRhaWxzKHByZXYgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBhZGRUb0JkID0gYXdhaXQgYWRkSXRlbSgpXG4gICAgICAgIGNvbnN0IHN3aXRjaFN1Ym1pdHRlZCA9IGF3YWl0IHNldFN1Ym1pdHRlZCh0cnVlKVxuICAgIH1cblxuICAgIC8vIGFkZGluZyB0byBkYlxuICAgIGZ1bmN0aW9uIGFkZEl0ZW0oKSB7XG4gICAgICAgIGNvbnN0IHtuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2V9ID0gZGV0YWlsc1xuICAgICAgICBjb25zdCB1aWQgPSB2NCgpXG4gICAgICAgIGNvbnNvbGUubG9nKHVpZClcbiAgICAgICAgc2V0KHJlZihkYXRhYmFzZSwgXCJwcm9kdWN0cy9cIiArIHVpZCksIHtcbiAgICAgICAgICAgIHRpdGxlOiBkZXRhaWxzLnRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRldGFpbHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBtb3VzZV9zdHJhaW46IGRldGFpbHMubW91c2Vfc3RyYWluLFxuICAgICAgICAgICAgdGlzc3VlOiBkZXRhaWxzLnRpc3N1ZSxcbiAgICAgICAgICAgIHR5cGU6IGRldGFpbHMudHlwZSwgXG4gICAgICAgICAgICBzdG9yYWdlX2NvbmRpdGlvbjogZGV0YWlscy5zdG9yYWdlX2NvbmRpdGlvbixcbiAgICAgICAgICAgIHVzZXJfaWQ6IFwiPz8/P1wiXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIHshaXNTdWJtaXR0ZWQgJiYgPEFkZEl0ZW1Gb3JtIFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHM9e2RldGFpbHN9XG4gICAgICAgICAgICAgICAgLz59XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgICBcbiAgICApXG59XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwicmVmIiwic2V0IiwiQWRkSXRlbUZvcm0iLCJ2NCIsImRhdGFiYXNlIiwiTGF5b3V0IiwiQWRkSXRlbSIsImRldGFpbHMiLCJzZXREZXRhaWxzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1vdXNlX3N0cmFpbiIsInRpc3N1ZSIsInR5cGUiLCJzdG9yYWdlX2NvbmRpdGlvbiIsImlzU3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwicHJldiIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYWRkVG9CZCIsImFkZEl0ZW0iLCJzd2l0Y2hTdWJtaXR0ZWQiLCJwcmljZSIsInVpZCIsInVzZXJfaWQiLCJzZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/add-item.js\n"));

/***/ })

});