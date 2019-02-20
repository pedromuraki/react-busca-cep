import { combineReducers } from 'redux';

/* Reducers */
import todos from './todos';
import filter from './filter';

export const combinedReducers = combineReducers({
  todos,
  filter
});

export default combinedReducers;
