import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from '../client/reducers';
//import createHistory from "history/createBrowserHistory";
import {
    ConnectedRouter,
    routerReducer,
    routerMiddleware,
    push
  } from "react-router-redux";

export default () => {

    const store = createStore(reducers, {}, applyMiddleware(thunk));

    return store;
}