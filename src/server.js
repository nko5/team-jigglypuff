require('./db/connect'); // connects to the mongo database
import path from 'path';
import Express from 'express';
import session from 'express-session';
import React from 'react';
import routes from './shared/routes';
import configureStore from './shared/store/configureStore';
import { Provider } from 'react-redux';
import compression from 'compression';
import favicon from 'serve-favicon';
import { renderToString } from 'react-dom/server'
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import fetchComponentData from './shared/lib/fetchComponentData';
import apiRoutes from './api/ApiRoutes';
import bodyParser from 'body-parser';
import Immutable from 'immutable';

const app = Express();

app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));
app.use(Express.static(path.join(__dirname, '..', 'dist')));

app.use(session({
  secret: 'nodeKO2015',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}));

app.use(bodyParser.json());
app.use('/api', apiRoutes);

app.use( (req, res) => {
  const location = createLocation(req.url);

  let initialState = {};
  if (req.session.currentUser) {
    const currentUser = req.session.currentUser;
    const initialAuth = new Immutable.Map({
      'userName': currentUser.UserName,
      'userId': currentUser._id,
      'isLoggedOn': true
    });

    initialState = { auth: initialAuth };
  }
  const store = configureStore(initialState);

  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }

    if (!renderProps) {
      return res.status(404).end('Not found');
    }

    function renderView() {
      const InitialView = (
        <Provider store={store}>
          <RoutingContext {...renderProps} />
        </Provider>
      );

      const componentHTML = renderToString(InitialView);

      const initialState = store.getState();

      const HTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <title>Barter</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

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
