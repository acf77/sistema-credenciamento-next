"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/novo-evento",{

/***/ "./redux/actions/eventActions.js":
/*!***************************************!*\
  !*** ./redux/actions/eventActions.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEvent\": function() { return /* binding */ addEvent; }\n/* harmony export */ });\n/* harmony import */ var _Users_acf_Documents_GitHub_gerasom_credenciamento_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_acf_Documents_GitHub_gerasom_credenciamento_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_acf_Documents_GitHub_gerasom_credenciamento_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ \"./redux/constants/constants.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar data = {\n    _id: \"623795054aed623fd752fb01\",\n    nome: \"Aniversario 15 anos - Alicia\",\n    data: \"24-06-2022\",\n    local: \"Espa\\xe7o Renascen\\xe7a\",\n    numConvites: 100,\n    listaConvidados: [\n        {\n            nome: \"Joao\",\n            celular: \"98994567874\",\n            email: \"joao@exemplo.com\",\n            senhas: 3,\n            _id: \"623795054aed623fd752fb02\",\n            createdAt: \"2022-03-20T20:56:37.638Z\",\n            updatedAt: \"2022-03-20T20:56:37.638Z\"\n        },\n        {\n            nome: \"Ana\",\n            celular: \"98994569752\",\n            email: \"ana@exemplo.com\",\n            senhas: 4,\n            _id: \"623795054aed623fd752fb03\",\n            createdAt: \"2022-03-20T20:56:37.639Z\",\n            updatedAt: \"2022-03-20T20:56:37.639Z\"\n        },\n        {\n            nome: \"Alberto Santa\",\n            celular: \"98945869752\",\n            email: \"alberto@exemplo.com\",\n            senhas: 0,\n            _id: \"623795054aed623fd752fb04\",\n            createdAt: \"2022-03-20T20:56:37.639Z\",\n            updatedAt: \"2022-03-20T20:56:37.639Z\"\n        },\n        {\n            nome: \"Jos\\xe9 Christyan\",\n            celular: \"98994697752\",\n            email: \"ze@exemplo.com\",\n            senhas: 1,\n            _id: \"623795054aed623fd752fb05\",\n            createdAt: \"2022-03-20T20:56:37.640Z\",\n            updatedAt: \"2022-03-20T20:56:37.640Z\"\n        }, \n    ],\n    createdAt: \"2022-03-20T20:56:37.640Z\",\n    updatedAt: \"2022-03-20T20:56:37.640Z\",\n    __v: 0\n};\nvar addEvent = function() {\n    return (function() {\n        var _ref = _asyncToGenerator(_Users_acf_Documents_GitHub_gerasom_credenciamento_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch, eventData) {\n            return _Users_acf_Documents_GitHub_gerasom_credenciamento_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        try {\n                            // const options = {\n                            //   headers: {\n                            //     \"Content-Type\": \"application/x-www-form-urlencoded\",\n                            //   },\n                            // };\n                            // dispatch({\n                            //   type: ADD_EVENT_REQUEST,\n                            // });\n                            // const call = await axios.post(\n                            //   \"http://localhost:8080/api/events\",\n                            //   eventData,\n                            //   options\n                            // );\n                            // dispatch({\n                            //   type: ADD_EVENT_SUCCESS,\n                            //   payload: call.data,\n                            // });\n                            console.log(eventData);\n                        } catch (error) {\n                            dispatch({\n                                type: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.ADD_EVENT_FAIL,\n                                payload: error.response\n                            });\n                        }\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function(dispatch, eventData) {\n            return _ref.apply(this, arguments);\n        };\n    })();\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9hY3Rpb25zL2V2ZW50QWN0aW9ucy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSytCO0FBRU47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixHQUFLLENBQUNLLElBQUksR0FBRyxDQUFDO0lBQ1pDLEdBQUcsRUFBRSxDQUEwQjtJQUMvQkMsSUFBSSxFQUFFLENBQThCO0lBQ3BDRixJQUFJLEVBQUUsQ0FBWTtJQUNsQkcsS0FBSyxFQUFFLENBQW1CO0lBQ3hCQyxXQUFTLEVBQUUsR0FBRztJQUNoQkMsZUFBZSxFQUFFLENBQUM7UUFDaEIsQ0FBQztZQUNDSCxJQUFJLEVBQUUsQ0FBTTtZQUNaSSxPQUFPLEVBQUUsQ0FBYTtZQUN0QkMsS0FBSyxFQUFFLENBQWtCO1lBQ3pCQyxNQUFNLEVBQUUsQ0FBQztZQUNUUCxHQUFHLEVBQUUsQ0FBMEI7WUFDL0JRLFNBQVMsRUFBRSxDQUEwQjtZQUNyQ0MsU0FBUyxFQUFFLENBQTBCO1FBQ3ZDLENBQUM7UUFDRCxDQUFDO1lBQ0NSLElBQUksRUFBRSxDQUFLO1lBQ1hJLE9BQU8sRUFBRSxDQUFhO1lBQ3RCQyxLQUFLLEVBQUUsQ0FBaUI7WUFDeEJDLE1BQU0sRUFBRSxDQUFDO1lBQ1RQLEdBQUcsRUFBRSxDQUEwQjtZQUMvQlEsU0FBUyxFQUFFLENBQTBCO1lBQ3JDQyxTQUFTLEVBQUUsQ0FBMEI7UUFDdkMsQ0FBQztRQUNELENBQUM7WUFDQ1IsSUFBSSxFQUFFLENBQWU7WUFDckJJLE9BQU8sRUFBRSxDQUFhO1lBQ3RCQyxLQUFLLEVBQUUsQ0FBcUI7WUFDNUJDLE1BQU0sRUFBRSxDQUFDO1lBQ1RQLEdBQUcsRUFBRSxDQUEwQjtZQUMvQlEsU0FBUyxFQUFFLENBQTBCO1lBQ3JDQyxTQUFTLEVBQUUsQ0FBMEI7UUFDdkMsQ0FBQztRQUNELENBQUM7WUFDQ1IsSUFBSSxFQUFFLENBQWdCO1lBQ3RCSSxPQUFPLEVBQUUsQ0FBYTtZQUN0QkMsS0FBSyxFQUFFLENBQWdCO1lBQ3ZCQyxNQUFNLEVBQUUsQ0FBQztZQUNUUCxHQUFHLEVBQUUsQ0FBMEI7WUFDL0JRLFNBQVMsRUFBRSxDQUEwQjtZQUNyQ0MsU0FBUyxFQUFFLENBQTBCO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBQ0RELFNBQVMsRUFBRSxDQUEwQjtJQUNyQ0MsU0FBUyxFQUFFLENBQTBCO0lBQ3JDQyxHQUFHLEVBQUUsQ0FBQztBQUNSLENBQUM7QUFFTSxHQUFLLENBQUNDLFFBQVEsR0FBRyxRQUFROzswTUFBRixRQUFRLFNBQURDLFFBQVEsRUFBRUMsU0FBUyxFQUFLLENBQUM7Ozs7d0JBQzVELEdBQUcsQ0FBQyxDQUFDOzRCQUNILEVBQW9COzRCQUNwQixFQUFlOzRCQUNmLEVBQTJEOzRCQUMzRCxFQUFPOzRCQUNQLEVBQUs7NEJBRUwsRUFBYTs0QkFDYixFQUE2Qjs0QkFDN0IsRUFBTTs0QkFDTixFQUFpQzs0QkFDakMsRUFBd0M7NEJBQ3hDLEVBQWU7NEJBQ2YsRUFBWTs0QkFDWixFQUFLOzRCQUVMLEVBQWE7NEJBQ2IsRUFBNkI7NEJBQzdCLEVBQXdCOzRCQUN4QixFQUFNOzRCQUVOQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsU0FBUzt3QkFDdkIsQ0FBQyxDQUFDLEtBQUssRUFBRUcsS0FBSyxFQUFFLENBQUM7NEJBQ2ZKLFFBQVEsQ0FBQyxDQUFDO2dDQUNSSyxJQUFJLEVBQUVyQixnRUFBYztnQ0FDcEJzQixPQUFPLEVBQUVGLEtBQUssQ0FBQ0csUUFBUTs0QkFDekIsQ0FBQzt3QkFDSCxDQUFDOzs7Ozs7UUFDSCxDQUFDO3dCQTdCb0NQLFFBQVEsRUFBRUMsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1eC9hY3Rpb25zL2V2ZW50QWN0aW9ucy5qcz84Y2ViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFERF9FVkVOVF9SRVFVRVNULFxuICBBRERfRVZFTlRfU1VDQ0VTUyxcbiAgQUREX0VWRU5UX0ZBSUwsXG4gIERFTEVURV9FVkVOVCxcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBkYXRhID0ge1xuICBfaWQ6IFwiNjIzNzk1MDU0YWVkNjIzZmQ3NTJmYjAxXCIsXG4gIG5vbWU6IFwiQW5pdmVyc2FyaW8gMTUgYW5vcyAtIEFsaWNpYVwiLFxuICBkYXRhOiBcIjI0LTA2LTIwMjJcIixcbiAgbG9jYWw6IFwiRXNwYcOnbyBSZW5hc2NlbsOnYVwiLFxuICBudW1Db252aXRlczogMTAwLFxuICBsaXN0YUNvbnZpZGFkb3M6IFtcbiAgICB7XG4gICAgICBub21lOiBcIkpvYW9cIixcbiAgICAgIGNlbHVsYXI6IFwiOTg5OTQ1Njc4NzRcIixcbiAgICAgIGVtYWlsOiBcImpvYW9AZXhlbXBsby5jb21cIixcbiAgICAgIHNlbmhhczogMyxcbiAgICAgIF9pZDogXCI2MjM3OTUwNTRhZWQ2MjNmZDc1MmZiMDJcIixcbiAgICAgIGNyZWF0ZWRBdDogXCIyMDIyLTAzLTIwVDIwOjU2OjM3LjYzOFpcIixcbiAgICAgIHVwZGF0ZWRBdDogXCIyMDIyLTAzLTIwVDIwOjU2OjM3LjYzOFpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5vbWU6IFwiQW5hXCIsXG4gICAgICBjZWx1bGFyOiBcIjk4OTk0NTY5NzUyXCIsXG4gICAgICBlbWFpbDogXCJhbmFAZXhlbXBsby5jb21cIixcbiAgICAgIHNlbmhhczogNCxcbiAgICAgIF9pZDogXCI2MjM3OTUwNTRhZWQ2MjNmZDc1MmZiMDNcIixcbiAgICAgIGNyZWF0ZWRBdDogXCIyMDIyLTAzLTIwVDIwOjU2OjM3LjYzOVpcIixcbiAgICAgIHVwZGF0ZWRBdDogXCIyMDIyLTAzLTIwVDIwOjU2OjM3LjYzOVpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5vbWU6IFwiQWxiZXJ0byBTYW50YVwiLFxuICAgICAgY2VsdWxhcjogXCI5ODk0NTg2OTc1MlwiLFxuICAgICAgZW1haWw6IFwiYWxiZXJ0b0BleGVtcGxvLmNvbVwiLFxuICAgICAgc2VuaGFzOiAwLFxuICAgICAgX2lkOiBcIjYyMzc5NTA1NGFlZDYyM2ZkNzUyZmIwNFwiLFxuICAgICAgY3JlYXRlZEF0OiBcIjIwMjItMDMtMjBUMjA6NTY6MzcuNjM5WlwiLFxuICAgICAgdXBkYXRlZEF0OiBcIjIwMjItMDMtMjBUMjA6NTY6MzcuNjM5WlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbm9tZTogXCJKb3PDqSBDaHJpc3R5YW5cIixcbiAgICAgIGNlbHVsYXI6IFwiOTg5OTQ2OTc3NTJcIixcbiAgICAgIGVtYWlsOiBcInplQGV4ZW1wbG8uY29tXCIsXG4gICAgICBzZW5oYXM6IDEsXG4gICAgICBfaWQ6IFwiNjIzNzk1MDU0YWVkNjIzZmQ3NTJmYjA1XCIsXG4gICAgICBjcmVhdGVkQXQ6IFwiMjAyMi0wMy0yMFQyMDo1NjozNy42NDBaXCIsXG4gICAgICB1cGRhdGVkQXQ6IFwiMjAyMi0wMy0yMFQyMDo1NjozNy42NDBaXCIsXG4gICAgfSxcbiAgXSxcbiAgY3JlYXRlZEF0OiBcIjIwMjItMDMtMjBUMjA6NTY6MzcuNjQwWlwiLFxuICB1cGRhdGVkQXQ6IFwiMjAyMi0wMy0yMFQyMDo1NjozNy42NDBaXCIsXG4gIF9fdjogMCxcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRFdmVudCA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCwgZXZlbnREYXRhKSA9PiB7XG4gIHRyeSB7XG4gICAgLy8gY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAvLyAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gfTtcblxuICAgIC8vIGRpc3BhdGNoKHtcbiAgICAvLyAgIHR5cGU6IEFERF9FVkVOVF9SRVFVRVNULFxuICAgIC8vIH0pO1xuICAgIC8vIGNvbnN0IGNhbGwgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgIC8vICAgXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2V2ZW50c1wiLFxuICAgIC8vICAgZXZlbnREYXRhLFxuICAgIC8vICAgb3B0aW9uc1xuICAgIC8vICk7XG5cbiAgICAvLyBkaXNwYXRjaCh7XG4gICAgLy8gICB0eXBlOiBBRERfRVZFTlRfU1VDQ0VTUyxcbiAgICAvLyAgIHBheWxvYWQ6IGNhbGwuZGF0YSxcbiAgICAvLyB9KTtcblxuICAgIGNvbnNvbGUubG9nKGV2ZW50RGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQUREX0VWRU5UX0ZBSUwsXG4gICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZSxcbiAgICB9KTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJBRERfRVZFTlRfUkVRVUVTVCIsIkFERF9FVkVOVF9TVUNDRVNTIiwiQUREX0VWRU5UX0ZBSUwiLCJERUxFVEVfRVZFTlQiLCJheGlvcyIsImRhdGEiLCJfaWQiLCJub21lIiwibG9jYWwiLCJudW1Db252aXRlcyIsImxpc3RhQ29udmlkYWRvcyIsImNlbHVsYXIiLCJlbWFpbCIsInNlbmhhcyIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsIl9fdiIsImFkZEV2ZW50IiwiZGlzcGF0Y2giLCJldmVudERhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ0eXBlIiwicGF5bG9hZCIsInJlc3BvbnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/actions/eventActions.js\n");

/***/ })

});