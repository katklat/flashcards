import MarkdownIt from 'markdown-it'
import React from 'react'

const md = new MarkdownIt()
export default function Markdown({ children }) {
  return <div dangerouslySetInnerHTML={{ __html: md.render(children) }}></div>
}
