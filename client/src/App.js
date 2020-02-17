import { produce } from 'immer'
import React, { useEffect, useState, useMemo } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import { getCards, patchCard, postCard } from './Card/services'
import Navigation from './common/Navigation'
import CreatePage from './pages/CreatePage'
import CardPage from './pages/CardPage'

export default function App() {
  const [cards, setCards] = useState([])
  const [selectedTag, setSelectedTag] = useState('all')

  const allTags = useMemo(
    () =>
      Array.from(
        cards.reduce((prev, card) => {
          card.tags && card.tags.forEach(tag => prev.add(tag))
          return prev
        }, new Set())
      ),
    [cards]
  )

  useEffect(() => {
    getCards().then(setCards)
  }, [])

  const Homepage = withCardPage('Homepage')
  const PracticePage = withCardPage('Practice', 'needsPractice')
  const BookmarksPage = withCardPage('Bookmarks', 'isBookmarked')

  return (
    <Router>
      <AppStyled>
        <Switch>
          <Route exact path="/" render={Homepage} />
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

  function createCard(cardData) {
    postCard(cardData).then(card => {
      setCards([...cards, card])
    })
  }

  function withCardPage(title, filterProp) {
    return () => {
      const filteredCards = filterProp
        ? cards.filter(card => card[filterProp] != null)
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
          onChangeNeedsPractice={changeNeedsPractice}
        />
      )
    }
  }

  async function changeNeedsPractice(card, needsPractice) {
    const newValue = card.needsPractice === needsPractice ? null : needsPractice
    const id = card._id
    const updatedCard = await patchCard(id, { needsPractice: newValue })
    setCards(
      produce(cards, draft => {
        const card = draft.find(card => card._id === id)
        card.needsPractice = updatedCard.needsPractice
      })
    )
  }

  async function handleBookmarkClick(card) {
    const updatedCard = await patchCard(card._id, {
      isBookmarked: card.isBookmarked ? null : true,
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
