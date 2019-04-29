import React from 'react';
import ReactDOM from 'react-dom';
import './miscs/HttpConfig'
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import productReducer from './pages/ProductList/Reducers/ProductReducer'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {Provider} from "react-redux";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const MainReducer = combineReducers({
    productReducer
})


const store = createStore(MainReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));



ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
