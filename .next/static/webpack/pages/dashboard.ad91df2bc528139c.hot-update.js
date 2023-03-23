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

/***/ "./components/dashboard/user-button.js":
/*!*********************************************!*\
  !*** ./components/dashboard/user-button.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/ds-layout.module.css */ \"./styles/ds-layout.module.css\");\n/* harmony import */ var _styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_user_dropdown_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/user-dropdown.module.css */ \"./styles/user-dropdown.module.css\");\n/* harmony import */ var _styles_user_dropdown_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_user_dropdown_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookies-next */ \"../../../../node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction UserButton() {\n    _s();\n    const [isTooltipOpen, setIsTooltipOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const tooltipRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    //email\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"empty\");\n    function logOut() {\n        console.log(\"...logging out\");\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_firebaseClient__WEBPACK_IMPORTED_MODULE_4__.auth).then(()=>{\n            (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookie)(\"logged\", false);\n            console.log(\"signed out\");\n            router.push(\"/\");\n        }).catch((error)=>{\n        // An error happened.\n        });\n    }\n    function handleClickOutsideTooltip(event) {\n        if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {\n            setIsTooltipOpen(false);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //fetch email\n        setEmail((0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)(\"email\"));\n        document.addEventListener(\"mousedown\", handleClickOutsideTooltip);\n        return ()=>{\n            document.removeEventListener(\"mousedown\", handleClickOutsideTooltip);\n        };\n    }, []);\n    function handleCreateButtonClick() {\n        setIsTooltipOpen(!isTooltipOpen);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"user-container\",\n        className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: (_styles_ds_layout_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"user-icon\"]),\n                    title: \"Profile\",\n                    onClick: handleCreateButtonClick,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Profile\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/user-button.js\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                            cx: \"50\",\n                            cy: \"50\",\n                            r: \"40\",\n                            fill: \"blue\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/user-button.js\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/user-button.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/user-button.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            isTooltipOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"container bg-white shadow-lg rounded-2 \".concat((_styles_user_dropdown_module_css__WEBPACK_IMPORTED_MODULE_7___default().dropdown)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container-fluid \".concat((_styles_user_dropdown_module_css__WEBPACK_IMPORTED_MODULE_7___default().email)),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: email\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/user-button.js\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/user-button.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container-fluid \".concat((_styles_user_dropdown_module_css__WEBPACK_IMPORTED_MODULE_7___default().options)),\n                        ref: tooltipRef,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                class: \"text-decoration-none text-dark\",\n                                children: \"Profile\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/user-button.js\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                class: \"text-decoration-none text-danger\",\n                                onClick: logOut,\n                                children: \"Sign out\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/user-button.js\",\n                                lineNumber: 83,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/user-button.js\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/user-button.js\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/dashboard/user-button.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(UserButton, \"nvEsA2dMtgqOlbqUHi64y19G5pQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = UserButton;\nvar _c;\n$RefreshReg$(_c, \"UserButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyLWJ1dHRvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNHO0FBQ0c7QUFDakI7QUFDRjtBQUNJO0FBQ0o7QUFDRTtBQUcxQixTQUFTVSxhQUFhOztJQUVuQyxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3hELE1BQU1hLGFBQWFaLDZDQUFNQSxDQUFDLElBQUk7SUFDOUIsTUFBTWEsU0FBU04sc0RBQVNBO0lBRXhCLE9BQU87SUFDUCxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBRW5DLFNBQVNpQixTQUFTO1FBRWhCQyxRQUFRQyxHQUFHLENBQUM7UUFFWmIsc0RBQU9BLENBQUNDLGlEQUFJQSxFQUFFYSxJQUFJLENBQUMsSUFBTTtZQUN2QlgsdURBQVNBLENBQUMsVUFBVSxLQUFLO1lBQ3pCUyxRQUFRQyxHQUFHLENBQUM7WUFDWkwsT0FBT08sSUFBSSxDQUFDO1FBQ2QsR0FBR0MsS0FBSyxDQUFDLENBQUNDLFFBQVU7UUFDbEIscUJBQXFCO1FBQ3ZCO0lBQ0Y7SUFFQSxTQUFTQywwQkFBMEJDLEtBQUssRUFBRTtRQUN4QyxJQUFJWixXQUFXYSxPQUFPLElBQUksQ0FBQ2IsV0FBV2EsT0FBTyxDQUFDQyxRQUFRLENBQUNGLE1BQU1HLE1BQU0sR0FBRztZQUNwRWhCLGlCQUFpQixLQUFLO1FBQ3hCLENBQUM7SUFDSDtJQUVBVixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsYUFBYTtRQUNiYyxTQUFTWCx1REFBU0EsQ0FBQztRQUVuQndCLFNBQVNDLGdCQUFnQixDQUFDLGFBQWFOO1FBQ3ZDLE9BQU8sSUFBTTtZQUNYSyxTQUFTRSxtQkFBbUIsQ0FBQyxhQUFhUDtRQUM1QztJQUNGLEdBQUcsRUFBRTtJQUVMLFNBQVNRLDBCQUEwQjtRQUNqQ3BCLGlCQUFpQixDQUFDRDtJQUNwQjtJQU1BLHFCQUNFLDhEQUFDc0I7UUFDQ0MsSUFBRztRQUNIQyxXQUFXaEMsK0VBQW1COzswQkFFOUIsOERBQUM4QjswQkFDQyw0RUFBQ0c7b0JBQ0NELFdBQVdoQyxrRkFBbUI7b0JBQzlCa0MsT0FBTTtvQkFDTkMsU0FBU047O3NDQUNQLDhEQUFDSztzQ0FBTTs7Ozs7O3NDQUNQLDhEQUFDRTs0QkFBT0MsSUFBRzs0QkFBS0MsSUFBRzs0QkFBS0MsR0FBRTs0QkFBS0MsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHekNoQywrQkFDQyw4REFBQ3NCO2dCQUFJVyxPQUFPLDBDQUE0RCxPQUFsQnhDLGtGQUFpQjs7a0NBQ3JFLDhEQUFDNkI7d0JBQUlFLFdBQVcsbUJBQWtDLE9BQWYvQiwrRUFBYztrQ0FDL0MsNEVBQUN5QztzQ0FBRzlCOzs7Ozs7Ozs7OztrQ0FFTiw4REFBQ2tCO3dCQUNDRSxXQUFXLG1CQUFvQyxPQUFqQi9CLGlGQUFnQjt3QkFDOUMwQyxLQUFLakM7OzBDQUNILDhEQUFDZ0M7Z0NBQ0NFLE1BQUs7Z0NBQ0xILE9BQU07MENBQWlDOzs7Ozs7MENBRXpDLDhEQUFDQztnQ0FDQ0UsTUFBSztnQ0FDTEgsT0FBTTtnQ0FDTk4sU0FBU3JCOzBDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNZixDQUFDO0dBbEZ1QlA7O1FBSVBGLGtEQUFTQTs7O0tBSkZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXItYnV0dG9uLmpzP2I5MjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvZHMtbGF5b3V0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IHVzckRkIGZyb20gJy4uLy4uL3N0eWxlcy91c2VyLWRyb3Bkb3duLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnY29va2llcy1uZXh0JztcbmltcG9ydCB7IHNpZ25PdXQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlQ2xpZW50XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgc2V0Q29va2llIH0gZnJvbSAnY29va2llcy1uZXh0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQnV0dG9uKCkge1xuICBcbiAgY29uc3QgW2lzVG9vbHRpcE9wZW4sIHNldElzVG9vbHRpcE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b29sdGlwUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIC8vZW1haWxcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcImVtcHR5XCIpXG5cbiAgZnVuY3Rpb24gbG9nT3V0KCkge1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiLi4ubG9nZ2luZyBvdXRcIilcbiAgICBcbiAgICBzaWduT3V0KGF1dGgpLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0Q29va2llKCdsb2dnZWQnLCBmYWxzZSlcbiAgICAgIGNvbnNvbGUubG9nKFwic2lnbmVkIG91dFwiKVxuICAgICAgcm91dGVyLnB1c2goJy8nKSBcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIC8vIEFuIGVycm9yIGhhcHBlbmVkLlxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tPdXRzaWRlVG9vbHRpcChldmVudCkge1xuICAgIGlmICh0b29sdGlwUmVmLmN1cnJlbnQgJiYgIXRvb2x0aXBSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICBzZXRJc1Rvb2x0aXBPcGVuKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vZmV0Y2ggZW1haWxcbiAgICBzZXRFbWFpbChnZXRDb29raWUoJ2VtYWlsJykpXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGVUb29sdGlwKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlVG9vbHRpcCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNyZWF0ZUJ1dHRvbkNsaWNrKCkge1xuICAgIHNldElzVG9vbHRpcE9wZW4oIWlzVG9vbHRpcE9wZW4pO1xuICB9XG5cblxuICBcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBcbiAgICAgIGlkPVwidXNlci1jb250YWluZXJcIlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ2NvbnRhaW5lciddfVxuICAgICAgPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHN2ZyBcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1sndXNlci1pY29uJ119XG4gICAgICAgICAgdGl0bGU9XCJQcm9maWxlXCIgXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ3JlYXRlQnV0dG9uQ2xpY2t9PlxuICAgICAgICAgICAgPHRpdGxlPlByb2ZpbGU8L3RpdGxlPlxuICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCI0MFwiIGZpbGw9XCJibHVlXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtpc1Rvb2x0aXBPcGVuICYmIChcbiAgICAgICAgPGRpdiBjbGFzcz17YGNvbnRhaW5lciBiZy13aGl0ZSBzaGFkb3ctbGcgcm91bmRlZC0yICR7dXNyRGRbJ2Ryb3Bkb3duJ119YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb250YWluZXItZmx1aWQgJHt1c3JEZFsnZW1haWwnXX1gfSA+XG4gICAgICAgICAgICA8YT57ZW1haWx9PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Bjb250YWluZXItZmx1aWQgJHt1c3JEZFsnb3B0aW9ucyddfWB9IFxuICAgICAgICAgICAgcmVmPXt0b29sdGlwUmVmfT5cbiAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgaHJlZj0nIycgXG4gICAgICAgICAgICAgICAgY2xhc3M9J3RleHQtZGVjb3JhdGlvbi1ub25lIHRleHQtZGFyayc+XG4gICAgICAgICAgICAgICAgUHJvZmlsZTwvYT5cbiAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgaHJlZj0nIycgXG4gICAgICAgICAgICAgICAgY2xhc3M9J3RleHQtZGVjb3JhdGlvbi1ub25lIHRleHQtZGFuZ2VyJ1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ091dH1cbiAgICAgICAgICAgICAgPlNpZ24gb3V0PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJ1c3JEZCIsImdldENvb2tpZSIsInNpZ25PdXQiLCJhdXRoIiwidXNlUm91dGVyIiwic2V0Q29va2llIiwiVXNlckJ1dHRvbiIsImlzVG9vbHRpcE9wZW4iLCJzZXRJc1Rvb2x0aXBPcGVuIiwidG9vbHRpcFJlZiIsInJvdXRlciIsImVtYWlsIiwic2V0RW1haWwiLCJsb2dPdXQiLCJjb25zb2xlIiwibG9nIiwidGhlbiIsInB1c2giLCJjYXRjaCIsImVycm9yIiwiaGFuZGxlQ2xpY2tPdXRzaWRlVG9vbHRpcCIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNyZWF0ZUJ1dHRvbkNsaWNrIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJzdmciLCJ0aXRsZSIsIm9uQ2xpY2siLCJjaXJjbGUiLCJjeCIsImN5IiwiciIsImZpbGwiLCJjbGFzcyIsImEiLCJyZWYiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dashboard/user-button.js\n"));

/***/ })

});