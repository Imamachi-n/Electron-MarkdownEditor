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
/******/ 	return __webpack_require__(__webpack_require__.s = 699);
/******/ })
/************************************************************************/
/******/ ({

/***/ 48:
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 208);
  /******/
})(
/************************************************************************/
/******/{

  /***/208:
  /***/function _(module, exports, __webpack_require__) {

    "use strict";

    var _electron = __webpack_require__(48);

    var _setAppMenu = __webpack_require__(209);

    var _setAppMenu2 = _interopRequireDefault(_setAppMenu);

    var _createMainWindow = __webpack_require__(210);

    var _createMainWindow2 = _interopRequireDefault(_createMainWindow);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    // ガーベジコレクションによりウインドウが閉じないように、
    // BrowserWindowインスタンスをグローバル宣言
    var mainWindow = void 0;

    // メニューバーの操作
    function openFile() {
      console.log("openFile");
    }

    function saveFile() {
      console.log("saveFile");
    }

    function saveAsNewFile() {
      console.log("saveAsNewFile");
    }

    function exportPDF() {
      console.log("exportPDF");
    }

    // Electronを起動したときの処理
    _electron.app.on('ready', function () {
      mainWindow = (0, _createMainWindow2.default)();
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

    /***/
  },

  /***/209:
  /***/function _(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _electron = __webpack_require__(48);

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

    /***/
  },

  /***/210:
  /***/function _(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _electron = __webpack_require__(48);

    var _path = __webpack_require__(79);

    var _path2 = _interopRequireDefault(_path);

    var _url = __webpack_require__(80);

    var _url2 = _interopRequireDefault(_url);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var MainWindow = function MainWindow() {
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
    };

    function createMainWindow() {
      return new MainWindow();
    }

    exports.default = createMainWindow;

    /***/
  },

  /***/48:
  /***/function _(module, exports) {

    module.exports = __webpack_require__(48);

    /***/
  },

  /***/79:
  /***/function _(module, exports) {

    module.exports = __webpack_require__(79);

    /***/
  },

  /***/80:
  /***/function _(module, exports) {

    module.exports = __webpack_require__(80);

    /***/
  }

  /******/ });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map