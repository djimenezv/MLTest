import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { setAppLoaded } from './actions/products';

// creation of the store in the client initialized with store sent from server
const store = createStore(reducers, window.INITIAL_APP_STATE, applyMiddleware(thunk));

// injecting store with current state in client
ReactDom.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                { renderRoutes(Routes) }
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));

// setting a flag to indicate client that hydration was done so client avoid execution
// of double requests or events before server side is rendered in client 
store.dispatch(setAppLoaded());