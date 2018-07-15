import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './Style.css'
import Home from './pages/Home'
import About from './pages/About'

// redux
import { Provider } from 'react-redux'
import configureStore from './store/config'
export const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App
