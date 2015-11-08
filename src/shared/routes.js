import React from 'react';
import { DefaultRoute, Route } from 'react-router';
import App from './components/index';
import Home from './components/Home';
import LoginContainer from './containers/LoginContainer';

export default (
  <Route name="app" component={App} path="/">
    <Route name="login" component={LoginContainer} path="login" />
    <Route name="home" component={Home} path="home" />
  </Route>
);
