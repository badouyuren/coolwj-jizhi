import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'JXZhuoKai';
    src: url('https://www.coolwj.com/assets/fonts/JXZhuoKai.woff') format('woff');
  }

  html,
  body {
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-family: 'JXZhuoKai';
    height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
