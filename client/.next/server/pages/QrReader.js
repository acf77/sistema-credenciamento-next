"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/QrReader";
exports.ids = ["pages/QrReader"];
exports.modules = {

/***/ "./pages/QrReader.js":
/*!***************************!*\
  !*** ./pages/QrReader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_qr_reader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-qr-reader */ \"react-qr-reader\");\n/* harmony import */ var react_qr_reader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_qr_reader__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst Qr = ()=>{\n    const { 0: qrData , 1: setQrData  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const handleQrCheckIn = async ({ qr  })=>{\n        const regData = qr.split(/(\\s)/);\n        const id = {\n            event_id: regData[0],\n            invitee_id: regData[2]\n        };\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_4___default().get(`http://localhost:8080/api/event/${id.event_id}/invitee/${id.invitee_id}`);\n        setQrData(data[0]);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: qrData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n            gap: 3,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                className: \"p-5 m-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: [\n                            \"Seja bem-vindo, \",\n                            qrData.nome,\n                            \"! \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/acf/Documents/GitHub/gerasom-credenciamento/client/pages/QrReader.js\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"my-3\",\n                        children: [\n                            \"Voce tem direito a \",\n                            qrData.senhas,\n                            \" senhas.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/acf/Documents/GitHub/gerasom-credenciamento/client/pages/QrReader.js\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        className: \"my-3\",\n                        onClick: ()=>setQrData()\n                        ,\n                        children: \"Retornar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/acf/Documents/GitHub/gerasom-credenciamento/client/pages/QrReader.js\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, undefined),\n                    setTimeout(()=>{\n                        setQrData();\n                    }, 10000)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/acf/Documents/GitHub/gerasom-credenciamento/client/pages/QrReader.js\",\n                lineNumber: 24,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/acf/Documents/GitHub/gerasom-credenciamento/client/pages/QrReader.js\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n            style: {\n                width: 800\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_qr_reader__WEBPACK_IMPORTED_MODULE_1__.QrReader, {\n                scanDelay: 1000,\n                // constraints={{ facingMode: \"user\" }}\n                onResult: (result, error)=>{\n                    if (result) {\n                        handleQrCheckIn({\n                            qr: result.text\n                        });\n                    }\n                    if (error) {\n                        console.error(error);\n                    }\n                }\n            }, void 0, false, {\n                fileName: \"/Users/acf/Documents/GitHub/gerasom-credenciamento/client/pages/QrReader.js\",\n                lineNumber: 39,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/acf/Documents/GitHub/gerasom-credenciamento/client/pages/QrReader.js\",\n            lineNumber: 38,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/acf/Documents/GitHub/gerasom-credenciamento/client/pages/QrReader.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Qr);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9RclJlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDc0I7QUFDaEM7QUFDUDtBQUV6QixLQUFLLENBQUNPLEVBQUUsT0FBUyxDQUFDO0lBQ2hCLEtBQUssTUFBRUMsTUFBTSxNQUFFQyxTQUFTLE1BQUlKLCtDQUFRO0lBRXBDLEtBQUssQ0FBQ0ssZUFBZSxVQUFVLENBQUMsQ0FBQ0MsRUFBRSxFQUFDLENBQUMsR0FBSyxDQUFDO1FBQ3pDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHRCxFQUFFLENBQUNFLEtBQUs7UUFDeEIsS0FBSyxDQUFDQyxFQUFFLEdBQUcsQ0FBQztZQUFDQyxRQUFRLEVBQUVILE9BQU8sQ0FBQyxDQUFDO1lBQUdJLFVBQVUsRUFBRUosT0FBTyxDQUFDLENBQUM7UUFBRSxDQUFDO1FBRTNELEtBQUssQ0FBQyxDQUFDLENBQUNLLElBQUksRUFBQyxDQUFDLEdBQUcsS0FBSyxDQUFDWCxnREFBUyxFQUM3QixnQ0FBZ0MsRUFBRVEsRUFBRSxDQUFDQyxRQUFRLENBQUMsU0FBUyxFQUFFRCxFQUFFLENBQUNFLFVBQVU7UUFHekVQLFNBQVMsQ0FBQ1EsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELE1BQU0sNkVBQ0hkLHNEQUFTO2tCQUNQSyxNQUFNLCtFQUNKSixrREFBSztZQUFDZSxHQUFHLEVBQUUsQ0FBQztrR0FDVmpCLGlEQUFJO2dCQUFDa0IsU0FBUyxFQUFDLENBQVM7O2dHQUN0QkMsQ0FBRTs7NEJBQUMsQ0FBZ0I7NEJBQUNiLE1BQU0sQ0FBQ2MsSUFBSTs0QkFBQyxDQUFFOzs7Ozs7O2dHQUNsQ0MsQ0FBSTt3QkFBQ0gsU0FBUyxFQUFDLENBQU07OzRCQUFDLENBQ0Y7NEJBQUNaLE1BQU0sQ0FBQ2dCLE1BQU07NEJBQUMsQ0FDcEM7Ozs7Ozs7Z0dBQ0N2QixtREFBTTt3QkFBQ21CLFNBQVMsRUFBQyxDQUFNO3dCQUFDSyxPQUFPLE1BQVFoQixTQUFTOztrQ0FBSSxDQUVyRDs7Ozs7O29CQUNDaUIsVUFBVSxLQUFPLENBQUM7d0JBQ2pCakIsU0FBUztvQkFDWCxDQUFDLEVBQUUsS0FBSzs7Ozs7Ozs7Ozs7b0dBSVhOLHNEQUFTO1lBQUN3QixLQUFLLEVBQUUsQ0FBQztnQkFBQ0MsS0FBSyxFQUFFLEdBQUc7WUFBQyxDQUFDO2tHQUM3QjVCLHFEQUFRO2dCQUNQNkIsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsRUFBdUM7Z0JBQ3ZDQyxRQUFRLEdBQUdDLE1BQU0sRUFBRUMsS0FBSyxHQUFLLENBQUM7b0JBQzVCLEVBQUUsRUFBRUQsTUFBTSxFQUFFLENBQUM7d0JBQ1hyQixlQUFlLENBQUMsQ0FBQzs0QkFBQ0MsRUFBRSxFQUFFb0IsTUFBTSxDQUFDRSxJQUFJO3dCQUFDLENBQUM7b0JBQ3JDLENBQUM7b0JBRUQsRUFBRSxFQUFFRCxLQUFLLEVBQUUsQ0FBQzt3QkFDVkUsT0FBTyxDQUFDRixLQUFLLENBQUNBLEtBQUs7b0JBQ3JCLENBQUM7Z0JBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQU9iLENBQUM7QUFFRCxpRUFBZXpCLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dlcmFzb20tY3JlZGVuY2lhbWVudG8vLi9wYWdlcy9RclJlYWRlci5qcz8yZDdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFFyUmVhZGVyIH0gZnJvbSBcInJlYWN0LXFyLXJlYWRlclwiO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDb250YWluZXIsIFN0YWNrIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgUXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtxckRhdGEsIHNldFFyRGF0YV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IGhhbmRsZVFyQ2hlY2tJbiA9IGFzeW5jICh7IHFyIH0pID0+IHtcbiAgICBjb25zdCByZWdEYXRhID0gcXIuc3BsaXQoLyhcXHMpLyk7XG4gICAgY29uc3QgaWQgPSB7IGV2ZW50X2lkOiByZWdEYXRhWzBdLCBpbnZpdGVlX2lkOiByZWdEYXRhWzJdIH07XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2V2ZW50LyR7aWQuZXZlbnRfaWR9L2ludml0ZWUvJHtpZC5pbnZpdGVlX2lkfWBcbiAgICApO1xuXG4gICAgc2V0UXJEYXRhKGRhdGFbMF0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHtxckRhdGEgPyAoXG4gICAgICAgIDxTdGFjayBnYXA9ezN9PlxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInAtNSBtLTVcIj5cbiAgICAgICAgICAgIDxoND5TZWphIGJlbS12aW5kbywge3FyRGF0YS5ub21lfSEgPC9oND5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm15LTNcIj5cbiAgICAgICAgICAgICAgVm9jZSB0ZW0gZGlyZWl0byBhIHtxckRhdGEuc2VuaGFzfSBzZW5oYXMuXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm15LTNcIiBvbkNsaWNrPXsoKSA9PiBzZXRRckRhdGEoKX0+XG4gICAgICAgICAgICAgIFJldG9ybmFyXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIHtzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgc2V0UXJEYXRhKCk7XG4gICAgICAgICAgICB9LCAxMDAwMCl9XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgKSA6IChcbiAgICAgICAgPENvbnRhaW5lciBzdHlsZT17eyB3aWR0aDogODAwIH19PlxuICAgICAgICAgIDxRclJlYWRlclxuICAgICAgICAgICAgc2NhbkRlbGF5PXsxMDAwfVxuICAgICAgICAgICAgLy8gY29uc3RyYWludHM9e3sgZmFjaW5nTW9kZTogXCJ1c2VyXCIgfX1cbiAgICAgICAgICAgIG9uUmVzdWx0PXsocmVzdWx0LCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlUXJDaGVja0luKHsgcXI6IHJlc3VsdC50ZXh0IH0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICApfVxuICAgICAgey8qIDxRckNvZGVSZXN1bHREaWFsb2cgaXNPcGVuPXtpc09wZW59IG9uRGlzbWlzcz17b25EaXNtaXNzfSB7Li4ucXJEYXRhfSAvPiAqL31cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFFyO1xuIl0sIm5hbWVzIjpbIlFyUmVhZGVyIiwiQnV0dG9uIiwiQ2FyZCIsIkNvbnRhaW5lciIsIlN0YWNrIiwidXNlU3RhdGUiLCJheGlvcyIsIlFyIiwicXJEYXRhIiwic2V0UXJEYXRhIiwiaGFuZGxlUXJDaGVja0luIiwicXIiLCJyZWdEYXRhIiwic3BsaXQiLCJpZCIsImV2ZW50X2lkIiwiaW52aXRlZV9pZCIsImRhdGEiLCJnZXQiLCJnYXAiLCJjbGFzc05hbWUiLCJoNCIsIm5vbWUiLCJzcGFuIiwic2VuaGFzIiwib25DbGljayIsInNldFRpbWVvdXQiLCJzdHlsZSIsIndpZHRoIiwic2NhbkRlbGF5Iiwib25SZXN1bHQiLCJyZXN1bHQiLCJlcnJvciIsInRleHQiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/QrReader.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-qr-reader":
/*!**********************************!*\
  !*** external "react-qr-reader" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-qr-reader");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/QrReader.js"));
module.exports = __webpack_exports__;

})();