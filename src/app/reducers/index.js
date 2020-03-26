import { combineReducers } from 'redux';
import topicsReducer from './topics';
import questionsReducer from './questions';

export default combineReducers({
  topics: topicsReducer,
  questions: questionsReducer
});