import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import logo from './logo.svg';

import { fetchArticles } from './store/actions';
import Main from './components/Main';

class App extends Component  {

  componentDidMount() {
    const { userId } = this.props;
    this.props.fetchArticles(userId);
  }

  render () {
    return (
      <div className="App">
        <AppHeader>
          <AppLogo src={logo} className="App-logo" alt="logo" />
          <RightText id="App-navbar-text">Articles</RightText>
        </AppHeader>
        <Main {...this.props}/>
      </div>
    );
  }
}

const AppHeader = styled.header`
  height: 12vmin;
  background-color: #14080e;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AppLogo = styled.img`
  padding: 1.25rem;
  pointer-events: none;
`

const RightText = styled.h1`
  padding-right: 2.25rem;
  color: orange;
`

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => ({
    fetchArticles: (userId) => dispatch(fetchArticles(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
