import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import HomePage from './HomePage'
import styled from 'styled-components/macro'
import SettingsPage from './SettingsPage'
import { getCards, postCard, patchCard } from './services'

import { BrowserRouter as Router, Route } from 'react-router-dom'

export default function App() {
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

  return (
    <Router>
      <AppStyled>
        <Route exact path="/" render={() => <HomePage cards={cards} onBookmarkClick={handleBookmarkClick} />} />
        <Route path="/settings" render={() => <SettingsPage onSubmit={createCard} />} />
        <Navigation />
      </AppStyled>
    </Router>
  )
}

const AppStyled = styled.section`
  display: grid;
  grid-template-rows: auto 48px;
  height: 100vh;
  font-family: sans-serif;
`
