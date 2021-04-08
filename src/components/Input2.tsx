import React from 'react';
import Input from './Input';
import { useSelector, useDispatch, batch } from 'react-redux';
import {
  IState,
  setError2,
  setErrorText2,
  setInput2Value,
  setDisableAdd,
} from '../store';

function Input2(): JSX.Element {
  const { input1Value, input2Value, errorText2, error2 } = useSelector(
    (state: IState) => state
  );

  const dispatch = useDispatch();

  const handleChangeInput2 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === '' && input1Value === '')
      dispatch(setDisableAdd(true));
    else dispatch(setDisableAdd(false));
    if (e.target.value.match(numberRegex) || e.target.value === '') {
      batch(() => {
        dispatch(setErrorText2(''));
        dispatch(setInput2Value(e.target.value));
        dispatch(setError2(false));
      });
    } else {
      batch(() => {
        dispatch(setError2(true));
        dispatch(setErrorText2('Numbers Only'));
        dispatch(setInput2Value(e.target.value));
      });
    }
  };

  const numberRegex = /^\d+$/;
  return (
    <Input
      name='input2'
      label=''
      value={input2Value}
      onChange={handleChangeInput2}
      errorText={errorText2}
      error={error2}
    />
  );
}

export default Input2;
