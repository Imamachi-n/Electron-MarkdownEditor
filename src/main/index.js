import { app, BrowserWindow } from 'electron'

import setAppMenu from './setAppMenu'
import createMainWindow from './createMainWindow'

// 名前をつけて保存
import showSaveAsNewFileDialog from './showSaveAsNewFileDialog'
import createFileManager from './createFileManager'

// ガーベジコレクションによりウインドウが閉じないように、
// BrowserWindowインスタンスをグローバル宣言
let mainWindow

let fileManager

// メニューバーの操作
function openFile() {
  console.log("openFile")
}

function saveFile() {
  console.log("saveFile")
}

function saveAsNewFile() {
  console.log("saveAsNewFile")
  // すべてのPromiseがresolveされた場合の処理
  Promise.all([ showSaveAsNewFileDialog(), mainWindow.requestText() ])
    .then(([filePath, text]) => fileManager.saveFile(filePath, text))
    .catch((error) => {
      console.log(error)
    })
}

function exportPDF() {
  console.log("exportPDF")
}

// Electronを起動したときの処理
app.on('ready', () => {
  mainWindow = createMainWindow()
  fileManager = createFileManager()

  const options = { openFile, saveFile, saveAsNewFile, exportPDF }
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
