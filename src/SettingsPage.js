import React from 'react'
import styled from 'styled-components/macro'

export default function SettingsPage({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    onSubmit(data)
  }

  return (
    <main>
      <h1>Settings Page</h1>
      <FormStyled onSubmit={handleSubmit}>
        <LabelStyled>
          Title
          <input name="title" />
        </LabelStyled>
        <LabelStyled>
          Question
          <textarea name="question" />
        </LabelStyled>
        <LabelStyled>
          Answer
          <textarea name="answer" />
        </LabelStyled>
        <button>Create card</button>
      </FormStyled>
    </main>
  )
}

const FormStyled = styled.form`
  display: grid;
  gap: 20px;
  padding: 20px;
`

const LabelStyled = styled.label`
  display: grid;
  gap: 10px;
`
