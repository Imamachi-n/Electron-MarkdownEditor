import React from 'react'
import Previewer from './HTMLPreviewer'
import { ipcRenderer } from 'electron'

export default class PDFUI extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }
  
  componentDidMount() {
    // Mainプロセスから値を取得
    const text = ipcRenderer.sendSync('REQUEST_TEXT')
    this.setState({ value: text })
  }

  render() {
    return (
      <Previewer value={ this.state.value } />
    )
  }
}