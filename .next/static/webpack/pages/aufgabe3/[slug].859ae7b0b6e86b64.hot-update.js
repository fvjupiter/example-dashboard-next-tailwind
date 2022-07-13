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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout4; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Layout4(param) {\n    var isDark = param.isDark;\n    var _this = this;\n    var tailwind_vs_sass_content = [\n        {\n            title: \"Tailwind (CSS-Framework)\",\n            listItems: [\n                \"Vordefinierte CSS-Klassen, die \\xfcber das 'classNames'-Attribut direkt an HTML-Elemente gebunden werden\",\n                \"Klassennamen sind strukturiert aufgebaut und erm\\xf6glichen eine intuitive Nutzung\",\n                \"Einfache Konfigurierungsm\\xf6glichkeiten & Theming via config-file\",\n                \"Klassen-Pr\\xe4fixe f\\xfcr Media Queries, Hover- & Focus-States\",\n                \"Lightweight: Entfernt automatisch alle unbenutzten CSS-Klassen beim Erstellen des Production-Builds\",\n                \"Farben- und Gr\\xf6\\xdfen-Paletten f\\xfcr einheitlichere Darstellung\",\n                \"Das Tailwind-Team verfolgt einen minimalistischen, modernen und der simplen Handhabung und Anpassung zugewendeten Ansatz bei der Entwicklung ihrer Produkte und ist dar\\xfcber hinaus, wie sich unschwer aus ihren ver\\xf6ffentlichten Inhalten erkennen l\\xe4sst, echt lustig\",\n                \"Bedenkenloses \\xe4ndern der Klassen, da diese, wenn nicht anders via @apply directive oder tailwind.config.js vorgegeben, lokal und nicht global definiert werden\",\n                \"Nachteile: \\n                1. Unaufger\\xe4umte, un\\xfcbersichtliche Darstellung der HTML-Elemente im Code (Strings k\\xf6nnten bei Bedarf jedoch in Variablen gespeichert werden)\\n                2. Klassennamen k\\xf6nnen nicht 'on-the-fly' dynamisch ver\\xe4ndert werden (z.B. bg-blue-[intensityVar]), was u. A. die Erstellung von Templates bzw. Template-Components verkompliziert\", \n            ]\n        },\n        {\n            title: \"Sass (CSS-Preprocessor)\",\n            listItems: [\n                \"CSS-nahe Syntax\",\n                \"Variablen k\\xf6nnen erstellt und dynamisch verwendet werden\",\n                \"'Mixins' erm\\xf6glichen das funktions\\xe4hnliche Erstellen von CSS-Werten, die durch '@include' in CSS-Klassen eingebettet werden k\\xf6nnen\",\n                \"Das Importieren bzw. Exportieren von Variablen etc. zwischen Sass-Dateien ist m\\xf6glich\",\n                \"CSS-Selector k\\xf6nnen \",\n                \"functions\",\n                \"extends\",\n                \"imports\",\n                \"includes\"\n            ]\n        }\n    ];\n    var boxModellListItems = [\n        \"Content-Box: Bildet den Content des HTML-Elements ab\",\n        \"Padding: Freier, transparenter Bereich zwischen der Content-Box und Border\",\n        \"Border: Rahmen des Elements\",\n        \"Margin: Freier, transparenter Bereich um den Rahmen des Elements herum\",\n        \"Standartm\\xe4\\xdfig werden Breite und H\\xf6he, die einem Element zugewiesen werden der Content-Box angelegt (box-sizing: content-box), was das Handling mit Padding und Border-Eigenschaften kompliziert macht. Um Abhilfe zu schaffen, kann bzw. sollte 'box-sizing: border-box' verwendet werden, wodurch sich zugewiesene Breite und H\\xf6he aus Content-Box, Padding und Border zusammensetzen.\", \n    ];\n    var Title = function(param) {\n        var title = param.title, titleClassN = param.titleClassN;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(titleClassN, \" \").concat(isDark ? \"silver-gradient\" : \"blue-gradient\", \" w-fit font-semibold text-lg\"),\n            children: title\n        }, void 0, false, {\n            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n            lineNumber: 46,\n            columnNumber: 9\n        }, _this);\n    };\n    var ListItems = function(param) {\n        var listItems = param.listItems;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            style: {\n                listStyleType: \"disc\"\n            },\n            className: \"ml-4\",\n            children: listItems.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: item\n                }, index, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n            lineNumber: 52,\n            columnNumber: 9\n        }, _this);\n    };\n    var List = function(param) {\n        var title = param.title, listItems = param.listItems, conClassN = param.conClassN, titleClassN = param.titleClassN;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(conClassN),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                    title: title,\n                    titleClassN: titleClassN\n                }, void 0, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 61,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItems, {\n                    listItems: listItems\n                }, void 0, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 62,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n            lineNumber: 60,\n            columnNumber: 9\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\\n        max-w-[732px] mx-auto py-4 px-4\\n        dark:from-stone-800 dark:via-stone-900 dark:to-black bg-gradient-to-br from-white via-white to-indigo-50 \\n        dark:text-stone-300 text-stone-800\\n        rounded-3xl shadow-2xl dark:shadow-black/90 shadow-indigo-800/80\\n        ring dark:ring-white/30 ring-indigo-500/70 \\n        border dark:border-indigo-700\\n        border-blue-800\\n      \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold mb-3 \".concat(isDark ? \"silver-gradient\" : \"blue-gradient\", \" w-fit\"),\n                    children: \"Tailwind vs. Sass (3.4)\"\n                }, void 0, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"whitespace-pre-line\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sm:flex\",\n                        children: tailwind_vs_sass_content.map(function(item, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {\n                                title: item.title,\n                                listItems: item.listItems,\n                                conClassN: \"sm:w-1/2 mb-4\",\n                                titleClassN: \"mx-auto\"\n                            }, index, false, {\n                                fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                                lineNumber: 81,\n                                columnNumber: 17\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold mt-5 mb-3 \".concat(isDark ? \"silver-gradient\" : \"blue-gradient\", \" w-fit\"),\n                    children: \"CSS Box-Modell (3.5)\"\n                }, void 0, false, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"whitespace-pre-line\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                            title: \"Box-Modell\",\n                            titleClassN: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItems, {\n                            listItems: boxModellListItems\n                        }, void 0, false, {\n                            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-6 text-sm\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-indigo-900 p-2 mt-2 shadow-black text-center text-white\",\n                                children: [\n                                    \"Margin\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-500 p-2 mt-2 shadow-black m-6 text-center text-white\",\n                                        children: [\n                                            \"Border\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bg-lime-300 p-2 mt-2 shadow-black m-6 text-center text-black\",\n                                                children: [\n                                                    \"Padding\",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"bg-white p-2 mt-2 shadow-black m-6 text-center text-black h-32 font-bold center text-base\",\n                                                        children: \"Content\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                                                        lineNumber: 94,\n                                                        columnNumber: 29\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                                                lineNumber: 93,\n                                                columnNumber: 25\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                                lineNumber: 91,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/fredy/code/Projects/HeiseBewerbungsAufgaben/heisebewerbung/components/aufgabe3/Layout4.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n};\n_c = Layout4;\nvar _c;\n$RefreshReg$(_c, \"Layout4\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TGF5b3V0NC5qcz82MGRmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0NCh7IGlzRGFyayB9KSB7XG5cbiAgICBjb25zdCB0YWlsd2luZF92c19zYXNzX2NvbnRlbnQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnVGFpbHdpbmQgKENTUy1GcmFtZXdvcmspJyxcbiAgICAgICAgICAgIGxpc3RJdGVtczogW1xuICAgICAgICAgICAgICAgIGBWb3JkZWZpbmllcnRlIENTUy1LbGFzc2VuLCBkaWUgw7xiZXIgZGFzICdjbGFzc05hbWVzJy1BdHRyaWJ1dCBkaXJla3QgYW4gSFRNTC1FbGVtZW50ZSBnZWJ1bmRlbiB3ZXJkZW5gLFxuICAgICAgICAgICAgICAgIGBLbGFzc2VubmFtZW4gc2luZCBzdHJ1a3R1cmllcnQgYXVmZ2ViYXV0IHVuZCBlcm3DtmdsaWNoZW4gZWluZSBpbnR1aXRpdmUgTnV0enVuZ2AsXG4gICAgICAgICAgICAgICAgYEVpbmZhY2hlIEtvbmZpZ3VyaWVydW5nc23DtmdsaWNoa2VpdGVuICYgVGhlbWluZyB2aWEgY29uZmlnLWZpbGVgLFxuICAgICAgICAgICAgICAgIGBLbGFzc2VuLVByw6RmaXhlIGbDvHIgTWVkaWEgUXVlcmllcywgSG92ZXItICYgRm9jdXMtU3RhdGVzYCxcbiAgICAgICAgICAgICAgICBgTGlnaHR3ZWlnaHQ6IEVudGZlcm50IGF1dG9tYXRpc2NoIGFsbGUgdW5iZW51dHp0ZW4gQ1NTLUtsYXNzZW4gYmVpbSBFcnN0ZWxsZW4gZGVzIFByb2R1Y3Rpb24tQnVpbGRzYCxcbiAgICAgICAgICAgICAgICBgRmFyYmVuLSB1bmQgR3LDtsOfZW4tUGFsZXR0ZW4gZsO8ciBlaW5oZWl0bGljaGVyZSBEYXJzdGVsbHVuZ2AsXG4gICAgICAgICAgICAgICAgYERhcyBUYWlsd2luZC1UZWFtIHZlcmZvbGd0IGVpbmVuIG1pbmltYWxpc3Rpc2NoZW4sIG1vZGVybmVuIHVuZCBkZXIgc2ltcGxlbiBIYW5kaGFidW5nIHVuZCBBbnBhc3N1bmcgenVnZXdlbmRldGVuIEFuc2F0eiBiZWkgZGVyIEVudHdpY2tsdW5nIGlocmVyIFByb2R1a3RlIHVuZCBpc3QgZGFyw7xiZXIgaGluYXVzLCB3aWUgc2ljaCB1bnNjaHdlciBhdXMgaWhyZW4gdmVyw7ZmZmVudGxpY2h0ZW4gSW5oYWx0ZW4gZXJrZW5uZW4gbMOkc3N0LCBlY2h0IGx1c3RpZ2AsXG4gICAgICAgICAgICAgICAgYEJlZGVua2VubG9zZXMgw6RuZGVybiBkZXIgS2xhc3NlbiwgZGEgZGllc2UsIHdlbm4gbmljaHQgYW5kZXJzIHZpYSBAYXBwbHkgZGlyZWN0aXZlIG9kZXIgdGFpbHdpbmQuY29uZmlnLmpzIHZvcmdlZ2ViZW4sIGxva2FsIHVuZCBuaWNodCBnbG9iYWwgZGVmaW5pZXJ0IHdlcmRlbmAsXG4gICAgICAgICAgICAgICAgYE5hY2h0ZWlsZTogXG4gICAgICAgICAgICAgICAgMS4gVW5hdWZnZXLDpHVtdGUsIHVuw7xiZXJzaWNodGxpY2hlIERhcnN0ZWxsdW5nIGRlciBIVE1MLUVsZW1lbnRlIGltIENvZGUgKFN0cmluZ3Mga8O2bm50ZW4gYmVpIEJlZGFyZiBqZWRvY2ggaW4gVmFyaWFibGVuIGdlc3BlaWNoZXJ0IHdlcmRlbilcbiAgICAgICAgICAgICAgICAyLiBLbGFzc2VubmFtZW4ga8O2bm5lbiBuaWNodCAnb24tdGhlLWZseScgZHluYW1pc2NoIHZlcsOkbmRlcnQgd2VyZGVuICh6LkIuIGJnLWJsdWUtW2ludGVuc2l0eVZhcl0pLCB3YXMgdS4gQS4gZGllIEVyc3RlbGx1bmcgdm9uIFRlbXBsYXRlcyBiencuIFRlbXBsYXRlLUNvbXBvbmVudHMgdmVya29tcGxpemllcnRgLFxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1Nhc3MgKENTUy1QcmVwcm9jZXNzb3IpJyxcbiAgICAgICAgICAgIGxpc3RJdGVtczogW1xuICAgICAgICAgICAgICAgIGBDU1MtbmFoZSBTeW50YXhgLFxuICAgICAgICAgICAgICAgIGBWYXJpYWJsZW4ga8O2bm5lbiBlcnN0ZWxsdCB1bmQgZHluYW1pc2NoIHZlcndlbmRldCB3ZXJkZW5gLFxuICAgICAgICAgICAgICAgIGAnTWl4aW5zJyBlcm3DtmdsaWNoZW4gZGFzIGZ1bmt0aW9uc8OkaG5saWNoZSBFcnN0ZWxsZW4gdm9uIENTUy1XZXJ0ZW4sIGRpZSBkdXJjaCAnQGluY2x1ZGUnIGluIENTUy1LbGFzc2VuIGVpbmdlYmV0dGV0IHdlcmRlbiBrw7ZubmVuYCxcdFxuICAgICAgICAgICAgICAgIGBEYXMgSW1wb3J0aWVyZW4gYnp3LiBFeHBvcnRpZXJlbiB2b24gVmFyaWFibGVuIGV0Yy4gendpc2NoZW4gU2Fzcy1EYXRlaWVuIGlzdCBtw7ZnbGljaGAsXG4gICAgICAgICAgICAgICAgYENTUy1TZWxlY3RvciBrw7ZubmVuIGAsXG4gICAgICAgICAgICAgICAgJ2Z1bmN0aW9ucycsXG4gICAgICAgICAgICAgICAgJ2V4dGVuZHMnLFxuICAgICAgICAgICAgICAgICdpbXBvcnRzJyxcbiAgICAgICAgICAgICAgICAnaW5jbHVkZXMnXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICBdXG5cbiAgICBjb25zdCBib3hNb2RlbGxMaXN0SXRlbXMgPSBbXG4gICAgICAgIGBDb250ZW50LUJveDogQmlsZGV0IGRlbiBDb250ZW50IGRlcyBIVE1MLUVsZW1lbnRzIGFiYCxcbiAgICAgICAgYFBhZGRpbmc6IEZyZWllciwgdHJhbnNwYXJlbnRlciBCZXJlaWNoIHp3aXNjaGVuIGRlciBDb250ZW50LUJveCB1bmQgQm9yZGVyYCxcbiAgICAgICAgYEJvcmRlcjogUmFobWVuIGRlcyBFbGVtZW50c2AsXG4gICAgICAgIGBNYXJnaW46IEZyZWllciwgdHJhbnNwYXJlbnRlciBCZXJlaWNoIHVtIGRlbiBSYWhtZW4gZGVzIEVsZW1lbnRzIGhlcnVtYCxcbiAgICAgICAgYFN0YW5kYXJ0bcOkw59pZyB3ZXJkZW4gQnJlaXRlIHVuZCBIw7ZoZSwgZGllIGVpbmVtIEVsZW1lbnQgenVnZXdpZXNlbiB3ZXJkZW4gZGVyIENvbnRlbnQtQm94IGFuZ2VsZWd0IChib3gtc2l6aW5nOiBjb250ZW50LWJveCksIHdhcyBkYXMgSGFuZGxpbmcgbWl0IFBhZGRpbmcgdW5kIEJvcmRlci1FaWdlbnNjaGFmdGVuIGtvbXBsaXppZXJ0IG1hY2h0LiBVbSBBYmhpbGZlIHp1IHNjaGFmZmVuLCBrYW5uIGJ6dy4gc29sbHRlICdib3gtc2l6aW5nOiBib3JkZXItYm94JyB2ZXJ3ZW5kZXQgd2VyZGVuLCB3b2R1cmNoIHNpY2ggenVnZXdpZXNlbmUgQnJlaXRlIHVuZCBIw7ZoZSBhdXMgQ29udGVudC1Cb3gsIFBhZGRpbmcgdW5kIEJvcmRlciB6dXNhbW1lbnNldHplbi5gLFxuICAgIF1cblxuICAgIGNvbnN0IFRpdGxlID0gKHsgdGl0bGUsIHRpdGxlQ2xhc3NOIH0pID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RpdGxlQ2xhc3NOfSAke2lzRGFyayA/ICdzaWx2ZXItZ3JhZGllbnQnIDogJ2JsdWUtZ3JhZGllbnQnfSB3LWZpdCBmb250LXNlbWlib2xkIHRleHQtbGdgfT5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgY29uc3QgTGlzdEl0ZW1zID0gKHsgbGlzdEl0ZW1zIH0pID0+IChcbiAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZVR5cGU6ICdkaXNjJyB9fSBjbGFzc05hbWU9J21sLTQnID5cbiAgICAgICAgICAgIHtsaXN0SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57aXRlbX08L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgKVxuXG4gICAgY29uc3QgTGlzdCA9ICh7IHRpdGxlLCBsaXN0SXRlbXMsIGNvbkNsYXNzTiwgdGl0bGVDbGFzc04gfSkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y29uQ2xhc3NOfWB9PlxuICAgICAgICAgICAgPFRpdGxlIHRpdGxlPXt0aXRsZX0gdGl0bGVDbGFzc049e3RpdGxlQ2xhc3NOfSAvPlxuICAgICAgICAgICAgPExpc3RJdGVtcyBsaXN0SXRlbXM9e2xpc3RJdGVtc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3B4LTInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BcbiAgICAgICAgbWF4LXctWzczMnB4XSBteC1hdXRvIHB5LTQgcHgtNFxuICAgICAgICBkYXJrOmZyb20tc3RvbmUtODAwIGRhcms6dmlhLXN0b25lLTkwMCBkYXJrOnRvLWJsYWNrIGJnLWdyYWRpZW50LXRvLWJyIGZyb20td2hpdGUgdmlhLXdoaXRlIHRvLWluZGlnby01MCBcbiAgICAgICAgZGFyazp0ZXh0LXN0b25lLTMwMCB0ZXh0LXN0b25lLTgwMFxuICAgICAgICByb3VuZGVkLTN4bCBzaGFkb3ctMnhsIGRhcms6c2hhZG93LWJsYWNrLzkwIHNoYWRvdy1pbmRpZ28tODAwLzgwXG4gICAgICAgIHJpbmcgZGFyazpyaW5nLXdoaXRlLzMwIHJpbmctaW5kaWdvLTUwMC83MCBcbiAgICAgICAgYm9yZGVyIGRhcms6Ym9yZGVyLWluZGlnby03MDBcbiAgICAgICAgYm9yZGVyLWJsdWUtODAwXG4gICAgICBgfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YHRleHQtMnhsIGZvbnQtYm9sZCBtYi0zICR7aXNEYXJrID8gJ3NpbHZlci1ncmFkaWVudCcgOiAnYmx1ZS1ncmFkaWVudCd9IHctZml0YH0+VGFpbHdpbmQgdnMuIFNhc3MgKDMuNCk8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2hpdGVzcGFjZS1wcmUtbGluZSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpmbGV4XCI+XG4gICAgICAgICAgICB7dGFpbHdpbmRfdnNfc2Fzc19jb250ZW50Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8TGlzdCBrZXk9e2luZGV4fSB0aXRsZT17aXRlbS50aXRsZX0gbGlzdEl0ZW1zPXtpdGVtLmxpc3RJdGVtc30gY29uQ2xhc3NOPSdzbTp3LTEvMiBtYi00JyB0aXRsZUNsYXNzTj0nbXgtYXV0bycgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YHRleHQtMnhsIGZvbnQtYm9sZCBtdC01IG1iLTMgJHtpc0RhcmsgPyAnc2lsdmVyLWdyYWRpZW50JyA6ICdibHVlLWdyYWRpZW50J30gdy1maXRgfT5DU1MgQm94LU1vZGVsbCAoMy41KTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aGl0ZXNwYWNlLXByZS1saW5lJz5cbiAgICAgICAgICAgIDxUaXRsZSB0aXRsZT0nQm94LU1vZGVsbCcgdGl0bGVDbGFzc049JycgLz5cbiAgICAgICAgICAgIDxMaXN0SXRlbXMgbGlzdEl0ZW1zPXtib3hNb2RlbGxMaXN0SXRlbXN9IC8+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS02IHRleHQtc21cIj4gICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1pbmRpZ28tOTAwIHAtMiBtdC0yIHNoYWRvdy1ibGFjayB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+TWFyZ2luXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgcC0yIG10LTIgc2hhZG93LWJsYWNrIG0tNiB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+Qm9yZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWxpbWUtMzAwIHAtMiBtdC0yIHNoYWRvdy1ibGFjayBtLTYgdGV4dC1jZW50ZXIgdGV4dC1ibGFja1wiPlBhZGRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtMiBtdC0yIHNoYWRvdy1ibGFjayBtLTYgdGV4dC1jZW50ZXIgdGV4dC1ibGFjayBoLTMyIGZvbnQtYm9sZCBjZW50ZXIgdGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiTGF5b3V0NCIsImlzRGFyayIsInRhaWx3aW5kX3ZzX3Nhc3NfY29udGVudCIsInRpdGxlIiwibGlzdEl0ZW1zIiwiYm94TW9kZWxsTGlzdEl0ZW1zIiwiVGl0bGUiLCJ0aXRsZUNsYXNzTiIsImRpdiIsImNsYXNzTmFtZSIsIkxpc3RJdGVtcyIsInVsIiwic3R5bGUiLCJsaXN0U3R5bGVUeXBlIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGkiLCJMaXN0IiwiY29uQ2xhc3NOIiwiaDEiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/aufgabe3/Layout4.js\n"));

/***/ })

});