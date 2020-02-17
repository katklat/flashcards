import React from 'react'
import TagFilter from '../common/TagFilter'
import CardList from './CardList'
import PageLayout from './PageLayout'

export default function BookmarkPage({
  tags,
  cards,
  onBookmarkClick,
  onSelectTag,
  selectedTag,
  setPractice,
}) {
  return (
    <PageLayout title="Bookmarks">
      <TagFilter tags={tags} selectedTag={selectedTag} onClick={onSelectTag} />
      <CardList
        selectedTag={selectedTag}
        cards={cards.filter(card => card.isBookmarked)}
        onBookmarkClick={onBookmarkClick}
        setPractice={setPractice}
      />
    </PageLayout>
  )
}
