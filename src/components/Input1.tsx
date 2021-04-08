import React from 'react';
import Input from './Input';
import { useSelector, useDispatch, batch } from 'react-redux';
import {
  IState,
  setError1,
  setErrorText1,
  setInput1Value,
  setDisableAdd,
} from '../store';

function Input1(): JSX.Element {
  const { input1Value, input2Value, errorText1, error1 } = useSelector(
    (state: IState) => state
  );

  const dispatch = useDispatch();

  const numberRegex = /^\d+$/;

  const handleChangeInput1 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === '' && input2Value === '') setDisableAdd(true);
    else setDisableAdd(false);
    if (e.target.value.match(numberRegex) || e.target.value === '') {
      batch(() => {
        dispatch(setErrorText1(''));
        dispatch(setInput1Value(e.target.value));
        dispatch(setError1(false));
      });
    } else {
      batch(() => {
        dispatch(setError1(true));
        dispatch(setErrorText1('Numbers Only'));
        dispatch(setInput1Value(e.target.value));
      });
    }
  };
  return (
    <Input
      name='input1'
      label=''
      value={input1Value}
      onChange={handleChangeInput1}
      error={error1}
      errorText={errorText1}
    />
  );
}

export default Input1;
