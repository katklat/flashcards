import React from 'react'

export default function Feedback({ onTogglePractice }) {
  function withClickHandler(needsPractice) {
    return event => {
      event.stopPropagation()
      onTogglePractice(needsPractice)
    }
  }

  return (
    <div>
      <button onClick={withClickHandler(false)}>
        <span role="img" aria-label="I knew it">
          🤓
        </span>
      </button>
      <button onClick={withClickHandler(true)}>
        <span role="img" aria-label="Did not know">
          🤯
        </span>
      </button>
      <button onClick={withClickHandler(null)}>
        <span role="img" aria-label="Unset">
          ✖️
        </span>
      </button>
    </div>
  )
}
