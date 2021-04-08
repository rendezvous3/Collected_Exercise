import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch, batch } from 'react-redux';
import {
  IState,
  setResult,
  setError1,
  setError2,
  setErrorText1,
  setErrorText2,
  setInput1Value,
  setInput2Value,
  setDisableAdd,
} from '../store';

const StyledButtons = styled.div`
  width: 45%;
  justify-self: end;
  margin-right: 21px;
  position: relative;
  top: 63px;
`;

const StyledButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  background-color: black;
  color: #bdbdbd;
  font-size: 15px;
  margin: 5px 21px;
  border-radius: 25px;
  padding: 12px 31px;
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

function Buttons(): JSX.Element {
  const { disableAdd, input1Value, input2Value, error1, error2 } = useSelector(
    (state: IState) => state
  );
  const dispatch = useDispatch();

  const addNumbers = (): void => {
    if (input1Value === '' || input2Value === '' || error1 || error2) {
      dispatch(setResult(0));
    } else {
      const newResult = Number(input1Value) + Number(input2Value);
      dispatch(setResult(newResult));
    }
  };

  const clearCalc = (): void => {
    batch(() => {
      dispatch(setError1(false));
      dispatch(setError2(false));
      dispatch(setErrorText1(''));
      dispatch(setErrorText2(''));
      dispatch(setResult(0));
      dispatch(setInput1Value(''));
      dispatch(setInput2Value(''));
      dispatch(setDisableAdd(true));
    });
  };

  return (
    <StyledButtons>
      <StyledButton onClick={() => clearCalc()}>Clear</StyledButton>
      {!disableAdd ? (
        <StyledButton onClick={() => addNumbers()}>Add</StyledButton>
      ) : (
        <StyledButtonDisabled disabled>Add</StyledButtonDisabled>
      )}
    </StyledButtons>
  );
}

export default Buttons;
