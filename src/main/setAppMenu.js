import { app, Menu, BrowserWindow } from 'electron'

function setAppMenu(options) {
  const template = [
    {
      label: "File",
      submenu: [
        { label: "Open", accelerator: "CmdOrCtrl+O", click: () => options.openFile() },
        { label: "Save", accelerator: "CmdOrCtrl+S", click: () => options.saveFile() },
        { label: "Save As ...", click: () => options.saveAsNewFile() },
        { label: "Export PDF", click: () => options.exportPDF() },
        { label: "Exit", accelerator: "CmdOrCtrl+Q", role: "quit" }
      ]
    },

    {
      label: "Edit",
      submenu: [
        { label: "Copy", accelerator: "CmdOrCtrl+C", role: "copy" },
        { label: "Paste", accelerator: "CmdOrCtrl+V", role: "paste" },
        { label: "Cut", accelerator: "CmdOrCtrl+X", role: "cut" },
        { label: "Select All", accelerator: "CmdOrCtrl+A", role: "selectall" }
      ]
    },

    {
      label: "View",
      submenu: [
        {
          label: "Toggle DevTools",
          accelerator: "Alt+CmdOrCtrl+I",
          click: () => BrowserWindow.getFocusedWindow().toggleDevTools()
        }
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

export default setAppMenu