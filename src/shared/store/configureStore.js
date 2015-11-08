import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';

const rootReducer = combineReducers(reducers);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
