import React from 'react';

function Article({article, customClass}) {
  return (
    <article className={customClass}>
      {article.body}
    </article>
  );
}

export default Article;
