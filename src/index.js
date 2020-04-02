import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {applyMiddleware, createStore, compose} from 'redux';
import { Provider } from "react-redux";
import { reducer } from "./redux/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import "./index.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

