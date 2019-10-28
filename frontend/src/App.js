import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './styles/styles.css';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Dash from './pages/Dash/Dash';
import Auth from './components/Auth/Auth';
import Profile from './components/User/Profile';
import Selling from './components/Book/SellingBook';

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
              <PrivateRoute path='/profile' component={Profile} />
              <PrivateRoute path='/selling' component={Selling} />
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
