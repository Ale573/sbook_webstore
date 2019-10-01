import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/styles.css';

import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app_container">
            <Header />  
            <Switch>
              <Route path="/" exact component={Home}/>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
