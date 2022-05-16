import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: Galano, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
    background-color: #e7e7e7;;
  }

  *, button, input {
    border: 0;
    outline: 0;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    @media (max-width: ${({ theme }) => theme.breakpoint.lg}px) {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;
