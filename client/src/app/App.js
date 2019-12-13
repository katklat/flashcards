import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import CardPage from '../cards/components/CardPage'
import Navigation from '../common/Navigation'
import { getCards, patchCard, postCard } from '../cards/services'
import CreatePage from '../create/CreatePage'
import { produce } from 'immer'

export default function App() {
  const [cards, setCards] = useState([])
  const [selectedTag, setSelectedTag] = useState('all')

  const allTags = Array.from(
    cards.reduce((prev, card) => {
      card.tags && card.tags.forEach(tag => prev.add(tag))
      return prev
    }, new Set())
  )

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
          <Route exact path="/" render={HomePage} />
          <Route path="/bookmarks" render={BookmarksPage} />
          <Route path="/practice" render={PracticePage} />
          <Route
            path="/create"
            render={() => <CreatePage title="Settings" onSubmit={createCard} />}
          />
        </Switch>
        <Navigation />
      </AppStyled>
    </Router>
  )

  function withCardPage(title, filterProp) {
    return () => {
      const filteredCards = filterProp
        ? cards.filter(card => card[filterProp])
        : cards

      const filteredByTag =
        selectedTag === 'all'
          ? filteredCards
          : filteredCards.filter(
              card => card.tags && card.tags.includes(selectedTag)
            )
      return (
        <CardPage
          title={title}
          cards={filteredByTag}
          tags={allTags}
          selectedTag={selectedTag}
          onBookmarkClick={handleBookmarkClick}
          onSelectTag={setSelectedTag}
          onTogglePractice={togglePractice}
          onNotKnown={handleNotKnown}
        />
      )
    }
  }

  function createCard(cardData) {
    postCard(cardData).then(card => {
      setCards([...cards, card])
    })
  }

  async function togglePractice(id, needsPractice) {
    const updatedCard = await patchCard(id, { needsPractice })
    setCards(
      produce(cards, draft => {
        const card = draft.find(card => card._id === id)
        card.needsPractice = updatedCard.needsPractice
      })
    )
  }

  async function handleNotKnown(card) {
    const updatedCard = await patchCard(card._id, { isKnown: true })

    setCards(
      produce(cards, draft => {
        const card = draft.find(c => c._id === updatedCard._id)
        card.isKnown = false
      })
    )
  }

  async function handleBookmarkClick(card) {
    const updatedCard = await patchCard(card._id, {
      isBookmarked: !card.isBookmarked,
    })
    setCards(
      produce(cards, draft => {
        const card = draft.find(card => card._id === updatedCard._id)
        card.isBookmarked = updatedCard.isBookmarked
      })
    )
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
