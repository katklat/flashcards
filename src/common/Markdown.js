import MarkdownIt from 'markdown-it'
import React from 'react'
import styled from 'styled-components/macro'
import * as hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

const md = new MarkdownIt({
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {}
    }

    return '' // use external default escaping
  },
})
export default function Markdown({ children, font = 'serif' }) {
  return <DivStyled {...{ font }} dangerouslySetInnerHTML={{ __html: md.render(children) }}></DivStyled>
}

const DivStyled = styled.div`
  font-family: ${({ font }) => font};
  word-break: break-word;
`
