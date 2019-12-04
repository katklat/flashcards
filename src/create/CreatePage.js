import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Page from '../common/Page'
import Card from '../cards/Card'
export default function CreatePage({ onSubmit, title }) {
  const [card, setCard] = useState({})

  function handleSubmit(event) {
    const form = event.target
    onSubmit(card)
    form.reset()
    form.title.focus()
  }

  function handleChange(event) {
    const form = event.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    data.tags = data.tags
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length)
    setCard(data)
  }

  const hasCardContent = !!Object.values(card).join('').length

  return (
    <Page title={title}>
      <FormStyled onSubmit={handleSubmit} onChange={handleChange}>
        <LabelStyled>
          Title
          <input autoFocus name="title" />
        </LabelStyled>
        <LabelStyled>
          Question
          <textarea name="question" />
        </LabelStyled>
        <LabelStyled>
          <div>
            Answer <small>(Markdown)</small>
          </div>
          <textarea name="answer" />
        </LabelStyled>
        <LabelStyled>
          Tags
          <input name="tags" />
        </LabelStyled>
        <ButtonStyled>Create card</ButtonStyled>
        {hasCardContent && <Card {...card} />}
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
