import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import HomePage from './HomePage'
import styled from 'styled-components/macro'
import SettingsPage from './SettingsPage'
import { getCards, postCard, patchCard } from './services'

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cards, setCards] = useState([])

  useEffect(() => {
    getCards().then(setCards)
  }, [])

  function createCard(cardData) {
    postCard(cardData).then(card => {
      setCards([...cards, card])
    })
  }

  function handleBookmarkClick(card) {
    patchCard(card._id, { isBookmarked: !card.isBookmarked }).then(updatedCard => {
      const index = cards.findIndex(card => card._id === updatedCard._id)
      setCards([
        ...cards.slice(0, index),
        { ...card, isBookmarked: updatedCard.isBookmarked },
        ...cards.slice(index + 1),
      ])
    })
  }

  function renderPage() {
    const pages = {
      0: <HomePage cards={cards} onBookmarkClick={handleBookmarkClick} />,
      1: <section>Practice</section>,
      2: <section>Bookmarks</section>,
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
