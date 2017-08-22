import fs from 'fs'

class FileManager {
  // ファイルの保存
  saveFile(filePath, text) {
    return new Promise((resolve) => {
      fs.writeFileSync(filePath, text);
      resolve();
    })
  }

  // ファイルの読み込み
  readFile(filePath) {
    return new Promise((resolve) => {
      const text = fs.readFileSync(filePath, 'utf-8')
      resolve(text)
    })
  }
}

function createFileManger() {
  return new FileManager();
}

export default createFileManger;