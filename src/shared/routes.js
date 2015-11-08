import React from 'react';
import { DefaultRoute, Route } from 'react-router';

import App from './components/index';
import LoginContainer from './containers/LoginContainer';
import MainFeedContainer from './containers/MainFeedContainer';
import UserItemsContainer from './containers/UserItemsContainer';

export default (
  <Route name="app" component={App}>
    <Route name="login" component={LoginContainer} path="/" />
    <Route name="userItems" component={UserItemsContainer} path="userItems" />
    <Route name="mainFeed" component={MainFeedContainer} path="feed" />
  </Route>
);
