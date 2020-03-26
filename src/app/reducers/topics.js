import {
  FETCH_TOPICS_PENDING, 
  FETCH_TOPICS_SUCCESS,
  FETCH_TOPICS_FAILURE
} from '../actions/topics';

const initialState = {
  topics: [],
  pending: false,
  error: null
};

export default function topicsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_TOPICS_PENDING:
      return {
        ...state,
        pending: true,
        error: null
      };
    
    case FETCH_TOPICS_SUCCESS:
      return {
        ...state,
        pending: false,
        topics: action.payload
      };

    case FETCH_TOPICS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
        topics: []
      };

    default:
      return state;
  }
}