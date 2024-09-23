import { createGlobalStyle } from 'styled-components';
import JXZhuoKai from '../fonts/JXZhuoKai.woff';
import AaJianHaoTi from '../fonts/AaJianHaoTi-2.ttf';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'JXZhuoKai';
    src: url(${JXZhuoKai}) format('woff');
  }
  @font-face {
      font-family: 'AaJianHaoTi';
      src: url(${AaJianHaoTi}) format('ttf');
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
