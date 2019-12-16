import React, { useState } from 'react'
import { useSpring } from 'react-spring'
import styled from 'styled-components/macro'
import useHeight from '../useHeight'
import Tag from './Tag'
import Answer from './Answer'

export default function Card({
  question,
  answer,
  isBookmarked,
  onBookmarkClick,
  onChangeNeedsPractice,
  needsPractice,
  tags,
}) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false)
  const { height, bind } = useHeight()
  const answerStyle = useSpring({
    height: isAnswerVisible ? height : 0,
  })

  return (
    <CardStyled onClick={toggleAnswer}>
      <BookmarkStyled onClick={handleBookmarkClick} active={isBookmarked} />
      {question}
      <Answer
        onChangeNeedsPractice={onChangeNeedsPractice}
        needsPractice={needsPractice}
        style={answerStyle}
        bind={bind}
        content={answer}
      ></Answer>
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
