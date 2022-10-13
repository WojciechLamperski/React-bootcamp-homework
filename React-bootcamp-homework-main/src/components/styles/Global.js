import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
.app {
    text-align: center;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  #root{
    min-height: 100%;
  }
  
  .wrapper{
    flex-grow: 1;
    display: flex;
  }
`