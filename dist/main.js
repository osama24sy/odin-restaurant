"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/asset/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/asset/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/cafe.jpg */ "./src/asset/images/cafe.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Great+Vibes&family=Parisienne&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lobster&family=Nuosu+SIL&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --eggshell: #f4f1deff;\n    --terra-cotta: #e07a5fff;\n    --independence: #3d405bff;\n    --green-sheen: #81b29aff;\n    --deep-champagne: #f2cc8fff;\n    --parisienne-font: \"Parisienne\";\n    --great-vibes-font: \"Great Vibes\";\n}\n\nhtml, body {\n    width: 100%;\n    margin: 0px;\n}\n\nbody {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n/* Header.js */\n#header {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    background-color: var(--independence);\n    text-align: center;\n    width: 70vw;\n    padding: 50px 75px;\n    padding-bottom: 0px;\n}\n\n#header > p {\n    color: var(--eggshell);\n    font-family: \"Parisienne\";\n    margin: 0;\n}\n\nhr {\n    width: 100%;\n}\n\n.logo {\n    font-size: 3em;\n}\n\n.slogan {\n    font-size: 1.5em;\n}\n\n\n/* Navbar.js */\n\n#nav {\n    width: 100%;\n    text-align: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n#nav > div {\n    padding: 0px 50px;\n}\n\n#nav > div:hover {\n    background-color: rgba(256, 256, 256, 0.2);\n    cursor: pointer;\n}\n\n.active {\n    border-bottom: 2px solid var(--eggshell);\n}\n\n#nav > div > p {\n    color: var(--eggshell);\n    font-family: var(--great-vibes-font);\n    font-size: 2em;\n    margin: 20px  0px;\n}\n\n/* MAIN-PAGE.JS CSS */\n\n#main {\n    width: 60vw;\n    padding: 50px 75px;\n    background-color: rgba(244, 241, 222, 0.384);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 50px 0px;\n    border-radius: 1%;\n}\n\n#main > img {\n    width: 60vw;\n    border: 10px solid rgba(242, 204, 143, 0.50);\n}\n\n#main > p {\n    font-family: 'Lobster';\n    font-size: 3em;\n    color: var(--independence);\n    text-shadow: 4px 0px 0px var(--eggshell);\n}\n\n/* MENU-PAGE.JS */\n\n#menu {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    gap: 10px;\n}\n\n#menu > div {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    gap: 5vw;\n    background-color: rgba(240, 248, 255, 0.226);\n    width: 400px;\n    justify-content: flex-end;\n    padding: 10px;\n    border-radius: 3%;\n}\n\n#menu > div > img {\n    width: 100px;\n    border-radius: 50%;\n}\n\n#menu > div > p {\n    font-size: 1.5em;\n    font-family: 'Nuoso SIL';\n    font-weight: bold;\n    color: rgba(0, 0, 0, 0.8);\n}\n\n#about-text {\n    color: var(--eggshell);\n    font-size: 1.5em;\n}\n\n#about-div {\n    background-color: rgba(61, 64, 91, 0.37);\n    padding: 10px;\n    border-radius: 5%;\n}", "",{"version":3,"sources":["webpack://./src/asset/style.css"],"names":[],"mappings":"AAGA;IACI,qBAAqB;IACrB,wBAAwB;IACxB,yBAAyB;IACzB,wBAAwB;IACxB,2BAA2B;IAC3B,+BAA+B;IAC/B,iCAAiC;AACrC;;AAEA;IACI,WAAW;IACX,WAAW;AACf;;AAEA;IACI,yDAA0C;IAC1C,4BAA4B;IAC5B,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA,cAAc;AACd;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,qCAAqC;IACrC,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,yBAAyB;IACzB,SAAS;AACb;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gBAAgB;AACpB;;;AAGA,cAAc;;AAEd;IACI,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,0CAA0C;IAC1C,eAAe;AACnB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,sBAAsB;IACtB,oCAAoC;IACpC,cAAc;IACd,iBAAiB;AACrB;;AAEA,qBAAqB;;AAErB;IACI,WAAW;IACX,kBAAkB;IAClB,4CAA4C;IAC5C,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,4CAA4C;AAChD;;AAEA;IACI,sBAAsB;IACtB,cAAc;IACd,0BAA0B;IAC1B,wCAAwC;AAC5C;;AAEA,iBAAiB;;AAEjB;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,QAAQ;IACR,4CAA4C;IAC5C,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,wBAAwB;IACxB,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,wCAAwC;IACxC,aAAa;IACb,iBAAiB;AACrB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Parisienne&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Nuosu+SIL&display=swap');\n\n:root {\n    --eggshell: #f4f1deff;\n    --terra-cotta: #e07a5fff;\n    --independence: #3d405bff;\n    --green-sheen: #81b29aff;\n    --deep-champagne: #f2cc8fff;\n    --parisienne-font: \"Parisienne\";\n    --great-vibes-font: \"Great Vibes\";\n}\n\nhtml, body {\n    width: 100%;\n    margin: 0px;\n}\n\nbody {\n    background-image: url('./images/cafe.jpg');\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n/* Header.js */\n#header {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    background-color: var(--independence);\n    text-align: center;\n    width: 70vw;\n    padding: 50px 75px;\n    padding-bottom: 0px;\n}\n\n#header > p {\n    color: var(--eggshell);\n    font-family: \"Parisienne\";\n    margin: 0;\n}\n\nhr {\n    width: 100%;\n}\n\n.logo {\n    font-size: 3em;\n}\n\n.slogan {\n    font-size: 1.5em;\n}\n\n\n/* Navbar.js */\n\n#nav {\n    width: 100%;\n    text-align: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n#nav > div {\n    padding: 0px 50px;\n}\n\n#nav > div:hover {\n    background-color: rgba(256, 256, 256, 0.2);\n    cursor: pointer;\n}\n\n.active {\n    border-bottom: 2px solid var(--eggshell);\n}\n\n#nav > div > p {\n    color: var(--eggshell);\n    font-family: var(--great-vibes-font);\n    font-size: 2em;\n    margin: 20px  0px;\n}\n\n/* MAIN-PAGE.JS CSS */\n\n#main {\n    width: 60vw;\n    padding: 50px 75px;\n    background-color: rgba(244, 241, 222, 0.384);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 50px 0px;\n    border-radius: 1%;\n}\n\n#main > img {\n    width: 60vw;\n    border: 10px solid rgba(242, 204, 143, 0.50);\n}\n\n#main > p {\n    font-family: 'Lobster';\n    font-size: 3em;\n    color: var(--independence);\n    text-shadow: 4px 0px 0px var(--eggshell);\n}\n\n/* MENU-PAGE.JS */\n\n#menu {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    gap: 10px;\n}\n\n#menu > div {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    gap: 5vw;\n    background-color: rgba(240, 248, 255, 0.226);\n    width: 400px;\n    justify-content: flex-end;\n    padding: 10px;\n    border-radius: 3%;\n}\n\n#menu > div > img {\n    width: 100px;\n    border-radius: 50%;\n}\n\n#menu > div > p {\n    font-size: 1.5em;\n    font-family: 'Nuoso SIL';\n    font-weight: bold;\n    color: rgba(0, 0, 0, 0.8);\n}\n\n#about-text {\n    color: var(--eggshell);\n    font-size: 1.5em;\n}\n\n#about-div {\n    background-color: rgba(61, 64, 91, 0.37);\n    padding: 10px;\n    border-radius: 5%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/asset/style.css":
/*!*****************************!*\
  !*** ./src/asset/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/asset/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/asset/pages/about-page.js":
/*!***************************************!*\
  !*** ./src/asset/pages/about-page.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createAbout = () => {
    const main = document.getElementById('main');

    const title = document.createElement('p');
    title.textContent = 'About us';

    const hr = document.createElement('hr');

    const aboutDiv = document.createElement('div');
    aboutDiv.id = 'about-div';

    const about = document.createElement('p');
    about.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada erat eu dolor cursus, id condimentum tortor ultrices. Ut a mi nunc. Cras aliquam nibh non efficitur faucibus. Donec sit amet nisl tempus, accumsan risus blandit, aliquam enim. Mauris dictum nisl odio, et sodales dui lacinia vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam non diam consequat, condimentum neque ut, cursus justo. Suspendisse facilisis justo quis dui sollicitudin mollis. Morbi ut faucibus sem.';
    about.id = 'about-text';

    aboutDiv.appendChild(about);
    main.appendChild(title);
    main.appendChild(hr);
    main.appendChild(aboutDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAbout);

/***/ }),

/***/ "./src/asset/pages/header.js":
/*!***********************************!*\
  !*** ./src/asset/pages/header.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createHeader =  () => {
    const content = document.querySelector("#content");

    const header = document.createElement("div");
    header.id = "header";
    
    const logo = document.createElement("p");
    logo.textContent = "Bourgeois Cafe";
    logo.classList.add("logo");
    
    const hr = document.createElement("hr");

    const slogan = document.createElement("p");
    slogan.textContent = "Nous aimons vous servir";
    slogan.classList.add("slogan");

    header.appendChild(logo);
    header.appendChild(hr);
    header.appendChild(slogan);

    content.appendChild(header); 
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);

/***/ }),

/***/ "./src/asset/pages/main-page.js":
/*!**************************************!*\
  !*** ./src/asset/pages/main-page.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_coffee_pouring_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/coffee-pouring.jpg */ "./src/asset/images/coffee-pouring.jpg");


const createMain = () => {
    const content = document.querySelector("#content");
    const main = document.querySelector("#main");

    const img = new Image();
    img.src = _images_coffee_pouring_jpg__WEBPACK_IMPORTED_MODULE_0__;

    const desc = document.createElement("p");
    desc.textContent = "Best coffee in town.";

    main.appendChild(img);
    main.appendChild(desc);
    content.appendChild(main);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMain);

/***/ }),

/***/ "./src/asset/pages/menu-page.js":
/*!**************************************!*\
  !*** ./src/asset/pages/menu-page.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_latte_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/latte.jpg */ "./src/asset/images/latte.jpg");
/* harmony import */ var _images_mocha_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/mocha.jpg */ "./src/asset/images/mocha.jpg");
/* harmony import */ var _images_cappuccino_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/cappuccino.jpg */ "./src/asset/images/cappuccino.jpg");
/* harmony import */ var _images_macchiato_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/macchiato.jpg */ "./src/asset/images/macchiato.jpg");
/* harmony import */ var _images_espresso_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/espresso.jpg */ "./src/asset/images/espresso.jpg");
/* harmony import */ var _images_flat_white_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/flat-white.jpg */ "./src/asset/images/flat-white.jpg");








const createMenu = () => {
    const main = document.getElementById('main');

    const title = document.createElement("p");
    title.textContent = "Menu";
    const hr = document.createElement("hr");

    const menu = document.createElement("div");
    menu.id = 'menu';

    const latte = document.createElement("div");
    latte.id = 'latte';
    const lattep = document.createElement("p");
    lattep.textContent = "Caffè Latte";
    const latteImg = new Image();
    latteImg.src = _images_latte_jpg__WEBPACK_IMPORTED_MODULE_0__;
    latte.appendChild(lattep);
    latte.appendChild(latteImg);
    menu.appendChild(latte);

    const mocha = document.createElement("div");
    mocha.id = 'mocha';
    const mochap = document.createElement("p");
    mochap.textContent = "Mocha";
    const mochaImg = new Image();
    mochaImg.src = _images_mocha_jpg__WEBPACK_IMPORTED_MODULE_1__;
    mocha.appendChild(mochap);
    mocha.appendChild(mochaImg);
    menu.appendChild(mocha);

    const cappuccino = document.createElement("div");
    cappuccino.id = 'cappuccino';
    const cappuccinop = document.createElement("p");
    cappuccinop.textContent = "Cappuccino";
    const cappuccinoImg = new Image();
    cappuccinoImg.src = _images_cappuccino_jpg__WEBPACK_IMPORTED_MODULE_2__;
    cappuccino.appendChild(cappuccinop);
    cappuccino.appendChild(cappuccinoImg);
    menu.appendChild(cappuccino);

    const macchiato = document.createElement("div");
    macchiato.id = 'macchiato';
    const macchiatop = document.createElement("p");
    macchiatop.textContent = "Macchiato";
    const macchiatoImg = new Image();
    macchiatoImg.src = _images_macchiato_jpg__WEBPACK_IMPORTED_MODULE_3__;
    macchiato.appendChild(macchiatop);
    macchiato.appendChild(macchiatoImg);
    menu.appendChild(macchiato);

    const espresso = document.createElement("div");
    espresso.id = 'espresso';
    const espressop = document.createElement("p");
    espressop.textContent = "Espresso";
    const espressoImg = new Image();
    espressoImg.src = _images_espresso_jpg__WEBPACK_IMPORTED_MODULE_4__;
    espresso.appendChild(espressop);
    espresso.appendChild(espressoImg);
    menu.appendChild(espresso);

    const flatWhite = document.createElement("div");
    flatWhite.id = 'flatWhite';
    const flatWhitep = document.createElement("p");
    flatWhitep.textContent = "Flat White";
    const flatWhiteImg = new Image();
    flatWhiteImg.src = _images_flat_white_jpg__WEBPACK_IMPORTED_MODULE_5__;
    flatWhite.appendChild(flatWhitep);
    flatWhite.appendChild(flatWhiteImg);
    menu.appendChild(flatWhite);

    main.appendChild(title);
    main.appendChild(hr);
    main.appendChild(menu);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);

/***/ }),

/***/ "./src/asset/pages/navbar.js":
/*!***********************************!*\
  !*** ./src/asset/pages/navbar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createNavbar = () => {
    const header = document.querySelector("#header");

    let page = 'home';

    const nav = document.createElement("div");
    nav.id = 'nav';

    const home = document.createElement("div");
    home.id = 'home';
    const homep = document.createElement("p");
    homep.textContent = 'Home';
    home.appendChild(homep);

    const menu = document.createElement("div");
    menu.id = 'menu';
    const menup = document.createElement("p");
    menup.textContent = 'Menu';
    menu.appendChild(menup);

    const about = document.createElement("div");
    about.id = 'about';
    const aboutp = document.createElement("p");
    aboutp.textContent = 'About';
    about.appendChild(aboutp);

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);

    header.appendChild(nav);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavbar);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asset_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/style.css */ "./src/asset/style.css");
/* harmony import */ var _asset_pages_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/pages/header */ "./src/asset/pages/header.js");
/* harmony import */ var _asset_pages_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset/pages/navbar */ "./src/asset/pages/navbar.js");
/* harmony import */ var _asset_pages_main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset/pages/main-page */ "./src/asset/pages/main-page.js");
/* harmony import */ var _asset_pages_menu_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asset/pages/menu-page */ "./src/asset/pages/menu-page.js");
/* harmony import */ var _asset_pages_about_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset/pages/about-page */ "./src/asset/pages/about-page.js");







// Setting the wrapper div
const body = document.querySelector("body");
const content = document.createElement("div");
content.id = "content";
body.appendChild(content);
const main = document.createElement("div");
main.id = 'main';
content.appendChild(main);

// Creating the header and the navbar
(0,_asset_pages_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_asset_pages_navbar__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_asset_pages_main_page__WEBPACK_IMPORTED_MODULE_3__["default"])();

// event listeners for the navbar

home.addEventListener("click", () => {
    document.getElementById("main").innerHTML = '';
    (0,_asset_pages_main_page__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

menu.addEventListener("click", () => {
    document.getElementById("main").innerHTML = '';
    (0,_asset_pages_menu_page__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

about.addEventListener("click", () => {
    document.getElementById("main").innerHTML = '';
    (0,_asset_pages_about_page__WEBPACK_IMPORTED_MODULE_5__["default"])();
});



/***/ }),

/***/ "./src/asset/images/cafe.jpg":
/*!***********************************!*\
  !*** ./src/asset/images/cafe.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e7366dac028368df61d.jpg";

/***/ }),

/***/ "./src/asset/images/cappuccino.jpg":
/*!*****************************************!*\
  !*** ./src/asset/images/cappuccino.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6716a6bf2cbe4294f52d.jpg";

/***/ }),

/***/ "./src/asset/images/coffee-pouring.jpg":
/*!*********************************************!*\
  !*** ./src/asset/images/coffee-pouring.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c7c4838d7d0dfad7b29.jpg";

/***/ }),

/***/ "./src/asset/images/espresso.jpg":
/*!***************************************!*\
  !*** ./src/asset/images/espresso.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9619cbed4d7c82da9fe2.jpg";

/***/ }),

/***/ "./src/asset/images/flat-white.jpg":
/*!*****************************************!*\
  !*** ./src/asset/images/flat-white.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bda99e00102325663a8b.jpg";

/***/ }),

/***/ "./src/asset/images/latte.jpg":
/*!************************************!*\
  !*** ./src/asset/images/latte.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d7c5f82f8d87f21475a.jpg";

/***/ }),

/***/ "./src/asset/images/macchiato.jpg":
/*!****************************************!*\
  !*** ./src/asset/images/macchiato.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "863e06ed2471f9762ee7.jpg";

/***/ }),

/***/ "./src/asset/images/mocha.jpg":
/*!************************************!*\
  !*** ./src/asset/images/mocha.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d60873912f3012f6134.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3JjL2Fzc2V0L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2Fzc2V0L3N0eWxlLmNzcz82N2EwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2Fzc2V0L3BhZ2VzL2Fib3V0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2Fzc2V0L3BhZ2VzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvYXNzZXQvcGFnZXMvbWFpbi1wYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9hc3NldC9wYWdlcy9tZW51LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2Fzc2V0L3BhZ2VzL25hdmJhci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2NhZmUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmVhdCtWaWJlcyZmYW1pbHk9UGFyaXNpZW5uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyJmZhbWlseT1OdW9zdStTSUwmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1lZ2dzaGVsbDogI2Y0ZjFkZWZmO1xcbiAgICAtLXRlcnJhLWNvdHRhOiAjZTA3YTVmZmY7XFxuICAgIC0taW5kZXBlbmRlbmNlOiAjM2Q0MDViZmY7XFxuICAgIC0tZ3JlZW4tc2hlZW46ICM4MWIyOWFmZjtcXG4gICAgLS1kZWVwLWNoYW1wYWduZTogI2YyY2M4ZmZmO1xcbiAgICAtLXBhcmlzaWVubmUtZm9udDogXFxcIlBhcmlzaWVubmVcXFwiO1xcbiAgICAtLWdyZWF0LXZpYmVzLWZvbnQ6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4vKiBIZWFkZXIuanMgKi9cXG4jaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGVwZW5kZW5jZSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIHBhZGRpbmc6IDUwcHggNzVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcXG59XFxuXFxuI2hlYWRlciA+IHAge1xcbiAgICBjb2xvcjogdmFyKC0tZWdnc2hlbGwpO1xcbiAgICBmb250LWZhbWlseTogXFxcIlBhcmlzaWVubmVcXFwiO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmhyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZm9udC1zaXplOiAzZW07XFxufVxcblxcbi5zbG9nYW4ge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG5cXG4vKiBOYXZiYXIuanMgKi9cXG5cXG4jbmF2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbiNuYXYgPiBkaXYge1xcbiAgICBwYWRkaW5nOiAwcHggNTBweDtcXG59XFxuXFxuI25hdiA+IGRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU2LCAyNTYsIDI1NiwgMC4yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWVnZ3NoZWxsKTtcXG59XFxuXFxuI25hdiA+IGRpdiA+IHAge1xcbiAgICBjb2xvcjogdmFyKC0tZWdnc2hlbGwpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZ3JlYXQtdmliZXMtZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDIwcHggIDBweDtcXG59XFxuXFxuLyogTUFJTi1QQUdFLkpTIENTUyAqL1xcblxcbiNtYWluIHtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIHBhZGRpbmc6IDUwcHggNzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDI0MSwgMjIyLCAwLjM4NCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNTBweCAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDElO1xcbn1cXG5cXG4jbWFpbiA+IGltZyB7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBib3JkZXI6IDEwcHggc29saWQgcmdiYSgyNDIsIDIwNCwgMTQzLCAwLjUwKTtcXG59XFxuXFxuI21haW4gPiBwIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICAgIGNvbG9yOiB2YXIoLS1pbmRlcGVuZGVuY2UpO1xcbiAgICB0ZXh0LXNoYWRvdzogNHB4IDBweCAwcHggdmFyKC0tZWdnc2hlbGwpO1xcbn1cXG5cXG4vKiBNRU5VLVBBR0UuSlMgKi9cXG5cXG4jbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI21lbnUgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuMjI2KTtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzJTtcXG59XFxuXFxuI21lbnUgPiBkaXYgPiBpbWcge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuI21lbnUgPiBkaXYgPiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdOdW9zbyBTSUwnO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuI2Fib3V0LXRleHQge1xcbiAgICBjb2xvcjogdmFyKC0tZWdnc2hlbGwpO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4jYWJvdXQtZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MSwgNjQsIDkxLCAwLjM3KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldC9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0kseURBQTBDO0lBQzFDLDRCQUE0QjtJQUM1Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQSxjQUFjO0FBQ2Q7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFHQSxjQUFjOztBQUVkO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBLHFCQUFxQjs7QUFFckI7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDRDQUE0QztJQUM1QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLHdDQUF3QztBQUM1Qzs7QUFFQSxpQkFBaUI7O0FBRWpCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUiw0Q0FBNEM7SUFDNUMsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmVhdCtWaWJlcyZmYW1pbHk9UGFyaXNpZW5uZSZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyJmZhbWlseT1OdW9zdStTSUwmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLWVnZ3NoZWxsOiAjZjRmMWRlZmY7XFxuICAgIC0tdGVycmEtY290dGE6ICNlMDdhNWZmZjtcXG4gICAgLS1pbmRlcGVuZGVuY2U6ICMzZDQwNWJmZjtcXG4gICAgLS1ncmVlbi1zaGVlbjogIzgxYjI5YWZmO1xcbiAgICAtLWRlZXAtY2hhbXBhZ25lOiAjZjJjYzhmZmY7XFxuICAgIC0tcGFyaXNpZW5uZS1mb250OiBcXFwiUGFyaXNpZW5uZVxcXCI7XFxuICAgIC0tZ3JlYXQtdmliZXMtZm9udDogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvY2FmZS5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLyogSGVhZGVyLmpzICovXFxuI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRlcGVuZGVuY2UpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgICBwYWRkaW5nOiA1MHB4IDc1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XFxufVxcblxcbiNoZWFkZXIgPiBwIHtcXG4gICAgY29sb3I6IHZhcigtLWVnZ3NoZWxsKTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQYXJpc2llbm5lXFxcIjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ociB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbn1cXG5cXG4uc2xvZ2FuIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuXFxuLyogTmF2YmFyLmpzICovXFxuXFxuI25hdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4jbmF2ID4gZGl2IHtcXG4gICAgcGFkZGluZzogMHB4IDUwcHg7XFxufVxcblxcbiNuYXYgPiBkaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NiwgMjU2LCAyNTYsIDAuMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1lZ2dzaGVsbCk7XFxufVxcblxcbiNuYXYgPiBkaXYgPiBwIHtcXG4gICAgY29sb3I6IHZhcigtLWVnZ3NoZWxsKTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWdyZWF0LXZpYmVzLWZvbnQpO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAyMHB4ICAwcHg7XFxufVxcblxcbi8qIE1BSU4tUEFHRS5KUyBDU1MgKi9cXG5cXG4jbWFpbiB7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBwYWRkaW5nOiA1MHB4IDc1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCAyNDEsIDIyMiwgMC4zODQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDUwcHggMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxJTtcXG59XFxuXFxuI21haW4gPiBpbWcge1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYmEoMjQyLCAyMDQsIDE0MywgMC41MCk7XFxufVxcblxcbiNtYWluID4gcCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3Rlcic7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICBjb2xvcjogdmFyKC0taW5kZXBlbmRlbmNlKTtcXG4gICAgdGV4dC1zaGFkb3c6IDRweCAwcHggMHB4IHZhcigtLWVnZ3NoZWxsKTtcXG59XFxuXFxuLyogTUVOVS1QQUdFLkpTICovXFxuXFxuI21lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNtZW51ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDV2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0OCwgMjU1LCAwLjIyNik7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMyU7XFxufVxcblxcbiNtZW51ID4gZGl2ID4gaW1nIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbiNtZW51ID4gZGl2ID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTnVvc28gU0lMJztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbiNhYm91dC10ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLWVnZ3NoZWxsKTtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuI2Fib3V0LWRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjEsIDY0LCA5MSwgMC4zNyk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY3JlYXRlQWJvdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdBYm91dCB1cyc7XG5cbiAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG5cbiAgICBjb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0RGl2LmlkID0gJ2Fib3V0LWRpdic7XG5cbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dC50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQZWxsZW50ZXNxdWUgbWFsZXN1YWRhIGVyYXQgZXUgZG9sb3IgY3Vyc3VzLCBpZCBjb25kaW1lbnR1bSB0b3J0b3IgdWx0cmljZXMuIFV0IGEgbWkgbnVuYy4gQ3JhcyBhbGlxdWFtIG5pYmggbm9uIGVmZmljaXR1ciBmYXVjaWJ1cy4gRG9uZWMgc2l0IGFtZXQgbmlzbCB0ZW1wdXMsIGFjY3Vtc2FuIHJpc3VzIGJsYW5kaXQsIGFsaXF1YW0gZW5pbS4gTWF1cmlzIGRpY3R1bSBuaXNsIG9kaW8sIGV0IHNvZGFsZXMgZHVpIGxhY2luaWEgdml0YWUuIE9yY2kgdmFyaXVzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIE5hbSBub24gZGlhbSBjb25zZXF1YXQsIGNvbmRpbWVudHVtIG5lcXVlIHV0LCBjdXJzdXMganVzdG8uIFN1c3BlbmRpc3NlIGZhY2lsaXNpcyBqdXN0byBxdWlzIGR1aSBzb2xsaWNpdHVkaW4gbW9sbGlzLiBNb3JiaSB1dCBmYXVjaWJ1cyBzZW0uJztcbiAgICBhYm91dC5pZCA9ICdhYm91dC10ZXh0JztcblxuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGFib3V0KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGFib3V0RGl2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWJvdXQ7IiwiY29uc3QgY3JlYXRlSGVhZGVyID0gICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xuICAgIFxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsb2dvLnRleHRDb250ZW50ID0gXCJCb3VyZ2VvaXMgQ2FmZVwiO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG4gICAgXG4gICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cbiAgICBjb25zdCBzbG9nYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzbG9nYW4udGV4dENvbnRlbnQgPSBcIk5vdXMgYWltb25zIHZvdXMgc2VydmlyXCI7XG4gICAgc2xvZ2FuLmNsYXNzTGlzdC5hZGQoXCJzbG9nYW5cIik7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhyKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2xvZ2FuKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTsgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlcjsiLCJpbXBvcnQgY29mZmVlIGZyb20gJy4uL2ltYWdlcy9jb2ZmZWUtcG91cmluZy5qcGcnO1xuXG5jb25zdCBjcmVhdGVNYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKTtcblxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBjb2ZmZWU7XG5cbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzYy50ZXh0Q29udGVudCA9IFwiQmVzdCBjb2ZmZWUgaW4gdG93bi5cIjtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGRlc2MpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1haW47IiwiaW1wb3J0IGxhdHRlc3JjIGZyb20gJy4uL2ltYWdlcy9sYXR0ZS5qcGcnO1xuaW1wb3J0IG1vY2hhc3JjIGZyb20gJy4uL2ltYWdlcy9tb2NoYS5qcGcnO1xuaW1wb3J0IGNhcHB1Y2Npbm9zcmMgZnJvbSAnLi4vaW1hZ2VzL2NhcHB1Y2Npbm8uanBnJztcbmltcG9ydCBtYWNjaGlhdG9zcmMgZnJvbSAnLi4vaW1hZ2VzL21hY2NoaWF0by5qcGcnO1xuaW1wb3J0IGVzcHJlc3Nvc3JjIGZyb20gJy4uL2ltYWdlcy9lc3ByZXNzby5qcGcnO1xuaW1wb3J0IGZsYXRXaGl0ZXNyYyBmcm9tICcuLi9pbWFnZXMvZmxhdC13aGl0ZS5qcGcnO1xuXG5cbmNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51LmlkID0gJ21lbnUnO1xuXG4gICAgY29uc3QgbGF0dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxhdHRlLmlkID0gJ2xhdHRlJztcbiAgICBjb25zdCBsYXR0ZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsYXR0ZXAudGV4dENvbnRlbnQgPSBcIkNhZmbDqCBMYXR0ZVwiO1xuICAgIGNvbnN0IGxhdHRlSW1nID0gbmV3IEltYWdlKCk7XG4gICAgbGF0dGVJbWcuc3JjID0gbGF0dGVzcmM7XG4gICAgbGF0dGUuYXBwZW5kQ2hpbGQobGF0dGVwKTtcbiAgICBsYXR0ZS5hcHBlbmRDaGlsZChsYXR0ZUltZyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChsYXR0ZSk7XG5cbiAgICBjb25zdCBtb2NoYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9jaGEuaWQgPSAnbW9jaGEnO1xuICAgIGNvbnN0IG1vY2hhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1vY2hhcC50ZXh0Q29udGVudCA9IFwiTW9jaGFcIjtcbiAgICBjb25zdCBtb2NoYUltZyA9IG5ldyBJbWFnZSgpO1xuICAgIG1vY2hhSW1nLnNyYyA9IG1vY2hhc3JjO1xuICAgIG1vY2hhLmFwcGVuZENoaWxkKG1vY2hhcCk7XG4gICAgbW9jaGEuYXBwZW5kQ2hpbGQobW9jaGFJbWcpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobW9jaGEpO1xuXG4gICAgY29uc3QgY2FwcHVjY2lubyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FwcHVjY2luby5pZCA9ICdjYXBwdWNjaW5vJztcbiAgICBjb25zdCBjYXBwdWNjaW5vcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNhcHB1Y2Npbm9wLnRleHRDb250ZW50ID0gXCJDYXBwdWNjaW5vXCI7XG4gICAgY29uc3QgY2FwcHVjY2lub0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGNhcHB1Y2Npbm9JbWcuc3JjID0gY2FwcHVjY2lub3NyYztcbiAgICBjYXBwdWNjaW5vLmFwcGVuZENoaWxkKGNhcHB1Y2Npbm9wKTtcbiAgICBjYXBwdWNjaW5vLmFwcGVuZENoaWxkKGNhcHB1Y2Npbm9JbWcpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoY2FwcHVjY2lubyk7XG5cbiAgICBjb25zdCBtYWNjaGlhdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1hY2NoaWF0by5pZCA9ICdtYWNjaGlhdG8nO1xuICAgIGNvbnN0IG1hY2NoaWF0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtYWNjaGlhdG9wLnRleHRDb250ZW50ID0gXCJNYWNjaGlhdG9cIjtcbiAgICBjb25zdCBtYWNjaGlhdG9JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBtYWNjaGlhdG9JbWcuc3JjID0gbWFjY2hpYXRvc3JjO1xuICAgIG1hY2NoaWF0by5hcHBlbmRDaGlsZChtYWNjaGlhdG9wKTtcbiAgICBtYWNjaGlhdG8uYXBwZW5kQ2hpbGQobWFjY2hpYXRvSW1nKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1hY2NoaWF0byk7XG5cbiAgICBjb25zdCBlc3ByZXNzbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZXNwcmVzc28uaWQgPSAnZXNwcmVzc28nO1xuICAgIGNvbnN0IGVzcHJlc3NvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGVzcHJlc3NvcC50ZXh0Q29udGVudCA9IFwiRXNwcmVzc29cIjtcbiAgICBjb25zdCBlc3ByZXNzb0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGVzcHJlc3NvSW1nLnNyYyA9IGVzcHJlc3Nvc3JjO1xuICAgIGVzcHJlc3NvLmFwcGVuZENoaWxkKGVzcHJlc3NvcCk7XG4gICAgZXNwcmVzc28uYXBwZW5kQ2hpbGQoZXNwcmVzc29JbWcpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoZXNwcmVzc28pO1xuXG4gICAgY29uc3QgZmxhdFdoaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmbGF0V2hpdGUuaWQgPSAnZmxhdFdoaXRlJztcbiAgICBjb25zdCBmbGF0V2hpdGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZmxhdFdoaXRlcC50ZXh0Q29udGVudCA9IFwiRmxhdCBXaGl0ZVwiO1xuICAgIGNvbnN0IGZsYXRXaGl0ZUltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGZsYXRXaGl0ZUltZy5zcmMgPSBmbGF0V2hpdGVzcmM7XG4gICAgZmxhdFdoaXRlLmFwcGVuZENoaWxkKGZsYXRXaGl0ZXApO1xuICAgIGZsYXRXaGl0ZS5hcHBlbmRDaGlsZChmbGF0V2hpdGVJbWcpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoZmxhdFdoaXRlKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaHIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51OyIsImNvbnN0IGNyZWF0ZU5hdmJhciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKTtcblxuICAgIGxldCBwYWdlID0gJ2hvbWUnO1xuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYXYuaWQgPSAnbmF2JztcblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWUuaWQgPSAnaG9tZSc7XG4gICAgY29uc3QgaG9tZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBob21lcC50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBob21lLmFwcGVuZENoaWxkKGhvbWVwKTtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnUuaWQgPSAnbWVudSc7XG4gICAgY29uc3QgbWVudXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZW51cC50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVwKTtcblxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhYm91dC5pZCA9ICdhYm91dCc7XG4gICAgY29uc3QgYWJvdXRwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYWJvdXRwLnRleHRDb250ZW50ID0gJ0Fib3V0JztcbiAgICBhYm91dC5hcHBlbmRDaGlsZChhYm91dHApO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWUpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXZiYXI7IiwiaW1wb3J0ICcuL2Fzc2V0L3N0eWxlLmNzcyc7XG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gXCIuL2Fzc2V0L3BhZ2VzL2hlYWRlclwiO1xuaW1wb3J0IGNyZWF0ZU5hdmJhciBmcm9tICcuL2Fzc2V0L3BhZ2VzL25hdmJhcic7XG5pbXBvcnQgY3JlYXRlTWFpbiBmcm9tICcuL2Fzc2V0L3BhZ2VzL21haW4tcGFnZSc7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tICcuL2Fzc2V0L3BhZ2VzL21lbnUtcGFnZSc7XG5pbXBvcnQgY3JlYXRlQWJvdXQgZnJvbSAnLi9hc3NldC9wYWdlcy9hYm91dC1wYWdlJztcblxuLy8gU2V0dGluZyB0aGUgd3JhcHBlciBkaXZcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubWFpbi5pZCA9ICdtYWluJztcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cbi8vIENyZWF0aW5nIHRoZSBoZWFkZXIgYW5kIHRoZSBuYXZiYXJcbmNyZWF0ZUhlYWRlcigpO1xuY3JlYXRlTmF2YmFyKCk7XG5jcmVhdGVNYWluKCk7XG5cbi8vIGV2ZW50IGxpc3RlbmVycyBmb3IgdGhlIG5hdmJhclxuXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9ICcnO1xuICAgIGNyZWF0ZU1haW4oKTtcbn0pO1xuXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9ICcnO1xuICAgIGNyZWF0ZU1lbnUoKTtcbn0pO1xuXG5hYm91dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSAnJztcbiAgICBjcmVhdGVBYm91dCgpO1xufSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==