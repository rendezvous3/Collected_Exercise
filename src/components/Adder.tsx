import React from 'react';
import styled from 'styled-components';
import Buttons from './Buttons';
import Input1 from './Input1';
import Input2 from './Input2';
import Result from './Result';

const StyledContainer = styled.div`
  background-color: rgb(252, 250, 250);
  padding-top: 36px;
  height: 300px;
  width: 658px;
  display: grid;
  align-content: center;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0 0px 10px rgb(77 77 77 / 20%);
`;

const AdderDiv = styled.div`
  display: grid;
  align-content: start;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: column;
  padding: 0 7%;
  min-height: 65px;
`;

const Operator = styled.span`
  font-size: 30px;
  font-weight: 300;
  color: black;
  height: 100%;
  line-height: 100%;
  text-align: center;
`;

function Adder(): JSX.Element {
  return (
    <StyledContainer>
      <AdderDiv>
        <Input1 />
        <Operator>+</Operator>
        <Input2 />
        <Operator>=</Operator>
        <Result />
      </AdderDiv>
      <Buttons />
    </StyledContainer>
  );
}

export default Adder;
