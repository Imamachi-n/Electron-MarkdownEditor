import React from 'react'
import brace from 'brace'
import AceEditor from 'react-ace'

import 'brace/mode/markdown'
import 'brace/theme/monokai'

export default function Editor(props) {
  return (
    <AceEditor
      mode='markdown'
      theme='monokai'
      name='editor'
      editorProps={{$blockScrolling: true}}
      onChange={props.onChange}
      value={props.value}
    />
  )
}