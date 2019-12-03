import { createGlobalStyle } from 'styled-components'
import VARIABLES from './variables'

export default createGlobalStyle`
  ${VARIABLES};

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  body,
  input,
  button {
    color: var(--color-type-body);
    font-family: var(--base-font-family);
    font-weight: 300;
    font-size: 14px;
    line-height: var(--base-font-lineheight);
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`
