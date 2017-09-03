import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './components/Main';
import Saved from './components/Saved';

import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/saved" component={Saved} />
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
