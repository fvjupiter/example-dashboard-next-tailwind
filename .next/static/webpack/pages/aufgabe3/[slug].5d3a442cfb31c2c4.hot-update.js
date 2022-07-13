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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout4; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Layout4(param) {\n    var isDark = param.isDark;\n    var _this = this;\n    var content = [\n        {\n            title: \"Tailwind\",\n            listItems: [\n                \"Vordefinierte CSS-Klassen, die \\xfcber das 'classNames'-Attribut direkt an HTML-Elemente gebunden werden\",\n                \"Klassennamen sind strukturiert aufgebaut und erm\\xf6glichen eine intuitive Nutzung\",\n                \"Einfache Konfigurierungsm\\xf6glichkeiten & Theming via config-file\",\n                \"Klassen-Pr\\xe4fixe f\\xfcr Media Queries, Hover- & Focus-States\",\n                \"Lightweight: Entfernt automatisch alle unbenutzten CSS-Klassen beim Erstellen des Production-Builds\",\n                \"Farben- und Gr\\xf6\\xdfen-Paletten f\\xfcr einheitlichere Darstellung\",\n                \"Das Tailwind-Team verfolgt einen minimalistischen, modernen der Leichtigkeit \",\n                \"Bedenkenloses \\xe4ndern der Klassen, da diese, wenn nicht anders via @apply directive oder tailwind.config.js vorgegeben, lokal und nicht global definiert werden\",\n                \"Nachteile: \\n                1. Unaufger\\xe4umte, un\\xfcbersichtliche Darstellung der HTML-Elemente im Code (Strings k\\xf6nnten bei Bedarf jedoch in Variablen gespeichert werden)\\n                2. Klassennamen k\\xf6nnen nicht 'on-the-fly' dynamisch ver\\xe4ndert werden (z.B. bg-blue-[intensityVar]), was u. A. die Erstellung von Templates bzw. Template-Components verkompliziert\", \n            ]\n        },\n        {\n            title: \"Sass\",\n            listItems: [\n                \"variables\",\n                \"mixins\",\n                \"functions\",\n                \"extends\",\n                \"imports\",\n                \"includes\"\n            ]\n        }\n    ];\n    var boxModellListItems = [\n        \"Content-Box: Bildet den Content des HTML-Elements ab\",\n        \"Padding: Freier, transparenter Bereich zwischen der Content-Box und Border\",\n        \"Border: Rahmen des Elements\",\n        \"Margin: Freier, transparenter Bereich um den Rahmen des Elements herum (transparent)\",\n        \"Standartm\\xe4\\xdfig werden Breite und H\\xf6he, die einem Element zugewiesen werden der Content-Box angelegt (box-sizing: content-box), was das Handling mit Padding und Border-Eigenschaften kompliziert macht. Um Abhilfe zu schaffen, kann bzw. sollte 'box-sizing: border-box' verwendet werden, wodurch sich zugewiesene Breite und H\\xf6he aus Content-Box, Padding und Border zusammensetzen.\", \n    ];\n    var Title = function(param) {\n        var title = param.title, titleClassN = param.titleClassN;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(titleClassN, \" \").concat(isDark ? \"silver-gradient\" : \"blue-gradient\", \" w-fit font-semibold text-lg\"),\n            children: title\n        }, void 0, false, {\n            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n            lineNumber: 43,\n            columnNumber: 9\n        }, _this);\n    };\n    var ListItems = function(param) {\n        var listItems = param.listItems;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            style: {\n                listStyleType: \"disc\"\n            },\n            className: \"ml-4\",\n            children: listItems.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: item\n                }, index, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n            lineNumber: 49,\n            columnNumber: 9\n        }, _this);\n    };\n    var List = function(param) {\n        var title = param.title, listItems = param.listItems, conClassN = param.conClassN, titleClassN = param.titleClassN;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(conClassN),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                    title: title,\n                    titleClassN: titleClassN\n                }, void 0, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 58,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItems, {\n                    listItems: listItems\n                }, void 0, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 59,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n            lineNumber: 57,\n            columnNumber: 9\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\\n        max-w-[732px] mx-auto py-4 px-4\\n        dark:from-stone-800 dark:via-stone-900 dark:to-black bg-gradient-to-br from-white via-white to-indigo-50 \\n        dark:text-stone-300 text-stone-800\\n        rounded-3xl shadow-2xl dark:shadow-black/90 shadow-indigo-800/80\\n        ring dark:ring-white/30 ring-indigo-500/70 \\n        border dark:border-indigo-700\\n        border-blue-800\\n      \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold mb-3 \".concat(isDark ? \"silver-gradient\" : \"blue-gradient\", \" w-fit\"),\n                    children: \"Tailwind vs. Sass (3.4)\"\n                }, void 0, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"whitespace-pre-line\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sm:flex\",\n                        children: content.map(function(item, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {\n                                title: item.title,\n                                listItems: item.listItems,\n                                conClassN: \"sm:w-1/2 mb-4\",\n                                titleClassN: \"mx-auto\"\n                            }, index, false, {\n                                fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                                lineNumber: 78,\n                                columnNumber: 17\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold mt-5 mb-3 \".concat(isDark ? \"silver-gradient\" : \"blue-gradient\", \" w-fit\"),\n                    children: \"CSS Box-Modell (3.5)\"\n                }, void 0, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"whitespace-pre-line\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                            title: \"Box-Modell\",\n                            titleClassN: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItems, {\n                            listItems: boxModellListItems\n                        }, void 0, false, {\n                            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-6 text-sm\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-indigo-900 p-2 mt-2 shadow-black text-center text-white\",\n                                children: [\n                                    \"Margin\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-500 p-2 mt-2 shadow-black m-6 text-center text-white\",\n                                        children: [\n                                            \"Border\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bg-lime-300 p-2 mt-2 shadow-black m-6 text-center text-black\",\n                                                children: [\n                                                    \"Padding\",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"bg-white p-2 mt-2 shadow-black m-6 text-center text-black h-32 font-bold center text-base\",\n                                                        children: \"Content\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                                                        lineNumber: 91,\n                                                        columnNumber: 29\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 25\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                                lineNumber: 88,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n};\n_c = Layout4;\nvar _c;\n$RefreshReg$(_c, \"Layout4\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVlLFNBQVMsRUFBQyxlQUFlO2dDQUFDWixXQUFXLEVBQUMsU0FBUzsrQkFBcEdTLEtBQUs7Ozs7cUNBQWtHO3lCQUNySCxDQUFDOzs7Ozs0QkFDRTs7Ozs7d0JBQ0Y7OEJBQ04sOERBQUNJLElBQUU7b0JBQUNYLFNBQVMsRUFBRSwrQkFBOEIsQ0FBK0MsTUFBTSxDQUFuRFIsTUFBTSxHQUFHLGlCQUFpQixHQUFHLGVBQWUsRUFBQyxRQUFNLENBQUM7OEJBQUUsc0JBQW9COzs7Ozt3QkFBSzs4QkFDOUgsOERBQUNPLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxxQkFBcUI7O3NDQUNoQyw4REFBQ0gsS0FBSzs0QkFBQ0gsS0FBSyxFQUFDLFlBQVk7NEJBQUNJLFdBQVcsRUFBQyxFQUFFOzs7OztnQ0FBRztzQ0FDM0MsOERBQUNHLFNBQVM7NEJBQUNOLFNBQVMsRUFBRUMsa0JBQWtCOzs7OztnQ0FBSTtzQ0FDNUMsOERBQUNnQixJQUFFOzs7O2dDQUFFO3NDQUNMLDhEQUFDYixLQUFHOzRCQUFDQyxTQUFTLEVBQUMsY0FBYztzQ0FDekIsNEVBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyw0REFBNEQ7O29DQUFDLFFBQ3hFO2tEQUFBLDhEQUFDRCxLQUFHO3dDQUFDQyxTQUFTLEVBQUMsOERBQThEOzs0Q0FBQyxRQUMxRTswREFBQSw4REFBQ0QsS0FBRztnREFBQ0MsU0FBUyxFQUFDLDhEQUE4RDs7b0RBQUMsU0FDMUU7a0VBQUEsOERBQUNELEtBQUc7d0RBQUNDLFNBQVMsRUFBQywyRkFBMkY7a0VBQUMsU0FFM0c7Ozs7OzREQUFNOzs7Ozs7b0RBQ0o7Ozs7Ozs0Q0FDSjs7Ozs7O29DQUNKOzs7OztnQ0FDSjs7Ozs7O3dCQUNKOzs7Ozs7Z0JBQ0Y7Ozs7O1lBQ0YsQ0FDUDtDQUNGO0FBcEd1QlQsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2F1ZmdhYmUzL0xheW91dDQuanM/NjBkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dDQoeyBpc0RhcmsgfSkge1xuXG4gICAgY29uc3QgY29udGVudCA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdUYWlsd2luZCcsXG4gICAgICAgICAgICBsaXN0SXRlbXM6IFtcbiAgICAgICAgICAgICAgICBgVm9yZGVmaW5pZXJ0ZSBDU1MtS2xhc3NlbiwgZGllIMO8YmVyIGRhcyAnY2xhc3NOYW1lcyctQXR0cmlidXQgZGlyZWt0IGFuIEhUTUwtRWxlbWVudGUgZ2VidW5kZW4gd2VyZGVuYCxcbiAgICAgICAgICAgICAgICBgS2xhc3Nlbm5hbWVuIHNpbmQgc3RydWt0dXJpZXJ0IGF1ZmdlYmF1dCB1bmQgZXJtw7ZnbGljaGVuIGVpbmUgaW50dWl0aXZlIE51dHp1bmdgLFxuICAgICAgICAgICAgICAgIGBFaW5mYWNoZSBLb25maWd1cmllcnVuZ3Ntw7ZnbGljaGtlaXRlbiAmIFRoZW1pbmcgdmlhIGNvbmZpZy1maWxlYCxcbiAgICAgICAgICAgICAgICBgS2xhc3Nlbi1QcsOkZml4ZSBmw7xyIE1lZGlhIFF1ZXJpZXMsIEhvdmVyLSAmIEZvY3VzLVN0YXRlc2AsXG4gICAgICAgICAgICAgICAgYExpZ2h0d2VpZ2h0OiBFbnRmZXJudCBhdXRvbWF0aXNjaCBhbGxlIHVuYmVudXR6dGVuIENTUy1LbGFzc2VuIGJlaW0gRXJzdGVsbGVuIGRlcyBQcm9kdWN0aW9uLUJ1aWxkc2AsXG4gICAgICAgICAgICAgICAgYEZhcmJlbi0gdW5kIEdyw7bDn2VuLVBhbGV0dGVuIGbDvHIgZWluaGVpdGxpY2hlcmUgRGFyc3RlbGx1bmdgLFxuICAgICAgICAgICAgICAgIGBEYXMgVGFpbHdpbmQtVGVhbSB2ZXJmb2xndCBlaW5lbiBtaW5pbWFsaXN0aXNjaGVuLCBtb2Rlcm5lbiBkZXIgTGVpY2h0aWdrZWl0IGAsXG4gICAgICAgICAgICAgICAgYEJlZGVua2VubG9zZXMgw6RuZGVybiBkZXIgS2xhc3NlbiwgZGEgZGllc2UsIHdlbm4gbmljaHQgYW5kZXJzIHZpYSBAYXBwbHkgZGlyZWN0aXZlIG9kZXIgdGFpbHdpbmQuY29uZmlnLmpzIHZvcmdlZ2ViZW4sIGxva2FsIHVuZCBuaWNodCBnbG9iYWwgZGVmaW5pZXJ0IHdlcmRlbmAsXG4gICAgICAgICAgICAgICAgYE5hY2h0ZWlsZTogXG4gICAgICAgICAgICAgICAgMS4gVW5hdWZnZXLDpHVtdGUsIHVuw7xiZXJzaWNodGxpY2hlIERhcnN0ZWxsdW5nIGRlciBIVE1MLUVsZW1lbnRlIGltIENvZGUgKFN0cmluZ3Mga8O2bm50ZW4gYmVpIEJlZGFyZiBqZWRvY2ggaW4gVmFyaWFibGVuIGdlc3BlaWNoZXJ0IHdlcmRlbilcbiAgICAgICAgICAgICAgICAyLiBLbGFzc2VubmFtZW4ga8O2bm5lbiBuaWNodCAnb24tdGhlLWZseScgZHluYW1pc2NoIHZlcsOkbmRlcnQgd2VyZGVuICh6LkIuIGJnLWJsdWUtW2ludGVuc2l0eVZhcl0pLCB3YXMgdS4gQS4gZGllIEVyc3RlbGx1bmcgdm9uIFRlbXBsYXRlcyBiencuIFRlbXBsYXRlLUNvbXBvbmVudHMgdmVya29tcGxpemllcnRgLFxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1Nhc3MnLFxuICAgICAgICAgICAgbGlzdEl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgJ3ZhcmlhYmxlcycsIFxuICAgICAgICAgICAgICAgICdtaXhpbnMnLFxuICAgICAgICAgICAgICAgICdmdW5jdGlvbnMnLFxuICAgICAgICAgICAgICAgICdleHRlbmRzJyxcbiAgICAgICAgICAgICAgICAnaW1wb3J0cycsXG4gICAgICAgICAgICAgICAgJ2luY2x1ZGVzJ1xuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgXVxuXG4gICAgY29uc3QgYm94TW9kZWxsTGlzdEl0ZW1zID0gW1xuICAgICAgICBgQ29udGVudC1Cb3g6IEJpbGRldCBkZW4gQ29udGVudCBkZXMgSFRNTC1FbGVtZW50cyBhYmAsXG4gICAgICAgIGBQYWRkaW5nOiBGcmVpZXIsIHRyYW5zcGFyZW50ZXIgQmVyZWljaCB6d2lzY2hlbiBkZXIgQ29udGVudC1Cb3ggdW5kIEJvcmRlcmAsXG4gICAgICAgIGBCb3JkZXI6IFJhaG1lbiBkZXMgRWxlbWVudHNgLFxuICAgICAgICBgTWFyZ2luOiBGcmVpZXIsIHRyYW5zcGFyZW50ZXIgQmVyZWljaCB1bSBkZW4gUmFobWVuIGRlcyBFbGVtZW50cyBoZXJ1bSAodHJhbnNwYXJlbnQpYCxcbiAgICAgICAgYFN0YW5kYXJ0bcOkw59pZyB3ZXJkZW4gQnJlaXRlIHVuZCBIw7ZoZSwgZGllIGVpbmVtIEVsZW1lbnQgenVnZXdpZXNlbiB3ZXJkZW4gZGVyIENvbnRlbnQtQm94IGFuZ2VsZWd0IChib3gtc2l6aW5nOiBjb250ZW50LWJveCksIHdhcyBkYXMgSGFuZGxpbmcgbWl0IFBhZGRpbmcgdW5kIEJvcmRlci1FaWdlbnNjaGFmdGVuIGtvbXBsaXppZXJ0IG1hY2h0LiBVbSBBYmhpbGZlIHp1IHNjaGFmZmVuLCBrYW5uIGJ6dy4gc29sbHRlICdib3gtc2l6aW5nOiBib3JkZXItYm94JyB2ZXJ3ZW5kZXQgd2VyZGVuLCB3b2R1cmNoIHNpY2ggenVnZXdpZXNlbmUgQnJlaXRlIHVuZCBIw7ZoZSBhdXMgQ29udGVudC1Cb3gsIFBhZGRpbmcgdW5kIEJvcmRlciB6dXNhbW1lbnNldHplbi5gLFxuICAgIF1cblxuICAgIGNvbnN0IFRpdGxlID0gKHsgdGl0bGUsIHRpdGxlQ2xhc3NOIH0pID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RpdGxlQ2xhc3NOfSAke2lzRGFyayA/ICdzaWx2ZXItZ3JhZGllbnQnIDogJ2JsdWUtZ3JhZGllbnQnfSB3LWZpdCBmb250LXNlbWlib2xkIHRleHQtbGdgfT5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgY29uc3QgTGlzdEl0ZW1zID0gKHsgbGlzdEl0ZW1zIH0pID0+IChcbiAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZVR5cGU6ICdkaXNjJyB9fSBjbGFzc05hbWU9J21sLTQnID5cbiAgICAgICAgICAgIHtsaXN0SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57aXRlbX08L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgKVxuXG4gICAgY29uc3QgTGlzdCA9ICh7IHRpdGxlLCBsaXN0SXRlbXMsIGNvbkNsYXNzTiwgdGl0bGVDbGFzc04gfSkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y29uQ2xhc3NOfWB9PlxuICAgICAgICAgICAgPFRpdGxlIHRpdGxlPXt0aXRsZX0gdGl0bGVDbGFzc049e3RpdGxlQ2xhc3NOfSAvPlxuICAgICAgICAgICAgPExpc3RJdGVtcyBsaXN0SXRlbXM9e2xpc3RJdGVtc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3B4LTInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BcbiAgICAgICAgbWF4LXctWzczMnB4XSBteC1hdXRvIHB5LTQgcHgtNFxuICAgICAgICBkYXJrOmZyb20tc3RvbmUtODAwIGRhcms6dmlhLXN0b25lLTkwMCBkYXJrOnRvLWJsYWNrIGJnLWdyYWRpZW50LXRvLWJyIGZyb20td2hpdGUgdmlhLXdoaXRlIHRvLWluZGlnby01MCBcbiAgICAgICAgZGFyazp0ZXh0LXN0b25lLTMwMCB0ZXh0LXN0b25lLTgwMFxuICAgICAgICByb3VuZGVkLTN4bCBzaGFkb3ctMnhsIGRhcms6c2hhZG93LWJsYWNrLzkwIHNoYWRvdy1pbmRpZ28tODAwLzgwXG4gICAgICAgIHJpbmcgZGFyazpyaW5nLXdoaXRlLzMwIHJpbmctaW5kaWdvLTUwMC83MCBcbiAgICAgICAgYm9yZGVyIGRhcms6Ym9yZGVyLWluZGlnby03MDBcbiAgICAgICAgYm9yZGVyLWJsdWUtODAwXG4gICAgICBgfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YHRleHQtMnhsIGZvbnQtYm9sZCBtYi0zICR7aXNEYXJrID8gJ3NpbHZlci1ncmFkaWVudCcgOiAnYmx1ZS1ncmFkaWVudCd9IHctZml0YH0+VGFpbHdpbmQgdnMuIFNhc3MgKDMuNCk8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2hpdGVzcGFjZS1wcmUtbGluZSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpmbGV4XCI+XG4gICAgICAgICAgICB7Y29udGVudC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPExpc3Qga2V5PXtpbmRleH0gdGl0bGU9e2l0ZW0udGl0bGV9IGxpc3RJdGVtcz17aXRlbS5saXN0SXRlbXN9IGNvbkNsYXNzTj0nc206dy0xLzIgbWItNCcgdGl0bGVDbGFzc049J214LWF1dG8nIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e2B0ZXh0LTJ4bCBmb250LWJvbGQgbXQtNSBtYi0zICR7aXNEYXJrID8gJ3NpbHZlci1ncmFkaWVudCcgOiAnYmx1ZS1ncmFkaWVudCd9IHctZml0YH0+Q1NTIEJveC1Nb2RlbGwgKDMuNSk8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2hpdGVzcGFjZS1wcmUtbGluZSc+XG4gICAgICAgICAgICA8VGl0bGUgdGl0bGU9J0JveC1Nb2RlbGwnIHRpdGxlQ2xhc3NOPScnIC8+XG4gICAgICAgICAgICA8TGlzdEl0ZW1zIGxpc3RJdGVtcz17Ym94TW9kZWxsTGlzdEl0ZW1zfSAvPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNiB0ZXh0LXNtXCI+ICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTkwMCBwLTIgbXQtMiBzaGFkb3ctYmxhY2sgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPk1hcmdpblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHAtMiBtdC0yIHNoYWRvdy1ibGFjayBtLTYgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPkJvcmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1saW1lLTMwMCBwLTIgbXQtMiBzaGFkb3ctYmxhY2sgbS02IHRleHQtY2VudGVyIHRleHQtYmxhY2tcIj5QYWRkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTIgbXQtMiBzaGFkb3ctYmxhY2sgbS02IHRleHQtY2VudGVyIHRleHQtYmxhY2sgaC0zMiBmb250LWJvbGQgY2VudGVyIHRleHQtYmFzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkxheW91dDQiLCJpc0RhcmsiLCJjb250ZW50IiwidGl0bGUiLCJsaXN0SXRlbXMiLCJib3hNb2RlbGxMaXN0SXRlbXMiLCJUaXRsZSIsInRpdGxlQ2xhc3NOIiwiZGl2IiwiY2xhc3NOYW1lIiwiTGlzdEl0ZW1zIiwidWwiLCJzdHlsZSIsImxpc3RTdHlsZVR5cGUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaSIsIkxpc3QiLCJjb25DbGFzc04iLCJoMSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/aufgabe3/Layout4.js\n"));

/***/ })

});