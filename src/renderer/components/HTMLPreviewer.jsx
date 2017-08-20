import React from 'react'
import Remarkable from 'remarkable'
import hljs from 'highlight.js'
import style from './HTMLPreviewer.css'

export default function Previewer(prop) {
  function getRawMarkup() {
    var md = new Remarkable('full', {
      html:         false,        // Enable HTML tags in source
      xhtmlOut:     false,        // Use '/' to close single tags (<br />)
      breaks:       true,        // Convert '\n' in paragraphs into <br>
      langPrefix:   'language-',  // CSS language prefix for fenced blocks
      linkify:      true,         // autoconvert URL-like texts to links
      linkTarget:   '',           // set target to open link in
    
      // Enable some language-neutral replacements + quotes beautification
      typographer:  false,
    
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
      quotes: '“”‘’',
    
      // Highlighter function. Should return escaped HTML,
      // or '' if input not changed
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (err) {}
        }
    
        try {
          return hljs.highlightAuto(str).value;
        } catch (err) {}
    
        return ''; // use external default escaping
      }
    })
    
    return {
      __html: md.render(prop.value)
    }
  }

  return (
    <div className={style.previewerBody}>
      <div 
      className={style.previewer} 
      dangerouslySetInnerHTML={getRawMarkup()}
    />
    </div>
  )
}