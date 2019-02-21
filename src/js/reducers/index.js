import { combineReducers } from 'redux';

/* Reducers */
import todos from './todos';

export const combinedReducers = combineReducers({
  todos
});

export default combinedReducers;
