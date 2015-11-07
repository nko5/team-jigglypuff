import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from './shared/routes';
import { Provider } from 'react-redux';
import * as reducers from './shared/reducers';
import promiseMiddleware from './shared/lib/promiseMiddleware';
import fetchComponentData from './shared/lib/fetchComponentData';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import path from 'path';

const app = express();

// So the example quote unquote 'production mode' works
import fs from 'fs';
app.use('/bundle.js', function (req, res) {
  return fs.createReadStream('./dist/bundle.js').pipe(res);
});

app.use( (req, res) => {
  const location = createLocation(req.url);
  const reducer = combineReducers(reducers);
  const store = applyMiddleware(promiseMiddleware)(createStore)(reducer);

  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if(err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }

    if(!renderProps)
      return res.status(404).end('Not found');

    function renderView() {
      const InitialView = (
        <Provider store={store}>
          <RoutingContext {...renderProps} />
        </Provider>
      );

      const componentHTML = renderToString(InitialView);

      const initialState = store.getState();

      let auth0Script = "";
      if (renderProps.location.pathname.indexOf("login") > -1) {
        auth0Script = '<script src="http://cdn.auth0.com/js/lock-7.9.min.js"></script>';
      }

      const HTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <title>Barter</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

          ${auth0Script}

          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          </script>
        </head>
        <body>
          <div id="react-view">${componentHTML}</div>
          <script type="application/javascript" src="/bundle.js"></script>
        </body>
      </html>
      `;

      return HTML;
    }

    fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
      .then(renderView)
      .then(html => res.end(html))
      .catch(err => res.end(err.message));
  });
});

export default app;
