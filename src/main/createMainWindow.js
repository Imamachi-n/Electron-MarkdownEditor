import {BrowserWindow} from 'electron'

import path from 'path'
import url from 'url'

class MainWindow {
    constructor() {
        // ウインドウの作成（ウインドウサイズの指定）
        this.window = new BrowserWindow({width: 800, hwight: 600})

        // index.htmlの呼び出し
        this.window.loadURL(url.format({
                pathname: path.join(__dirname, '../../index.html'),
                protocol: 'file:',
                slashes: true
        }))

        // ウインドウを閉じたときの処理
        this.window.on('closed', () => {
                this.window = null
        })
    }
}

function createMainWindow() {
    return new MainWindow()
}

export default createMainWindow