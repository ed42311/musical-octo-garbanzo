import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ErrorBoundary from './ErrorBoundary';

function Article({article, customClass}) {
  return (
    <ErrorBoundary>
      <ArticleWrapper className={customClass}>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
      </ArticleWrapper>
    </ErrorBoundary>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.number
  }),
  customClass: PropTypes.string
}

const ArticleWrapper = styled.article`
  padding: 0.45rem;
  border: 2px solid silver;
  margin: 1rem;
  text-align: center;
  -webkit-box-shadow: 3px 5px 10px -7px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 5px 10px -7px rgba(0,0,0,0.75);
  box-shadow: 3px 5px 10px -7px rgba(0,0,0,0.75);
  border-radius: 0.45rem;
  background-color: 
  margin: 0.25rem;
`

export default Article;
