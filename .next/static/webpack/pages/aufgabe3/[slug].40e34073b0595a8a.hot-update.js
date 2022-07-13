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

/***/ "./components/aufgabe3/Layout4.js":
/*!****************************************!*\
  !*** ./components/aufgabe3/Layout4.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout4; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Layout4(param) {\n    var isDark = param.isDark;\n    var _this = this;\n    var content = [\n        {\n            title: \"Tailwind\",\n            listItems: [\n                \"Vordefinierte CSS-Klassen, die \\xfcber das 'classNames'-Attribut direkt an HTML-Elemente gebunden werden\",\n                \"Klassennamen sind strukturiert aufgebaut und erm\\xf6glichen eine intuitive Nutzung\",\n                \"Einfache Konfigurierungsm\\xf6glichkeiten & Theming via config-file\",\n                \"Klassen-Pr\\xe4fixe f\\xfcr Media Queries, Hover- & Focus-States\",\n                \"Lightweight: Entfernt automatisch alle unbenutzten CSS-Klassen beim Erstellen des Production-Builds\",\n                \"Farben- und Gr\\xf6\\xdfen-Paletten f\\xfcr einheitlichere Darstellung\",\n                \"Bedenkenloses \\xe4ndern der Klassen, da diese, wenn nicht anders via @apply directive oder tailwind.config.js vorgegeben, lokal und nicht global definiert werden\",\n                \"Nachteile: \\n                1. Unaufger\\xe4umte, un\\xfcbersichtliche Darstellung der HTML-Elemente im Code (Strings k\\xf6nnten bei Bedarf jedoch in Variablen gespeichert werden)\\n                2. Klassennamen k\\xf6nnen nicht 'on-the-fly' dynamisch ver\\xe4ndert werden (z.B. bg-blue-[intensityVar]), was u. A. die Erstellung von Templates bzw. Template-Components verkompliziert\", \n            ]\n        },\n        {\n            title: \"Sass\",\n            listItems: [\n                \"variables\",\n                \"mixins\",\n                \"functions\",\n                \"extends\",\n                \"imports\",\n                \"includes\"\n            ]\n        }\n    ];\n    var boxModellListItems = [\n        \"Content-Box: Bildet den Content des HTML-Elements ab\",\n        \"Padding: Freier, transparenter Bereich zwischen der Content-Box und Border\",\n        \"Border: Rahmen des Elements\",\n        \"Margin: Freier, transparenter Bereich um den Rahmen des Elements herum (transparent)\",\n        \"Standartm\\xe4\\xdfig werden Breite und H\\xf6he, die einem Element zugewiesen werden der Content-Box angelegt (box-sizing: content-box), was das Handling mit Padding und Border-Eigenschaften kompliziert macht. Um Abhilfe zu schaffen, kann bzw. sollte box-sizing: border-box verwendet werden.\", \n    ];\n    var Title = function(param) {\n        var title = param.title, titleClassN = param.titleClassN;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(titleClassN, \" \").concat(isDark ? \"silver-gradient\" : \"blue-gradient\", \" w-fit font-semibold text-lg\"),\n            children: title\n        }, void 0, false, {\n            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n            lineNumber: 42,\n            columnNumber: 9\n        }, _this);\n    };\n    var ListItems = function(param) {\n        var listItems = param.listItems;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            style: {\n                listStyleType: \"disc\"\n            },\n            className: \"ml-4\",\n            children: listItems.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: item\n                }, index, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n            lineNumber: 48,\n            columnNumber: 9\n        }, _this);\n    };\n    var List = function(param) {\n        var title = param.title, listItems = param.listItems, conClassN = param.conClassN, titleClassN = param.titleClassN;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(conClassN),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                    title: title,\n                    titleClassN: titleClassN\n                }, void 0, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItems, {\n                    listItems: listItems\n                }, void 0, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 58,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n            lineNumber: 56,\n            columnNumber: 9\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\\n        max-w-[732px] mx-auto py-4 px-4\\n        dark:from-stone-800 dark:via-stone-900 dark:to-black bg-gradient-to-br from-white via-white to-indigo-50 \\n        dark:text-stone-300 text-stone-800\\n        rounded-3xl shadow-2xl dark:shadow-black/90 shadow-indigo-800/80\\n        ring dark:ring-white/30 ring-indigo-500/70 \\n        border dark:border-indigo-700\\n        border-blue-800\\n      \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold mb-3 \".concat(isDark ? \"silver-gradient\" : \"blue-gradient\", \" w-fit\"),\n                    children: \"Tailwind vs. Sass (3.4)\"\n                }, void 0, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"whitespace-pre-line\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sm:flex\",\n                        children: content.map(function(item, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {\n                                title: item.title,\n                                listItems: item.listItems,\n                                conClassN: \"sm:w-1/2 mb-4\",\n                                titleClassN: \"mx-auto\"\n                            }, index, false, {\n                                fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                                lineNumber: 77,\n                                columnNumber: 17\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold mt-5 mb-3 \".concat(isDark ? \"silver-gradient\" : \"blue-gradient\", \" w-fit\"),\n                    children: \"CSS Box-Modell (3.5)\"\n                }, void 0, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"whitespace-pre-line\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                            title: \"Box-Modell\",\n                            titleClassN: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItems, {\n                            listItems: boxModellListItems\n                        }, void 0, false, {\n                            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-6 text-sm\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-indigo-900 p-2 mt-2 shadow-black text-center text-white\",\n                                children: [\n                                    \"Margin\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-500 p-2 mt-2 shadow-black m-6 text-center text-white\",\n                                        children: [\n                                            \"Border\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bg-lime-300 p-2 mt-2 shadow-black m-6 text-center text-black\",\n                                                children: [\n                                                    \"Padding\",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"bg-white p-2 mt-2 shadow-black m-6 text-center text-black h-32 font-bold center text-base\",\n                                                        children: \"Content\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                                                        lineNumber: 90,\n                                                        columnNumber: 29\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                                                lineNumber: 89,\n                                                columnNumber: 25\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                                lineNumber: 87,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n};\n_c = Layout4;\nvar _c;\n$RefreshReg$(_c, \"Layout4\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUFBZTtnQ0FBQ1osV0FBVyxFQUFDLFNBQVM7K0JBQXBHUyxLQUFLOzs7O3FDQUFrRzt5QkFDckgsQ0FBQzs7Ozs7NEJBQ0U7Ozs7O3dCQUNGOzhCQUNOLDhEQUFDSSxJQUFFO29CQUFDWCxTQUFTLEVBQUUsK0JBQThCLENBQStDLE1BQU0sQ0FBbkRSLE1BQU0sR0FBRyxpQkFBaUIsR0FBRyxlQUFlLEVBQUMsUUFBTSxDQUFDOzhCQUFFLHNCQUFvQjs7Ozs7d0JBQUs7OEJBQzlILDhEQUFDTyxLQUFHO29CQUFDQyxTQUFTLEVBQUMscUJBQXFCOztzQ0FDaEMsOERBQUNILEtBQUs7NEJBQUNILEtBQUssRUFBQyxZQUFZOzRCQUFDSSxXQUFXLEVBQUMsRUFBRTs7Ozs7Z0NBQUc7c0NBQzNDLDhEQUFDRyxTQUFTOzRCQUFDTixTQUFTLEVBQUVDLGtCQUFrQjs7Ozs7Z0NBQUk7c0NBQzVDLDhEQUFDZ0IsSUFBRTs7OztnQ0FBRTtzQ0FDTCw4REFBQ2IsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLGNBQWM7c0NBQ3pCLDRFQUFDRCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsNERBQTREOztvQ0FBQyxRQUN4RTtrREFBQSw4REFBQ0QsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLDhEQUE4RDs7NENBQUMsUUFDMUU7MERBQUEsOERBQUNELEtBQUc7Z0RBQUNDLFNBQVMsRUFBQyw4REFBOEQ7O29EQUFDLFNBQzFFO2tFQUFBLDhEQUFDRCxLQUFHO3dEQUFDQyxTQUFTLEVBQUMsMkZBQTJGO2tFQUFDLFNBRTNHOzs7Ozs0REFBTTs7Ozs7O29EQUNKOzs7Ozs7NENBQ0o7Ozs7OztvQ0FDSjs7Ozs7Z0NBQ0o7Ozs7Ozt3QkFDSjs7Ozs7O2dCQUNGOzs7OztZQUNGLENBQ1A7Q0FDRjtBQW5HdUJULEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdWZnYWJlMy9MYXlvdXQ0LmpzPzYwZGYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQ0KHsgaXNEYXJrIH0pIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnVGFpbHdpbmQnLFxuICAgICAgICAgICAgbGlzdEl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgYFZvcmRlZmluaWVydGUgQ1NTLUtsYXNzZW4sIGRpZSDDvGJlciBkYXMgJ2NsYXNzTmFtZXMnLUF0dHJpYnV0IGRpcmVrdCBhbiBIVE1MLUVsZW1lbnRlIGdlYnVuZGVuIHdlcmRlbmAsXG4gICAgICAgICAgICAgICAgYEtsYXNzZW5uYW1lbiBzaW5kIHN0cnVrdHVyaWVydCBhdWZnZWJhdXQgdW5kIGVybcO2Z2xpY2hlbiBlaW5lIGludHVpdGl2ZSBOdXR6dW5nYCxcbiAgICAgICAgICAgICAgICBgRWluZmFjaGUgS29uZmlndXJpZXJ1bmdzbcO2Z2xpY2hrZWl0ZW4gJiBUaGVtaW5nIHZpYSBjb25maWctZmlsZWAsXG4gICAgICAgICAgICAgICAgYEtsYXNzZW4tUHLDpGZpeGUgZsO8ciBNZWRpYSBRdWVyaWVzLCBIb3Zlci0gJiBGb2N1cy1TdGF0ZXNgLFxuICAgICAgICAgICAgICAgIGBMaWdodHdlaWdodDogRW50ZmVybnQgYXV0b21hdGlzY2ggYWxsZSB1bmJlbnV0enRlbiBDU1MtS2xhc3NlbiBiZWltIEVyc3RlbGxlbiBkZXMgUHJvZHVjdGlvbi1CdWlsZHNgLFxuICAgICAgICAgICAgICAgIGBGYXJiZW4tIHVuZCBHcsO2w59lbi1QYWxldHRlbiBmw7xyIGVpbmhlaXRsaWNoZXJlIERhcnN0ZWxsdW5nYCxcbiAgICAgICAgICAgICAgICBgQmVkZW5rZW5sb3NlcyDDpG5kZXJuIGRlciBLbGFzc2VuLCBkYSBkaWVzZSwgd2VubiBuaWNodCBhbmRlcnMgdmlhIEBhcHBseSBkaXJlY3RpdmUgb2RlciB0YWlsd2luZC5jb25maWcuanMgdm9yZ2VnZWJlbiwgbG9rYWwgdW5kIG5pY2h0IGdsb2JhbCBkZWZpbmllcnQgd2VyZGVuYCxcbiAgICAgICAgICAgICAgICBgTmFjaHRlaWxlOiBcbiAgICAgICAgICAgICAgICAxLiBVbmF1ZmdlcsOkdW10ZSwgdW7DvGJlcnNpY2h0bGljaGUgRGFyc3RlbGx1bmcgZGVyIEhUTUwtRWxlbWVudGUgaW0gQ29kZSAoU3RyaW5ncyBrw7ZubnRlbiBiZWkgQmVkYXJmIGplZG9jaCBpbiBWYXJpYWJsZW4gZ2VzcGVpY2hlcnQgd2VyZGVuKVxuICAgICAgICAgICAgICAgIDIuIEtsYXNzZW5uYW1lbiBrw7ZubmVuIG5pY2h0ICdvbi10aGUtZmx5JyBkeW5hbWlzY2ggdmVyw6RuZGVydCB3ZXJkZW4gKHouQi4gYmctYmx1ZS1baW50ZW5zaXR5VmFyXSksIHdhcyB1LiBBLiBkaWUgRXJzdGVsbHVuZyB2b24gVGVtcGxhdGVzIGJ6dy4gVGVtcGxhdGUtQ29tcG9uZW50cyB2ZXJrb21wbGl6aWVydGAsXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnU2FzcycsXG4gICAgICAgICAgICBsaXN0SXRlbXM6IFtcbiAgICAgICAgICAgICAgICAndmFyaWFibGVzJywgXG4gICAgICAgICAgICAgICAgJ21peGlucycsXG4gICAgICAgICAgICAgICAgJ2Z1bmN0aW9ucycsXG4gICAgICAgICAgICAgICAgJ2V4dGVuZHMnLFxuICAgICAgICAgICAgICAgICdpbXBvcnRzJyxcbiAgICAgICAgICAgICAgICAnaW5jbHVkZXMnXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICBdXG5cbiAgICBjb25zdCBib3hNb2RlbGxMaXN0SXRlbXMgPSBbXG4gICAgICAgIGBDb250ZW50LUJveDogQmlsZGV0IGRlbiBDb250ZW50IGRlcyBIVE1MLUVsZW1lbnRzIGFiYCxcbiAgICAgICAgYFBhZGRpbmc6IEZyZWllciwgdHJhbnNwYXJlbnRlciBCZXJlaWNoIHp3aXNjaGVuIGRlciBDb250ZW50LUJveCB1bmQgQm9yZGVyYCxcbiAgICAgICAgYEJvcmRlcjogUmFobWVuIGRlcyBFbGVtZW50c2AsXG4gICAgICAgIGBNYXJnaW46IEZyZWllciwgdHJhbnNwYXJlbnRlciBCZXJlaWNoIHVtIGRlbiBSYWhtZW4gZGVzIEVsZW1lbnRzIGhlcnVtICh0cmFuc3BhcmVudClgLFxuICAgICAgICBgU3RhbmRhcnRtw6TDn2lnIHdlcmRlbiBCcmVpdGUgdW5kIEjDtmhlLCBkaWUgZWluZW0gRWxlbWVudCB6dWdld2llc2VuIHdlcmRlbiBkZXIgQ29udGVudC1Cb3ggYW5nZWxlZ3QgKGJveC1zaXppbmc6IGNvbnRlbnQtYm94KSwgd2FzIGRhcyBIYW5kbGluZyBtaXQgUGFkZGluZyB1bmQgQm9yZGVyLUVpZ2Vuc2NoYWZ0ZW4ga29tcGxpemllcnQgbWFjaHQuIFVtIEFiaGlsZmUgenUgc2NoYWZmZW4sIGthbm4gYnp3LiBzb2xsdGUgYm94LXNpemluZzogYm9yZGVyLWJveCB2ZXJ3ZW5kZXQgd2VyZGVuLmAsXG4gICAgXVxuXG4gICAgY29uc3QgVGl0bGUgPSAoeyB0aXRsZSwgdGl0bGVDbGFzc04gfSkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dGl0bGVDbGFzc059ICR7aXNEYXJrID8gJ3NpbHZlci1ncmFkaWVudCcgOiAnYmx1ZS1ncmFkaWVudCd9IHctZml0IGZvbnQtc2VtaWJvbGQgdGV4dC1sZ2B9PlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICBjb25zdCBMaXN0SXRlbXMgPSAoeyBsaXN0SXRlbXMgfSkgPT4gKFxuICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlVHlwZTogJ2Rpc2MnIH19IGNsYXNzTmFtZT0nbWwtNCcgPlxuICAgICAgICAgICAge2xpc3RJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PntpdGVtfTwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICApXG5cbiAgICBjb25zdCBMaXN0ID0gKHsgdGl0bGUsIGxpc3RJdGVtcywgY29uQ2xhc3NOLCB0aXRsZUNsYXNzTiB9KSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjb25DbGFzc059YH0+XG4gICAgICAgICAgICA8VGl0bGUgdGl0bGU9e3RpdGxlfSB0aXRsZUNsYXNzTj17dGl0bGVDbGFzc059IC8+XG4gICAgICAgICAgICA8TGlzdEl0ZW1zIGxpc3RJdGVtcz17bGlzdEl0ZW1zfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncHgtMic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YFxuICAgICAgICBtYXgtdy1bNzMycHhdIG14LWF1dG8gcHktNCBweC00XG4gICAgICAgIGRhcms6ZnJvbS1zdG9uZS04MDAgZGFyazp2aWEtc3RvbmUtOTAwIGRhcms6dG8tYmxhY2sgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS13aGl0ZSB2aWEtd2hpdGUgdG8taW5kaWdvLTUwIFxuICAgICAgICBkYXJrOnRleHQtc3RvbmUtMzAwIHRleHQtc3RvbmUtODAwXG4gICAgICAgIHJvdW5kZWQtM3hsIHNoYWRvdy0yeGwgZGFyazpzaGFkb3ctYmxhY2svOTAgc2hhZG93LWluZGlnby04MDAvODBcbiAgICAgICAgcmluZyBkYXJrOnJpbmctd2hpdGUvMzAgcmluZy1pbmRpZ28tNTAwLzcwIFxuICAgICAgICBib3JkZXIgZGFyazpib3JkZXItaW5kaWdvLTcwMFxuICAgICAgICBib3JkZXItYmx1ZS04MDBcbiAgICAgIGB9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtgdGV4dC0yeGwgZm9udC1ib2xkIG1iLTMgJHtpc0RhcmsgPyAnc2lsdmVyLWdyYWRpZW50JyA6ICdibHVlLWdyYWRpZW50J30gdy1maXRgfT5UYWlsd2luZCB2cy4gU2FzcyAoMy40KTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aGl0ZXNwYWNlLXByZS1saW5lJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmZsZXhcIj5cbiAgICAgICAgICAgIHtjb250ZW50Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8TGlzdCBrZXk9e2luZGV4fSB0aXRsZT17aXRlbS50aXRsZX0gbGlzdEl0ZW1zPXtpdGVtLmxpc3RJdGVtc30gY29uQ2xhc3NOPSdzbTp3LTEvMiBtYi00JyB0aXRsZUNsYXNzTj0nbXgtYXV0bycgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YHRleHQtMnhsIGZvbnQtYm9sZCBtdC01IG1iLTMgJHtpc0RhcmsgPyAnc2lsdmVyLWdyYWRpZW50JyA6ICdibHVlLWdyYWRpZW50J30gdy1maXRgfT5DU1MgQm94LU1vZGVsbCAoMy41KTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aGl0ZXNwYWNlLXByZS1saW5lJz5cbiAgICAgICAgICAgIDxUaXRsZSB0aXRsZT0nQm94LU1vZGVsbCcgdGl0bGVDbGFzc049JycgLz5cbiAgICAgICAgICAgIDxMaXN0SXRlbXMgbGlzdEl0ZW1zPXtib3hNb2RlbGxMaXN0SXRlbXN9IC8+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS02IHRleHQtc21cIj4gICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1pbmRpZ28tOTAwIHAtMiBtdC0yIHNoYWRvdy1ibGFjayB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+TWFyZ2luXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgcC0yIG10LTIgc2hhZG93LWJsYWNrIG0tNiB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+Qm9yZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWxpbWUtMzAwIHAtMiBtdC0yIHNoYWRvdy1ibGFjayBtLTYgdGV4dC1jZW50ZXIgdGV4dC1ibGFja1wiPlBhZGRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtMiBtdC0yIHNoYWRvdy1ibGFjayBtLTYgdGV4dC1jZW50ZXIgdGV4dC1ibGFjayBoLTMyIGZvbnQtYm9sZCBjZW50ZXIgdGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiTGF5b3V0NCIsImlzRGFyayIsImNvbnRlbnQiLCJ0aXRsZSIsImxpc3RJdGVtcyIsImJveE1vZGVsbExpc3RJdGVtcyIsIlRpdGxlIiwidGl0bGVDbGFzc04iLCJkaXYiLCJjbGFzc05hbWUiLCJMaXN0SXRlbXMiLCJ1bCIsInN0eWxlIiwibGlzdFN0eWxlVHlwZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxpIiwiTGlzdCIsImNvbkNsYXNzTiIsImgxIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/aufgabe3/Layout4.js\n"));

/***/ })

});