// Rendering layer control (React Router)
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path="/post/1" exact component={Post} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
