import React from 'react'
import styled from 'styled-components/macro'
import Page from './Page'

export default function SettingsPage({ onSubmit, title }) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    onSubmit(data)
    form.reset()
    form.title.focus()
  }

  return (
    <Page title={title}>
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
    </Page>
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
