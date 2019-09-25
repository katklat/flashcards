import React from 'react'
import { action } from '@storybook/addon-actions'
import Card from './Card'

export default {
  title: 'Card',
  decorators: [Wrapper],
}

function Wrapper(storyFn) {
  return <div style={{ width: '300px', background: '#eee', padding: '20px' }}>{storyFn()}</div>
}

export const notBookmarked = () => (
  <Card title="Title" question="Question" answer="Answer" onBookmarkClick={action('onBookmarkClick')} />
)

export const isBookmarked = () => (
  <Card title="Title" isBookmarked question="Question" answer="Answer" onBookmarkClick={action('onBookmarkClick')} />
)
