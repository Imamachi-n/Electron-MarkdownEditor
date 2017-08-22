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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 209);
/******/ })
/************************************************************************/
/******/ ({

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// 名前をつけて保存

// ファイルを開く


var _electron = __webpack_require__(23);

var _setAppMenu = __webpack_require__(210);

var _setAppMenu2 = _interopRequireDefault(_setAppMenu);

var _createMainWindow = __webpack_require__(211);

var _createMainWindow2 = _interopRequireDefault(_createMainWindow);

var _showSaveAsNewFileDialog = __webpack_require__(212);

var _showSaveAsNewFileDialog2 = _interopRequireDefault(_showSaveAsNewFileDialog);

var _showOpenFileDialog = __webpack_require__(213);

var _showOpenFileDialog2 = _interopRequireDefault(_showOpenFileDialog);

var _createFileManager = __webpack_require__(214);

var _createFileManager2 = _interopRequireDefault(_createFileManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ガーベジコレクションによりウインドウが閉じないように、
// BrowserWindowインスタンスをグローバル宣言
var mainWindow = void 0;

var fileManager = void 0;

// ファイルを開く
function openFile() {
  console.log("openFile");
  (0, _showOpenFileDialog2.default)().then(function (filePath) {
    return fileManager.readFile(filePath);
  }).then(function (text) {
    return mainWindow.sendText(text);
  }).catch(function (error) {
    console.log(error);
  });
}

function saveFile() {
  console.log("saveFile");
}

// 名前を指定してファイルを保存する
function saveAsNewFile() {
  console.log("saveAsNewFile");
  // すべてのPromiseがresolveされた場合の処理
  Promise.all([(0, _showSaveAsNewFileDialog2.default)(), mainWindow.requestText()]).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        filePath = _ref2[0],
        text = _ref2[1];

    return fileManager.saveFile(filePath, text);
  }).catch(function (error) {
    console.log(error);
  });
}

function exportPDF() {
  console.log("exportPDF");
}

// Electronを起動したときの処理
_electron.app.on('ready', function () {
  mainWindow = (0, _createMainWindow2.default)();
  fileManager = (0, _createFileManager2.default)();

  var options = { openFile: openFile, saveFile: saveFile, saveAsNewFile: saveAsNewFile, exportPDF: exportPDF };
  (0, _setAppMenu2.default)(options);
});

// すべてのウインドウを閉じたときの処理
_electron.app.on('window-all-closed', function () {
  // MacOSの場合、ウインドウを閉じてもアプリがアクティブな状態のまま
  // なので、アプリを閉じる処理を行う
  if (process.platform !== 'darwin') {
    _electron.app.quit();
  }
});

_electron.app.on('activate', function () {
  if (mainWindow === null) {
    mainWindow = (0, _createMainWindow2.default)();
  }
});

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _electron = __webpack_require__(23);

function setAppMenu(options) {
  var template = [{
    label: "File",
    submenu: [{ label: "Open", accelerator: "CmdOrCtrl+O", click: function click() {
        return options.openFile();
      } }, { label: "Save", accelerator: "CmdOrCtrl+S", click: function click() {
        return options.saveFile();
      } }, { label: "Save As ...", click: function click() {
        return options.saveAsNewFile();
      } }, { label: "Export PDF", click: function click() {
        return options.exportPDF();
      } }, { label: "Exit", accelerator: "CmdOrCtrl+Q", role: "quit" }]
  }, {
    label: "Edit",
    submenu: [{ label: "Copy", accelerator: "CmdOrCtrl+C", role: "copy" }, { label: "Paste", accelerator: "CmdOrCtrl+V", role: "paste" }, { label: "Cut", accelerator: "CmdOrCtrl+X", role: "cut" }, { label: "Select All", accelerator: "CmdOrCtrl+A", role: "selectall" }]
  }, {
    label: "View",
    submenu: [{
      label: "Toggle DevTools",
      accelerator: "Alt+CmdOrCtrl+I",
      click: function click() {
        return _electron.BrowserWindow.getFocusedWindow().toggleDevTools();
      }
    }]
  }];

  var menu = _electron.Menu.buildFromTemplate(template);
  _electron.Menu.setApplicationMenu(menu);
}

exports.default = setAppMenu;

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _electron = __webpack_require__(23);

var _path = __webpack_require__(79);

var _path2 = _interopRequireDefault(_path);

var _url = __webpack_require__(80);

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainWindow = function () {
  function MainWindow() {
    var _this = this;

    _classCallCheck(this, MainWindow);

    // ウインドウの作成（ウインドウサイズの指定）
    this.window = new _electron.BrowserWindow({ width: 800, hwight: 600 });

    // index.htmlの呼び出し
    this.window.loadURL(_url2.default.format({
      pathname: _path2.default.join(__dirname, '../../index.html'),
      protocol: 'file:',
      slashes: true
    }));

    // ウインドウを閉じたときの処理
    this.window.on('closed', function () {
      _this.window = null;
    });
  }

  // Rendererプロセスからテキストを取得する


  _createClass(MainWindow, [{
    key: 'requestText',
    value: function requestText() {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.window.webContents.send('REQUEST_TEXT');
        _electron.ipcMain.once('REPLY_TEXT', function (event, text) {
          return resolve(text);
        });
      });
    }

    // Rendererプロセスへテキストを送る

  }, {
    key: 'sendText',
    value: function sendText(text) {
      this.window.webContents.send('SEND_TEXT', text);
    }
  }]);

  return MainWindow;
}();

function createMainWindow() {
  return new MainWindow();
}

exports.default = createMainWindow;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _electron = __webpack_require__(23);

function showSaveAsNewFileDialog() {
  return new Promise(function (resolve, reject) {
    var file = _electron.dialog.showSaveDialog({
      title: "save",
      filters: [{
        name: 'markdown file',
        extensions: ["md"]
      }]
    });

    if (file) {
      resolve(file);
    } else {
      reject();
    }
  });
}

exports.default = showSaveAsNewFileDialog;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = showOpenFileDialog;

var _electron = __webpack_require__(23);

// ファイルを開くためのダイアログを呼び出す
function showOpenFileDialog() {
  return new Promise(function (resolve, reject) {
    var files = _electron.dialog.showOpenDialog({
      title: "open",
      propaties: ['openFile'],
      filters: [{
        name: 'markdown file',
        extensions: ['md']
      }]
    });

    if (files && files.length > 0) {
      resolve(files[0]);
    } else {
      reject();
    }
  });
}

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = __webpack_require__(81);

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileManager = function () {
  function FileManager() {
    _classCallCheck(this, FileManager);
  }

  _createClass(FileManager, [{
    key: 'saveFile',

    // ファイルの保存
    value: function saveFile(filePath, text) {
      return new Promise(function (resolve) {
        _fs2.default.writeFileSync(filePath, text);
        resolve();
      });
    }

    // ファイルの読み込み

  }, {
    key: 'readFile',
    value: function readFile(filePath) {
      return new Promise(function (resolve) {
        var text = _fs2.default.readFileSync(filePath, 'utf-8');
        resolve(text);
      });
    }
  }]);

  return FileManager;
}();

function createFileManger() {
  return new FileManager();
}

exports.default = createFileManger;

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map