import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Provider } from 'react-redux';
import routes from 'routes';
import immutifyState from 'lib/immutifyState';
import configureStore from '../shared/store/configureStore';

const initialState = immutifyState(window.__INITIAL_STATE__);
const history = createBrowserHistory();
const store = configureStore(initialState);

render(
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>,
  document.getElementById('react-view')
);
