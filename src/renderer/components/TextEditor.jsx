import React from 'react'
import style from './TextEditor.css'

export default function Editor(props) {
  return (
    <div className={style.editorBody}>
      <textarea
        id={style.editor}
        onChange={props.onChange}
        defaultValue={props.defaultValue}/>
    </div>
  )
}