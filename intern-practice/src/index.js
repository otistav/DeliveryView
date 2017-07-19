/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { setCardList } from './redusers/cardItemList';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './redusers';



const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
console.log(store.getState())

ReactDOM.render(
  <Provider store={store} ><App /></Provider>,
    document.getElementById('root'),
);
