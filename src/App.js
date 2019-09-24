import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import CardPage from './CardPage'
import Navigation from './Navigation'
import { getCards, patchCard, postCard } from './services'
import SettingsPage from './SettingsPage'

export default function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    getCards().then(setCards)
  }, [])

  const HomePage = withCardPage('Homepage')
  const PracticePage = withCardPage('Practice', 'doPractice')
  const BookmarksPage = withCardPage('Bookmarks', 'isBookmarked')

  return (
    <Router>
      <AppStyled>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/practice" component={PracticePage} />
          <Route path="/bookmarks" component={BookmarksPage} />
          <Route path="/settings" render={() => <SettingsPage title="Settings" onSubmit={createCard} />} />
        </Switch>
        <Navigation />
      </AppStyled>
    </Router>
  )

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

  function withCardPage(title, filterProp) {
    return () => {
      const filteredCards = filterProp ? cards.filter(card => card[filterProp]) : cards
      return <CardPage title={title} cards={filteredCards} onBookmarkClick={handleBookmarkClick} />
    }
  }
}

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
`
