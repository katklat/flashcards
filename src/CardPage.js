import React from 'react'
import styled from 'styled-components/macro'
import Card from './Card'
import PageStyled from './PageStyled'

export default function CardPage({ cards, title, onBookmarkClick }) {
  return (
    <PageStyled>
      <Header>{title}</Header>
      <Scroller>
        {cards.map(card => (
          <Card key={card._id} {...card} onBookmarkClick={() => onBookmarkClick(card)} />
        ))}
      </Scroller>
    </PageStyled>
  )
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #444;
  color: white;
`

const Scroller = styled.div`
  display: grid;
  gap: 20px;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding: 20px;
`
