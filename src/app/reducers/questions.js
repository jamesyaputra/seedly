import {
    FETCH_QUESTIONS_PENDING, 
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_FAILURE
  } from '../actions/questions';
  
  const initialState = {
    questions: [],
    pending: false,
    error: null
  };
  
  export default function questionsReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_QUESTIONS_PENDING:
        return {
          ...state,
          pending: true,
          error: null
        };
      
      case FETCH_QUESTIONS_SUCCESS:
        return {
          ...state,
          pending: false,
          questions: action.payload
        };
  
      case FETCH_QUESTIONS_FAILURE:
        return {
          ...state,
          pending: false,
          error: action.payload.error,
          questions: []
        };
  
      default:
        return state;
    }
  }