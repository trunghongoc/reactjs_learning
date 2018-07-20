import React, { Component } from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
// BrowserRouter as Router,

import './Style.css'
import Home from './pages/Home'
import About from './pages/About'
import Data from './pages/Data'
import Trello from './pages/Trello'
import Gantt from './pages/Gantt'

// redux
import { Provider } from 'react-redux'
import configureStore from './store/config'
export const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
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
              <li>
                <Link to="/trello">Trello</Link>
              </li>
              <li>
                <Link to="/gantt">gantt</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/data" component={Data} />
              <Route path="/trello" component={Trello} />
              <Route path="/gantt" component={Gantt} />
            </Switch>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App
