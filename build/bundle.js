/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _Game = __webpack_require__(9);

	var _Game2 = _interopRequireDefault(_Game);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var game = new _Game2.default('game', 512, 256);

	var audio = document.getElementById('background_audio');

	document.getElementById('mute').addEventListener('click', function (e) {
	    e = e || window.event;
	    audio.muted = !audio.muted;
	    e.preventDefault();
	}, false);

	(function gameLoop() {
	    game.render();
	    requestAnimationFrame(gameLoop);
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./game.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./game.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n\n/* HTML5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n\n/**\n * FONTS\n */\n\n@font-face {\n  font-family: 'Silkscreen Web';\n  src: url(" + __webpack_require__(4) + ");\n  src: url(" + __webpack_require__(4) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(5) + ") format('woff'), url(" + __webpack_require__(6) + ") format('truetype'), url(" + __webpack_require__(7) + "#silkscreennormal) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n\n/**\n * GAME\n */\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  align-items: center;\n  display: flex;\n  font-family: 'Silkscreen Web', monotype;\n  height: 100vh;\n  justify-content: center;\n  width: 100%;\n  background-size: cover;\n}\n\nh1 {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  text-align: center;\n  color: green;\n  text-shadow: 3px 3px black;\n}\n\na {\n  color: darkgreen;\n}\n\n.game-info {\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  font-size: 1.3rem;\n  color: darkgreen;\n  text-shadow: 1px 1px black;\n}", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.eot";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.woff";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.ttf";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.svg";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(10);

	var _Board = __webpack_require__(11);

	var _Board2 = _interopRequireDefault(_Board);

	var _Paddle = __webpack_require__(12);

	var _Paddle2 = _interopRequireDefault(_Paddle);

	var _Ball = __webpack_require__(13);

	var _Ball2 = _interopRequireDefault(_Ball);

	var _Score = __webpack_require__(14);

	var _Score2 = _interopRequireDefault(_Score);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Game = function () {
		function Game(element, width, height) {
			_classCallCheck(this, Game);

			this.element = element;
			this.width = width;
			this.height = height;
			this.pause = false;

			this.gameElement = document.getElementById(this.element);
			this.board = new _Board2.default(this.width, this.height);
			this.leftPaddle = this.createPaddle(_settings.BOARD.gap, _settings.KEYS.a, _settings.KEYS.z);
			this.rightPaddle = this.createPaddle(this.width - _settings.BOARD.gap - _settings.PADDLE.width, _settings.KEYS.up, _settings.KEYS.down);

			this.ball = new _Ball2.default(_settings.BALL.radius, this.width, this.height, '#FFF', this.direction);
			this.leftScore = this.createScore(this.width / 2 - 50);
			this.rightScore = this.createScore(this.width / 2 + 25);

			this.eventListener();
		}

		_createClass(Game, [{
			key: 'eventListener',
			value: function eventListener() {
				var _this = this;

				document.addEventListener('keydown', function (event) {
					switch (event.keyCode) {
						case _settings.KEYS.spaceBar:
							_this.pause = !_this.pause;
							break;
						case _settings.KEYS.v:
							_this.ball2 = new _Ball2.default(_settings.BALL.radius, _this.width, _this.height, 'lightblue');
							break;
					}
				});
			}
		}, {
			key: 'createPaddle',
			value: function createPaddle(xPos, upKey, downKey) {
				return new _Paddle2.default(this.height, _settings.PADDLE.width, _settings.PADDLE.height, xPos, (this.height - _settings.PADDLE.height) / 2, upKey, downKey);
			}
		}, {
			key: 'createScore',
			value: function createScore(xPos) {
				return new _Score2.default(xPos, _settings.SCORE.y, _settings.SCORE.size);
			}
		}, {
			key: 'render',
			value: function render() {

				if (this.pause) {
					return;
				}

				this.gameElement.innerHTML = '';

				var svg = document.createElementNS(_settings.SVG_NS, 'svg');
				svg.setAttributeNS(null, 'width', this.width);
				svg.setAttributeNS(null, 'height', this.height);
				svg.setAttributeNS(null, 'viewBox', '0 0 ' + this.width + ' ' + this.height);
				this.gameElement.appendChild(svg);
				this.board.render(svg);
				this.leftPaddle.render(svg);
				this.rightPaddle.render(svg);

				this.ball.render(svg, this.leftPaddle, this.rightPaddle);
				this.leftScore.render(svg, this.leftPaddle.score);
				this.rightScore.render(svg, this.rightPaddle.score);

				if (this.ball2) {
					this.ball2.render(svg, this.leftPaddle, this.rightPaddle);
				}
			}
		}]);

		return Game;
	}();

	exports.default = Game;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SVG_NS = exports.SVG_NS = 'http://www.w3.org/2000/svg';

	var KEYS = exports.KEYS = {
	  a: 65,
	  z: 90,
	  up: 38,
	  down: 40,
	  spaceBar: 32,
	  v: 86,
	  b: 66
	};

	var PADDLE = exports.PADDLE = {
	  width: 8,
	  height: 56,
	  speed: 20,
	  widthChange: 5,
	  heightChange: 30,
	  speedChange: 40
	};

	var BOARD = exports.BOARD = {
	  gap: 10
	};

	var BALL = exports.BALL = {
	  radius: 8
	};

	var SCORE = exports.SCORE = {
	  y: 30,
	  size: '35px'
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Board = function () {
	  function Board(width, height) {
	    _classCallCheck(this, Board);

	    this.width = width;
	    this.height = height;
	  }

	  _createClass(Board, [{
	    key: 'render',
	    value: function render(svg) {
	      var rect = document.createElementNS(_settings.SVG_NS, 'rect');
	      rect.setAttributeNS(null, 'width', this.width);
	      rect.setAttributeNS(null, 'height', this.height);
	      rect.setAttributeNS(null, 'fill', '#353535');
	      rect.setAttributeNS(null, 'fill-opacity', '0.8');

	      var line = document.createElementNS(_settings.SVG_NS, 'line');
	      line.setAttributeNS(null, 'x1', this.width / 2);
	      line.setAttributeNS(null, 'x2', this.width / 2);
	      line.setAttributeNS(null, 'y1', '0');
	      line.setAttributeNS(null, 'y2', this.height);
	      line.setAttributeNS(null, 'stroke', '#FFF');
	      line.setAttributeNS(null, 'stroke-width', '4');
	      line.setAttributeNS(null, 'stroke-dasharray', '20, 15');

	      svg.appendChild(rect);
	      svg.appendChild(line);
	    }
	  }]);

	  return Board;
	}();

	exports.default = Board;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Paddle = function () {
	  function Paddle(boardHeight, width, height, x, y, up, down) {
	    var _this = this;

	    _classCallCheck(this, Paddle);

	    this.boardHeight = boardHeight;
	    this.width = width;
	    this.height = height;
	    this.x = x;
	    this.y = y;
	    this.speed = _settings.PADDLE.speed;
	    this.score = 0;
	    this.cy = this.getCenter();

	    document.addEventListener('keydown', function (event) {
	      switch (event.keyCode) {
	        case up:
	          _this.up();
	          break;
	        case down:
	          _this.down();
	          break;
	        case _settings.KEYS.b:
	          _this.changePaddle();
	          break;
	      }
	    });
	  }

	  _createClass(Paddle, [{
	    key: 'changePaddle',
	    value: function changePaddle() {
	      if (this.width === _settings.PADDLE.width) {
	        this.width = _settings.PADDLE.widthChange;
	        this.height = _settings.PADDLE.heightChange;
	        this.speed = _settings.PADDLE.speedChange;
	      } else {
	        this.width = _settings.PADDLE.width;
	        this.height = _settings.PADDLE.height;
	        this.speed = _settings.PADDLE.speed;
	      }
	    }
	  }, {
	    key: 'getCenter',
	    value: function getCenter() {
	      this.center = this.y + this.height / 2;
	    }
	  }, {
	    key: 'up',
	    value: function up() {
	      this.y = Math.max(0, this.y - this.speed);
	    }
	  }, {
	    key: 'down',
	    value: function down() {
	      this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
	    }
	  }, {
	    key: 'coordinates',
	    value: function coordinates(x, y, width, height) {
	      var leftX = x;
	      var rightX = x + width;
	      var topY = y;
	      var bottomY = y + height;
	      return [leftX, rightX, topY, bottomY];
	    }
	  }, {
	    key: 'render',
	    value: function render(svg) {
	      var rect = document.createElementNS(_settings.SVG_NS, 'rect');
	      rect.setAttributeNS(null, 'x', this.x);
	      rect.setAttributeNS(null, 'y', this.y);
	      rect.setAttributeNS(null, 'width', this.width);
	      rect.setAttributeNS(null, 'height', this.height);
	      rect.setAttributeNS(null, 'fill', '#FFF');

	      svg.appendChild(rect);
	    }
	  }]);

	  return Paddle;
	}();

	exports.default = Paddle;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Ball = function () {
	  function Ball(radius, boardWidth, boardHeight, fill) {
	    _classCallCheck(this, Ball);

	    this.radius = radius;
	    this.boardWidth = boardWidth;
	    this.boardHeight = boardHeight;
	    this.direction = Math.random() < 0.5 ? 1 : -1;
	    this.ping = new Audio('public/sounds/hadouken.wav');
	    this.fill = fill;

	    this.reset();
	  }

	  _createClass(Ball, [{
	    key: 'wallCollision',
	    value: function wallCollision() {
	      var hitLeft = this.x - this.radius <= 0;
	      var hitRight = this.x + this.radius >= this.boardWidth;
	      var hitTop = this.y - this.radius <= 0;
	      var hitBottom = this.y + this.radius >= this.boardHeight;

	      if (hitLeft || hitRight) {
	        this.vx = -this.vx;
	      } else if (hitTop || hitBottom) {
	        this.vy = -this.vy;
	      }
	    }
	  }, {
	    key: 'paddleCollision',
	    value: function paddleCollision(paddle1, paddle2) {
	      if (this.vx > 0) {
	        var paddle = paddle2.coordinates(paddle2.x, paddle2.y, paddle2.width, paddle2.height);

	        var _paddle = _slicedToArray(paddle, 4),
	            leftX = _paddle[0],
	            rightX = _paddle[1],
	            topY = _paddle[2],
	            bottomY = _paddle[3];

	        if (this.x + this.radius >= leftX && this.x + this.radius <= rightX && this.y >= topY && this.y <= bottomY) {
	          this.vx = -this.vx;
	          this.ping.play();
	        }
	      } else {
	        var _paddle2 = paddle1.coordinates(paddle1.x, paddle1.y, paddle1.width, paddle1.height);

	        var _paddle3 = _slicedToArray(_paddle2, 4),
	            _leftX = _paddle3[0],
	            _rightX = _paddle3[1],
	            _topY = _paddle3[2],
	            _bottomY = _paddle3[3];

	        if (this.x - this.radius <= _rightX && this.x - this.radius >= _leftX && this.y >= _topY && this.y <= _bottomY) {
	          this.vx = -this.vx;
	          this.ping.play();
	        }
	      }
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.x = this.boardWidth / 2;
	      this.y = this.boardHeight / 2;

	      this.vy = 0;
	      while (this.vy === 0) {
	        this.vy = Math.floor(Math.random() * 10 - 5);
	      }
	      this.vx = this.direction * (6 - Math.abs(this.vy));
	    }
	  }, {
	    key: 'goal',
	    value: function goal(player) {
	      player.score++;
	      this.reset();
	    }
	  }, {
	    key: 'render',
	    value: function render(svg, paddle1, paddle2) {
	      this.x += this.vx;
	      this.y += this.vy;

	      this.wallCollision();
	      this.paddleCollision(paddle1, paddle2);

	      var circle = document.createElementNS(_settings.SVG_NS, 'circle');
	      circle.setAttributeNS(null, 'r', this.radius);
	      circle.setAttributeNS(null, 'stroke', '#000');
	      circle.setAttributeNS(null, 'fill', this.fill);
	      circle.setAttributeNS(null, 'cx', this.x);
	      circle.setAttributeNS(null, 'cy', this.y);

	      svg.appendChild(circle);

	      var rightGoal = this.x + this.radius >= this.boardWidth;
	      var leftGoal = this.x - this.radius <= 0;
	      if (rightGoal) {
	        this.goal(paddle1);
	        this.direction = 1;
	      } else if (leftGoal) {
	        this.goal(paddle2);
	        this.direction = -1;
	      }
	    }
	  }]);

	  return Ball;
	}();

	exports.default = Ball;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Score = function () {
	  function Score(x, y, size) {
	    _classCallCheck(this, Score);

	    this.x = x;
	    this.y = y;
	    this.size = size;
	  }

	  _createClass(Score, [{
	    key: 'render',
	    value: function render(svg, score) {
	      var text = document.createElementNS(_settings.SVG_NS, 'text');
	      text.setAttributeNS(null, 'x', this.x);
	      text.setAttributeNS(null, 'y', this.y);
	      text.setAttributeNS(null, 'font-size', this.size);
	      text.setAttributeNS(null, 'fill', '#FFF');
	      text.innerHTML = score;

	      svg.appendChild(text);
	    }
	  }]);

	  return Score;
	}();

	exports.default = Score;

/***/ }
/******/ ]);