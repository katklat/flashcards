import React from 'react'
import styled from 'styled-components/macro'

export default function Feedback({ onTogglePractice, needsPractice }) {
  function withClickHandler(needsPractice) {
    return event => {
      event.stopPropagation()
      onTogglePractice(needsPractice)
    }
  }

  return (
    <Row>
      <Link selected={needsPractice === true} onClick={withClickHandler(true)}>
        Nicht gewusst
      </Link>
      <Link
        selected={needsPractice === false}
        onClick={withClickHandler(false)}
      >
        Gewusst
      </Link>
    </Row>
  )
}

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const Link = styled.span`
  border-radius: 4px;
  padding: 1px 6px;
  background: #ddd;
  border: 1px solid #ccc;
  color: ${p => (p.selected ? 'hotpink' : '#555')};
`
