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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_forms_sign_up_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/forms/sign-up-form */ \"./components/forms/sign-up-form.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n\nvar _s = $RefreshSig$();\n\n/* import { createUserWithEmailAndPassword } from \"firebase/auth\"\n */ \n\n\n\n\n\nfunction SignUp() {\n    _s();\n    //states\n    const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\",\n        isSeller: false\n    });\n    const [isSigned, setSigned] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [createUserWithEmailAndPassword, user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useCreateUserWithEmailAndPassword)(_firebaseClient__WEBPACK_IMPORTED_MODULE_2__.auth);\n    //handlers\n    function handleChange(event) {\n        setCredentials((prevCred)=>{\n            return {\n                ...prevCred,\n                [event.target.name]: event.target.type === \"checkbox\" ? !credentials.isSeller : event.target.value\n            };\n        });\n    }\n    async function handleSubmit() {\n        await signUp(credentials.email, credentials.password);\n        await setSigned(true);\n        writeUserData();\n    }\n    // record credentials to db\n    function writeUserData() {\n        const { name , email , password , isSeller  } = credentials;\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_2__.database, \"user\"), {\n            name: name,\n            email: email,\n            password: password,\n            isSeller: isSeller\n        });\n    }\n    //signUp\n    function signUp(email, password) {\n        console.log(\"hjkl\");\n        createUserWithEmailAndPassword(email, password).then((userCredential)=>{\n        //\n        }).catch((error)=>{\n            const errorCode = error.code;\n            const errorMessage = error.message;\n        // ..\n        });\n        console.log(user.user.email);\n    }\n    //reverse signUp\n    function reverseSignUp() {\n        setSigned(false);\n        console.log(isSigned);\n    }\n    //success text\n    const success = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"You have been registered\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: reverseSignUp,\n                children: \"Sign Up again\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, this);\n    const signUpForm = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_sign_up_form__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        handleChange: handleChange,\n        handleSubmit: handleSubmit,\n        credentials: credentials\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"/\",\n                        children: \"Back home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                        lineNumber: 103,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                    lineNumber: 102,\n                    columnNumber: 17\n                }, this),\n                signUpForm,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: loading && Loading\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                    lineNumber: 106,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: error && error.message\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                    lineNumber: 107,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n            lineNumber: 101,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n        lineNumber: 100,\n        columnNumber: 9\n    }, this);\n}\n_s(SignUp, \"6QAFnVxHNh7OpghRl8KALWvztrw=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useCreateUserWithEmailAndPassword\n    ];\n});\n_c = SignUp;\nvar _c;\n$RefreshReg$(_c, \"SignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduLXVwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ3ZDO0NBQ0MsR0FBb0Q7QUFDVjtBQUNrQztBQUNqRDtBQUM2QjtBQUNoQjtBQUsxQixTQUFTVSxTQUFTOztJQUM3QixRQUFRO0lBQ1IsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDO1FBQzNDWSxNQUFNO1FBQ05DLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxVQUFVLEtBQUs7SUFDakI7SUFFRixNQUFNLENBQUNDLFVBQVVDLFVBQVUsR0FBR2pCLCtDQUFRQSxDQUFDLEtBQUs7SUFFNUMsTUFBTSxDQUNGa0IsZ0NBQ0FDLE1BQ0FDLFNBQ0FDLE1BQ0QsR0FBR2hCLDRGQUFpQ0EsQ0FBQ0osaURBQUlBO0lBRTVDLFVBQVU7SUFDVixTQUFTcUIsYUFBYUMsS0FBSyxFQUFFO1FBQ3pCWixlQUFlYSxDQUFBQSxXQUFZO1lBQ3ZCLE9BQU87Z0JBQ1AsR0FBR0EsUUFBUTtnQkFDWCxDQUFDRCxNQUFNRSxNQUFNLENBQUNiLElBQUksQ0FBQyxFQUFFVyxNQUFNRSxNQUFNLENBQUNDLElBQUksS0FBSyxhQUFhLENBQUNoQixZQUFZSyxRQUFRLEdBQUdRLE1BQU1FLE1BQU0sQ0FBQ0UsS0FBSztZQUNsRztRQUNKO0lBQ0o7SUFFQSxlQUFlQyxlQUFlO1FBQzFCLE1BQU1DLE9BQU9uQixZQUFZRyxLQUFLLEVBQUVILFlBQVlJLFFBQVE7UUFDcEQsTUFBTUcsVUFBVSxJQUFJO1FBQ3BCYTtJQUNKO0lBRUEsMkJBQTJCO0lBQzNCLFNBQVNBLGdCQUFnQjtRQUNyQixNQUFNLEVBQUNsQixLQUFJLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFQyxTQUFRLEVBQUMsR0FBR0w7UUFDMUNOLHNEQUFHQSxDQUFDRCxzREFBR0EsQ0FBQ0QscURBQVFBLEVBQUUsU0FBUztZQUN6QlUsTUFBTUE7WUFDTkMsT0FBT0E7WUFDUEMsVUFBVUE7WUFDVkMsVUFBVUE7UUFDWjtJQUNGO0lBR0YsUUFBUTtJQUNSLFNBQVNjLE9BQU9oQixLQUFLLEVBQUVDLFFBQVEsRUFBRTtRQUM3QmlCLFFBQVFDLEdBQUcsQ0FBQztRQUNaZCwrQkFBK0JMLE9BQU9DLFVBQ2pDbUIsSUFBSSxDQUFDLENBQUNDLGlCQUFtQjtRQUN0QixFQUFFO1FBQ04sR0FDQ0MsS0FBSyxDQUFDLENBQUNkLFFBQVU7WUFDZCxNQUFNZSxZQUFZZixNQUFNZ0IsSUFBSTtZQUM1QixNQUFNQyxlQUFlakIsTUFBTWtCLE9BQU87UUFDbEMsS0FBSztRQUNUO1FBQ0FSLFFBQVFDLEdBQUcsQ0FBQ2IsS0FBS0EsSUFBSSxDQUFDTixLQUFLO0lBQ25DO0lBRUEsZ0JBQWdCO0lBQ2hCLFNBQVMyQixnQkFBZ0I7UUFDckJ2QixVQUFVLEtBQUs7UUFDZmMsUUFBUUMsR0FBRyxDQUFDaEI7SUFDaEI7SUFFQSxjQUFjO0lBQ2QsTUFBTXlCLHdCQUNGLDhEQUFDQzs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFPQyxTQUFTTDswQkFBZTs7Ozs7Ozs7Ozs7O0lBSXhDLE1BQU1NLDJCQUNGLDhEQUFDdkMsc0VBQVVBO1FBQ1BlLGNBQWNBO1FBQ2RNLGNBQWNBO1FBQ2RsQixhQUFhQTs7Ozs7O0lBT3JCLHFCQUNJLDhEQUFDRiwwREFBTUE7a0JBQ0gsNEVBQUN1Qzs7OEJBQ0csOERBQUNBOzhCQUNHLDRFQUFDekMsa0RBQUlBO3dCQUFDMEMsTUFBSztrQ0FBSTs7Ozs7Ozs7Ozs7Z0JBRWxCRjs4QkFDRCw4REFBQ0c7OEJBQUk3QixXQUFXOEI7Ozs7Ozs4QkFDaEIsOERBQUNEOzhCQUFJNUIsU0FBU0EsTUFBTWtCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTNDLENBQUM7R0F0R3VCOUI7O1FBZ0JkSix3RkFBaUNBOzs7S0FoQm5CSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWduLXVwLmpzPzVhZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbi8qIGltcG9ydCB7IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCJcbiAqL2ltcG9ydCB7IGF1dGgsIGRhdGFiYXNlIH0gZnJvbSAnLi4vZmlyZWJhc2VDbGllbnQnXG5pbXBvcnQgeyByZWYsIHNldH0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCJcbmltcG9ydCB7IHVzZUNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCBTaWduVXBGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm1zL3NpZ24tdXAtZm9ybVwiXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXAoKSB7XG4gICAgLy9zdGF0ZXNcbiAgICBjb25zdCBbY3JlZGVudGlhbHMsIHNldENyZWRlbnRpYWxzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgZW1haWw6IFwiXCIsIFxuICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgaXNTZWxsZXI6IGZhbHNlXG4gICAgICB9KVxuXG4gICAgY29uc3QgW2lzU2lnbmVkLCBzZXRTaWduZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCBbXG4gICAgICAgIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgICAgICAgdXNlcixcbiAgICAgICAgbG9hZGluZyxcbiAgICAgICAgZXJyb3IsXG4gICAgICBdID0gdXNlQ3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgpO1xuXG4gICAgLy9oYW5kbGVyc1xuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBzZXRDcmVkZW50aWFscyhwcmV2Q3JlZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucHJldkNyZWQsXG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiID8gIWNyZWRlbnRpYWxzLmlzU2VsbGVyIDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xuICAgICAgICBhd2FpdCBzaWduVXAoY3JlZGVudGlhbHMuZW1haWwsIGNyZWRlbnRpYWxzLnBhc3N3b3JkKVxuICAgICAgICBhd2FpdCBzZXRTaWduZWQodHJ1ZSlcbiAgICAgICAgd3JpdGVVc2VyRGF0YSgpXG4gICAgfVxuXG4gICAgLy8gcmVjb3JkIGNyZWRlbnRpYWxzIHRvIGRiXG4gICAgZnVuY3Rpb24gd3JpdGVVc2VyRGF0YSgpIHtcbiAgICAgICAgY29uc3Qge25hbWUsIGVtYWlsLCBwYXNzd29yZCwgaXNTZWxsZXJ9ID0gY3JlZGVudGlhbHNcbiAgICAgICAgc2V0KHJlZihkYXRhYmFzZSwgXCJ1c2VyXCIpLCB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICAgIGlzU2VsbGVyOiBpc1NlbGxlclxuICAgICAgICB9KVxuICAgICAgfVxuICAgIFxuICAgIFxuICAgIC8vc2lnblVwXG4gICAgZnVuY3Rpb24gc2lnblVwKGVtYWlsLCBwYXNzd29yZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhqa2xcIilcbiAgICAgICAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgICAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAvLyAuLlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyLnVzZXIuZW1haWwpXG4gICAgfVxuXG4gICAgLy9yZXZlcnNlIHNpZ25VcFxuICAgIGZ1bmN0aW9uIHJldmVyc2VTaWduVXAoKSB7XG4gICAgICAgIHNldFNpZ25lZChmYWxzZSlcbiAgICAgICAgY29uc29sZS5sb2coaXNTaWduZWQpXG4gICAgfVxuXG4gICAgLy9zdWNjZXNzIHRleHRcbiAgICBjb25zdCBzdWNjZXNzID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPllvdSBoYXZlIGJlZW4gcmVnaXN0ZXJlZDwvaDE+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JldmVyc2VTaWduVXB9PlNpZ24gVXAgYWdhaW48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgY29uc3Qgc2lnblVwRm9ybSA9IChcbiAgICAgICAgPFNpZ25VcEZvcm1cbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICBjcmVkZW50aWFscz17Y3JlZGVudGlhbHN9XG4gICAgICAgIC8+XG4gICAgKVxuICAgICAgICBcbiAgICBcblxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+QmFjayBob21lPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICB7c2lnblVwRm9ybX1cbiAgICAgICAgICAgICAgICA8aDM+e2xvYWRpbmcgJiYgTG9hZGluZ308L2gzPlxuICAgICAgICAgICAgICAgIDxoMz57ZXJyb3IgJiYgZXJyb3IubWVzc2FnZX08L2gzPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgICAgXG4gICAgICAgIFxuICAgIClcbiAgICBcblxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXV0aCIsImRhdGFiYXNlIiwicmVmIiwic2V0IiwidXNlQ3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiTGluayIsIlNpZ25VcEZvcm0iLCJMYXlvdXQiLCJTaWduVXAiLCJjcmVkZW50aWFscyIsInNldENyZWRlbnRpYWxzIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJpc1NlbGxlciIsImlzU2lnbmVkIiwic2V0U2lnbmVkIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlciIsImxvYWRpbmciLCJlcnJvciIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwicHJldkNyZWQiLCJ0YXJnZXQiLCJ0eXBlIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJzaWduVXAiLCJ3cml0ZVVzZXJEYXRhIiwiY29uc29sZSIsImxvZyIsInRoZW4iLCJ1c2VyQ3JlZGVudGlhbCIsImNhdGNoIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJyZXZlcnNlU2lnblVwIiwic3VjY2VzcyIsImRpdiIsImgxIiwiYnV0dG9uIiwib25DbGljayIsInNpZ25VcEZvcm0iLCJzZWN0aW9uIiwiaHJlZiIsImgzIiwiTG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sign-up.js\n"));

/***/ })

});