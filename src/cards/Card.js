import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Markdown from '../common/Markdown'
import Tag from './Tag'

export default function Card({ title, question, answer, isBookmarked, onBookmarkClick, tags }) {
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
      <ul css="padding: 0">{tags && tags.map(tag => <Tag key={tag} text={tag} />)}</ul>
    </CardStyled>
  )

  function Answer({ text }) {
    return (
      <>
        <Separator />
        <Markdown>{text}</Markdown>
      </>
    )
  }
}

const BookmarkStyled = styled.div`
  height: 30px;
  border: 10px solid ${props => (props.active ? 'hotpink' : 'lightgray')};
  border-bottom-color: transparent;
  position: absolute;
  right: 20px;
  top: -5px;
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
