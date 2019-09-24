import React from 'react'
import styled from 'styled-components/macro'
import Card from './Card'
import Page from './Page'

export default function CardPage({ cards, title, onBookmarkClick }) {
  return (
    <Page title={title}>
      <Scroller>
        {cards.map(card => (
          <Card key={card._id} {...card} onBookmarkClick={() => onBookmarkClick(card)} />
        ))}
      </Scroller>
    </Page>
  )
}

const Scroller = styled.div`
  display: grid;
  gap: 20px;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding: 20px;
`
