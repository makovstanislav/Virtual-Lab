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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_forms_sign_up_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/forms/sign-up-form */ \"./components/forms/sign-up-form.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n\nvar _s = $RefreshSig$();\n\n/* import { createUserWithEmailAndPassword } from \"firebase/auth\"\n */ \n\n\n\n\n\nfunction SignUp() {\n    _s();\n    //states\n    const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\",\n        isSeller: false\n    });\n    const [isSigned, setSigned] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [createUserWithEmailAndPassword, user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useCreateUserWithEmailAndPassword)(_firebaseClient__WEBPACK_IMPORTED_MODULE_2__.auth);\n    //handlers\n    function handleChange(event) {\n        setCredentials((prevCred)=>{\n            return {\n                ...prevCred,\n                [event.target.name]: event.target.type === \"checkbox\" ? !credentials.isSeller : event.target.value\n            };\n        });\n    }\n    async function handleSubmit() {\n        await signUp(credentials.email, credentials.password);\n        await setSigned(true);\n        writeUserData();\n    }\n    // record credentials to db\n    function writeUserData() {\n        const { name , email , password , isSeller  } = credentials;\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_2__.database, \"user\"), {\n            name: name,\n            email: email,\n            password: password,\n            isSeller: isSeller\n        });\n    }\n    //signUp\n    function signUp(email, password) {\n        console.log(\"hjkl\");\n        createUserWithEmailAndPassword(email, password).then((userCredential)=>{\n        //\n        }).catch((error)=>{\n            const errorCode = error.code;\n            const errorMessage = error.message;\n        // ..\n        });\n    }\n    //reverse signUp\n    function reverseSignUp() {\n        setSigned(false);\n        console.log(isSigned);\n    }\n    //success text\n    const success = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"You have been registered\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: reverseSignUp,\n                children: \"Sign Up again\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n        lineNumber: 81,\n        columnNumber: 9\n    }, this);\n    const signUpForm = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_sign_up_form__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        handleChange: handleChange,\n        handleSubmit: handleSubmit,\n        credentials: credentials\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n        lineNumber: 88,\n        columnNumber: 9\n    }, this);\n    {\n        loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: \"Loading\"\n        }, void 0, false, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n            lineNumber: 95,\n            columnNumber: 17\n        }, this);\n    }\n    {\n        error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: \"error.message\"\n        }, void 0, false, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n            lineNumber: 96,\n            columnNumber: 15\n        }, this);\n    }\n    {\n        user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: \"user.user.email\"\n        }, void 0, false, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n            lineNumber: 97,\n            columnNumber: 14\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: error.message\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                lineNumber: 103,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n            lineNumber: 102,\n            columnNumber: 13\n        }, this);\n    } else if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Loading\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                lineNumber: 109,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n            lineNumber: 108,\n            columnNumber: 13\n        }, this);\n    } else if (user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Thank you! You`ve successfully registered user \",\n                    user.user.email\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                lineNumber: 115,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n            lineNumber: 114,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"/\",\n                        children: \"Back home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                        lineNumber: 124,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                    lineNumber: 123,\n                    columnNumber: 17\n                }, this),\n                signUpForm\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n            lineNumber: 122,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n        lineNumber: 121,\n        columnNumber: 9\n    }, this);\n}\n_s(SignUp, \"6QAFnVxHNh7OpghRl8KALWvztrw=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useCreateUserWithEmailAndPassword\n    ];\n});\n_c = SignUp;\nvar _c;\n$RefreshReg$(_c, \"SignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBRy9FLENBQUM7SUFFRCxxQkFDSSw4REFBQ0wsMERBQU1BO2tCQUNILDRFQUFDd0M7OzhCQUNHLDhEQUFDQTs4QkFDRyw0RUFBQzFDLGtEQUFJQTt3QkFBQzJDLE1BQUs7a0NBQUk7Ozs7Ozs7Ozs7O2dCQUVsQkg7Ozs7Ozs7Ozs7OztBQVFqQixDQUFDO0dBekh1QnJDOztRQWdCZEosd0ZBQWlDQTs7O0tBaEJuQkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbi11cC5qcz81YWQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG4vKiBpbXBvcnQgeyBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiXG4gKi9pbXBvcnQgeyBhdXRoLCBkYXRhYmFzZSB9IGZyb20gJy4uL2ZpcmViYXNlQ2xpZW50J1xuaW1wb3J0IHsgcmVmLCBzZXR9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiXG5pbXBvcnQgeyB1c2VDcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJ1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgU2lnblVwRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3Jtcy9zaWduLXVwLWZvcm1cIlxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnblVwKCkge1xuICAgIC8vc3RhdGVzXG4gICAgY29uc3QgW2NyZWRlbnRpYWxzLCBzZXRDcmVkZW50aWFsc10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIGVtYWlsOiBcIlwiLCBcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICAgIGlzU2VsbGVyOiBmYWxzZVxuICAgICAgfSlcblxuICAgIGNvbnN0IFtpc1NpZ25lZCwgc2V0U2lnbmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgW1xuICAgICAgICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG4gICAgICAgIHVzZXIsXG4gICAgICAgIGxvYWRpbmcsXG4gICAgICAgIGVycm9yLFxuICAgICAgXSA9IHVzZUNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoKTtcblxuICAgIC8vaGFuZGxlcnNcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgc2V0Q3JlZGVudGlhbHMocHJldkNyZWQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnByZXZDcmVkLFxuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIiA/ICFjcmVkZW50aWFscy5pc1NlbGxlciA6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICAgICAgYXdhaXQgc2lnblVwKGNyZWRlbnRpYWxzLmVtYWlsLCBjcmVkZW50aWFscy5wYXNzd29yZClcbiAgICAgICAgYXdhaXQgc2V0U2lnbmVkKHRydWUpXG4gICAgICAgIHdyaXRlVXNlckRhdGEoKVxuICAgIH1cblxuICAgIC8vIHJlY29yZCBjcmVkZW50aWFscyB0byBkYlxuICAgIGZ1bmN0aW9uIHdyaXRlVXNlckRhdGEoKSB7XG4gICAgICAgIGNvbnN0IHtuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGlzU2VsbGVyfSA9IGNyZWRlbnRpYWxzXG4gICAgICAgIHNldChyZWYoZGF0YWJhc2UsIFwidXNlclwiKSwge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgICBpc1NlbGxlcjogaXNTZWxsZXJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICBcbiAgICBcbiAgICAvL3NpZ25VcFxuICAgIGZ1bmN0aW9uIHNpZ25VcChlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoamtsXCIpXG4gICAgICAgIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAgICAgICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgLy8gLi5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vcmV2ZXJzZSBzaWduVXBcbiAgICBmdW5jdGlvbiByZXZlcnNlU2lnblVwKCkge1xuICAgICAgICBzZXRTaWduZWQoZmFsc2UpXG4gICAgICAgIGNvbnNvbGUubG9nKGlzU2lnbmVkKVxuICAgIH1cblxuICAgIC8vc3VjY2VzcyB0ZXh0XG4gICAgY29uc3Qgc3VjY2VzcyA9IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5Zb3UgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQ8L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXZlcnNlU2lnblVwfT5TaWduIFVwIGFnYWluPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIGNvbnN0IHNpZ25VcEZvcm0gPSAoXG4gICAgICAgIDxTaWduVXBGb3JtXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgY3JlZGVudGlhbHM9e2NyZWRlbnRpYWxzfVxuICAgICAgICAvPlxuICAgIClcblxuICAgIHtsb2FkaW5nICYmIDxoMz5Mb2FkaW5nPC9oMz59XG4gICAge2Vycm9yICYmIDxoMz5lcnJvci5tZXNzYWdlPC9oMz59XG4gICAge3VzZXIgJiYgPGgzPnVzZXIudXNlci5lbWFpbDwvaDM+fVxuICAgICAgICBcbiAgICBcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+e2Vycm9yLm1lc3NhZ2V9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfSBlbHNlIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmc8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9IGVsc2UgaWYodXNlcikge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5UaGFuayB5b3UhIFlvdWB2ZSBzdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCB1c2VyIHt1c2VyLnVzZXIuZW1haWx9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+QmFjayBob21lPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICB7c2lnblVwRm9ybX1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIFxuICAgICAgICBcbiAgICApXG4gICAgXG5cbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF1dGgiLCJkYXRhYmFzZSIsInJlZiIsInNldCIsInVzZUNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsIkxpbmsiLCJTaWduVXBGb3JtIiwiTGF5b3V0IiwiU2lnblVwIiwiY3JlZGVudGlhbHMiLCJzZXRDcmVkZW50aWFscyIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiaXNTZWxsZXIiLCJpc1NpZ25lZCIsInNldFNpZ25lZCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXZDcmVkIiwidGFyZ2V0IiwidHlwZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwic2lnblVwIiwid3JpdGVVc2VyRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwidXNlckNyZWRlbnRpYWwiLCJjYXRjaCIsImVycm9yQ29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwicmV2ZXJzZVNpZ25VcCIsInN1Y2Nlc3MiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzaWduVXBGb3JtIiwiaDMiLCJzZWN0aW9uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sign-up.js\n"));

/***/ })

});