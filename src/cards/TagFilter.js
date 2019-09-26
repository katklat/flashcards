import React from 'react'
import PropTypes from 'prop-types'

TagFilter.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
}

export default function TagFilter({ onClick, tags }) {
  return (
    <div>
      <button onClick={() => onClick('all')}>all</button>
      {tags.map(tag => (
        <button onClick={() => onClick(tag)} key={tag}>
          {tag}
        </button>
      ))}
    </div>
  )
}
