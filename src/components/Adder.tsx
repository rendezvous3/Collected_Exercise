import React, { useState } from 'react';
import Input from './Input';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background-color: rgb(252, 250, 250);
  padding-top: 25px;
  height: 325px;
  width: 750px;
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
  padding: 0 15%;
  min-height: 65px;
`;

const Operator = styled.span`
  font-size: 35px;
  color: black;
  height: 100%;
  line-height: 100%;
  text-align: center;
`;

const Buttons = styled.div`
  width: 50%;
  justify-self: end;
  margin-right: 33px;
  position: relative;
  top: 63px;
`;

const StyledButton = styled.button`
  font-family: 'Roboto', sans-serif;
  background-color: black;
  color: white;
  font-size: 17px;
  margin: 5px 25px;
  border-radius: 25px;
  padding: 12px 35px;
  min-width: 100px;
  border: 0;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

const StyledButtonDisabled = styled(StyledButton)`
  background-color: lightgray;
`;

const Result = styled.div`
  width: 100%;
  border: 0;
  height: 1.1876em;
  margin: 0;
  font-size: 35px;
  margin-top: -7px;
  font-weight: 700;
`;

function Adder(): JSX.Element {
  const [input1Value, setInput1Value] = useState<number | string>('');
  const [input2Value, setInput2Value] = useState<number | string>('');
  const [errorText1, setErrorText1] = useState<string>('');
  const [errorText2, setErrorText2] = useState<string>('');
  const [error1, setError1] = useState<boolean>(false);
  const [error2, setError2] = useState<boolean>(false);
  const [result, setResult] = useState<number | string>(0);
  const [disableAdd, setDisableAdd] = useState<boolean>(true);

  const numberRegex = /^\d+$/;

  const handleChangeInput1 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === '' && input2Value === '') setDisableAdd(true);
    else setDisableAdd(false);
    if (e.target.value.match(numberRegex) || e.target.value === '') {
      setErrorText1('');
      setInput1Value(e.target.value);
      setError1(false);
    } else {
      setError1(true);
      setErrorText1('Numbers Only');
      setInput1Value(e.target.value);
    }
  };

  const handleChangeInput2 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === '' && input1Value === '') setDisableAdd(true);
    else setDisableAdd(false);
    if (e.target.value.match(numberRegex) || e.target.value === '') {
      setErrorText2('');
      setInput2Value(e.target.value);
      setError2(false);
    } else {
      setError2(true);
      setErrorText2('Numbers Only');
      setInput2Value(e.target.value);
    }
  };

  const addNumbers = (): void => {
    if (input1Value === '' || input2Value === '' || error1 || error2) {
      setResult(0);
    } else {
      const newResult = Number(input1Value) + Number(input2Value);
      setResult(newResult);
    }
  };

  const clearCalc = (): void => {
    setError1(false);
    setError2(false);
    setErrorText1('');
    setErrorText2('');
    setResult(0);
    setInput1Value('');
    setInput2Value('');
    setDisableAdd(true);
  };

  const ref1 = React.useRef();
  const ref2 = React.useRef();

  return (
    <StyledContainer>
      <AdderDiv>
        <Input
          name='input1'
          label=''
          value={input1Value}
          onChange={handleChangeInput1}
          error={error1}
          errorText={errorText1}
        />
        <Operator>+</Operator>
        <Input
          name='input1'
          label=''
          value={input2Value}
          onChange={handleChangeInput2}
          errorText={errorText2}
          error={error2}
        />
        <Operator>=</Operator>
        <Result>{result}</Result>
      </AdderDiv>
      <Buttons>
        <StyledButton onClick={() => clearCalc()}>Clear</StyledButton>
        {!disableAdd ? (
          <StyledButton onClick={() => addNumbers()}>Add</StyledButton>
        ) : (
          <StyledButtonDisabled disabled>Add</StyledButtonDisabled>
        )}
      </Buttons>
    </StyledContainer>
  );
}

export default Adder;
