import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

import Article from './Article';

function Main({ currentUserArticles, publicArticles }) {
  return (
    <AppMain className="Blog-main">
      <MainSection className="Blog-left">
        {currentUserArticles.map(
          article => 
            <Article 
              key={`${article.id}-${uuid()}`}
              customClass="Article-current-user"
              article={article}
            />
        )}
      </MainSection>
      <MainSection className="Blog-right">
        {publicArticles.map(
          article => 
            <Article 
              key={`${article.id}-${uuid()}`}
              customClass="Article-public-user"
              article={article}
            />
        )}
      </MainSection>
    </AppMain>
  );
}

const AppMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`

const MainSection = styled.section`
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  width: 49%;
  height: 90vmin;
`

export default Main;
