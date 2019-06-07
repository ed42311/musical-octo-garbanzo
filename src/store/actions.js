import { 
  RECEIVED_ARTICLES,
  REQUEST_ARTICLES,
  FETCH_ERROR,
  COMP_ERROR
} from "./actionTypes";

function filterArticles(all, curUserId) {
  return {
    currentUserArticles: all.filter(article => article.userId === curUserId),
    publicArticles: all.filter(article => article.userId !== curUserId)
  }
}

function receivedArticles(payload) {
  return {
    type: RECEIVED_ARTICLES,
    payload
  }
}

function requestArticles() {
  return {
    type: REQUEST_ARTICLES,
  }
}

function throwFetchError(payload) {
  return {
    type: FETCH_ERROR,
    payload
  }
}

export function throwError() {
  return {
    type: COMP_ERROR,
  }
}

export function fetchArticles(userId) {
  return function(dispatch, getState){
    dispatch(requestArticles());
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        return response.json()
      })
      .then(articles => dispatch(receivedArticles(filterArticles(articles, userId))))
      .catch(function(error) {
        dispatch(throwFetchError({
          hasError: true,
          errMessage: error
        }))
      });
  }
}
