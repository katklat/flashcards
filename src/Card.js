import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Card({ title, question, answer, isBookmarked, onBookmarkClick }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false)

  function toggleAnswer() {
    setIsAnswerVisible(!isAnswerVisible)
  }

  function handleBookmarkClick(event) {
    event.stopPropagation()
    onBookmarkClick()
  }

  return (
    <CardStyled onClick={toggleAnswer}>
      <BookmarkStyled onClick={handleBookmarkClick} active={isBookmarked} />
      <h2>{title}</h2>
      <p>{question}</p>
      {isAnswerVisible && <Answer text={answer} />}
    </CardStyled>
  )

  function Answer({ text }) {
    return (
      <>
        <Separator />
        <p>{text}</p>
      </>
    )
  }
}

const BookmarkStyled = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 20px;
  top: -5px;
  background: ${props => (props.active ? 'hotpink' : 'lightgray')};
`

const CardStyled = styled.section`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
`

const Separator = styled.div`
  border-top: 1px solid hotpink;
`
