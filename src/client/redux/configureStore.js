import { createStore, applyMiddleware } from "redux";
import rootReducer from "./index";
import thunk from "redux-thunk";

let initialState = {};

let store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
