import { BrowserWindow } from 'electron'
import { ipcMain } from 'electron'

import path from 'path'
import url from 'url'

class PDFWindow {
  constructor(text) {
    // ウインドウの作成
    this.window = new BrowserWindow({ show: true })
    
    // pdf.htmlの呼び出し
    this.window.loadURL(url.format({
      pathname: path.join(__dirname, '../../pdf.html'),
      protocol: 'file:',
      slashes: true
    }))

    // MainプロセスからRendererプロセスへ値を取りに行く
    ipcMain.once('REQUEST_TEXT', (event)=> {
      event.returnValue = text
    })
  }

  // PDFを作成
  generatePDF() {
    return new Promise((resolve, reject) => {
      this.window.webContents.printToPDF({}, (error, data) => {
        if(error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }
}

function createPDFWindow(contents, fileManager) {
  return new PDFWindow(contents, fileManager)
}

export default createPDFWindow