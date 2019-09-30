import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #eee;
    font-family: sans-serif;
    font-size: 18px;
    overflow: hidden;
  }

  input, button, textarea {
    font-size: 1em;
  }
`
