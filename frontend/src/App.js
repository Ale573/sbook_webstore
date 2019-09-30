import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';

import Home from './components/Home';

function App() {
  return (
    <div className="app">
      <div className="app_container">
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
