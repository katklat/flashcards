import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <NavigationStyled>
      <LinkStyled exact to="/">
        Home
      </LinkStyled>
      <LinkStyled to="/practice">Practice</LinkStyled>
      <LinkStyled to="/bookmarks">Bookmarks</LinkStyled>
      <LinkStyled to="/settings">Settings</LinkStyled>
    </NavigationStyled>
  )
}

const LinkStyled = styled(NavLink)`
  flex-grow: 1;
  color: inherit;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgray;

  &.active {
    background: hotpink;
  }
`

const NavigationStyled = styled.nav`
  display: grid;
  grid-auto-flow: column;
  gap: 1px;
`
