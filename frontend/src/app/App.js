import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import '../styles/styles.css';

import Home from '../pages/Home/Home';
import Header from './Header';
import Dash from '../pages/Dash/Dash';
import Auth from '../auth/Auth';
import UserProfile from '../user/UserProfile';
import UserForm from '../user/UserForm';
import BookProfile from '../book/Book';
import BookForm from '../book/BookForm';

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
              <PrivateRoute path='/user' component={UserProfile} />
              <PrivateRoute path='/book' component={BookProfile} />
              <PrivateRoute path='/edit' component={UserForm} />
              <PrivateRoute path='/sell' component={BookForm} />
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
