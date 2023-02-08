import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import promise from "redux-promise";
import multi from 'redux-multi'

import App from "./main/app";
import reducers from './main/reducers'

const devTolls = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, promise)(createStore)(reducers, devTolls)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('app'))