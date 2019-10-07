import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../pages/Home';
import Dash from '../pages/Dash';
import {withRouter} from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((<Login />), div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(withRouter(<Register />), div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(withRouter(<Home />), div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(withRouter(<Dash />), div);
  ReactDOM.unmountComponentAtNode(div);
});
