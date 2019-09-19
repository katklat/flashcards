import React from 'react'
import styled from 'styled-components/macro'

export default function SettingsPage({ onSubmit }) {
  return (
    <main>
      <h1>Settings Page</h1>
      <FormStyled onSubmit={handleSubmit}>
        <input name="title" type="text" />
        <input name="question" type="text" />
        <input name="answer" type="text" />
        <button>Submit</button>
      </FormStyled>
    </main>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))
    onSubmit(data)
  }
}

const FormStyled = styled.form`
  display: grid;
  gap: 20px;
`
