import React, { Component } from 'react';
import uuid from 'uuid';
import logo from './logo.svg';
import './App.css';

import Article from './components/Article';

class App extends Component  {

  state = {
    userId: 1,
    currentUserArticles: [],
    publicArticles: []
  }

  filterArticles = (all, curUserId) => {
    return {
      currentUserArticles: all.filter(article => article.userId === curUserId),
      publicArticles: all.filter(article => article.userId !== curUserId)
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      const { userId } = this.state;
      this.setState(this.filterArticles(data, userId));
    })
    .catch(err => console.log(err));
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="Blog-main">
          <section className="Blog-left">
            {this.state.currentUserArticles.map(
              article => 
                <Article 
                  key={uuid()}
                  customClass="Article-current-user"
                  article={article}
                />
            )}
          </section>
          <section className="Blog-right">
            {this.state.publicArticles.map(
              article => 
                <Article 
                  key={uuid()}
                  customClass="Article-public-user"
                  article={article}
                />
            )}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
