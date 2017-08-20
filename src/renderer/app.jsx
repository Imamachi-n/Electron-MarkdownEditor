import React from 'react'
import { render } from 'react-dom'
import MarkDownEditorUI from './components/MarkDownEditorUI'

import './components/bootstrapCDN.css'
import './components/font.css'
import './components/custom.css'

render(
  <MarkDownEditorUI />,
  document.getElementById('app')
)