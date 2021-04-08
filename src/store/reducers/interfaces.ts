export interface IState {
  input1Value: number | string;
  input2Value: number | string;
  errorText1: string;
  errorText2: string;
  error1: boolean,
  error2: boolean,
  result: number | string;
  disableAdd: boolean
}

export interface IInputAction {
  type: string;
  payload: number | string;
}

export interface IIErrorTextAction {
  type: string;
  payload: string;
}

export interface IIErrorAction {
  type: string;
  payload: boolean;
}

export interface IResultAction {
  type: string;
  payload: number | string;
}

export interface IDisableAddAction {
  type: string;
  payload: boolean;
}