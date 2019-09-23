import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function SettingsPage({ onSubmit }) {
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit({ title, question, answer })
  }

  function updateTitle(event) {
    setTitle(event.target.value)
  }

  function updateQuestion(event) {
    setQuestion(event.target.value)
  }

  function updateAnswer(event) {
    setAnswer(event.target.value)
  }

  return (
    <div>
      <h1>Settings Page</h1>
      <FormStyled onSubmit={handleSubmit}>
        <input name="title" value={title} onChange={updateTitle} />
        <textarea name="question" value={question} onChange={updateQuestion} />
        <textarea name="answer" value={answer} onChange={updateAnswer} />
        <button>Create card</button>
      </FormStyled>
    </div>
  )
}

const FormStyled = styled.form`
  display: grid;
  gap: 20px;
  padding: 20px;
`
