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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _components_forms_add_item_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/forms/add-item-form */ \"./components/forms/add-item-form.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var _components_dashboard_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/dashboard/layout */ \"./components/dashboard/layout.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cookies-next */ \"../../../../node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction AddItem() {\n    _s();\n    //states\n    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState)(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.auth);\n    const [userUid, setUserUid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (user) {\n            setUserUid(user.uid);\n        }\n    }, [\n        user\n    ]);\n    const [details, setDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        description: \"\",\n        mouse_strain: \"\",\n        tissue: \"\",\n        type: \"\",\n        storage_condition: \"\"\n    });\n    const [isSubmitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //handlers\n    function handleChange(event) {\n        console.log(event.target.name);\n        setDetails((prev)=>{\n            return {\n                ...prev,\n                [event.target.name]: event.target.value\n            };\n        });\n    }\n    async function handleSubmit(event) {\n        event.preventDefault();\n        const addToBd = await addItem();\n        const switchSubmitted = await setSubmitted(true);\n    }\n    // adding to db\n    function addItem() {\n        const { name , description , price  } = details;\n        const uid = (0,uuid__WEBPACK_IMPORTED_MODULE_8__.v4)();\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.database, \"products/\" + uid), {\n            title: details.title,\n            description: details.description,\n            mouse_strain: details.mouse_strain,\n            tissue: details.tissue,\n            type: details.type,\n            storage_condition: details.storage_condition,\n            user_id: userUid\n        });\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.set)(firebase_database__WEBPACK_IMPORTED_MODULE_2__.ref);\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.update)((0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.database, \"users/\" + userUid + \"/products/\"), {\n            [uid]: true\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            children: !isSubmitted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_add_item_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handleChange: handleChange,\n                handleSubmit: handleSubmit,\n                details: details\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/add-item.js\",\n                lineNumber: 72,\n                columnNumber: 34\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/add-item.js\",\n            lineNumber: 71,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/add-item.js\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, this);\n}\n_s(AddItem, \"ui2qofD4oJDuxSM4Ij7TMNg5mQ4=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState\n    ];\n});\n_c = AddItem;\nvar _c;\n$RefreshReg$(_c, \"AddItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZGQtaXRlbS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDRTtBQUNPO0FBQ2xDO0FBQ21CO0FBQ087QUFDSztBQUNoQjtBQUVBO0FBRXpCLFNBQVNhLFVBQVU7O0lBRTlCLFFBQVE7SUFDUixNQUFNLENBQUNDLE1BQU1DLFNBQVNDLE1BQU0sR0FBR04sdUVBQVlBLENBQUNDLGlEQUFJQTtJQUNoRCxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRXZDQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osSUFBSVksTUFBTTtZQUNOSSxXQUFXSixLQUFLSyxHQUFHO1FBQ3ZCLENBQUM7SUFDTCxHQUFHO1FBQUNMO0tBQUs7SUFFVCxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR3BCLCtDQUFRQSxDQUFDO1FBQ25DcUIsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLGNBQWM7UUFDZEMsUUFBUTtRQUNSQyxNQUFNO1FBQ05DLG1CQUFtQjtJQUN2QjtJQUVBLE1BQU0sQ0FBQ0MsYUFBYUMsYUFBYSxHQUFHNUIsK0NBQVFBLENBQUMsS0FBSztJQUVsRCxVQUFVO0lBQ1YsU0FBUzZCLGFBQWFDLEtBQUssRUFBRTtRQUN6QkMsUUFBUUMsR0FBRyxDQUFDRixNQUFNRyxNQUFNLENBQUNDLElBQUk7UUFDN0JkLFdBQVdlLENBQUFBLE9BQVE7WUFDZixPQUFPO2dCQUNQLEdBQUdBLElBQUk7Z0JBQ1AsQ0FBQ0wsTUFBTUcsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUosTUFBTUcsTUFBTSxDQUFDRyxLQUFLO1lBQ3ZDO1FBQ0o7SUFDSjtJQUVBLGVBQWVDLGFBQWFQLEtBQUssRUFBRTtRQUMvQkEsTUFBTVEsY0FBYztRQUNwQixNQUFNQyxVQUFVLE1BQU1DO1FBQ3RCLE1BQU1DLGtCQUFrQixNQUFNYixhQUFhLElBQUk7SUFDbkQ7SUFFQSxlQUFlO0lBQ2YsU0FBU1ksVUFBVTtRQUNmLE1BQU0sRUFBQ04sS0FBSSxFQUFFWixZQUFXLEVBQUVvQixNQUFLLEVBQUMsR0FBR3ZCO1FBQ25DLE1BQU1ELE1BQU1aLHdDQUFFQTtRQUNkSCxzREFBR0EsQ0FBQ0Qsc0RBQUdBLENBQUNLLHFEQUFRQSxFQUFFLGNBQWNXLE1BQU07WUFDbENHLE9BQU9GLFFBQVFFLEtBQUs7WUFDcEJDLGFBQWFILFFBQVFHLFdBQVc7WUFDaENDLGNBQWNKLFFBQVFJLFlBQVk7WUFDbENDLFFBQVFMLFFBQVFLLE1BQU07WUFDdEJDLE1BQU1OLFFBQVFNLElBQUk7WUFDbEJDLG1CQUFtQlAsUUFBUU8saUJBQWlCO1lBQzVDaUIsU0FBUzNCO1FBQ2I7UUFDQWIsc0RBQUdBLENBQUNELGtEQUFHQTtRQUNQRSx5REFBTUEsQ0FBQ0Ysc0RBQUdBLENBQUNLLHFEQUFRQSxFQUFFLFdBQVdTLFVBQVUsZUFBZTtZQUFDLENBQUNFLElBQUksRUFBQyxJQUFJO1FBQUE7SUFDeEU7SUFFQSxxQkFDSSw4REFBQ1Ysb0VBQU1BO2tCQUNILDRFQUFDb0M7c0JBQ0ksQ0FBQ2pCLDZCQUFlLDhEQUFDdEIsdUVBQVdBO2dCQUN6QndCLGNBQWNBO2dCQUNkUSxjQUFjQTtnQkFDZGxCLFNBQVNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBTTdCLENBQUM7R0FyRXVCUDs7UUFHV0gsbUVBQVlBOzs7S0FIdkJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkZC1pdGVtLmpzPzU3MDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgcmVmLCBzZXQsIHVwZGF0ZSB9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiXG5pbXBvcnQgQWRkSXRlbUZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybXMvYWRkLWl0ZW0tZm9ybVwiXG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCJcbmltcG9ydCB7IGRhdGFiYXNlIH0gZnJvbSBcIi4uL2ZpcmViYXNlQ2xpZW50XCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL2xheW91dFwiXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJ1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZUNsaWVudFwiXG5cbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gXCJjb29raWVzLW5leHRcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRJdGVtKCkge1xuXG4gICAgLy9zdGF0ZXNcbiAgICBjb25zdCBbdXNlciwgbG9hZGluZywgZXJyb3JdID0gdXNlQXV0aFN0YXRlKGF1dGgpXG4gICAgY29uc3QgW3VzZXJVaWQsIHNldFVzZXJVaWRdID0gdXNlU3RhdGUoJycpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgc2V0VXNlclVpZCh1c2VyLnVpZClcbiAgICAgICAgfVxuICAgIH0sIFt1c2VyXSk7XG5cbiAgICBjb25zdCBbZGV0YWlscywgc2V0RGV0YWlsc10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgbW91c2Vfc3RyYWluOiBcIlwiLFxuICAgICAgICB0aXNzdWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwiXCIsIFxuICAgICAgICBzdG9yYWdlX2NvbmRpdGlvbjogXCJcIixcbiAgICB9KVxuXG4gICAgY29uc3QgW2lzU3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgXG4gICAgLy9oYW5kbGVyc1xuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQubmFtZSlcbiAgICAgICAgc2V0RGV0YWlscyhwcmV2ID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgYWRkVG9CZCA9IGF3YWl0IGFkZEl0ZW0oKVxuICAgICAgICBjb25zdCBzd2l0Y2hTdWJtaXR0ZWQgPSBhd2FpdCBzZXRTdWJtaXR0ZWQodHJ1ZSlcbiAgICB9XG5cbiAgICAvLyBhZGRpbmcgdG8gZGJcbiAgICBmdW5jdGlvbiBhZGRJdGVtKCkge1xuICAgICAgICBjb25zdCB7bmFtZSwgZGVzY3JpcHRpb24sIHByaWNlfSA9IGRldGFpbHNcbiAgICAgICAgY29uc3QgdWlkID0gdjQoKVxuICAgICAgICBzZXQocmVmKGRhdGFiYXNlLCBcInByb2R1Y3RzL1wiICsgdWlkKSwge1xuICAgICAgICAgICAgdGl0bGU6IGRldGFpbHMudGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGV0YWlscy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG1vdXNlX3N0cmFpbjogZGV0YWlscy5tb3VzZV9zdHJhaW4sXG4gICAgICAgICAgICB0aXNzdWU6IGRldGFpbHMudGlzc3VlLFxuICAgICAgICAgICAgdHlwZTogZGV0YWlscy50eXBlLCBcbiAgICAgICAgICAgIHN0b3JhZ2VfY29uZGl0aW9uOiBkZXRhaWxzLnN0b3JhZ2VfY29uZGl0aW9uLFxuICAgICAgICAgICAgdXNlcl9pZDogdXNlclVpZFxuICAgICAgICB9KVxuICAgICAgICBzZXQocmVmKVxuICAgICAgICB1cGRhdGUocmVmKGRhdGFiYXNlLCBcInVzZXJzL1wiICsgdXNlclVpZCArIFwiL3Byb2R1Y3RzL1wiKSwge1t1aWRdOnRydWV9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICB7IWlzU3VibWl0dGVkICYmIDxBZGRJdGVtRm9ybSBcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzPXtkZXRhaWxzfVxuICAgICAgICAgICAgICAgIC8+fVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgICAgXG4gICAgKVxufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInJlZiIsInNldCIsInVwZGF0ZSIsIkFkZEl0ZW1Gb3JtIiwidjQiLCJkYXRhYmFzZSIsIkxheW91dCIsInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJnZXRDb29raWUiLCJBZGRJdGVtIiwidXNlciIsImxvYWRpbmciLCJlcnJvciIsInVzZXJVaWQiLCJzZXRVc2VyVWlkIiwidWlkIiwiZGV0YWlscyIsInNldERldGFpbHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibW91c2Vfc3RyYWluIiwidGlzc3VlIiwidHlwZSIsInN0b3JhZ2VfY29uZGl0aW9uIiwiaXNTdWJtaXR0ZWQiLCJzZXRTdWJtaXR0ZWQiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJuYW1lIiwicHJldiIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhZGRUb0JkIiwiYWRkSXRlbSIsInN3aXRjaFN1Ym1pdHRlZCIsInByaWNlIiwidXNlcl9pZCIsInNlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/add-item.js\n"));

/***/ })

});