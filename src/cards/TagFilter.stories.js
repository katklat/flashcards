import React from 'react'
import TagFilter from './TagFilter'
import { action } from '@storybook/addon-actions'
export default {
  title: 'TagFilter',
}

export const tagFilter = () => <TagFilter onClick={action('onClick')} tags={['one', 'two']} />
