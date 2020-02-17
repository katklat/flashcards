import React from 'react'
import TagFilter from '../common/TagFilter'
import CardList from './CardList'
import PageLayout from './PageLayout'

export default function HomePage({
  tags,
  cards,
  onBookmarkClick,
  onSelectTag,
  selectedTag,
  setPractice,
}) {
  return (
    <PageLayout title="Home">
      <TagFilter tags={tags} selectedTag={selectedTag} onClick={onSelectTag} />
      <CardList
        selectedTag={selectedTag}
        cards={cards}
        onBookmarkClick={onBookmarkClick}
        setPractice={setPractice}
      />
    </PageLayout>
  )
}
