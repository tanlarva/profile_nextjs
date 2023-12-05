/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/infor/page",{

/***/ "(app-pages-browser)/./src/app/infor/oLinkInfo.tsx":
/*!*************************************!*\
  !*** ./src/app/infor/oLinkInfo.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _svgs_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/svgs/github */ \"(app-pages-browser)/./src/svgs/github.tsx\");\n/* harmony import */ var _svgs_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svgs_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _svgs_linkedin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/svgs/linkedin */ \"(app-pages-browser)/./src/svgs/linkedin.tsx\");\n/* harmony import */ var _svgs_linkedin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svgs_linkedin__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst information = {\n    github: \"https://github.com/tanlarva\",\n    linkedin: \"https://linkedin.com/in/tanlarva\",\n    freelancer: \"https://freelancer.com/tanlarva\"\n};\nconst oLinkInFor = (param)=>{\n    let { theme } = param;\n    const strokeLogo = theme === \"light\" ? true : false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        className: \"lg:col-span-2   border border-stone-200/90 dark:border-stone-700/90 p-[0.4rem] rounded-lg   bg-stone-100/20 backdrop-blur-md w-full\",\n        initial: {\n            opacity: 0,\n            translateY: 200\n        },\n        animate: {\n            opacity: 1,\n            translateY: 0\n        },\n        transition: {\n            type: \"spring\",\n            duration: 0.3,\n            bounce: 0.1,\n            stiffness: 100,\n            damping: 9\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex md:flex-row p-3   sm:flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_svgs_github__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    link: information[\"github\"],\n                    theme: theme,\n                    for_class: \"flex flex-row\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\laragon\\\\www\\\\profile\\\\src\\\\app\\\\infor\\\\oLinkInfo.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_svgs_linkedin__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    link: information[\"linkedin\"],\n                    theme: theme,\n                    for_class: \"flex flex-row\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\laragon\\\\www\\\\profile\\\\src\\\\app\\\\infor\\\\oLinkInfo.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\laragon\\\\www\\\\profile\\\\src\\\\app\\\\infor\\\\oLinkInfo.tsx\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\laragon\\\\www\\\\profile\\\\src\\\\app\\\\infor\\\\oLinkInfo.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (oLinkInFor);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaW5mb3Ivb0xpbmtJbmZvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFzQztBQUdGO0FBQ0k7QUFNeEMsTUFBTUcsY0FBYztJQUNoQkMsUUFBUTtJQUNSQyxVQUFVO0lBQ1ZDLFlBQVk7QUFDaEI7QUFFQSxNQUFNQyxhQUF3QztRQUFDLEVBQUVDLEtBQUssRUFBRTtJQUNwRCxNQUFNQyxhQUFhRCxVQUFVLFVBQVUsT0FBTTtJQUM3QyxxQkFDSSw4REFBQ1IsaURBQU1BLENBQUNVLEdBQUc7UUFDUEMsV0FBVTtRQUdWQyxTQUFTO1lBQ0xDLFNBQVM7WUFDVEMsWUFBWTtRQUNoQjtRQUNBQyxTQUFTO1lBQ0xGLFNBQVM7WUFDVEMsWUFBWTtRQUNoQjtRQUNBRSxZQUFZO1lBQ1JDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxRQUFRO1lBQ1JDLFdBQVc7WUFDWEMsU0FBUztRQUNiO2tCQUVBLDRFQUFDWDtZQUFJQyxXQUFVOzs4QkFFWCw4REFBQ1YscURBQU9BO29CQUFDcUIsTUFBTW5CLFdBQVcsQ0FBQyxTQUFTO29CQUFFSyxPQUFPQTtvQkFBT2UsV0FBVTs7Ozs7OzhCQUM5RCw4REFBQ3JCLHVEQUFTQTtvQkFBQ29CLE1BQU1uQixXQUFXLENBQUMsV0FBVztvQkFBRUssT0FBT0E7b0JBQU9lLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xGO0FBRUEsK0RBQWVoQixVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvaW5mb3Ivb0xpbmtJbmZvLnRzeD9hZTYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmltcG9ydCBTR2l0aHViIGZyb20gJ0Avc3Zncy9naXRodWInO1xyXG5pbXBvcnQgU0xpbmtlZEluIGZyb20gJ0Avc3Zncy9saW5rZWRpbic7XHJcblxyXG5pbnRlcmZhY2Ugb0xpbmtJbkZvclByb3BzIHtcclxuICAgIHRoZW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IGluZm9ybWF0aW9uID0ge1xyXG4gICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90YW5sYXJ2YVwiLFxyXG4gICAgbGlua2VkaW46IFwiaHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vdGFubGFydmFcIixcclxuICAgIGZyZWVsYW5jZXI6IFwiaHR0cHM6Ly9mcmVlbGFuY2VyLmNvbS90YW5sYXJ2YVwiXHJcbn1cclxuXHJcbmNvbnN0IG9MaW5rSW5Gb3I6IFJlYWN0LkZDPG9MaW5rSW5Gb3JQcm9wcz4gPSAoeyB0aGVtZSB9KSA9PiB7XHJcbiAgICBjb25zdCBzdHJva2VMb2dvID0gdGhlbWUgPT09IFwibGlnaHRcIiA/IHRydWU6IGZhbHNlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyIGJvcmRlci1zdG9uZS0yMDAvOTAgZGFyazpib3JkZXItc3RvbmUtNzAwLzkwIHAtWzAuNHJlbV0gcm91bmRlZC1sZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZy1zdG9uZS0xMDAvMjAgYmFja2Ryb3AtYmx1ci1tZCB3LWZ1bGxcIlxyXG4gICAgICAgICAgICBpbml0aWFsPXt7IFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IDIwMFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhbmltYXRlPXt7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogMFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3NwcmluZycsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC4zLFxyXG4gICAgICAgICAgICAgICAgYm91bmNlOiAwLjEsXHJcbiAgICAgICAgICAgICAgICBzdGlmZm5lc3M6IDEwMCxcclxuICAgICAgICAgICAgICAgIGRhbXBpbmc6IDksXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWQ6ZmxleC1yb3cgcC0zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbTpmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPFNHaXRodWIgbGluaz17aW5mb3JtYXRpb25bJ2dpdGh1YiddfSB0aGVtZT17dGhlbWV9IGZvcl9jbGFzcz0nZmxleCBmbGV4LXJvdyc+PC9TR2l0aHViPlxyXG4gICAgICAgICAgICAgICAgPFNMaW5rZWRJbiBsaW5rPXtpbmZvcm1hdGlvblsnbGlua2VkaW4nXX0gdGhlbWU9e3RoZW1lfSBmb3JfY2xhc3M9J2ZsZXggZmxleC1yb3cnPjwvU0xpbmtlZEluPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb0xpbmtJbkZvciJdLCJuYW1lcyI6WyJtb3Rpb24iLCJTR2l0aHViIiwiU0xpbmtlZEluIiwiaW5mb3JtYXRpb24iLCJnaXRodWIiLCJsaW5rZWRpbiIsImZyZWVsYW5jZXIiLCJvTGlua0luRm9yIiwidGhlbWUiLCJzdHJva2VMb2dvIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ0cmFuc2xhdGVZIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwiZHVyYXRpb24iLCJib3VuY2UiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwibGluayIsImZvcl9jbGFzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/infor/oLinkInfo.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/svgs/github.tsx":
/*!*****************************!*\
  !*** ./src/svgs/github.tsx ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./src/svgs/linkedin.tsx":
/*!*******************************!*\
  !*** ./src/svgs/linkedin.tsx ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});