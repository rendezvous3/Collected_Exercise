import React from 'react';
import Adder from './components/Adder';
import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #ececec;
  }
`;

const AppStyle = styled.div`
  text-align: center;
  padding-top: 125px;
`;

function App(): JSX.Element {
  return (
    <AppStyle>
      <GlobalStyle />
      <Adder />
    </AppStyle>
  );
}

export default App;
