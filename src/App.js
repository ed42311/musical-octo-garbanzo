import React, { Component } from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import './App.css';

import Main from './components/Main';

class App extends Component  {
  state = {
    userId: 1,
    currentUserArticles: [],
    publicArticles: [],
    isLoading: false,
    error: {
      code: 0,
      message: ''
    }
  }

  filterArticles = (all, curUserId) => {
    return {
      currentUserArticles: all.filter(article => article.userId === curUserId),
      publicArticles: all.filter(article => article.userId !== curUserId)
    }
  }

  fetchArticles = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        const { userId } = this.state;
        this.setState(this.filterArticles(data, userId));
      })
      .catch(err => {
        let { code, message } = this.state.error
        code = 1;
        message = "Ouch! Your data didn't get here."
      });
  }

  async componentDidMount() {
    this.setState({isLoading: !this.state.isLoading});
    await this.fetchArticles();
    this.setState({isLoading: !this.state.isLoading});
  }

  render () {
    return (
      <div className="App">
        <AppHeader>
          <AppLogo src={logo} className="App-logo" alt="logo" />
        </AppHeader>
        <Main {...this.state}/>
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

export default App;
