import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import CardList from './CardList'
import styled from 'styled-components/macro'
import SettingsPage from './SettingsPage'
import { getAllCards, postCard } from './services'

export default function App() {
  useEffect(() => {
    getAllCards().then(setCards)
  }, [])

  const [activeIndex, setActiveIndex] = useState(0)
  const [cards, setCards] = useState([])

  function createCard(cardData) {
    postCard(cardData).then(card => setCards([...cards, card]))
  }

  function renderPage() {
    const pages = {
      0: <CardList title="Home" cards={cards} />,
      1: <CardList title="Practice" cards={cards.filter(card => card.doPractice)} />,
      2: <CardList title="Bookmarks" cards={cards.filter(card => card.isBookmarked)} />,
      3: <SettingsPage onSubmit={createCard} />,
    }

    return pages[activeIndex] || <section>404</section>
  }

  return (
    <AppStyled>
      {renderPage()}
      <Navigation buttonTexts={['Home', 'Practice', 'Bookmarks', 'Settings']} onClick={setActiveIndex} />
    </AppStyled>
  )
}

const AppStyled = styled.section`
  display: grid;
  grid-template-rows: auto 48px;
  height: 100vh;
  font-family: sans-serif;
`
