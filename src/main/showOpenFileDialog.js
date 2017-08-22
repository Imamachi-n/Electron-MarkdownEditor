import {dialog} from 'electron'

// ファイルを開くためのダイアログを呼び出す
export default function showOpenFileDialog() {
  return new Promise((resolve, reject) => {
    const files = dialog.showOpenDialog({
      title: "open",
      propaties: ['openFile'],
      filters: [
        {
          name: 'markdown file',
          extensions: ['md']
        }
      ]
    })

    if (files && files.length > 0) {
      resolve(files[0])
    } else {
      reject()
    }
  })
}