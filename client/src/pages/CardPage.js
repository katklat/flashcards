import React from 'react'
import styled from 'styled-components/macro'
import Card from '../Card/Card'
import Layout from './Layout'
import TagFilter from '../common/TagFilter'

export default function CardPage({
  cards,
  title,
  onBookmarkClick,
  onSelectTag,
  onChangeNeedsPractice,
  needsPractice,
  tags,
  selectedTag,
}) {
  return (
    <Layout title={title}>
      <TagFilter tags={tags} selectedTag={selectedTag} onClick={onSelectTag} />
      <Scroller>
        {cards.map(card => (
          <Card
            onChangeNeedsPractice={needsPractice =>
              onChangeNeedsPractice(card, needsPractice)
            }
            needsPractice={needsPractice}
            key={card._id}
            onBookmarkClick={() => onBookmarkClick(card)}
            showPracticeButtons={true}
            {...card}
          />
        ))}
      </Scroller>
    </Layout>
  )
}

const Scroller = styled.div`
  display: grid;
  gap: 20px;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding: 20px 10px;
`
