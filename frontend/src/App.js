import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './styles/styles.css';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Dash from './pages/Dash/Dash';
import Search from './components/Search/Search';
import Auth from './components/Auth/Auth';
import Profile from './components/User/Profile';
import EditProfile from './components/User/EditProfile';
import SellBook from './components/Book/SellBook';

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
              <PrivateRoute path='/dash/search' component={Search} />
              <PrivateRoute path='/profile' component={Profile} />
              <PrivateRoute path='/updateProfile' component={EditProfile} />
              <PrivateRoute path='/selling' component={SellBook} />
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
