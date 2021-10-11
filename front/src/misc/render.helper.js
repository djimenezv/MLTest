import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import Routes from '../client/routes';
import { Provider } from 'react-redux';

const renderRoot = (req, store) => {

    const content = renderToString(
        <Provider store={store}>
            <StaticRouter context={{}} location={req.path}>
                <div>{ renderRoutes(Routes) }</div>
            </StaticRouter>
        </Provider>
    );  
    const html = `
    <html>
        <head>
            <link rel="stylesheet" href="/root.css">
            <link rel="stylesheet" href="/bundle.css">
        </head>
        <body>
            <div id="root">${content}</div>
            <script>
                window.INITIAL_APP_STATE = ${JSON.stringify(store.getState())}
            </script>
            <script src="/init.js"></script>
            <script src="/bundle.js"></script>

        </body>
    </html>
    `;
    return html;

}

export default renderRoot;