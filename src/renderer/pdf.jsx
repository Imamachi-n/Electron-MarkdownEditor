import React from 'react'
import { render } from 'react-dom'
import PDFUI from './components/PDFUI'

import './components/bootstrapCDN.css'
import './components/font.css'
import './components/custom.css'

render(
  <PDFUI />,
  document.getElementById('content')
)