import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './Style.css'
import Home from './pages/Home'
import About from './pages/About'
import Data from './pages/Data'

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
              <li>
                <Link to="/data">Data</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/data" component={Data} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App
