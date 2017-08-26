import { app, BrowserWindow } from 'electron'

import setAppMenu from './setAppMenu'
import createMainWindow from './createMainWindow'

// 名前をつけて保存
import showSaveAsNewFileDialog from './showSaveAsNewFileDialog'
// ファイルを開く
import showOpenFileDialog from './showOpenFileDialog'
import createFileManager from './createFileManager'

// ガーベジコレクションによりウインドウが閉じないように、
// BrowserWindowインスタンスをグローバル宣言
let mainWindow
let fileManager

// ファイルを開く
function openFile() {
  console.log("openFile")
  showOpenFileDialog()
  .then((filePath) => fileManager.readFile(filePath))
  .then((text) => mainWindow.sendText(text))
  .catch((error) => {
    console.log(error)
  })
}

function saveFile() {
  console.log("saveFile")
  // ファイルが作成されていなかった場合
  if (!fileManager.filePath) {
    saveAsNewFile()
    return
  }

  mainWindow.requestText()
    .then((text) => fileManager.overwriteFile(text))
    .catch((error) => {
      console.log(error)
    })
}

// 名前を指定してファイルを保存する
function saveAsNewFile() {
  console.log("saveAsNewFile")
  // すべてのPromiseがresolveされた場合の処理
  Promise.all([ showSaveAsNewFileDialog(), mainWindow.requestText() ])
    .then(([filePath, text]) => fileManager.saveFile(filePath, text))
    .catch((error) => {
      console.log(error)
    })
}

// スクリーンキャプチャ
function screenCapture() {
  console.log("ScreenCapture")
}

function exportPDF() {
  console.log("exportPDF")
}

// Electronを起動したときの処理
app.on('ready', () => {
  mainWindow = createMainWindow()
  fileManager = createFileManager()

  const options = { openFile, saveFile, saveAsNewFile, exportPDF, screenCapture }
  setAppMenu(options)
})

// すべてのウインドウを閉じたときの処理
app.on('window-all-closed', () => {
  // MacOSの場合、ウインドウを閉じてもアプリがアクティブな状態のまま
  // なので、アプリを閉じる処理を行う
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    mainWindow = createMainWindow()
  }
})
