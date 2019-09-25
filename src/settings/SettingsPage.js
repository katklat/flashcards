import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Page from '../common/Page'
import Markdown from '../common/Markdown'

export default function SettingsPage({ onSubmit, title }) {
  const [answer, setAnswer] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    onSubmit(data)
    form.reset()
    form.title.focus()
  }

  const Answer = () => (
    <section css="color: #333">
      <small>
        <em>Preview:</em>
      </small>
      <br />
      <Markdown>{answer}</Markdown>
    </section>
  )

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
          <div>
            Answer <small>(Markdown)</small>
          </div>
          <textarea name="answer" onChange={event => setAnswer(event.target.value)} />
        </LabelStyled>
        {answer && <Answer />}
        <ButtonStyled>Create card</ButtonStyled>
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

const ButtonStyled = styled.button`
  border: none;
  border-radius: 3px;
  padding: 10px;
  background: hotpink;
  color: white;
`
