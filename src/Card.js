import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Card({ title, question, answer }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false)

  function toggleAnswer() {
    setIsAnswerVisible(!isAnswerVisible)
  }

  return (
    <CardStyled onClick={toggleAnswer}>
      <h2>{title}</h2>
      <p>{question}</p>
      {isAnswerVisible && <Answer text={answer} />}
    </CardStyled>
  )

  function Answer({ text }) {
    return (
      <>
        <hr />
        <p>{text}</p>
      </>
    )
  }
}

const CardStyled = styled.section`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
`
