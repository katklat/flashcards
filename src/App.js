import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import CardList from './CardList'
import styled from 'styled-components/macro'
import SettingsPage from './SettingsPage'
import { getAllCards, postCard, patchCard } from './services'

export default function App() {
  const [activePageIndex, setActivePageIndex] = useState(0)
  const [cards, setCards] = useState([])

  useEffect(() => {
    getAllCards().then(setCards)
  }, [])

  function createCard(cardData) {
    postCard(cardData).then(card => setCards([...cards, card]))
  }

  function handleBookmarkClick(card) {
    patchCard(card._id, { isBookmarked: !card.isBookmarked }).then(changedCard => {
      const index = cards.findIndex(card => card._id === changedCard._id)
      setCards([
        ...cards.slice(0, index),
        { ...card, isBookmarked: changedCard.isBookmarked },
        ...cards.slice(index + 1),
      ])
    })
  }

  function renderPage() {
    const pages = {
      0: <CardList onBookmarkClick={handleBookmarkClick} title="Home" cards={cards} />,
      1: (
        <CardList
          onBookmarkClick={handleBookmarkClick}
          title="Practice"
          cards={cards.filter(card => card.doPractice)}
        />
      ),
      2: (
        <CardList
          onBookmarkClick={handleBookmarkClick}
          title="Bookmarks"
          cards={cards.filter(card => card.isBookmarked)}
        />
      ),
      3: <SettingsPage onSubmit={createCard} />,
    }

    return pages[activePageIndex] || <section>404</section>
  }

  return (
    <AppStyled>
      {renderPage()}
      <Navigation buttonTexts={['Home', 'Practice', 'Bookmarks', 'Settings']} onClick={setActivePageIndex} />
    </AppStyled>
  )
}

const AppStyled = styled.section`
  display: grid;
  grid-template-rows: auto 48px;
  height: 100vh;
  font-family: sans-serif;
`
