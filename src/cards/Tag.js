import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'

Tag.propTypes = {
  text: PropTypes.string,
}

export default function Tag({ text }) {
  return <TagStyled>{text}</TagStyled>
}

const TagStyled = styled.li`
  display: inline-block;
  padding: 2px 10px;
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 10px;
`
