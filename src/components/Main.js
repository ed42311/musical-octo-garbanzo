import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

import Article from './Article';

function Main({ currentUserArticles, publicArticles }) {
  return (
    <AppMain className="Blog-main">
      <section className="Blog-left">
        {currentUserArticles.map(
          article => 
            <Article 
              key={`${article.id}-${uuid()}`}
              customClass="Article-current-user"
              article={article}
            />
        )}
      </section>
      <section className="Blog-right">
        {publicArticles.map(
          article => 
            <Article 
              key={`${article.id}-${uuid()}`}
              customClass="Article-public-user"
              article={article}
            />
        )}
      </section>
    </AppMain>
  );
}

const AppMain = styled.main`
  display: flex;
  flex-wrap: wrap;
`

export default Main;
