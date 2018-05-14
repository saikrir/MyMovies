import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './index';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let initialState = {};

let store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
