import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from '../store';

const ResultStyled = styled.div`
  width: 100%;
  border: 0;
  height: 1.1876em;
  margin: 0;
  margin-top: -7px;
  font-size: 28px;
  font-weight: 500;
`;

function Result(): JSX.Element {
  const result = useSelector((state: IState) => state.result);
  return <ResultStyled>{result}</ResultStyled>;
}

export default Result;
