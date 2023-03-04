"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sign-up",{

/***/ "./pages/sign-up.js":
/*!**************************!*\
  !*** ./pages/sign-up.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_forms_sign_up_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/forms/sign-up-form */ \"./components/forms/sign-up-form.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n\nvar _s = $RefreshSig$();\n\n/* import { createUserWithEmailAndPassword } from \"firebase/auth\"\n */ \n\n\n\n\n\nfunction SignUp() {\n    _s();\n    //states\n    const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\",\n        isSeller: false\n    });\n    const [isSigned, setSigned] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [createUserWithEmailAndPassword, user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useCreateUserWithEmailAndPassword)(_firebaseClient__WEBPACK_IMPORTED_MODULE_2__.auth);\n    //handlers\n    function handleChange(event) {\n        setCredentials((prevCred)=>{\n            return {\n                ...prevCred,\n                [event.target.name]: event.target.type === \"checkbox\" ? !credentials.isSeller : event.target.value\n            };\n        });\n    }\n    async function handleSubmit() {\n        const logUp = await signUp(credentials.email, credentials.password);\n        const switchSigned = await setSigned(true);\n        const addToDb = await writeUserData();\n    }\n    // record credentials to db\n    function writeUserData() {\n        const { name , email , password , isSeller  } = credentials;\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_2__.database, \"user\"), {\n            name: name,\n            email: email,\n            password: password,\n            isSeller: isSeller\n        });\n    }\n    //signUp\n    function signUp(email, password) {\n        console.log(user.user.email);\n        createUserWithEmailAndPassword(email, password).then((userCredential)=>{\n        //\n        }).catch((error)=>{\n            const errorCode = error.code;\n            const errorMessage = error.message;\n        // ..\n        });\n        console.log(user.user.email);\n    }\n    //reverse signUp\n    function reverseSignUp() {\n        setSigned(false);\n        console.log(isSigned);\n    }\n    //success text\n    const success = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"You have been registered\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: reverseSignUp,\n                children: \"Sign Up again\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, this);\n    const signUpForm = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_sign_up_form__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        handleChange: handleChange,\n        handleSubmit: handleSubmit,\n        credentials: credentials\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"/\",\n                        children: \"Back home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                        lineNumber: 103,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                    lineNumber: 102,\n                    columnNumber: 17\n                }, this),\n                user ? success : signUpForm\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n            lineNumber: 101,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n        lineNumber: 100,\n        columnNumber: 9\n    }, this);\n}\n_s(SignUp, \"6QAFnVxHNh7OpghRl8KALWvztrw=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useCreateUserWithEmailAndPassword\n    ];\n});\n_c = SignUp;\nvar _c;\n$RefreshReg$(_c, \"SignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduLXVwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ3ZDO0NBQ0MsR0FBb0Q7QUFDVjtBQUNrQztBQUNqRDtBQUM2QjtBQUNoQjtBQUsxQixTQUFTVSxTQUFTOztJQUM3QixRQUFRO0lBQ1IsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDO1FBQzNDWSxNQUFNO1FBQ05DLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxVQUFVLEtBQUs7SUFDakI7SUFFRixNQUFNLENBQUNDLFVBQVVDLFVBQVUsR0FBR2pCLCtDQUFRQSxDQUFDLEtBQUs7SUFFNUMsTUFBTSxDQUNGa0IsZ0NBQ0FDLE1BQ0FDLFNBQ0FDLE1BQ0QsR0FBR2hCLDRGQUFpQ0EsQ0FBQ0osaURBQUlBO0lBRTVDLFVBQVU7SUFDVixTQUFTcUIsYUFBYUMsS0FBSyxFQUFFO1FBQ3pCWixlQUFlYSxDQUFBQSxXQUFZO1lBQ3ZCLE9BQU87Z0JBQ1AsR0FBR0EsUUFBUTtnQkFDWCxDQUFDRCxNQUFNRSxNQUFNLENBQUNiLElBQUksQ0FBQyxFQUFFVyxNQUFNRSxNQUFNLENBQUNDLElBQUksS0FBSyxhQUFhLENBQUNoQixZQUFZSyxRQUFRLEdBQUdRLE1BQU1FLE1BQU0sQ0FBQ0UsS0FBSztZQUNsRztRQUNKO0lBQ0o7SUFFQSxlQUFlQyxlQUFlO1FBQzFCLE1BQU1DLFFBQVEsTUFBTUMsT0FBT3BCLFlBQVlHLEtBQUssRUFBRUgsWUFBWUksUUFBUTtRQUNsRSxNQUFNaUIsZUFBZSxNQUFNZCxVQUFVLElBQUk7UUFDekMsTUFBTWUsVUFBVSxNQUFNQztJQUMxQjtJQUVBLDJCQUEyQjtJQUMzQixTQUFTQSxnQkFBZ0I7UUFDckIsTUFBTSxFQUFDckIsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRUMsU0FBUSxFQUFDLEdBQUdMO1FBQzFDTixzREFBR0EsQ0FBQ0Qsc0RBQUdBLENBQUNELHFEQUFRQSxFQUFFLFNBQVM7WUFDekJVLE1BQU1BO1lBQ05DLE9BQU9BO1lBQ1BDLFVBQVVBO1lBQ1ZDLFVBQVVBO1FBQ1o7SUFDRjtJQUdGLFFBQVE7SUFDUixTQUFTZSxPQUFPakIsS0FBSyxFQUFFQyxRQUFRLEVBQUU7UUFDN0JvQixRQUFRQyxHQUFHLENBQUNoQixLQUFLQSxJQUFJLENBQUNOLEtBQUs7UUFDM0JLLCtCQUErQkwsT0FBT0MsVUFDakNzQixJQUFJLENBQUMsQ0FBQ0MsaUJBQW1CO1FBQ3RCLEVBQUU7UUFDTixHQUNDQyxLQUFLLENBQUMsQ0FBQ2pCLFFBQVU7WUFDZCxNQUFNa0IsWUFBWWxCLE1BQU1tQixJQUFJO1lBQzVCLE1BQU1DLGVBQWVwQixNQUFNcUIsT0FBTztRQUNsQyxLQUFLO1FBQ1Q7UUFDSlIsUUFBUUMsR0FBRyxDQUFDaEIsS0FBS0EsSUFBSSxDQUFDTixLQUFLO0lBQy9CO0lBRUEsZ0JBQWdCO0lBQ2hCLFNBQVM4QixnQkFBZ0I7UUFDckIxQixVQUFVLEtBQUs7UUFDZmlCLFFBQVFDLEdBQUcsQ0FBQ25CO0lBQ2hCO0lBRUEsY0FBYztJQUNkLE1BQU00Qix3QkFDRiw4REFBQ0M7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBT0MsU0FBU0w7MEJBQWU7Ozs7Ozs7Ozs7OztJQUl4QyxNQUFNTSwyQkFDRiw4REFBQzFDLHNFQUFVQTtRQUNQZSxjQUFjQTtRQUNkTSxjQUFjQTtRQUNkbEIsYUFBYUE7Ozs7OztJQU9yQixxQkFDSSw4REFBQ0YsMERBQU1BO2tCQUNILDRFQUFDMEM7OzhCQUNHLDhEQUFDQTs4QkFDRyw0RUFBQzVDLGtEQUFJQTt3QkFBQzZDLE1BQUs7a0NBQUk7Ozs7Ozs7Ozs7O2dCQUVsQmhDLE9BQU95QixVQUFVSyxVQUFVOzs7Ozs7Ozs7Ozs7QUFRNUMsQ0FBQztHQXBHdUJ4Qzs7UUFnQmRKLHdGQUFpQ0E7OztLQWhCbkJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ24tdXAuanM/NWFkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuLyogaW1wb3J0IHsgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIlxuICovaW1wb3J0IHsgYXV0aCwgZGF0YWJhc2UgfSBmcm9tICcuLi9maXJlYmFzZUNsaWVudCdcbmltcG9ydCB7IHJlZiwgc2V0fSBmcm9tIFwiZmlyZWJhc2UvZGF0YWJhc2VcIlxuaW1wb3J0IHsgdXNlQ3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCdcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IFNpZ25VcEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybXMvc2lnbi11cC1mb3JtXCJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcCgpIHtcbiAgICAvL3N0YXRlc1xuICAgIGNvbnN0IFtjcmVkZW50aWFscywgc2V0Q3JlZGVudGlhbHNdID0gdXNlU3RhdGUoe1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICBlbWFpbDogXCJcIiwgXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgICBpc1NlbGxlcjogZmFsc2VcbiAgICAgIH0pXG5cbiAgICBjb25zdCBbaXNTaWduZWQsIHNldFNpZ25lZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IFtcbiAgICAgICAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICAgICAgICB1c2VyLFxuICAgICAgICBsb2FkaW5nLFxuICAgICAgICBlcnJvcixcbiAgICAgIF0gPSB1c2VDcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCk7XG5cbiAgICAvL2hhbmRsZXJzXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHNldENyZWRlbnRpYWxzKHByZXZDcmVkID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5wcmV2Q3JlZCxcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC50eXBlID09PSBcImNoZWNrYm94XCIgPyAhY3JlZGVudGlhbHMuaXNTZWxsZXIgOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICAgIGNvbnN0IGxvZ1VwID0gYXdhaXQgc2lnblVwKGNyZWRlbnRpYWxzLmVtYWlsLCBjcmVkZW50aWFscy5wYXNzd29yZClcbiAgICAgICAgY29uc3Qgc3dpdGNoU2lnbmVkID0gYXdhaXQgc2V0U2lnbmVkKHRydWUpXG4gICAgICAgIGNvbnN0IGFkZFRvRGIgPSBhd2FpdCB3cml0ZVVzZXJEYXRhKClcbiAgICB9XG5cbiAgICAvLyByZWNvcmQgY3JlZGVudGlhbHMgdG8gZGJcbiAgICBmdW5jdGlvbiB3cml0ZVVzZXJEYXRhKCkge1xuICAgICAgICBjb25zdCB7bmFtZSwgZW1haWwsIHBhc3N3b3JkLCBpc1NlbGxlcn0gPSBjcmVkZW50aWFsc1xuICAgICAgICBzZXQocmVmKGRhdGFiYXNlLCBcInVzZXJcIiksIHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgICAgaXNTZWxsZXI6IGlzU2VsbGVyXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgXG4gICAgXG4gICAgLy9zaWduVXBcbiAgICBmdW5jdGlvbiBzaWduVXAoZW1haWwsIHBhc3N3b3JkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIudXNlci5lbWFpbClcbiAgICAgICAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgICAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAvLyAuLlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIudXNlci5lbWFpbClcbiAgICB9XG5cbiAgICAvL3JldmVyc2Ugc2lnblVwXG4gICAgZnVuY3Rpb24gcmV2ZXJzZVNpZ25VcCgpIHtcbiAgICAgICAgc2V0U2lnbmVkKGZhbHNlKVxuICAgICAgICBjb25zb2xlLmxvZyhpc1NpZ25lZClcbiAgICB9XG5cbiAgICAvL3N1Y2Nlc3MgdGV4dFxuICAgIGNvbnN0IHN1Y2Nlc3MgPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+WW91IGhhdmUgYmVlbiByZWdpc3RlcmVkPC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmV2ZXJzZVNpZ25VcH0+U2lnbiBVcCBhZ2FpbjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICBjb25zdCBzaWduVXBGb3JtID0gKFxuICAgICAgICA8U2lnblVwRm9ybVxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgIGNyZWRlbnRpYWxzPXtjcmVkZW50aWFsc31cbiAgICAgICAgLz5cbiAgICApXG4gICAgICAgIFxuICAgIFxuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5CYWNrIGhvbWU8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIHt1c2VyID8gc3VjY2VzcyA6IHNpZ25VcEZvcm19XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgICBcbiAgICAgICAgXG4gICAgKVxuICAgIFxuXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJhdXRoIiwiZGF0YWJhc2UiLCJyZWYiLCJzZXQiLCJ1c2VDcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJMaW5rIiwiU2lnblVwRm9ybSIsIkxheW91dCIsIlNpZ25VcCIsImNyZWRlbnRpYWxzIiwic2V0Q3JlZGVudGlhbHMiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImlzU2VsbGVyIiwiaXNTaWduZWQiLCJzZXRTaWduZWQiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyIiwibG9hZGluZyIsImVycm9yIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwcmV2Q3JlZCIsInRhcmdldCIsInR5cGUiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImxvZ1VwIiwic2lnblVwIiwic3dpdGNoU2lnbmVkIiwiYWRkVG9EYiIsIndyaXRlVXNlckRhdGEiLCJjb25zb2xlIiwibG9nIiwidGhlbiIsInVzZXJDcmVkZW50aWFsIiwiY2F0Y2giLCJlcnJvckNvZGUiLCJjb2RlIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsInJldmVyc2VTaWduVXAiLCJzdWNjZXNzIiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwic2lnblVwRm9ybSIsInNlY3Rpb24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sign-up.js\n"));

/***/ })

});