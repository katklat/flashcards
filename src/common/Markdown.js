import MarkdownIt from 'markdown-it'
import React from 'react'
import styled from 'styled-components/macro'

const md = new MarkdownIt()
export default function Markdown({ children, font = 'serif' }) {
  return <DivStyled {...{ font }} dangerouslySetInnerHTML={{ __html: md.render(children) }}></DivStyled>
}

const DivStyled = styled.div`
  font-family: ${({ font }) => font};
  word-break: break-word;
`
