import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid';

import Article from './Article';
import ErrorBoundary from './ErrorBoundary';

function Main({ currentUserArticles, publicArticles, isLoading }) {
  return (
    <ErrorBoundary>
      <AppMain className="Article-main">
        {
          isLoading ? 
          <h2>Loading....</h2> :
          <MainSection bgColor={'#799496'} className="Article-left">
            <h2>Private</h2>
            {currentUserArticles.map(
              article => 
                <Article 
                  key={`${article.id}-${uuid()}`}
                  customClass="Article-current-user"
                  article={article}
                />
            )}
          </MainSection>
        } 
        {
          isLoading ? 
          <h2>Loading Articles....</h2> :
          <MainSection bgColor={'#505153'} className="Atricle-right">
            <h2>Public</h2>
            {publicArticles.map(
              article => 
                <Article 
                  key={`${article.id}-${uuid()}`}
                  customClass="Article-public-user"
                  article={article}
                />
            )}
          </MainSection>
        }
        
      </AppMain>
    </ErrorBoundary>
  );
}

Main.propTypes = {
  currentUserArticles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.number
  })),
  publicArticles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.number
  }))
};

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
  height: 88vmin;
  padding-top: 2rem;
  background-color: ${props => props.bgColor};
  text-align: center;
`

export default Main;
