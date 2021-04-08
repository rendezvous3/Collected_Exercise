import React from 'react';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  & .PrivateNotchedOutline-root-1,
  .MuiOutlinedInput-notchedOutline {
    border: 0;
  }
  & .MuiInputBase-input,
  .MuiOutlinedInput-input {
    font-size: 28px;
    padding: 0;
    height: unset;
    text-align: center;
    font-weight: 500;
  }
  & {
    background: white;
    border: 0;
  }
  & .MuiFormHelperText-root,
  .MuiFormHelperText-contained,
  .Mui-error,
  .MuiFormHelperText-filled {
    margin-left: unset;
    margin-right: unset;
    text-align: center;
  }
`;

interface IInputProps {
  name: string;
  label: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorText: string;
  error: boolean;
}

function Input(props: IInputProps): JSX.Element {
  const { name, label, value, onChange, errorText, error } = props;
  return (
    <StyledTextField
      variant='outlined'
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={errorText}
    />
  );
}

export default Input;
