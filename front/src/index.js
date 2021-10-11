import express from 'express';
import renderRoot from './misc/render.helper';
import { matchRoutes } from 'react-router-config';
import Routes from './client/routes';
import createServerStore from './misc/store.helper';


// express configuration
const app  = express();
app.use(express.static('public'));

// express routes
app.get('*',(req, res) => {

    // creating the store
    const store = createServerStore();

    // executing data loaders of the request page
    const dataLoaders = matchRoutes(Routes, req.path).map(({route, match}) => {
       return route.loadData ? route.loadData(store, match, req.query) : null;
    });

    // executing data loaders then send rendered page
    Promise.all(dataLoaders)
           .then(r => res.send(renderRoot(req, store)));

});

// express server starting
app.listen(3000, () => {
    console.log('ML Test running on 3000');
});