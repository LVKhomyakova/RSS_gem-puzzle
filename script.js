/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return app; });
/* harmony import */ var _js_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Game */ "./src/js/Game.js");
/* harmony import */ var _js_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Header */ "./src/js/Header.js");


function app() {
  var wrapper = document.querySelector('.wrapper');

  var generateWrapper = function generateWrapper() {
    wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    document.body.append(wrapper);
    return wrapper;
  };

  var startGame = function startGame() {
    var header = new _js_Header__WEBPACK_IMPORTED_MODULE_1__["default"]();
    var currentGame = new _js_Game__WEBPACK_IMPORTED_MODULE_0__["default"]();

    if (!wrapper) {
      // generate wrapper
      wrapper = generateWrapper();
      wrapper.append(header.initHeader());
    }

    wrapper.append(currentGame.initGame());
    document.querySelector('.menu__button_new-game').click();
  };

  startGame();
}

window.onload = function () {
  app();
};

/***/ }),

/***/ "./src/js/Button.js":
/*!**************************!*\
  !*** ./src/js/Button.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Button = function Button(name) {
  _classCallCheck(this, Button);

  this.name = name;
  var button = document.createElement('button');
  button.className = "menu__button menu__button_".concat(this.name.toLowerCase().split(' ').join('-'));
  button.innerHTML = this.name;
  return button;
};



/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.fieldSize = 0;
    this.order = [];
    this.time = '';
    this.numberMoves = '';
    this.numberCells = 0;
  }

  _createClass(Game, [{
    key: "initData",
    value: function initData() {
      var game = JSON.parse(localStorage.getItem('game'));

      if (game) {
        this.fieldSize = Number(game.fieldSize);
        this.order = game.order;
        this.time = game.time;
        this.numberMoves = game.moves;
        document.getElementById("size".concat(this.fieldSize)).checked = true;
      } else {
        var radioChecked = document.querySelector('input[name=fieldsize]:checked');

        if (radioChecked) {
          this.fieldSize = radioChecked.value;
        } else {
          this.fieldSize = 4;
          document.getElementById('size4').checked = true;
        }

        this.getRandomOrder(1, this.fieldSize * this.fieldSize);
        this.time = document.querySelector('.label-info__moves').innerHTML;
        this.numberMoves = document.querySelector('.label-info__time').innerHTML;
      }

      this.numberCells = this.fieldSize * this.fieldSize;
    }
  }, {
    key: "getRandomOrder",
    value: function getRandomOrder(start, end) {
      var number = 0;
      var checker = {
        count: 0
      };

      while (checker.count < end) {
        number = Math.floor(Math.random() * (end - start + 1)) + start;

        if (!(number in checker)) {
          checker[number] = number;
          checker.count += 1;
          this.order.push(number);
        }
      }
    }
  }, {
    key: "generateField",
    value: function generateField() {
      var field = document.createElement('section');
      field.className = 'field';
      field.setAttribute('data-size', this.fieldSize);
      field.style.gridTemplateColumns = "repeat(".concat(this.fieldSize, ", auto)");
      field.style.gridTemplateRows = "repeat(".concat(this.fieldSize, ", auto)");
      return field;
    }
  }, {
    key: "generateContainers",
    value: function generateContainers() {
      var containers = [];

      for (var i = 0; i <= this.numberCells - 1; i += 1) {
        var container = document.createElement('div');
        container.className = 'field__container';
        container.setAttribute('data-id', i + 1);
        containers.push(container);
      }

      return containers;
    }
  }, {
    key: "generateCells",
    value: function generateCells() {
      var cells = [];
      var cellSize = 100 / this.fieldSize * 0.7;

      for (var i = 0; i < this.numberCells; i += 1) {
        var cell = document.createElement('div');
        cell.className = 'container__cell';
        cell.innerHTML = this.order[i];
        cell.style.zIndex = 55;
        cell.style.width = "".concat(cellSize, "vmin");
        cell.style.height = "".concat(cellSize, "vmin");
        cell.style.fontSize = "".concat(5, "vmin");
        cells.push(cell);
      }

      return cells;
    }
  }, {
    key: "initGame",
    value: function initGame() {
      this.initData();
      var field = this.generateField();
      var containers = this.generateContainers();
      var cells = this.generateCells();

      for (var i = 0; i < this.numberCells; i += 1) {
        if (i < this.numberCells) {
          if (cells[i].innerHTML !== String(containers.length)) {
            containers[i].append(cells[i]);
          } else {
            containers[i].className = 'field__container field__container_droppable'; // set next movable cells

            var movableCellsId = [];

            if (i % this.fieldSize !== 0) {
              var _id = Number(containers[i].getAttribute('data-id')) - 1;

              movableCellsId.push(_id);

              cells[_id - 1].setAttribute('data-diraction', 'right');
            }

            if ((i + 1) % this.fieldSize !== 0) {
              var _id2 = Number(containers[i].getAttribute('data-id')) + 1;

              movableCellsId.push(_id2);

              cells[_id2 - 1].setAttribute('data-diraction', 'left');
            }

            var id = Number(containers[i].getAttribute('data-id')) - Number(this.fieldSize);
            movableCellsId.push(id);

            if (cells[id - 1]) {
              cells[id - 1].setAttribute('data-diraction', 'down');
            }

            id = Number(containers[i].getAttribute('data-id')) + Number(this.fieldSize);
            movableCellsId.push(id);

            if (cells[id - 1]) {
              cells[id - 1].setAttribute('data-diraction', 'up');
            }

            for (var j = 0; j < movableCellsId.length; j += 1) {
              if (movableCellsId[j] - 1 > -1 && movableCellsId[j] - 1 < cells.length) {
                cells[movableCellsId[j] - 1].classList.add('container__cell_movable');
              }
            }
          }
        }

        field.append(containers[i]);
      }

      return field;
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/js/Header.js":
/*!**************************!*\
  !*** ./src/js/Header.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/js/Button.js");
/* harmony import */ var _MoveCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoveCell */ "./src/js/MoveCell.js");


function Header() {
  var self = this;
  self.buttonStart = null;
  self.buttonStop = null;
  self.buttonSave = null;
  self.buttonResults = null;
  self.labelTime = null;
  self.labelMoves = null;
  self.timer = null; // handlers

  self.startGame = function () {
    var game = JSON.parse(localStorage.getItem('game'));
    var field = document.querySelector('.field');

    if (game) {
      localStorage.removeItem('game');
    } else {
      document.querySelector('.label-info__moves').innerHTML = 'Moves: 00';
      document.querySelector('.label-info__time').innerHTML = 'Time: 00:00:00';
      field.remove();
      window.onload();
    }

    clearInterval(self.timer);
    self.buttonResults.style.opacity = '0.5';
    self.buttonResults.disabled = true;
    self.buttonStop.style.opacity = '1';
    self.buttonStop.disabled = false;
    self.buttonSave.style.opacity = '1';
    self.buttonSave.disabled = false;
    document.querySelectorAll('.container__cell').forEach(function (cell) {
      cell.addEventListener('mousedown', _MoveCell__WEBPACK_IMPORTED_MODULE_1__["default"]);
    });
    var labelTime = document.querySelector('.label-info__time').innerHTML;
    var timeValue = labelTime.split(' ')[1].split(':').map(function (value) {
      return Number(value);
    });
    var hh = timeValue[0];
    var mm = timeValue[1];
    var ss = timeValue[2];
    self.timer = setInterval(function () {
      if (ss < 59) {
        ss += 1;
      } else {
        ss = 0;

        if (mm < 59) {
          mm += 1;
        } else {
          mm = 0;
          hh += 1;
        }
      }

      var ssStr = String(ss).length < 2 ? "0".concat(ss) : "".concat(ss);
      var mmStr = String(mm).length < 2 ? "0".concat(mm) : "".concat(mm);
      var hhStr = String(hh).length < 2 ? "0".concat(hh) : "".concat(hh);
      self.labelTime.innerHTML = "Time: ".concat(hhStr, ":").concat(mmStr, ":").concat(ssStr);
    }, 1000);
  };

  self.stopGame = function () {
    clearInterval(self.timer);
    document.querySelectorAll('.container__cell').forEach(function (cell) {
      cell.removeEventListener('mousedown', _MoveCell__WEBPACK_IMPORTED_MODULE_1__["default"]);
    });
    self.buttonResults.style.opacity = '1';
    self.buttonResults.disabled = false;
    self.buttonSave.style.opacity = '0.5';
    self.buttonSave.disabled = true;
  };

  self.saveGame = function () {
    var order = [];
    var containers = document.querySelectorAll('.field__container');
    containers.forEach(function (container) {
      if (container.firstElementChild) {
        order.push(container.firstElementChild.innerHTML);
      } else {
        order.push(String(containers.length));
      }
    });
    var time = document.querySelector('.label-info__time').innerHTML;
    var moves = document.querySelector('.label-info__moves').innerHTML;
    var games = {
      fieldSize: document.querySelector('.field').getAttribute('data-size'),
      order: order,
      time: time,
      moves: moves
    };
    localStorage.setItem('game', JSON.stringify(games));
    document.querySelector('.menu__button_stop').click();
  };

  self.showResults = function () {
    var results = JSON.parse(localStorage.getItem('results')) || [];
    var resultStr = results.map(function (result) {
      return "".concat(result.name, ": ").concat(result.time, " ").concat(result.moves, "\n");
    });
    alert("***BEST 10 RESULTS***\n".concat(resultStr.join('')));
  }; // create header


  self.initHeader = function () {
    var header = document.createElement('section');
    header.className = 'header';
    var settings = document.createElement('div');
    settings.className = 'header__settings';
    var menu = document.createElement('div');
    menu.className = 'header__menu';
    var info = document.createElement('div');
    info.className = 'header__info'; // generate radiobuttons

    for (var i = 3; i < 9; i += 1) {
      var radiobutton = document.createElement('input');
      radiobutton.setAttribute('type', 'radio');
      radiobutton.setAttribute('id', "size".concat(i));
      radiobutton.setAttribute('name', 'fieldsize');
      radiobutton.setAttribute('value', i);
      settings.append(radiobutton);
      var labelRadio = document.createElement('label');
      labelRadio.className = 'label-settings';
      labelRadio.setAttribute('for', "size".concat(i));
      labelRadio.innerHTML = "".concat(i, "*").concat(i);
      settings.append(labelRadio);
    } // generate buttons


    self.buttonStart = new _Button__WEBPACK_IMPORTED_MODULE_0__["default"]('New Game');
    self.buttonStart.addEventListener('click', self.startGame);
    self.buttonStop = new _Button__WEBPACK_IMPORTED_MODULE_0__["default"]('Stop');
    self.buttonStop.addEventListener('click', self.stopGame);
    self.buttonStop.style.opacity = '0.5';
    self.buttonStop.disabled = true;
    self.buttonSave = new _Button__WEBPACK_IMPORTED_MODULE_0__["default"]('Save');
    self.buttonSave.addEventListener('click', self.saveGame);
    self.buttonSave.style.opacity = '0.5';
    self.buttonSave.disabled = true;
    self.buttonResults = new _Button__WEBPACK_IMPORTED_MODULE_0__["default"]('Results');
    self.buttonResults.addEventListener('click', self.showResults); // generate label for timer

    self.labelTime = document.createElement('label');
    self.labelTime.className = 'label-info label-info__time'; // generate label for moves

    self.labelMoves = document.createElement('label');
    self.labelMoves.className = 'label-info label-info__moves';
    var game = JSON.parse(localStorage.getItem('game'));

    if (game) {
      self.labelTime.innerHTML = game.time;
      self.labelMoves.innerHTML = game.moves;
    } else {
      self.labelTime.innerHTML = 'Time: 00:00:00';
      self.labelMoves.innerHTML = 'Moves: 0';
    }

    menu.append(self.buttonStart);
    menu.append(self.buttonStop);
    menu.append(self.buttonSave);
    menu.append(self.buttonResults);
    info.append(self.labelTime);
    info.append(self.labelMoves);
    header.append(settings);
    header.append(menu);
    header.append(info);
    return header;
  };
}

/***/ }),

/***/ "./src/js/MoveCell.js":
/*!****************************!*\
  !*** ./src/js/MoveCell.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return moveCell; });
/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Result */ "./src/js/Result.js");

function moveCell(event) {
  event.preventDefault();
  document.querySelectorAll('.container__cell').forEach(function (cell) {
    cell.classList.remove('animate-up');
    cell.classList.remove('animate-down');
    cell.classList.remove('animate-left');
    cell.classList.remove('animate-right');
  });
  var targetCell = event.target;
  var currentDroppable = document.querySelector('.field__container_droppable');
  var nextDroppable = targetCell.parentElement;
  var deltaX = event.clientX - targetCell.getBoundingClientRect().left;
  var deltaY = event.clientY - targetCell.getBoundingClientRect().top;
  var fieldSize = Number(document.querySelector('.field').getAttribute('data-size'));
  var movableCells = [];
  document.querySelectorAll('.container__cell_movable').forEach(function (cell) {
    movableCells.push(cell);
  });
  if (!movableCells.includes(targetCell)) return;

  var catchCell = function catchCell() {
    targetCell.style.position = 'absolute';
    targetCell.style.zIndex = 100;
    document.body.append(targetCell);
  };

  var moveAt = function moveAt(x, y) {
    targetCell.style.left = "".concat(x - deltaX, "px");
    targetCell.style.top = "".concat(y - deltaY, "px");
  };

  var countMove = function countMove() {
    var labelMoves = document.querySelector('.label-info__moves');
    var moves = Number(labelMoves.innerHTML.split(' ')[1]);
    moves += 1;
    labelMoves.innerHTML = "Moves: ".concat(moves);
  };

  moveAt(event.clientX, event.clientY); // handlers

  var onMouseMove = function onMouseMove(e) {
    moveAt(e.pageX, e.pageY);
    targetCell.style.display = 'none';
    var underElement = document.elementFromPoint(e.clientX, e.clientY);
    targetCell.style.display = 'flex';

    if (underElement === currentDroppable) {
      currentDroppable.classList.add('field__container_droppable_active');
    } else {
      currentDroppable.classList.remove('field__container_droppable_active');
    }
  };

  var dropCell = function dropCell() {
    targetCell.classList.add("animate-".concat(targetCell.getAttribute('data-diraction')));
    document.removeEventListener('mousemove', onMouseMove);
    targetCell.removeEventListener('mouseup', dropCell);
    targetCell.style.position = '';
    targetCell.style.zIndex = 55;
    currentDroppable.append(targetCell);
    currentDroppable.classList.remove('field__container_droppable');
    currentDroppable.classList.remove('field__container_droppable_active');
    nextDroppable.classList.add('field__container_droppable');
    currentDroppable = nextDroppable; // set next movable cells

    var nextMovableCellsId = [];

    if ((Number(currentDroppable.getAttribute('data-id')) - 1) % fieldSize !== 0) {
      var _id = Number(currentDroppable.getAttribute('data-id')) - 1;

      nextMovableCellsId.push(_id);

      var _container = document.querySelector(".field__container[data-id = '".concat(_id, "']"));

      _container.firstElementChild.setAttribute('data-diraction', 'right');
    }

    if (Number(currentDroppable.getAttribute('data-id')) % fieldSize !== 0) {
      var _id2 = Number(currentDroppable.getAttribute('data-id')) + 1;

      nextMovableCellsId.push(_id2);

      var _container2 = document.querySelector(".field__container[data-id = '".concat(_id2, "']"));

      _container2.firstElementChild.setAttribute('data-diraction', 'left');
    }

    var id = Number(currentDroppable.getAttribute('data-id')) - fieldSize;
    nextMovableCellsId.push(id);
    var container = document.querySelector(".field__container[data-id = '".concat(id, "']"));

    if (container) {
      container.firstElementChild.setAttribute('data-diraction', 'down');
    }

    id = Number(currentDroppable.getAttribute('data-id')) + fieldSize;
    nextMovableCellsId.push(id);
    container = document.querySelector(".field__container[data-id = '".concat(id, "']"));

    if (container) {
      container.firstElementChild.setAttribute('data-diraction', 'up');
    }

    document.querySelectorAll('.container__cell').forEach(function (cell) {
      cell.classList.remove('container__cell_movable');
    });
    nextMovableCellsId.forEach(function (j) {
      var containert = document.querySelector(".field__container[data-id = '".concat(j, "']"));

      if (containert) {
        containert.firstElementChild.classList.add('container__cell_movable');
      }
    });
    countMove();
    setTimeout(_Result__WEBPACK_IMPORTED_MODULE_0__["default"], 100);
  };

  catchCell();
  document.addEventListener('mousemove', onMouseMove);
  targetCell.addEventListener('mouseup', dropCell);
}

/***/ }),

/***/ "./src/js/Result.js":
/*!**************************!*\
  !*** ./src/js/Result.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkResult; });
function checkResult() {
  var isCorrectResult = function isCorrectResult() {
    var order = [];
    var containers = document.querySelectorAll('.field__container');
    containers.forEach(function (container) {
      if (container.firstElementChild) {
        order.push(container.firstElementChild.innerHTML);
      } else {
        order.push(String(containers.length));
      }
    });
    var correctOrder = [].concat(order);
    correctOrder.sort(function (a, b) {
      return a - b;
    });
    return order.join('') === correctOrder.join('');
  };

  var saveResult = function saveResult(time, moves) {
    var nameGame = prompt('Enter your name: ', 'player');
    var timeValue = time.split(' ')[1].split(':').map(function (value) {
      return Number(value);
    });
    timeValue = timeValue[0] * 3600 + timeValue[1] * 60 + timeValue[2];
    var results = JSON.parse(localStorage.getItem('results')) || [];
    var result = {
      name: nameGame,
      timeValue: timeValue,
      time: time,
      moves: moves
    };
    results.push(result);
    results.sort(function (a, b) {
      return a.timeValue - b.timeValue;
    });
    results = results.slice(0, 10);
    localStorage.setItem('results', JSON.stringify(results));
  };

  if (isCorrectResult()) {
    document.querySelector('.menu__button_stop').click();
    var labelTime = document.querySelector('.label-info__time').innerHTML;
    var labelMoves = document.querySelector('.label-info__moves').innerHTML;
    var resultTime = labelTime.split(' ')[1];
    var resultMoves = labelMoves.split(' ')[1];
    alert("\u0423\u0440\u0430! \u0412\u044B \u0440\u0435\u0448\u0438\u043B\u0438 \u0433\u043E\u043B\u043E\u0432\u043E\u043B\u043E\u043C\u043A\u0443 \u0437\u0430 ".concat(resultTime, " \u0438 ").concat(resultMoves, " \u0445\u043E\u0434\u043E\u0432"));
    saveResult(labelTime, labelMoves);
  }
}

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/sass/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map