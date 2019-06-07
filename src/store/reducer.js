import { 
  REQUEST_ARTICLES,
  RECEIVED_ARTICLES,
  FETCH_ERROR,
  COMP_ERROR
} from "./actionTypes";

const initialState = {
  userId: 1,
  currentUserArticles: [],
  publicArticles: [],
  isLoading: false,
  hasError: false,
  errMessage: ''
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVED_ARTICLES:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    case COMP_ERROR:
      return {
        ...state,
        ...action.payload
      };
    default: return state;
  }
}