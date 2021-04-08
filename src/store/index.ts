import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export * from './reducers/actions';
export * from './reducers/interfaces';
export default store;