import React from 'react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import Card from '../../Card'

export default {
  title: 'Card',
  decorators: [withInfo, withKnobs, Wrapper],
}

function Wrapper(storyFn) {
  return (
    <div style={{ width: '300px', background: '#eee', padding: '20px' }}>
      {storyFn()}
    </div>
  )
}

export const notBookmarked = () => (
  <Card
    question="Question"
    answer="Answer"
    onBookmarkClick={action('onBookmarkClick')}
  />
)

export const isBookmarked = () => (
  <Card
    isBookmarked={boolean('isBookmarked', true)}
    question={text('question', 'Question')}
    answer={text('answer', 'Answer')}
    onBookmarkClick={action('onBookmarkClick')}
  />
)
