import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import HomePage from './HomePage'
import styled from 'styled-components/macro'
import SettingsPage from './SettingsPage'
import { getCards, postCard } from './services'

export default function App() {
  useEffect(() => {
    getCards()
      .then(setCards)
      .catch(err => console.warn('ERROR, could not getCards', err))
  }, [])

  const [activeIndex, setActiveIndex] = useState(0)
  const [cards, setCards] = useState([])

  return (
    <AppStyled>
      {renderPage()}
      <Navigation buttonTexts={['Home', 'Practice', 'Bookmarks', 'Settings']} onClick={setActiveIndex} />
    </AppStyled>
  )

  function handleSubmit(data) {
    postCard(data).then(newCard => setCards([...cards, newCard]))
  }

  function renderPage() {
    const pages = {
      0: <HomePage cards={cards} />,
      1: <section>Practice</section>,
      2: <section>Bookmarks</section>,
      3: <SettingsPage onSubmit={handleSubmit} />,
    }

    return pages[activeIndex] || <section>404</section>
  }
}

const AppStyled = styled.section`
  display: grid;
  grid-template-rows: auto 48px;
  height: 100vh;
  font-family: sans-serif;
`
