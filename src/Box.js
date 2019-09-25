import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Box() {
  const [numBoxes, setNumBoxes] = useState(1)

  return (
    <div css="overflow: scroll">
      <button onClick={() => setNumBoxes(numBoxes + 1)}>Add box</button>
      {Array(numBoxes)
        .fill()
        .map(() => (
          <BoxStyled></BoxStyled>
        ))}
    </div>
  )
}

const BoxStyled = styled.div`
  width: 50px;
  height: 50px;
  background: plum;
  margin-top: 20px;
`
