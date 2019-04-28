import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import MainReducer from './Redux/Reducers/ProductReducer'
import { createStore,applyMiddleware  } from 'redux'
import {Provider} from "react-redux";
import thunk from "redux-thunk";
const store = createStore(MainReducer,applyMiddleware(thunk));


ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
