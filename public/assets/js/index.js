/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("/**\n * Toggle Navbar Menu\n */\nvar toggleMenuButton = document.getElementById('toggle-menu');\nvar navbarMenu = document.querySelector('.navbar-menu');\nvar navbarMenuLinks = document.querySelectorAll('.navbar-link');\nvar changeIcon = function () {\n    var iconList = document.querySelectorAll('#toggle-menu i');\n    iconList.length &&\n        iconList.forEach(function (icon) { return icon.classList.toggle('hidden'); });\n};\nif (toggleMenuButton && navbarMenu && navbarMenuLinks.length) {\n    toggleMenuButton.addEventListener('click', function () {\n        navbarMenu.classList.toggle('show');\n        changeIcon();\n    });\n    navbarMenuLinks.forEach(function (link) {\n        return link.addEventListener('click', function () {\n            navbarMenu.classList.toggle('show');\n            changeIcon();\n        });\n    });\n}\n\n\n//# sourceURL=webpack://subscribe-page-design/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;