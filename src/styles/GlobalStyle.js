import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Recursive';
    src: url('res/fonts/Recursive_VF_1.042.woff2') format('woff2-variations');
    font-weight: 300 1000;
  }
  
  body {
    padding: 100px 200px;
    font-family: 'Recursive';
  }

  html, body, #root {
    height: 100%;
  }
`;

export default GlobalStyle;
