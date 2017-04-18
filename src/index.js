import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';

import { flowers } from './reducer/FlowersReducer.js';
import { data } from './reducer/FormReducer.js'
import { favorites } from './reducer/FavoritesReducer.js'

import AppContainer from './containers/AppContainer';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    flowers,
    data,
    favorites,
    router: routerReducer,
  }), devTools, applyMiddleware(middleware)
)

const router = (
  <Provider store={store} >
    <ConnectedRouter history={ history }>
      <Route path="/" component={ AppContainer }></Route>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'))
