import React from 'react'
import Card from './Card'
import styled from 'styled-components/macro'

export default function HomePage({ cards, onBookmarkClick }) {
  return (
    <PageStyled>
      <h1>Homepage</h1>
      {cards.map(card => (
        <Card
          key={card._id}
          title={card.title}
          question={card.question}
          answer={card.answer}
          onBookmarkClick={() => onBookmarkClick(card)}
        />
      ))}
    </PageStyled>
  )
}

const PageStyled = styled.main`
  padding: 20px;
  display: grid;
  align-content: flex-start;
  gap: 20px;
`
