import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Markdown from '../../common/Markdown'
import Tag from './Tag'
import useHeight from '../useHeight'
import { useSpring, animated } from 'react-spring'

export default function Card({
  question,
  answer,
  isBookmarked,
  onBookmarkClick,
  onTogglePractice,
  doesNeedPractice,
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
      <Answer style={answerStyle} bind={bind} content={answer}>
        <Feedback onTogglePractice={onTogglePractice} />
        {doesNeedPractice != null &&
          (doesNeedPractice ? '(Needs practice)' : '(I knew this one)')}
      </Answer>
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

function Answer({ children, style, bind, content }) {
  const Outer = styled(animated.div)`
    word-break: break-word;
    background: #f2f2f2;
    margin: 10px -20px 10px;
    position: relative;
    overflow: hidden;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
    }

    &::before {
      height: 8px;
      background: linear-gradient(#0002, #0000);
    }

    &::after {
      height: 8px;
      bottom: 0;
      background: linear-gradient(#0000, #0001);
    }
  `

  return (
    <Outer style={style} {...bind}>
      <div css="margin: 20px;">
        <Markdown>{content}</Markdown>
        {children}
      </div>
    </Outer>
  )
}

function Feedback({ onTogglePractice }) {
  return (
    <div>
      <button onClick={() => onTogglePractice(false)}>
        <span role="img" aria-label="I knew it">
          🤓
        </span>
      </button>
      <button onClick={() => onTogglePractice(true)}>
        <span role="img" aria-label="Did not know">
          🤯
        </span>
      </button>
    </div>
  )
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
