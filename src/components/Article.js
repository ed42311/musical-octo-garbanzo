import React from 'react';
import styled from 'styled-components';

function Article({article, customClass}) {
  return (
    <ArticleWrapper className={customClass}>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
    </ArticleWrapper>
  );
}

const ArticleWrapper = styled.article`
  padding: 0.25rem;
  border: 2px solid black;
  margin: 0.25rem;
`

export default Article;
