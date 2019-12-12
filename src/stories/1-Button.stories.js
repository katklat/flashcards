import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from '@storybook/react/demo'

export default {
  title: 'Button',
  decorators: [Wrapper],
}

function Wrapper(storyFn) {
  return <div style={{ width: '200px', background: 'hotpink' }}>{storyFn()}</div>
}

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)
