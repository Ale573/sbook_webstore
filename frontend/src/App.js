import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/styles.css';

import Home from './pages/Home';
import Header from './components/Header';
import Dash from './pages/Dash';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app_container">
            <Header />  
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/dash" component={Dash}/>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
