"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Featured.jsx":
/*!*********************************!*\
  !*** ./components/Featured.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Featured.module.css */ \"./styles/Featured.module.css\");\n/* harmony import */ var _styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Featured = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), index = ref[0], setIndex = ref[1];\n    var images = [\n        \"/img/slider1.jpg\",\n        \"/img/slider2.jpg\",\n        \"/img/slider3.jpg\",\n        \"/img/slider4.jpg\", \n    ];\n    var handleArrow = function(direction) {\n        if (direction === \"l\") {\n            setIndex(index !== 0 ? index - 1 : 1);\n        }\n        if (direction === \"r\") {\n            setIndex(index !== 2 ? index + 1 : 0);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        __source: {\n            fileName: \"C:\\\\Users\\\\ARDHAN NUR URFAN\\\\Desktop\\\\movie_landing_page\\\\components\\\\Featured.jsx\",\n            lineNumber: 24,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().arrowContainer),\n                style: {\n                    left: 0\n                },\n                onClick: function() {\n                    return handleArrow(\"l\");\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ARDHAN NUR URFAN\\\\Desktop\\\\movie_landing_page\\\\components\\\\Featured.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/img/arrowl.png\",\n                    alt: \"\",\n                    layout: \"fill\",\n                    objectFit: \"contain\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\ARDHAN NUR URFAN\\\\Desktop\\\\movie_landing_page\\\\components\\\\Featured.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),\n                style: {\n                    transform: \"translateX(\".concat(-100 * index, \"vw)\")\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ARDHAN NUR URFAN\\\\Desktop\\\\movie_landing_page\\\\components\\\\Featured.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: images.map(function(img, i) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().imgContainer),\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ARDHAN NUR URFAN\\\\Desktop\\\\movie_landing_page\\\\components\\\\Featured.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        },\n                        __self: _this1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().banner),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\ARDHAN NUR URFAN\\\\Desktop\\\\movie_landing_page\\\\components\\\\Featured.jsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\ARDHAN NUR URFAN\\\\Desktop\\\\movie_landing_page\\\\components\\\\Featured.jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\ARDHAN NUR URFAN\\\\Desktop\\\\movie_landing_page\\\\components\\\\Featured.jsx\",\n                                                lineNumber: 33,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this1,\n                                            children: \"TITLE MOVIE\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\ARDHAN NUR URFAN\\\\Desktop\\\\movie_landing_page\\\\components\\\\Featured.jsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this1,\n                                            children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt augue ut purus volutpat fermentum. Aliquam eget ultricies ante, ut ultrices velit. Aenean commodo accumsan quam, at aliquet metus mollis ac. Donec mollis velit leo, ac dapibus justo dignissim vel. Phasellus dui nulla, viverra eu orci eu, dapibus sodales elit. Nullam id sollicitudin erat. Suspendisse vehicula dictum lectus, fermentum porttitor turpis efficitur ut. Vestibulum aliquam vestibulum tortor, mattis tempus nulla malesuada in. Pellentesque egestas eget enim vitae placerat. Fusce non magna non enim maximus mattis nec ac mi. Nulla vel felis nibh.\"\n                                        })\n                                    ]\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().images),\n                                src: img,\n                                alt: \"\",\n                                layout: \"fill\",\n                                objectFit: \"contain\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\ARDHAN NUR URFAN\\\\Desktop\\\\movie_landing_page\\\\components\\\\Featured.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                },\n                                __self: _this1\n                            })\n                        ]\n                    }, i);\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().arrowContainer),\n                style: {\n                    right: 0\n                },\n                onClick: function() {\n                    return handleArrow(\"r\");\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ARDHAN NUR URFAN\\\\Desktop\\\\movie_landing_page\\\\components\\\\Featured.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/img/arrowr.png\",\n                    layout: \"fill\",\n                    alt: \"\",\n                    objectFit: \"contain\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\ARDHAN NUR URFAN\\\\Desktop\\\\movie_landing_page\\\\components\\\\Featured.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                })\n            })\n        ]\n    }));\n};\n_s(Featured, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Featured;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Featured);\nvar _c;\n$RefreshReg$(_c, \"Featured\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWF0dXJlZC5qc3g/NTY5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvRmVhdHVyZWQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBGZWF0dXJlZCA9ICgpID0+IHtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgaW1hZ2VzID0gW1xuICAgIFwiL2ltZy9zbGlkZXIxLmpwZ1wiLFxuICAgIFwiL2ltZy9zbGlkZXIyLmpwZ1wiLFxuICAgIFwiL2ltZy9zbGlkZXIzLmpwZ1wiLFxuICAgIFwiL2ltZy9zbGlkZXI0LmpwZ1wiLFxuICBdO1xuIFxuICBjb25zdCBoYW5kbGVBcnJvdyA9IChkaXJlY3Rpb24pID0+e1xuICAgICAgaWYoZGlyZWN0aW9uPT09XCJsXCIpe1xuICAgICAgICAgIHNldEluZGV4KGluZGV4ICE9PSAwID8gaW5kZXgtMSA6IDEpXG4gICAgICB9XG4gICAgICBpZihkaXJlY3Rpb249PT1cInJcIil7XG4gICAgICAgICAgc2V0SW5kZXgoaW5kZXggIT09IDIgPyBpbmRleCsxIDogMClcbiAgICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd0NvbnRhaW5lcn0gc3R5bGU9e3sgbGVmdDogMCB9fSBvbkNsaWNrPXsoKT0+aGFuZGxlQXJyb3coXCJsXCIpfT5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYXJyb3dsLnBuZ1wiIGFsdD1cIlwiIGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb250YWluXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9IHN0eWxlPXt7dHJhbnNmb3JtOmB0cmFuc2xhdGVYKCR7LTEwMCppbmRleH12dylgfX0+XG4gICAgICAgIHtpbWFnZXMubWFwKChpbWcsIGkpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ0NvbnRhaW5lcn0ga2V5PXtpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFubmVyfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICA8aDE+VElUTEUgTU9WSUU8L2gxPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRXRpYW0gdGluY2lkdW50IGF1Z3VlIHV0IHB1cnVzIHZvbHV0cGF0IGZlcm1lbnR1bS4gQWxpcXVhbSBlZ2V0IHVsdHJpY2llcyBhbnRlLCB1dCB1bHRyaWNlcyB2ZWxpdC4gQWVuZWFuIGNvbW1vZG8gYWNjdW1zYW4gcXVhbSwgYXQgYWxpcXVldCBtZXR1cyBtb2xsaXMgYWMuIERvbmVjIG1vbGxpcyB2ZWxpdCBsZW8sIGFjIGRhcGlidXMganVzdG8gZGlnbmlzc2ltIHZlbC4gUGhhc2VsbHVzIGR1aSBudWxsYSwgdml2ZXJyYSBldSBvcmNpIGV1LCBkYXBpYnVzIHNvZGFsZXMgZWxpdC4gTnVsbGFtIGlkIHNvbGxpY2l0dWRpbiBlcmF0LiBTdXNwZW5kaXNzZSB2ZWhpY3VsYSBkaWN0dW0gbGVjdHVzLCBmZXJtZW50dW0gcG9ydHRpdG9yIHR1cnBpcyBlZmZpY2l0dXIgdXQuIFZlc3RpYnVsdW0gYWxpcXVhbSB2ZXN0aWJ1bHVtIHRvcnRvciwgbWF0dGlzIHRlbXB1cyBudWxsYSBtYWxlc3VhZGEgaW4uIFBlbGxlbnRlc3F1ZSBlZ2VzdGFzIGVnZXQgZW5pbSB2aXRhZSBwbGFjZXJhdC4gRnVzY2Ugbm9uIG1hZ25hIG5vbiBlbmltIG1heGltdXMgbWF0dGlzIG5lYyBhYyBtaS4gTnVsbGEgdmVsIGZlbGlzIG5pYmguXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlc30gc3JjPXtpbWd9IGFsdD1cIlwiIGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb250YWluXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJyb3dDb250YWluZXJ9IHN0eWxlPXt7IHJpZ2h0OiAwIH19IG9uQ2xpY2s9eygpPT5oYW5kbGVBcnJvdyhcInJcIil9PlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcnJvd3IucG5nXCIgbGF5b3V0PVwiZmlsbFwiIGFsdD1cIlwiIG9iamVjdEZpdD1cImNvbnRhaW5cIi8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkO1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkltYWdlIiwidXNlU3RhdGUiLCJGZWF0dXJlZCIsImluZGV4Iiwic2V0SW5kZXgiLCJpbWFnZXMiLCJoYW5kbGVBcnJvdyIsImRpcmVjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImFycm93Q29udGFpbmVyIiwic3R5bGUiLCJsZWZ0Iiwib25DbGljayIsInNyYyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCIsIndyYXBwZXIiLCJ0cmFuc2Zvcm0iLCJtYXAiLCJpbWciLCJpIiwiaW1nQ29udGFpbmVyIiwiYmFubmVyIiwiY29udGVudCIsImgxIiwicCIsInJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Featured.jsx\n");

/***/ })

});