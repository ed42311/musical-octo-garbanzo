import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import logo from './logo.svg';
import './App.css';

import { fetchArticles } from './store/actions';
import Main from './components/Main';

class App extends Component  {

  componentDidMount() {
    const { userId } = this.props;
    this.props.fetchArticles(userId);
  }

  loadingArticles(){
    if(this.props.isloading){
      return <p>Loading....</p>
    } 
  }

  render () {
    console.log(this.props);
    return (
      <div className="App">
        <AppHeader>
          <AppLogo src={logo} className="App-logo" alt="logo" />
        </AppHeader>
        <Main {...this.props}/>
      </div>
    );
  }
}

const AppHeader = styled.header`
  height: 10vmin;
  background-color: orange;
`

const AppLogo = styled.img`
  padding: 1.25rem;
  pointer-events: none;
`

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => ({
    fetchArticles: (userId) => dispatch(fetchArticles(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
