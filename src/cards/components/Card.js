import React, { useState, useRef } from 'react'
import styled from 'styled-components/macro'
import Markdown from '../../common/Markdown'
import Tag from './Tag'
import useAnswerHeight from '../useAnswerHeight'

export default function Card({
  question,
  answer,
  isBookmarked,
  onBookmarkClick,
  tags,
}) {
  const answerRef = useRef()
  const [isAnswerVisible, setIsAnswerVisible] = useState(false)
  const answerHeight = useAnswerHeight(answerRef)

  return (
    <CardStyled onClick={toggleAnswer}>
      <BookmarkStyled onClick={handleBookmarkClick} active={isBookmarked} />
      <p>{question}</p>
      {isAnswerVisible && <Answer ref={answerRef}>{answer}</Answer>}
      <ul css="padding: 0; margin: 0">
        {tags && tags.map(tag => <Tag key={tag} text={tag} />)}
      </ul>
    </CardStyled>
  )

  function toggleAnswer() {
    setIsAnswerVisible(!isAnswerVisible)
  }

  function handleBookmarkClick(event) {
    event.stopPropagation()
    onBookmarkClick && onBookmarkClick()
  }
}

const Answer = styled.div.attrs({ children: <Markdown /> })`
  font-family: serif;
  word-break: break-word;
  padding: 20px 10px;
  background: #f2f2f2;
  margin: 0 -20px 20px;
  position: relative;
  transition: height 0.3s;

  &::before {
    content: '';
    display: block;
    height: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(#0002, #0000);
  }

  &::after {
    content: '';
    display: block;
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(#0000, #0001);
  }
`
const BookmarkStyled = styled.div`
  height: 30px;
  border: 10px solid ${props => (props.active ? 'hotpink' : 'lightgray')};
  border-bottom-color: transparent;
  position: absolute;
  right: 20px;
  top: -5px;
`

const CardStyled = styled.section`
  cursor: default;
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
`
