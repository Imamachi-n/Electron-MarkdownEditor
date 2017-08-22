import fs from 'fs'

class FileManager {
  constructor() {
    this.filePath = ''
  }

  // ファイルの保存
  saveFile(filePath, text) {
    return new Promise((resolve) => {
      fs.writeFileSync(filePath, text);
      this.filePath = filePath    // ファイルパスを保持
      resolve();
    })
  }

  // ファイルの読み込み
  readFile(filePath) {
    return new Promise((resolve) => {
      const text = fs.readFileSync(filePath, 'utf-8')
      this.filePath = filePath    // ファイルパスを保持
      resolve(text)
    })
  }

  // ファイルの上書き
  overwriteFile(text) {
    return this.saveFile(this.filePath, text)
  }
}

function createFileManger() {
  return new FileManager();
}

export default createFileManger;