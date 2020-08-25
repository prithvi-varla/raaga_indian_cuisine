import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import * as serviceWorker from './serviceWorker';

import Root from './components/root';

import configureStore from './store/store';
import { merge } from 'lodash';


import 'bootstrap/dist/css/bootstrap.min.css';

import './views/App.css';

const root = document.getElementById('root');

  let store;
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = merge(preloadedState, { session: { currentUser: window.currentUser } });
    delete window.currentUser;
  }

  if (sessionStorage.address) {
    preloadedState = merge(preloadedState, { currentAddress: JSON.parse(sessionStorage.address) });
  }

  if (sessionStorage.restaurants) {
    preloadedState = merge(preloadedState, {entities: {restaurants: JSON.parse(sessionStorage.restaurants)}});
  }

  if (sessionStorage.order) {
    preloadedState = merge(preloadedState, {entities: {order: JSON.parse(sessionStorage.order)}});
  }

  if (sessionStorage.orderItems) {
    const orderItems = JSON.parse(sessionStorage.orderItems);
    for (let id in orderItems) {
      orderItems[id].options = new Map(orderItems[id].options);
    }
    preloadedState = merge(preloadedState, {entities: {orderItems}});
  }

  store = preloadedState ? configureStore(preloadedState) : configureStore();

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();