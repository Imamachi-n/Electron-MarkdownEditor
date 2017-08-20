import React from 'react'
import Grid from 'material-ui/Grid'

import Editor from './TextEditor'
import Previewer from './HTMLPreviewer'
import MaterialUIButtonTest from './MaterialUITest'
import style from './MarkDownEditorUI.css'

export default class MarkDownEditorUI extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = { value: '' }
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <div className={style.markdownBody}>
        <Grid container>
          <Grid item xs={6}>
            <h3>Input</h3>
            <Editor
              onChange={this.handleChange}
              defaultValue={this.state.value}
            />
          </Grid>

          <Grid item xs={6}>
            <h3>Output</h3>
            <Previewer 
              value={this.state.value}
            />
          </Grid>
        </Grid>

        <MaterialUIButtonTest/>
      </div>
    )
  }
}