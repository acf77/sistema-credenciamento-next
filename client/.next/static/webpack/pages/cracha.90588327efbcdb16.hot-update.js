"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cracha",{

/***/ "./pages/cracha.tsx":
/*!**************************!*\
  !*** ./pages/cracha.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/pdfmake */ \"./node_modules/pdfmake/build/pdfmake.js\");\n/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_fonts_vfs_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/fonts/vfs_fonts */ \"./assets/fonts/vfs_fonts.js\");\n/* harmony import */ var _helpers_CmToPt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/CmToPt */ \"./helpers/CmToPt.tsx\");\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2___default().vfs) = _assets_fonts_vfs_fonts__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2___default().fonts) = {\n    NimbusSans: {\n        normal: \"NimbusSanL-Reg.otf\",\n        bold: \"NimbusSanL-Bol.otf\",\n        italics: \"NimbusSanL-RegIta.otf\",\n        bolditalics: \"NimbusSanL-BolIta.otf\"\n    }\n};\nvar BadgePage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), url = ref[0], setUrl = ref[1];\n    var badgePdf = {\n        content: [\n            {\n                font: \"NimbusSans\",\n                characterSpacing: 1,\n                // layout: \"lightHorizontalLines\",\n                table: {\n                    headerRows: 1,\n                    widths: [\n                        (0,_helpers_CmToPt__WEBPACK_IMPORTED_MODULE_4__.CmToPt)(10)\n                    ],\n                    body: [\n                        [\n                            {\n                                text: \"Alberto Franco\",\n                                bold: true,\n                                fontSize: 16,\n                                alignment: \"center\",\n                                height: (0,_helpers_CmToPt__WEBPACK_IMPORTED_MODULE_4__.CmToPt)(8)\n                            }, \n                        ],\n                        [\n                            {\n                                text: \"Expo Ind\\xfastria 2022\",\n                                fontSize: 14,\n                                alignment: \"center\"\n                            }, \n                        ], \n                    ]\n                }\n            }, \n        ]\n    };\n    //@ts-ignore\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //@ts-ignore\n        var pdf = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2___default().createPdf(badgePdf);\n        pdf.getBlob(function(blob) {\n            var pdfUrl = URL.createObjectURL(blob);\n            //@ts-ignore\n            setUrl(pdfUrl);\n        });\n    //@ts-ignore\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {\n        className: \"m-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Card, {\n            className: \"p-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"embed\", {\n                src: url,\n                style: {\n                    width: \"15cm\",\n                    height: \"10cm\"\n                },\n                type: \"application/pdf\"\n            }, void 0, false, {\n                fileName: \"/Users/acf/Documents/GitHub/gerasom-credenciamento/client/pages/cracha.tsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/acf/Documents/GitHub/gerasom-credenciamento/client/pages/cracha.tsx\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/acf/Documents/GitHub/gerasom-credenciamento/client/pages/cracha.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, _this));\n};\n_s(BadgePage, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = BadgePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BadgePage);\nvar _c;\n$RefreshReg$(_c, \"BadgePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmFjaGEudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ007QUFFTjtBQUNBO0FBRUQ7OztBQUUxQ0ksa0VBQVcsR0FBR0MsK0RBQUc7QUFFakJELG9FQUFhLEdBQUcsQ0FBQztJQUNmSSxVQUFVLEVBQUUsQ0FBQztRQUNYQyxNQUFNLEVBQUUsQ0FBb0I7UUFDNUJDLElBQUksRUFBRSxDQUFvQjtRQUMxQkMsT0FBTyxFQUFFLENBQXVCO1FBQ2hDQyxXQUFXLEVBQUUsQ0FBdUI7SUFDdEMsQ0FBQztBQUNILENBQUM7QUFFRCxHQUFLLENBQUNDLFNBQVMsR0FBRyxRQUNsQixHQUR3QixDQUFDOztJQUN2QixHQUFLLENBQWlCYixHQUFVLEdBQVZBLCtDQUFRLElBQXZCYyxHQUFHLEdBQVlkLEdBQVUsS0FBcEJlLE1BQU0sR0FBSWYsR0FBVTtJQUVoQyxHQUFLLENBQUNnQixRQUFRLEdBQUcsQ0FBQztRQUNoQkMsT0FBTyxFQUFFLENBQUM7WUFDUixDQUFDO2dCQUNDQyxJQUFJLEVBQUUsQ0FBWTtnQkFDbEJDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ25CLEVBQWtDO2dCQUNsQ0MsS0FBSyxFQUFFLENBQUM7b0JBQ05DLFVBQVUsRUFBRSxDQUFDO29CQUNiQyxNQUFNLEVBQUUsQ0FBQ2hCO3dCQUFBQSx1REFBTSxDQUFDLEVBQUU7b0JBQUMsQ0FBQztvQkFDcEJpQixJQUFJLEVBQUUsQ0FBQzt3QkFDTCxDQUFDOzRCQUNDLENBQUM7Z0NBQ0NDLElBQUksRUFBRSxDQUFnQjtnQ0FDdEJkLElBQUksRUFBRSxJQUFJO2dDQUNWZSxRQUFRLEVBQUUsRUFBRTtnQ0FDWkMsU0FBUyxFQUFFLENBQVE7Z0NBQ25CQyxNQUFNLEVBQUVyQix1REFBTSxDQUFDLENBQUM7NEJBQ2xCLENBQUM7d0JBQ0gsQ0FBQzt3QkFDRCxDQUFDOzRCQUNDLENBQUM7Z0NBQ0NrQixJQUFJLEVBQUUsQ0FBcUI7Z0NBQzNCQyxRQUFRLEVBQUUsRUFBRTtnQ0FDWkMsU0FBUyxFQUFFLENBQVE7NEJBQ3JCLENBQUM7d0JBQ0gsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQVdILENBQUM7SUFFRCxFQUFZO0lBQ1p6QixnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmLEVBQVk7UUFDWixHQUFLLENBQUMyQixHQUFHLEdBQUd4QixzRUFBaUIsQ0FBQ1ksUUFBUTtRQUN0Q1ksR0FBRyxDQUFDRSxPQUFPLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUssQ0FBQztZQUNyQixHQUFLLENBQUNDLE1BQU0sR0FBR0MsR0FBRyxDQUFDQyxlQUFlLENBQUNILElBQUk7WUFDdkMsRUFBWTtZQUNaaEIsTUFBTSxDQUFDaUIsTUFBTTtRQUNmLENBQUM7SUFDRCxFQUFZO0lBQ2QsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sNkVBQ0g3QixzREFBUztRQUFDZ0MsU0FBUyxFQUFDLENBQUs7OEZBQ3ZCakMsaURBQUk7WUFBQ2lDLFNBQVMsRUFBQyxDQUFLO2tHQUNsQkMsQ0FBSztnQkFDSkMsR0FBRyxFQUFFdkIsR0FBRztnQkFDUndCLEtBQUssRUFBRSxDQUFDO29CQUFDQyxLQUFLLEVBQUUsQ0FBTTtvQkFBRVosTUFBTSxFQUFFLENBQU07Z0JBQUMsQ0FBQztnQkFDeENhLElBQUksRUFBQyxDQUFpQjs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQyxDQUFDO0dBcEVLM0IsU0FBUztLQUFUQSxTQUFTO0FBc0VmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JhY2hhLnRzeD9kMGNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQsIENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuaW1wb3J0IHBkZk1ha2UgZnJvbSBcInBkZm1ha2UvYnVpbGQvcGRmbWFrZVwiO1xuaW1wb3J0IHZmcyBmcm9tIFwiLi4vYXNzZXRzL2ZvbnRzL3Zmc19mb250c1wiO1xuXG5pbXBvcnQgeyBDbVRvUHQgfSBmcm9tIFwiLi4vaGVscGVycy9DbVRvUHRcIjtcblxucGRmTWFrZS52ZnMgPSB2ZnM7XG5cbnBkZk1ha2UuZm9udHMgPSB7XG4gIE5pbWJ1c1NhbnM6IHtcbiAgICBub3JtYWw6IFwiTmltYnVzU2FuTC1SZWcub3RmXCIsXG4gICAgYm9sZDogXCJOaW1idXNTYW5MLUJvbC5vdGZcIixcbiAgICBpdGFsaWNzOiBcIk5pbWJ1c1NhbkwtUmVnSXRhLm90ZlwiLFxuICAgIGJvbGRpdGFsaWNzOiBcIk5pbWJ1c1NhbkwtQm9sSXRhLm90ZlwiLFxuICB9LFxufTtcblxuY29uc3QgQmFkZ2VQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBiYWRnZVBkZiA9IHtcbiAgICBjb250ZW50OiBbXG4gICAgICB7XG4gICAgICAgIGZvbnQ6IFwiTmltYnVzU2Fuc1wiLFxuICAgICAgICBjaGFyYWN0ZXJTcGFjaW5nOiAxLFxuICAgICAgICAvLyBsYXlvdXQ6IFwibGlnaHRIb3Jpem9udGFsTGluZXNcIixcbiAgICAgICAgdGFibGU6IHtcbiAgICAgICAgICBoZWFkZXJSb3dzOiAxLFxuICAgICAgICAgIHdpZHRoczogW0NtVG9QdCgxMCldLFxuICAgICAgICAgIGJvZHk6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiQWxiZXJ0byBGcmFuY29cIixcbiAgICAgICAgICAgICAgICBib2xkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgICAgICAgICAgICBhbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBDbVRvUHQoOCksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJFeHBvIEluZMO6c3RyaWEgMjAyMlwiLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgICAgICAgICBhbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgLy8gY29udGVudDogW1xuICAgIC8vICAge1xuICAgIC8vICAgICB0ZXh0OiBgSGVsbG8hYCxcbiAgICAvLyAgICAgcGFnZVNpemU6IHsgd2lkdGg6IFwiNDBjbVwiLCBoZWlnaHQ6IFwiMTVjbVwiIH0sXG4gICAgLy8gICAgIGZvbnRTaXplOiAxNixcbiAgICAvLyAgICAgYm9sZDogdHJ1ZSxcbiAgICAvLyAgICAgYWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgIC8vICAgICBmb250OiBcIk5pbWJ1c1NhbnNcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gXSxcbiAgfTtcblxuICAvL0B0cy1pZ25vcmVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBjb25zdCBwZGYgPSBwZGZNYWtlLmNyZWF0ZVBkZihiYWRnZVBkZik7XG4gICAgcGRmLmdldEJsb2IoKGJsb2IpID0+IHtcbiAgICAgIGNvbnN0IHBkZlVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHNldFVybChwZGZVcmwpO1xuICAgIH0pO1xuICAgIC8vQHRzLWlnbm9yZVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm0tNVwiPlxuICAgICAgPENhcmQgY2xhc3NOYW1lPVwicC01XCI+XG4gICAgICAgIDxlbWJlZFxuICAgICAgICAgIHNyYz17dXJsfVxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE1Y21cIiwgaGVpZ2h0OiBcIjEwY21cIiB9fVxuICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9wZGZcIlxuICAgICAgICAvPlxuICAgICAgPC9DYXJkPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFkZ2VQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FyZCIsIkNvbnRhaW5lciIsInBkZk1ha2UiLCJ2ZnMiLCJDbVRvUHQiLCJmb250cyIsIk5pbWJ1c1NhbnMiLCJub3JtYWwiLCJib2xkIiwiaXRhbGljcyIsImJvbGRpdGFsaWNzIiwiQmFkZ2VQYWdlIiwidXJsIiwic2V0VXJsIiwiYmFkZ2VQZGYiLCJjb250ZW50IiwiZm9udCIsImNoYXJhY3RlclNwYWNpbmciLCJ0YWJsZSIsImhlYWRlclJvd3MiLCJ3aWR0aHMiLCJib2R5IiwidGV4dCIsImZvbnRTaXplIiwiYWxpZ25tZW50IiwiaGVpZ2h0IiwicGRmIiwiY3JlYXRlUGRmIiwiZ2V0QmxvYiIsImJsb2IiLCJwZGZVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjbGFzc05hbWUiLCJlbWJlZCIsInNyYyIsInN0eWxlIiwid2lkdGgiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cracha.tsx\n");

/***/ })

});