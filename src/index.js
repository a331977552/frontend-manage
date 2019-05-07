import React from 'react';
import ReactDOM from 'react-dom';
import './utils/HttpConfig'
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import productReducer from './pages/ProductList/store/productReducer'
import initialReducer from './pages/Dashboard/Reducers/InitialReducer'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import categoryReducer from "./pages/Category/store/categoryReducer";
import initReducer from "./store/initReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const MainReducer = combineReducers({
    productReducer,
    initialReducer,
    categoryReducer,
    initReducer
})


const store = createStore(MainReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));



ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
