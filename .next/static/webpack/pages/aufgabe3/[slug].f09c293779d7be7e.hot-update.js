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

/***/ "./components/aufgabe3/Layout1.js":
/*!****************************************!*\
  !*** ./components/aufgabe3/Layout1.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout1; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Layout1() {\n    var _this = this;\n    var containers = [\n        {\n            title: \"Layout 1 (Aufgabe 3.1)\",\n            content: \"Welcher Layout-Mode und weshalb er verwendet wurde ist in den folgenden Containern ausgef\\xfchrt =>\",\n            footnote: \"vpw = viewport-width\",\n            classN: \"border-cyan-400 ring-cyan-400 shadow-cyan-700/20\"\n        },\n        {\n            title: \"Normal Flow (vpw < 768px)\",\n            content: \"Unter einer Viewport-Breite von 768px wird die Seite im Layout-Mode 'Normal Flow' angezeigt:\\n      \\n      Der Parent-Container erh\\xe4lt als CSS-Property 'display: block'. Dadurch werden die zugeh\\xf6rigen 'Children-Container' untereinander angeordnet und erlauben auf kleineren Bildschirmen die volle Breite zur Darstellung von Inhalten zu nutzen.\\n      \\n      Die 'Children-Container' passen sich mit dem CSS-Property 'width: 100%' an die Viewport-Breite an und wachsen in der H\\xf6he je nachdem, wieviel Content (Inhalt) sie beinhalten.\",\n            footnote: \"Layout-Mode 'Normal Flow' ist der Standart-Layout-Mode\",\n            classN: \"border-lime-400 ring-lime-400 shadow-lime-700/20\"\n        },\n        {\n            title: \"Flexible Box Layout (vpw >= 768px)\",\n            content: \"Ab einer Breite von 768px wird die Seite im Layout-Mode 'Flexible Box Layout' angezeigt:\\n      \\n      Der Parent-Container erh\\xe4lt als CSS-Property 'display: flex'. Dadurch werden die zugeh\\xf6rigen 'Children-Container' nebeneinander angeordnet und erlauben eine \\xfcbersichtliche Darstellung des Contents. Damit jeder 'Child-Container' gleichbreit ist und mit der Ver\\xe4nderung der Viewport-Breite w\\xe4chst bzw. schrumpft, erh\\xe4lt er (bzw. sein Wrapper-Element) als CSS-Property 'width: calc(100%/3)'.\\n      \\n      Der Parent-Container w\\xe4chst flexibel auf die H\\xf6he des gr\\xf6\\xdften Child-Containers. Dadurch k\\xf6nnen die Children-Container mit CSS-Property 'height: 100%' an die H\\xf6he des Parent-Containers (welcher die H\\xf6he des h\\xf6chsten Elements hat) angepasst werden.\",\n            footnote: \"Layout-Mode 'Flexible Box Layout' ist sinnvoll um Elemente, wie der Name bereits vermuten l\\xe4sst, 'flexibel' anzuordnen\",\n            classN: \"border-fuchsia-400 ring-fuchsia-400 shadow-fuchsia-700/20\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"md:flex\",\n            children: containers.map(function(container, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:w-1/3 w-full p-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\\n            \".concat(container.classN, \" \\n            px-8 py-4 h-full\\n            border-l-8 ring-1\\n            bg-gradient-to-r dark:from-stone-800 dark:via-stone-900 dark:to-stone-900\\n            from-white via-white to-white\\n            text-stone-800 dark:text-white whitespace-pre-line\\n            rounded-r-lg shadow-2xl dark:shadow-black/90\\n          \"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-2 text-xl md:text-lg lg:text-xl font-bold\",\n                                children: container.title\n                            }, void 0, false, {\n                                fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout1.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-base md:text-sm lg:text-base\",\n                                children: container.content\n                            }, void 0, false, {\n                                fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout1.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-4 text-sm font-light italic\",\n                                children: container.footnote\n                            }, void 0, false, {\n                                fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout1.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout1.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, _this)\n                }, \"wrapperChildContainer\".concat(index), false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout1.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this);\n            })\n        }, \"parentContainer\", false, {\n            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout1.js\",\n            lineNumber: 32,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n};\n_c = Layout1;\nvar _c;\n$RefreshReg$(_c, \"Layout1\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F1ZmdhYmUzL0xheW91dDEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFBZSxTQUFTQSxPQUFPLEdBQUc7O0lBQ2hDLElBQU1DLFVBQVUsR0FBRztRQUNqQjtZQUNFQyxLQUFLLEVBQUUsd0JBQXdCO1lBQy9CQyxPQUFPLEVBQUcscUdBQWdHO1lBQ3pHQyxRQUFPLEVBQUUsc0JBQXNCO1lBQ2hDQyxNQUFNLEVBQUUsa0RBQWtEO1NBQzNEO1FBQ0Q7WUFDRUgsS0FBSyxFQUFFLDJCQUEyQjtZQUNsQ0MsT0FBTyxFQUFHLGlpQkFJb0s7WUFDN0tDLFFBQU8sRUFBRyx3REFBc0Q7WUFDakVDLE1BQU0sRUFBRSxrREFBa0Q7U0FDM0Q7UUFDRDtZQUNFSCxLQUFLLEVBQUUsb0NBQW9DO1lBQzNDQyxPQUFPLEVBQUcsOHhCQUk0TztZQUM5T0MsUUFBQSxFQUFHLDJIQUFzSDtZQUNqSUMsTUFBTSxFQUFFLDJEQUEyRDtTQUNwRTtLQUNGO0lBQ0QscUJBQU87a0JBQ0wsNEVBQUNDLEtBQUc7WUFBdUJDLFNBQVMsRUFBQyxTQUFTO3NCQUMzQ04sVUFBVSxDQUFDTyxHQUFHLENBQUMsU0FBQ0MsU0FBUyxFQUFFQyxLQUFLO3FDQUMvQiw4REFBQ0osS0FBRztvQkFBdUNDLFNBQVMsRUFBQyxxQkFBcUI7OEJBQ3hFLDRFQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUUsZ0JBQ2QsQ0FBbUIsTUFPckIsQ0FQSUUsU0FBUyxDQUFDSixNQUFNLEVBQUMsd1VBT3JCLENBQUM7OzBDQUNDLDhEQUFDTSxJQUFFO2dDQUFDSixTQUFTLEVBQUMsOENBQThDOzBDQUFFRSxTQUFTLENBQUNQLEtBQUs7Ozs7O3FDQUFNOzBDQUNuRiw4REFBQ1UsR0FBQztnQ0FBQ0wsU0FBUyxFQUFDLG1DQUFtQzswQ0FBRUUsU0FBUyxDQUFDTixPQUFPOzs7OztxQ0FBSzswQ0FDeEUsOERBQUNTLEdBQUM7Z0NBQUNMLFNBQVMsRUFBQyxnQ0FBZ0M7MENBQUVFLFNBQVMsQ0FBQ0wsUUFBUTs7Ozs7cUNBQUs7Ozs7Ozs2QkFDbEU7bUJBYkUsdUJBQXNCLENBQVEsT0FBTk0sS0FBSyxDQUFFOzs7O3lCQWNuQzthQUNQLENBQUM7V0FqQkssaUJBQWlCOzs7O2dCQWtCcEI7cUJBQ0w7Q0FDSjtBQWxEdUJWLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdWZnYWJlMy9MYXlvdXQxLmpzPzY3ODEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQxKCkge1xuICBjb25zdCBjb250YWluZXJzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnTGF5b3V0IDEgKEF1ZmdhYmUgMy4xKScsXG4gICAgICBjb250ZW50OiBgV2VsY2hlciBMYXlvdXQtTW9kZSB1bmQgd2VzaGFsYiBlciB2ZXJ3ZW5kZXQgd3VyZGUgaXN0IGluIGRlbiBmb2xnZW5kZW4gQ29udGFpbmVybiBhdXNnZWbDvGhydCA9PmAsXG4gICAgICBmb290bm90ZTogJ3ZwdyA9IHZpZXdwb3J0LXdpZHRoJyxcbiAgICAgIGNsYXNzTjogJ2JvcmRlci1jeWFuLTQwMCByaW5nLWN5YW4tNDAwIHNoYWRvdy1jeWFuLTcwMC8yMCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ05vcm1hbCBGbG93ICh2cHcgPCA3NjhweCknLFxuICAgICAgY29udGVudDogYFVudGVyIGVpbmVyIFZpZXdwb3J0LUJyZWl0ZSB2b24gNzY4cHggd2lyZCBkaWUgU2VpdGUgaW0gTGF5b3V0LU1vZGUgJ05vcm1hbCBGbG93JyBhbmdlemVpZ3Q6XG4gICAgICBcbiAgICAgIERlciBQYXJlbnQtQ29udGFpbmVyIGVyaMOkbHQgYWxzIENTUy1Qcm9wZXJ0eSAnZGlzcGxheTogYmxvY2snLiBEYWR1cmNoIHdlcmRlbiBkaWUgenVnZWjDtnJpZ2VuICdDaGlsZHJlbi1Db250YWluZXInIHVudGVyZWluYW5kZXIgYW5nZW9yZG5ldCB1bmQgZXJsYXViZW4gYXVmIGtsZWluZXJlbiBCaWxkc2NoaXJtZW4gZGllIHZvbGxlIEJyZWl0ZSB6dXIgRGFyc3RlbGx1bmcgdm9uIEluaGFsdGVuIHp1IG51dHplbi5cbiAgICAgIFxuICAgICAgRGllICdDaGlsZHJlbi1Db250YWluZXInIHBhc3NlbiBzaWNoIG1pdCBkZW0gQ1NTLVByb3BlcnR5ICd3aWR0aDogMTAwJScgYW4gZGllIFZpZXdwb3J0LUJyZWl0ZSBhbiB1bmQgd2FjaHNlbiBpbiBkZXIgSMO2aGUgamUgbmFjaGRlbSwgd2lldmllbCBDb250ZW50IChJbmhhbHQpIHNpZSBiZWluaGFsdGVuLmAsXG4gICAgICBmb290bm90ZTogYExheW91dC1Nb2RlICdOb3JtYWwgRmxvdycgaXN0IGRlciBTdGFuZGFydC1MYXlvdXQtTW9kZWAsXG4gICAgICBjbGFzc046ICdib3JkZXItbGltZS00MDAgcmluZy1saW1lLTQwMCBzaGFkb3ctbGltZS03MDAvMjAnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdGbGV4aWJsZSBCb3ggTGF5b3V0ICh2cHcgPj0gNzY4cHgpJyxcbiAgICAgIGNvbnRlbnQ6IGBBYiBlaW5lciBCcmVpdGUgdm9uIDc2OHB4IHdpcmQgZGllIFNlaXRlIGltIExheW91dC1Nb2RlICdGbGV4aWJsZSBCb3ggTGF5b3V0JyBhbmdlemVpZ3Q6XG4gICAgICBcbiAgICAgIERlciBQYXJlbnQtQ29udGFpbmVyIGVyaMOkbHQgYWxzIENTUy1Qcm9wZXJ0eSAnZGlzcGxheTogZmxleCcuIERhZHVyY2ggd2VyZGVuIGRpZSB6dWdlaMO2cmlnZW4gJ0NoaWxkcmVuLUNvbnRhaW5lcicgbmViZW5laW5hbmRlciBhbmdlb3JkbmV0IHVuZCBlcmxhdWJlbiBlaW5lIMO8YmVyc2ljaHRsaWNoZSBEYXJzdGVsbHVuZyBkZXMgQ29udGVudHMuIERhbWl0IGplZGVyICdDaGlsZC1Db250YWluZXInIGdsZWljaGJyZWl0IGlzdCB1bmQgbWl0IGRlciBWZXLDpG5kZXJ1bmcgZGVyIFZpZXdwb3J0LUJyZWl0ZSB3w6RjaHN0IGJ6dy4gc2NocnVtcGZ0LCBlcmjDpGx0IGVyIChiencuIHNlaW4gV3JhcHBlci1FbGVtZW50KSBhbHMgQ1NTLVByb3BlcnR5ICd3aWR0aDogY2FsYygxMDAlLzMpJy5cbiAgICAgIFxuICAgICAgRGVyIFBhcmVudC1Db250YWluZXIgd8OkY2hzdCBmbGV4aWJlbCBhdWYgZGllIEjDtmhlIGRlcyBncsO2w590ZW4gQ2hpbGQtQ29udGFpbmVycy4gRGFkdXJjaCBrw7ZubmVuIGRpZSBDaGlsZHJlbi1Db250YWluZXIgbWl0IENTUy1Qcm9wZXJ0eSAnaGVpZ2h0OiAxMDAlJyBhbiBkaWUgSMO2aGUgZGVzIFBhcmVudC1Db250YWluZXJzICh3ZWxjaGVyIGRpZSBIw7ZoZSBkZXMgaMO2Y2hzdGVuIEVsZW1lbnRzIGhhdCkgYW5nZXBhc3N0IHdlcmRlbi5gLFxuICAgICAgZm9vdG5vdGU6IGBMYXlvdXQtTW9kZSAnRmxleGlibGUgQm94IExheW91dCcgaXN0IHNpbm52b2xsIHVtIEVsZW1lbnRlLCB3aWUgZGVyIE5hbWUgYmVyZWl0cyB2ZXJtdXRlbiBsw6Rzc3QsICdmbGV4aWJlbCcgYW56dW9yZG5lbmAsXG4gICAgICBjbGFzc046ICdib3JkZXItZnVjaHNpYS00MDAgcmluZy1mdWNoc2lhLTQwMCBzaGFkb3ctZnVjaHNpYS03MDAvMjAnLFxuICAgIH1cbiAgXVxuICByZXR1cm4gPD5cbiAgICA8ZGl2IGtleT0ncGFyZW50Q29udGFpbmVyJyBjbGFzc05hbWU9J21kOmZsZXgnPlxuICAgICAge2NvbnRhaW5lcnMubWFwKChjb250YWluZXIsIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtgd3JhcHBlckNoaWxkQ29udGFpbmVyJHtpbmRleH1gfSBjbGFzc05hbWU9J21kOnctMS8zIHctZnVsbCBwLTInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgICAke2NvbnRhaW5lci5jbGFzc059IFxuICAgICAgICAgICAgcHgtOCBweS00IGgtZnVsbFxuICAgICAgICAgICAgYm9yZGVyLWwtOCByaW5nLTFcbiAgICAgICAgICAgIGJnLWdyYWRpZW50LXRvLXIgZGFyazpmcm9tLXN0b25lLTgwMCBkYXJrOnZpYS1zdG9uZS05MDAgZGFyazp0by1zdG9uZS05MDBcbiAgICAgICAgICAgIGZyb20td2hpdGUgdmlhLXdoaXRlIHRvLXdoaXRlXG4gICAgICAgICAgICB0ZXh0LXN0b25lLTgwMCBkYXJrOnRleHQtd2hpdGUgd2hpdGVzcGFjZS1wcmUtbGluZVxuICAgICAgICAgICAgcm91bmRlZC1yLWxnIHNoYWRvdy0yeGwgZGFyazpzaGFkb3ctYmxhY2svOTBcbiAgICAgICAgICBgfT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J21iLTIgdGV4dC14bCBtZDp0ZXh0LWxnIGxnOnRleHQteGwgZm9udC1ib2xkJz57Y29udGFpbmVyLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtYmFzZSBtZDp0ZXh0LXNtIGxnOnRleHQtYmFzZSc+e2NvbnRhaW5lci5jb250ZW50fTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXQtNCB0ZXh0LXNtIGZvbnQtbGlnaHQgaXRhbGljJz57Y29udGFpbmVyLmZvb3Rub3RlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgPC8+XG59XG4iXSwibmFtZXMiOlsiTGF5b3V0MSIsImNvbnRhaW5lcnMiLCJ0aXRsZSIsImNvbnRlbnQiLCJmb290bm90ZSIsImNsYXNzTiIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImNvbnRhaW5lciIsImluZGV4IiwiaDIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/aufgabe3/Layout1.js\n"));

/***/ })

});