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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout4; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Layout4(param) {\n    var isDark = param.isDark;\n    var _this = this;\n    var tailwind_vs_sass_content = [\n        {\n            title: \"Tailwind (CSS-Framework)\",\n            listItems: [\n                \"Vordefinierte CSS-Klassen, die \\xfcber das 'classNames'-Attribut direkt an HTML-Elemente gebunden werden\",\n                \"Klassennamen sind strukturiert aufgebaut und erm\\xf6glichen eine intuitive Nutzung\",\n                \"Einfache Konfigurierungsm\\xf6glichkeiten & Theming via config-file\",\n                \"Klassen-Pr\\xe4fixe f\\xfcr Media Queries, Hover- & Focus-States\",\n                \"Lightweight: Entfernt automatisch alle unbenutzten CSS-Klassen beim Erstellen des Production-Builds\",\n                \"Farben- und Gr\\xf6\\xdfen-Paletten f\\xfcr einheitlichere Darstellung\",\n                \"Das Tailwind-Team verfolgt einen minimalistischen, modernen und der simplen Handhabung und Anpassung zugewendeten Ansatz bei der Entwicklung ihrer Produkte und ist dar\\xfcber hinaus, wie sich unschwer aus ihren ver\\xf6ffentlichten Inhalten erkennen l\\xe4sst, echt lustig\",\n                \"Bedenkenloses \\xe4ndern der Klassen, da diese, wenn nicht anders via @apply directive oder tailwind.config.js vorgegeben, lokal und nicht global definiert werden\",\n                \"Nachteile: \\n                1. Unaufger\\xe4umte, un\\xfcbersichtliche Darstellung der HTML-Elemente im Code (Strings k\\xf6nnten bei Bedarf jedoch in Variablen gespeichert werden)\\n                2. Klassennamen k\\xf6nnen nicht 'on-the-fly' dynamisch ver\\xe4ndert werden (z.B. bg-blue-[intensityVar]), was u. A. die Erstellung von Templates bzw. Template-Components verkompliziert\", \n            ]\n        },\n        {\n            title: \"Sass (CSS-Preprocessor)\",\n            listItems: [\n                \"CSS-nahe Syntax\",\n                \"Varia\",\n                \"variables\",\n                \"mixins\",\n                \"functions\",\n                \"extends\",\n                \"imports\",\n                \"includes\"\n            ]\n        }\n    ];\n    var boxModellListItems = [\n        \"Content-Box: Bildet den Content des HTML-Elements ab\",\n        \"Padding: Freier, transparenter Bereich zwischen der Content-Box und Border\",\n        \"Border: Rahmen des Elements\",\n        \"Margin: Freier, transparenter Bereich um den Rahmen des Elements herum\",\n        \"Standartm\\xe4\\xdfig werden Breite und H\\xf6he, die einem Element zugewiesen werden der Content-Box angelegt (box-sizing: content-box), was das Handling mit Padding und Border-Eigenschaften kompliziert macht. Um Abhilfe zu schaffen, kann bzw. sollte 'box-sizing: border-box' verwendet werden, wodurch sich zugewiesene Breite und H\\xf6he aus Content-Box, Padding und Border zusammensetzen.\", \n    ];\n    var Title = function(param) {\n        var title = param.title, titleClassN = param.titleClassN;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(titleClassN, \" \").concat(isDark ? \"silver-gradient\" : \"blue-gradient\", \" w-fit font-semibold text-lg\"),\n            children: title\n        }, void 0, false, {\n            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n            lineNumber: 45,\n            columnNumber: 9\n        }, _this);\n    };\n    var ListItems = function(param) {\n        var listItems = param.listItems;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            style: {\n                listStyleType: \"disc\"\n            },\n            className: \"ml-4\",\n            children: listItems.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: item\n                }, index, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n            lineNumber: 51,\n            columnNumber: 9\n        }, _this);\n    };\n    var List = function(param) {\n        var title = param.title, listItems = param.listItems, conClassN = param.conClassN, titleClassN = param.titleClassN;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(conClassN),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                    title: title,\n                    titleClassN: titleClassN\n                }, void 0, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 60,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItems, {\n                    listItems: listItems\n                }, void 0, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 61,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n            lineNumber: 59,\n            columnNumber: 9\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\\n        max-w-[732px] mx-auto py-4 px-4\\n        dark:from-stone-800 dark:via-stone-900 dark:to-black bg-gradient-to-br from-white via-white to-indigo-50 \\n        dark:text-stone-300 text-stone-800\\n        rounded-3xl shadow-2xl dark:shadow-black/90 shadow-indigo-800/80\\n        ring dark:ring-white/30 ring-indigo-500/70 \\n        border dark:border-indigo-700\\n        border-blue-800\\n      \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold mb-3 \".concat(isDark ? \"silver-gradient\" : \"blue-gradient\", \" w-fit\"),\n                    children: \"Tailwind vs. Sass (3.4)\"\n                }, void 0, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"whitespace-pre-line\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sm:flex\",\n                        children: tailwind_vs_sass_content.map(function(item, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {\n                                title: item.title,\n                                listItems: item.listItems,\n                                conClassN: \"sm:w-1/2 mb-4\",\n                                titleClassN: \"mx-auto\"\n                            }, index, false, {\n                                fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                                lineNumber: 80,\n                                columnNumber: 17\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold mt-5 mb-3 \".concat(isDark ? \"silver-gradient\" : \"blue-gradient\", \" w-fit\"),\n                    children: \"CSS Box-Modell (3.5)\"\n                }, void 0, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"whitespace-pre-line\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                            title: \"Box-Modell\",\n                            titleClassN: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItems, {\n                            listItems: boxModellListItems\n                        }, void 0, false, {\n                            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-6 text-sm\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-indigo-900 p-2 mt-2 shadow-black text-center text-white\",\n                                children: [\n                                    \"Margin\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-500 p-2 mt-2 shadow-black m-6 text-center text-white\",\n                                        children: [\n                                            \"Border\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bg-lime-300 p-2 mt-2 shadow-black m-6 text-center text-black\",\n                                                children: [\n                                                    \"Padding\",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"bg-white p-2 mt-2 shadow-black m-6 text-center text-black h-32 font-bold center text-base\",\n                                                        children: \"Content\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                                                        lineNumber: 93,\n                                                        columnNumber: 29\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                                                lineNumber: 92,\n                                                columnNumber: 25\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                                lineNumber: 90,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n};\n_c = Layout4;\nvar _c;\n$RefreshReg$(_c, \"Layout4\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUMsU0FBUyxFQUFFVyxJQUFJLENBQUNYLFNBQVM7Z0NBQUVlLFNBQVMsRUFBQyxlQUFlO2dDQUFDWixXQUFXLEVBQUMsU0FBUzsrQkFBcEdTLEtBQUs7Ozs7cUNBQWtHO3lCQUNySCxDQUFDOzs7Ozs0QkFDRTs7Ozs7d0JBQ0Y7OEJBQ04sOERBQUNJLElBQUU7b0JBQUNYLFNBQVMsRUFBRSwrQkFBOEIsQ0FBK0MsTUFBTSxDQUFuRFIsTUFBTSxHQUFHLGlCQUFpQixHQUFHLGVBQWUsRUFBQyxRQUFNLENBQUM7OEJBQUUsc0JBQW9COzs7Ozt3QkFBSzs4QkFDOUgsOERBQUNPLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxxQkFBcUI7O3NDQUNoQyw4REFBQ0gsS0FBSzs0QkFBQ0gsS0FBSyxFQUFDLFlBQVk7NEJBQUNJLFdBQVcsRUFBQyxFQUFFOzs7OztnQ0FBRztzQ0FDM0MsOERBQUNHLFNBQVM7NEJBQUNOLFNBQVMsRUFBRUMsa0JBQWtCOzs7OztnQ0FBSTtzQ0FDNUMsOERBQUNnQixJQUFFOzs7O2dDQUFFO3NDQUNMLDhEQUFDYixLQUFHOzRCQUFDQyxTQUFTLEVBQUMsY0FBYztzQ0FDekIsNEVBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyw0REFBNEQ7O29DQUFDLFFBQ3hFO2tEQUFBLDhEQUFDRCxLQUFHO3dDQUFDQyxTQUFTLEVBQUMsOERBQThEOzs0Q0FBQyxRQUMxRTswREFBQSw4REFBQ0QsS0FBRztnREFBQ0MsU0FBUyxFQUFDLDhEQUE4RDs7b0RBQUMsU0FDMUU7a0VBQUEsOERBQUNELEtBQUc7d0RBQUNDLFNBQVMsRUFBQywyRkFBMkY7a0VBQUMsU0FFM0c7Ozs7OzREQUFNOzs7Ozs7b0RBQ0o7Ozs7Ozs0Q0FDSjs7Ozs7O29DQUNKOzs7OztnQ0FDSjs7Ozs7O3dCQUNKOzs7Ozs7Z0JBQ0Y7Ozs7O1lBQ0YsQ0FDUDtDQUNGO0FBdEd1QlQsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2F1ZmdhYmUzL0xheW91dDQuanM/NjBkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dDQoeyBpc0RhcmsgfSkge1xuXG4gICAgY29uc3QgdGFpbHdpbmRfdnNfc2Fzc19jb250ZW50ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1RhaWx3aW5kIChDU1MtRnJhbWV3b3JrKScsXG4gICAgICAgICAgICBsaXN0SXRlbXM6IFtcbiAgICAgICAgICAgICAgICBgVm9yZGVmaW5pZXJ0ZSBDU1MtS2xhc3NlbiwgZGllIMO8YmVyIGRhcyAnY2xhc3NOYW1lcyctQXR0cmlidXQgZGlyZWt0IGFuIEhUTUwtRWxlbWVudGUgZ2VidW5kZW4gd2VyZGVuYCxcbiAgICAgICAgICAgICAgICBgS2xhc3Nlbm5hbWVuIHNpbmQgc3RydWt0dXJpZXJ0IGF1ZmdlYmF1dCB1bmQgZXJtw7ZnbGljaGVuIGVpbmUgaW50dWl0aXZlIE51dHp1bmdgLFxuICAgICAgICAgICAgICAgIGBFaW5mYWNoZSBLb25maWd1cmllcnVuZ3Ntw7ZnbGljaGtlaXRlbiAmIFRoZW1pbmcgdmlhIGNvbmZpZy1maWxlYCxcbiAgICAgICAgICAgICAgICBgS2xhc3Nlbi1QcsOkZml4ZSBmw7xyIE1lZGlhIFF1ZXJpZXMsIEhvdmVyLSAmIEZvY3VzLVN0YXRlc2AsXG4gICAgICAgICAgICAgICAgYExpZ2h0d2VpZ2h0OiBFbnRmZXJudCBhdXRvbWF0aXNjaCBhbGxlIHVuYmVudXR6dGVuIENTUy1LbGFzc2VuIGJlaW0gRXJzdGVsbGVuIGRlcyBQcm9kdWN0aW9uLUJ1aWxkc2AsXG4gICAgICAgICAgICAgICAgYEZhcmJlbi0gdW5kIEdyw7bDn2VuLVBhbGV0dGVuIGbDvHIgZWluaGVpdGxpY2hlcmUgRGFyc3RlbGx1bmdgLFxuICAgICAgICAgICAgICAgIGBEYXMgVGFpbHdpbmQtVGVhbSB2ZXJmb2xndCBlaW5lbiBtaW5pbWFsaXN0aXNjaGVuLCBtb2Rlcm5lbiB1bmQgZGVyIHNpbXBsZW4gSGFuZGhhYnVuZyB1bmQgQW5wYXNzdW5nIHp1Z2V3ZW5kZXRlbiBBbnNhdHogYmVpIGRlciBFbnR3aWNrbHVuZyBpaHJlciBQcm9kdWt0ZSB1bmQgaXN0IGRhcsO8YmVyIGhpbmF1cywgd2llIHNpY2ggdW5zY2h3ZXIgYXVzIGlocmVuIHZlcsO2ZmZlbnRsaWNodGVuIEluaGFsdGVuIGVya2VubmVuIGzDpHNzdCwgZWNodCBsdXN0aWdgLFxuICAgICAgICAgICAgICAgIGBCZWRlbmtlbmxvc2VzIMOkbmRlcm4gZGVyIEtsYXNzZW4sIGRhIGRpZXNlLCB3ZW5uIG5pY2h0IGFuZGVycyB2aWEgQGFwcGx5IGRpcmVjdGl2ZSBvZGVyIHRhaWx3aW5kLmNvbmZpZy5qcyB2b3JnZWdlYmVuLCBsb2thbCB1bmQgbmljaHQgZ2xvYmFsIGRlZmluaWVydCB3ZXJkZW5gLFxuICAgICAgICAgICAgICAgIGBOYWNodGVpbGU6IFxuICAgICAgICAgICAgICAgIDEuIFVuYXVmZ2Vyw6R1bXRlLCB1bsO8YmVyc2ljaHRsaWNoZSBEYXJzdGVsbHVuZyBkZXIgSFRNTC1FbGVtZW50ZSBpbSBDb2RlIChTdHJpbmdzIGvDtm5udGVuIGJlaSBCZWRhcmYgamVkb2NoIGluIFZhcmlhYmxlbiBnZXNwZWljaGVydCB3ZXJkZW4pXG4gICAgICAgICAgICAgICAgMi4gS2xhc3Nlbm5hbWVuIGvDtm5uZW4gbmljaHQgJ29uLXRoZS1mbHknIGR5bmFtaXNjaCB2ZXLDpG5kZXJ0IHdlcmRlbiAoei5CLiBiZy1ibHVlLVtpbnRlbnNpdHlWYXJdKSwgd2FzIHUuIEEuIGRpZSBFcnN0ZWxsdW5nIHZvbiBUZW1wbGF0ZXMgYnp3LiBUZW1wbGF0ZS1Db21wb25lbnRzIHZlcmtvbXBsaXppZXJ0YCxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdTYXNzIChDU1MtUHJlcHJvY2Vzc29yKScsXG4gICAgICAgICAgICBsaXN0SXRlbXM6IFtcbiAgICAgICAgICAgICAgICBgQ1NTLW5haGUgU3ludGF4YCxcbiAgICAgICAgICAgICAgICBgVmFyaWFgLFxuICAgICAgICAgICAgICAgICd2YXJpYWJsZXMnLCBcbiAgICAgICAgICAgICAgICAnbWl4aW5zJyxcbiAgICAgICAgICAgICAgICAnZnVuY3Rpb25zJyxcbiAgICAgICAgICAgICAgICAnZXh0ZW5kcycsXG4gICAgICAgICAgICAgICAgJ2ltcG9ydHMnLFxuICAgICAgICAgICAgICAgICdpbmNsdWRlcydcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIF1cblxuICAgIGNvbnN0IGJveE1vZGVsbExpc3RJdGVtcyA9IFtcbiAgICAgICAgYENvbnRlbnQtQm94OiBCaWxkZXQgZGVuIENvbnRlbnQgZGVzIEhUTUwtRWxlbWVudHMgYWJgLFxuICAgICAgICBgUGFkZGluZzogRnJlaWVyLCB0cmFuc3BhcmVudGVyIEJlcmVpY2ggendpc2NoZW4gZGVyIENvbnRlbnQtQm94IHVuZCBCb3JkZXJgLFxuICAgICAgICBgQm9yZGVyOiBSYWhtZW4gZGVzIEVsZW1lbnRzYCxcbiAgICAgICAgYE1hcmdpbjogRnJlaWVyLCB0cmFuc3BhcmVudGVyIEJlcmVpY2ggdW0gZGVuIFJhaG1lbiBkZXMgRWxlbWVudHMgaGVydW1gLFxuICAgICAgICBgU3RhbmRhcnRtw6TDn2lnIHdlcmRlbiBCcmVpdGUgdW5kIEjDtmhlLCBkaWUgZWluZW0gRWxlbWVudCB6dWdld2llc2VuIHdlcmRlbiBkZXIgQ29udGVudC1Cb3ggYW5nZWxlZ3QgKGJveC1zaXppbmc6IGNvbnRlbnQtYm94KSwgd2FzIGRhcyBIYW5kbGluZyBtaXQgUGFkZGluZyB1bmQgQm9yZGVyLUVpZ2Vuc2NoYWZ0ZW4ga29tcGxpemllcnQgbWFjaHQuIFVtIEFiaGlsZmUgenUgc2NoYWZmZW4sIGthbm4gYnp3LiBzb2xsdGUgJ2JveC1zaXppbmc6IGJvcmRlci1ib3gnIHZlcndlbmRldCB3ZXJkZW4sIHdvZHVyY2ggc2ljaCB6dWdld2llc2VuZSBCcmVpdGUgdW5kIEjDtmhlIGF1cyBDb250ZW50LUJveCwgUGFkZGluZyB1bmQgQm9yZGVyIHp1c2FtbWVuc2V0emVuLmAsXG4gICAgXVxuXG4gICAgY29uc3QgVGl0bGUgPSAoeyB0aXRsZSwgdGl0bGVDbGFzc04gfSkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dGl0bGVDbGFzc059ICR7aXNEYXJrID8gJ3NpbHZlci1ncmFkaWVudCcgOiAnYmx1ZS1ncmFkaWVudCd9IHctZml0IGZvbnQtc2VtaWJvbGQgdGV4dC1sZ2B9PlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICBjb25zdCBMaXN0SXRlbXMgPSAoeyBsaXN0SXRlbXMgfSkgPT4gKFxuICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlVHlwZTogJ2Rpc2MnIH19IGNsYXNzTmFtZT0nbWwtNCcgPlxuICAgICAgICAgICAge2xpc3RJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PntpdGVtfTwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICApXG5cbiAgICBjb25zdCBMaXN0ID0gKHsgdGl0bGUsIGxpc3RJdGVtcywgY29uQ2xhc3NOLCB0aXRsZUNsYXNzTiB9KSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjb25DbGFzc059YH0+XG4gICAgICAgICAgICA8VGl0bGUgdGl0bGU9e3RpdGxlfSB0aXRsZUNsYXNzTj17dGl0bGVDbGFzc059IC8+XG4gICAgICAgICAgICA8TGlzdEl0ZW1zIGxpc3RJdGVtcz17bGlzdEl0ZW1zfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncHgtMic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YFxuICAgICAgICBtYXgtdy1bNzMycHhdIG14LWF1dG8gcHktNCBweC00XG4gICAgICAgIGRhcms6ZnJvbS1zdG9uZS04MDAgZGFyazp2aWEtc3RvbmUtOTAwIGRhcms6dG8tYmxhY2sgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS13aGl0ZSB2aWEtd2hpdGUgdG8taW5kaWdvLTUwIFxuICAgICAgICBkYXJrOnRleHQtc3RvbmUtMzAwIHRleHQtc3RvbmUtODAwXG4gICAgICAgIHJvdW5kZWQtM3hsIHNoYWRvdy0yeGwgZGFyazpzaGFkb3ctYmxhY2svOTAgc2hhZG93LWluZGlnby04MDAvODBcbiAgICAgICAgcmluZyBkYXJrOnJpbmctd2hpdGUvMzAgcmluZy1pbmRpZ28tNTAwLzcwIFxuICAgICAgICBib3JkZXIgZGFyazpib3JkZXItaW5kaWdvLTcwMFxuICAgICAgICBib3JkZXItYmx1ZS04MDBcbiAgICAgIGB9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtgdGV4dC0yeGwgZm9udC1ib2xkIG1iLTMgJHtpc0RhcmsgPyAnc2lsdmVyLWdyYWRpZW50JyA6ICdibHVlLWdyYWRpZW50J30gdy1maXRgfT5UYWlsd2luZCB2cy4gU2FzcyAoMy40KTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aGl0ZXNwYWNlLXByZS1saW5lJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmZsZXhcIj5cbiAgICAgICAgICAgIHt0YWlsd2luZF92c19zYXNzX2NvbnRlbnQubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaXN0IGtleT17aW5kZXh9IHRpdGxlPXtpdGVtLnRpdGxlfSBsaXN0SXRlbXM9e2l0ZW0ubGlzdEl0ZW1zfSBjb25DbGFzc049J3NtOnctMS8yIG1iLTQnIHRpdGxlQ2xhc3NOPSdteC1hdXRvJyAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtgdGV4dC0yeGwgZm9udC1ib2xkIG10LTUgbWItMyAke2lzRGFyayA/ICdzaWx2ZXItZ3JhZGllbnQnIDogJ2JsdWUtZ3JhZGllbnQnfSB3LWZpdGB9PkNTUyBCb3gtTW9kZWxsICgzLjUpPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3doaXRlc3BhY2UtcHJlLWxpbmUnPlxuICAgICAgICAgICAgPFRpdGxlIHRpdGxlPSdCb3gtTW9kZWxsJyB0aXRsZUNsYXNzTj0nJyAvPlxuICAgICAgICAgICAgPExpc3RJdGVtcyBsaXN0SXRlbXM9e2JveE1vZGVsbExpc3RJdGVtc30gLz5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTYgdGV4dC1zbVwiPiAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWluZGlnby05MDAgcC0yIG10LTIgc2hhZG93LWJsYWNrIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5NYXJnaW5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBwLTIgbXQtMiBzaGFkb3ctYmxhY2sgbS02IHRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5Cb3JkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbGltZS0zMDAgcC0yIG10LTIgc2hhZG93LWJsYWNrIG0tNiB0ZXh0LWNlbnRlciB0ZXh0LWJsYWNrXCI+UGFkZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC0yIG10LTIgc2hhZG93LWJsYWNrIG0tNiB0ZXh0LWNlbnRlciB0ZXh0LWJsYWNrIGgtMzIgZm9udC1ib2xkIGNlbnRlciB0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJMYXlvdXQ0IiwiaXNEYXJrIiwidGFpbHdpbmRfdnNfc2Fzc19jb250ZW50IiwidGl0bGUiLCJsaXN0SXRlbXMiLCJib3hNb2RlbGxMaXN0SXRlbXMiLCJUaXRsZSIsInRpdGxlQ2xhc3NOIiwiZGl2IiwiY2xhc3NOYW1lIiwiTGlzdEl0ZW1zIiwidWwiLCJzdHlsZSIsImxpc3RTdHlsZVR5cGUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaSIsIkxpc3QiLCJjb25DbGFzc04iLCJoMSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/aufgabe3/Layout4.js\n"));

/***/ })

});