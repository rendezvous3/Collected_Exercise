import { IState } from './interfaces';

export const CHANGE_INPUT1_VALUE = 'CHANGE_INPUT1_VALUE';
export const CHANGE_INPUT2_VALUE = 'CHANGE_INPUT2_VALUE';
export const SET_ERROR_TEXT_1 = 'SET_ERROR_TEXT_1';
export const SET_ERROR_TEXT_2 = 'SET_ERROR_TEXT_2';
export const SET_ERROR_1 = 'SET_ERROR_1';
export const SET_ERROR_2 = 'SET_ERROR_2';
export const SET_RESULT = 'SET_RESULT';
export const SET_BUTTON_DISABLED = 'SET_BUTTON_DISABLED';

const initialState = {
  input1Value: '',
  input2Value: '',
  errorText1: '',
  errorText2: '',
  error1: false,
  error2: false,
  result: 0,
  disableAdd: true
};

function rootReducer(state: IState = initialState, action: any): IState {
  let newState = { ...state };
  switch (action.type) {
    case CHANGE_INPUT1_VALUE:
      newState.input1Value = action.payload;
      return newState;
    case CHANGE_INPUT2_VALUE:
      newState.input2Value = action.payload;
      return newState;
    case SET_ERROR_TEXT_1:
      newState.errorText1 = action.payload;
      return newState;
    case SET_ERROR_TEXT_2:
      newState.errorText2 = action.payload;
      return newState;
    case SET_ERROR_1:
      newState.error1 = action.payload;
      return newState;
    case SET_ERROR_2:
      newState.error2 = action.payload;
      return newState;
    case SET_RESULT:
      newState.result = action.payload;
      return newState
    case SET_BUTTON_DISABLED:
      newState.disableAdd = action.payload;
      return newState
    default:
      return state
  }
}

export default rootReducer;