import React from 'react'
import styled from 'styled-components/macro'
import CardList from './CardList'
import PageLayout from './PageLayout'

export default function PracticePage({ cards, onBookmarkClick, setPractice }) {
  const practiceCards = cards.filter(card => card.needsPractice != null)
  return (
    <PageLayout>
      <PracticeTitle>Needs Practice</PracticeTitle>
      <CardList
        autoScroll={false}
        cards={practiceCards.filter(card => card.needsPractice)}
        onBookmarkClick={onBookmarkClick}
        setPractice={setPractice}
      ></CardList>
      <PracticeTitle>Already learned</PracticeTitle>
      <CardList
        autoScroll={false}
        cards={practiceCards.filter(card => card.needsPractice === false)}
        onBookmarkClick={onBookmarkClick}
        setPractice={setPractice}
      ></CardList>
    </PageLayout>
  )
}

const PracticeTitle = styled.h2`
  margin: 12px;
  font-weight: normal;
`
