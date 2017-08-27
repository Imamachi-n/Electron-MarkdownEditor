import {BrowserWindow} from 'electron'

import path from 'path'
import url from 'url'

export default function createScreenCaptureWindow(mainWindow, x, y, width, height) {
  const display = screen.getAllDisplays()[0]
  // ウインドウの作成
  mainWindow.window = new BrowserWindow({
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    x: x,
    y: y,
    width: width,
    height: height
  })
  // }
}

// function createScreenCaptureWindow() {   return new ScreenCaptureWindow() }
// export default createScreenCaptureWindow