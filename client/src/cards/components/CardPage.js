import React from 'react'
import styled from 'styled-components/macro'
import Card from './Card'
import Page from '../../common/Page'
import TagFilter from './TagFilter'

export default function CardPage({
  cards,
  title,
  onBookmarkClick,
  onSelectTag,
  onTogglePractice,
  needsPractice,
  tags,
  selectedTag,
}) {
  return (
    <Page title={title}>
      <TagFilter tags={tags} selectedTag={selectedTag} onClick={onSelectTag} />
      <Scroller>
        {cards.map(card => (
          <Card
            onTogglePractice={needsPractice =>
              onTogglePractice(card, needsPractice)
            }
            needsPractice={needsPractice}
            key={card._id}
            onBookmarkClick={() => onBookmarkClick(card)}
            {...card}
          />
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
  padding: 20px 10px;
`
