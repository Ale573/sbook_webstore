import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './styles/styles.css';

import Home from './pages/Home';
import Header from './components/Header';
import Dash from './pages/Dash';
import Auth from './components/Auth';

function App() {

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      Auth.isUserAuthenticated() 
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )

  return (
    <Router>
      <div className="app">
        <div className="app_container">
            <Header />  
            <Switch>
              <Route path="/" exact component={Home}/>
              <PrivateRoute path='/dash' component={Dash} />
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
