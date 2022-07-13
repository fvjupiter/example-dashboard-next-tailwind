"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/aufgabe3/[slug]",{

/***/ "./components/aufgabe3/Layout2.js":
/*!****************************************!*\
  !*** ./components/aufgabe3/Layout2.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout2; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction Layout2() {\n    _s();\n    var conRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), conWidth = ref[0], setconWidth = ref[1];\n    var calcWidth = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        if (conRef && conRef.current) setconWidth(conRef.current.getBoundingClientRect().width);\n    }, [\n        conRef\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        calcWidth();\n        window.addEventListener(\"resize\", calcWidth);\n        return function() {\n            return window.removeEventListener(\"resize\", calcWidth);\n        };\n    }, [\n        calcWidth\n    ]);\n    //classNames\n    var cN = \"m-3 p-4 text-xl font-semibold bg-gradient-to-b rounded-lg border ring-1 shadow-xl\";\n    var colored = {\n        lime: \"from-lime-200 to-lime-300 border-lime-400 ring-lime-900 text-lime-900\",\n        pink: \"from-pink-200 to-pink-300 border-pink-400 ring-pink-900 text-pink-900\",\n        stone: \"from-stone-200 to-stone-300 dark:from-stone-800 dark:to-stone-900 dark:text-white dark:border-stone-700 dark:ring-white/10 border-stone-400 ring-stone-900\",\n        yellow: \"from-yellow-200 to-yellow-300 border-yellow-400 ring-yellow-900 text-yellow-900\",\n        blue: \"from-blue-200 to-blue-300 border-blue-400 ring-blue-900 text-blue-900\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(cN, \" \").concat(colored.lime),\n                children: \"Layout 2 (Aufgabe 3.2)\"\n            }, void 0, false, {\n                fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout2.js\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(cN, \" \").concat(colored.pink, \" flex-none md:w-52 overflow-scroll\"),\n                        children: \"Navigation\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout2.js\",\n                        lineNumber: 30,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: conRef,\n                        className: \"\".concat(cN, \" \").concat(colored.stone, \" md:w-full whitespace-pre-line\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"lg:text-2xl lg:font-bold pb-2\",\n                                children: \"Warum welcher Layout-Mode\"\n                            }, void 0, false, {\n                                fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout2.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-light\",\n                                children: \"Unter einer Viewport-Breite von 768px wird die Seite im Layout-Mode 'Normal Flow' angezeigt:\\n          So flie\\xdfen alle Container untereinander und haben automatisch eine Breite von 100% und damit genug Platz um ihre Inhalte angemessen zu platzieren.\\n\\n          Ab einer Viewport-Breite von 768px wird die Seite im Layout-Mode 'Flexible Box Layout' angezeigt:\\n          Der Parent-Container von Navigation, Content und Sidebar erh\\xe4lt als CSS-Property 'display: flex'.\\n          Der Navigations- und Sidebar-Container erhalten als CSS-Property 'flex: none', sowie eine bestimmte, feste Breite (width) um genug Platz f\\xfcr ihre Inhalte zu garantieren und nicht in ihrer Breite zu schrumpfen bzw. zu wachsen.\\n          Ihre H\\xf6he passt sich automatisch an die H\\xf6he des Content-Containers f\\xfcr eine symmetrische Darstellung an und bietet 'Overflow.\\n          Die Breite des Footers wird an die des Contents angegleicht und erh\\xe4lt einen Abstand zur linken Seite (margin-left) in Breite der Navigation.\\n          \"\n                            }, void 0, false, {\n                                fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout2.js\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout2.js\",\n                        lineNumber: 31,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(cN, \" \").concat(colored.yellow, \" flex-none md:w-40 overflow-scroll\"),\n                        children: \"Sidebar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout2.js\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout2.js\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: conWidth\n                },\n                className: \"\".concat(cN, \" \").concat(colored.blue, \" md:ml-[244px]\"),\n                children: \"Footer\"\n            }, void 0, false, {\n                fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout2.js\",\n                lineNumber: 46,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Layout2, \"9qpUyWNBoAVTGl5prWt5NjCJyzQ=\");\n_c = Layout2;\nvar _c;\n$RefreshReg$(_c, \"Layout2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU87QUFBUEEsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2F1ZmdhYmUzL0xheW91dDIuanM/NzFjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dDIoKSB7XG4gIGNvbnN0IGNvblJlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBbY29uV2lkdGgsIHNldGNvbldpZHRoXSA9IHVzZVN0YXRlKDApXG5cbiAgY29uc3QgY2FsY1dpZHRoID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmKGNvblJlZiAmJiBjb25SZWYuY3VycmVudCkgc2V0Y29uV2lkdGgoY29uUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpXG4gIH0sIFtjb25SZWZdKVxuICAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2FsY1dpZHRoKClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2FsY1dpZHRoKVxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjYWxjV2lkdGgpXG4gIH0sIFtjYWxjV2lkdGhdKVxuXG4gIC8vY2xhc3NOYW1lc1xuICBjb25zdCBjTiA9IGBtLTMgcC00IHRleHQteGwgZm9udC1zZW1pYm9sZCBiZy1ncmFkaWVudC10by1iIHJvdW5kZWQtbGcgYm9yZGVyIHJpbmctMSBzaGFkb3cteGxgXG4gIGNvbnN0IGNvbG9yZWQgPSB7XG4gICAgbGltZTogJ2Zyb20tbGltZS0yMDAgdG8tbGltZS0zMDAgYm9yZGVyLWxpbWUtNDAwIHJpbmctbGltZS05MDAgdGV4dC1saW1lLTkwMCcsXG4gICAgcGluazogJ2Zyb20tcGluay0yMDAgdG8tcGluay0zMDAgYm9yZGVyLXBpbmstNDAwIHJpbmctcGluay05MDAgdGV4dC1waW5rLTkwMCcsXG4gICAgc3RvbmU6ICdmcm9tLXN0b25lLTIwMCB0by1zdG9uZS0zMDAgZGFyazpmcm9tLXN0b25lLTgwMCBkYXJrOnRvLXN0b25lLTkwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpib3JkZXItc3RvbmUtNzAwIGRhcms6cmluZy13aGl0ZS8xMCBib3JkZXItc3RvbmUtNDAwIHJpbmctc3RvbmUtOTAwJyxcbiAgICB5ZWxsb3c6ICdmcm9tLXllbGxvdy0yMDAgdG8teWVsbG93LTMwMCBib3JkZXIteWVsbG93LTQwMCByaW5nLXllbGxvdy05MDAgdGV4dC15ZWxsb3ctOTAwJyxcbiAgICBibHVlOiAnZnJvbS1ibHVlLTIwMCB0by1ibHVlLTMwMCBib3JkZXItYmx1ZS00MDAgcmluZy1ibHVlLTkwMCB0ZXh0LWJsdWUtOTAwJ1xuICB9XG5cbiAgcmV0dXJuIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NOfSAke2NvbG9yZWQubGltZX1gfT5MYXlvdXQgMiAoQXVmZ2FiZSAzLjIpPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9J21kOmZsZXgnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NOfSAke2NvbG9yZWQucGlua30gZmxleC1ub25lIG1kOnctNTIgb3ZlcmZsb3ctc2Nyb2xsYH0+TmF2aWdhdGlvbjwvZGl2PlxuICAgICAgPGRpdiByZWY9e2NvblJlZn0gY2xhc3NOYW1lPXtgJHtjTn0gJHtjb2xvcmVkLnN0b25lfSBtZDp3LWZ1bGwgd2hpdGVzcGFjZS1wcmUtbGluZWB9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2xnOnRleHQtMnhsIGxnOmZvbnQtYm9sZCBwYi0yJz5XYXJ1bSB3ZWxjaGVyIExheW91dC1Nb2RlPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtbGlnaHQnPntgVW50ZXIgZWluZXIgVmlld3BvcnQtQnJlaXRlIHZvbiA3NjhweCB3aXJkIGRpZSBTZWl0ZSBpbSBMYXlvdXQtTW9kZSAnTm9ybWFsIEZsb3cnIGFuZ2V6ZWlndDpcbiAgICAgICAgICBTbyBmbGllw59lbiBhbGxlIENvbnRhaW5lciB1bnRlcmVpbmFuZGVyIHVuZCBoYWJlbiBhdXRvbWF0aXNjaCBlaW5lIEJyZWl0ZSB2b24gMTAwJSB1bmQgZGFtaXQgZ2VudWcgUGxhdHogdW0gaWhyZSBJbmhhbHRlIGFuZ2VtZXNzZW4genUgcGxhdHppZXJlbi5cblxuICAgICAgICAgIEFiIGVpbmVyIFZpZXdwb3J0LUJyZWl0ZSB2b24gNzY4cHggd2lyZCBkaWUgU2VpdGUgaW0gTGF5b3V0LU1vZGUgJ0ZsZXhpYmxlIEJveCBMYXlvdXQnIGFuZ2V6ZWlndDpcbiAgICAgICAgICBEZXIgUGFyZW50LUNvbnRhaW5lciB2b24gTmF2aWdhdGlvbiwgQ29udGVudCB1bmQgU2lkZWJhciBlcmjDpGx0IGFscyBDU1MtUHJvcGVydHkgJ2Rpc3BsYXk6IGZsZXgnLlxuICAgICAgICAgIERlciBOYXZpZ2F0aW9ucy0gdW5kIFNpZGViYXItQ29udGFpbmVyIGVyaGFsdGVuIGFscyBDU1MtUHJvcGVydHkgJ2ZsZXg6IG5vbmUnLCBzb3dpZSBlaW5lIGJlc3RpbW10ZSwgZmVzdGUgQnJlaXRlICh3aWR0aCkgdW0gZ2VudWcgUGxhdHogZsO8ciBpaHJlIEluaGFsdGUgenUgZ2FyYW50aWVyZW4gdW5kIG5pY2h0IGluIGlocmVyIEJyZWl0ZSB6dSBzY2hydW1wZmVuIGJ6dy4genUgd2FjaHNlbi5cbiAgICAgICAgICBJaHJlIEjDtmhlIHBhc3N0IHNpY2ggYXV0b21hdGlzY2ggYW4gZGllIEjDtmhlIGRlcyBDb250ZW50LUNvbnRhaW5lcnMgZsO8ciBlaW5lIHN5bW1ldHJpc2NoZSBEYXJzdGVsbHVuZyBhbiB1bmQgYmlldGV0ICdPdmVyZmxvdy5cbiAgICAgICAgICBEaWUgQnJlaXRlIGRlcyBGb290ZXJzIHdpcmQgYW4gZGllIGRlcyBDb250ZW50cyBhbmdlZ2xlaWNodCB1bmQgZXJow6RsdCBlaW5lbiBBYnN0YW5kIHp1ciBsaW5rZW4gU2VpdGUgKG1hcmdpbi1sZWZ0KSBpbiBCcmVpdGUgZGVyIE5hdmlnYXRpb24uXG4gICAgICAgICAgYH1cbiAgICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjTn0gJHtjb2xvcmVkLnllbGxvd30gZmxleC1ub25lIG1kOnctNDAgb3ZlcmZsb3ctc2Nyb2xsYH0+U2lkZWJhcjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IGNvbldpZHRoIH19IGNsYXNzTmFtZT17YCR7Y059ICR7Y29sb3JlZC5ibHVlfSBtZDptbC1bMjQ0cHhdYH0+Rm9vdGVyPC9kaXY+XG4gIDwvPlxufVxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJMYXlvdXQyIiwiY29uUmVmIiwiY29uV2lkdGgiLCJzZXRjb25XaWR0aCIsImNhbGNXaWR0aCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY04iLCJjb2xvcmVkIiwibGltZSIsInBpbmsiLCJzdG9uZSIsInllbGxvdyIsImJsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJoMSIsInAiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/aufgabe3/Layout2.js\n"));

/***/ })

});