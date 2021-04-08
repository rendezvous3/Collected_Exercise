import {
  CHANGE_INPUT1_VALUE,
  CHANGE_INPUT2_VALUE,
  SET_ERROR_TEXT_1,
  SET_ERROR_TEXT_2,
  SET_ERROR_1,
  SET_ERROR_2,
  SET_RESULT,
  SET_BUTTON_DISABLED
} from './'

import { IInputAction, IIErrorTextAction, IIErrorAction, IResultAction, IDisableAddAction } from './interfaces';

export const setInput1Value = (input1Value: string | number): IInputAction => ({
  type: CHANGE_INPUT1_VALUE,
  payload: input1Value
});

export const setInput2Value = (input2Value: string | number): IInputAction => ({
  type: CHANGE_INPUT2_VALUE,
  payload: input2Value
});

export const setErrorText1 = (errorText1: string): IIErrorTextAction => ({
  type: SET_ERROR_TEXT_1,
  payload: errorText1
})

export const setErrorText2 = (errorText2: string): IIErrorTextAction => ({
  type: SET_ERROR_TEXT_2,
  payload: errorText2
})

export const setError1 = (error1: boolean): IIErrorAction => ({
  type: SET_ERROR_1,
  payload: error1
})

export const setError2 = (error2: boolean): IIErrorAction => ({
  type: SET_ERROR_2,
  payload: error2
})

export const setResult = (result: string | number): IResultAction => ({
  type: SET_RESULT,
  payload: result
})

export const setDisableAdd = (disable: boolean): IDisableAddAction => ({
  type: SET_BUTTON_DISABLED,
  payload: disable
})