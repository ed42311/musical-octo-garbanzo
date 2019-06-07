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
  padding: 0.25rem;
  border: 2px solid black;
  margin: 0.25rem;
`

export default Article;
