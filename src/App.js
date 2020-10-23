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
          <RightText id="App-navbar-text">Articles</RightText>
        </AppHeader>
        <Main {...this.props}/>
      </div>
    );
  }
}

const AppHeader = styled.header`
  height: 12vmin;
  background-color: #5a6969;
  border-bottom: 1px solid #757779;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 10px 11px 29px -28px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 11px 29px -28px rgba(0,0,0,0.75);
  box-shadow: 10px 11px 29px -28px rgba(0,0,0,0.75);
`

const AppLogo = styled.img`
  padding: 1.25rem;
  pointer-events: none;
`

const RightText = styled.h1`
  padding-right: 2.25rem;
  color: black;
`

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => ({
    fetchArticles: (userId) => dispatch(fetchArticles(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
