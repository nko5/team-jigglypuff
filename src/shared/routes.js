import React from 'react';
import { DefaultRoute, Route } from 'react-router';
import App from './components/index';
import Home from './components/Home';
import Login from './components/Login';

export default (
  <Route name="app" component={App} path="/">
    <Route name="login" component={Login} path="login" />
    <Route name="home" component={Home} path="home" />
  </Route>
);
