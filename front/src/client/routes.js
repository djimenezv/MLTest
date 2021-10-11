
import Home from './Pages/Home/Home';
import ProductDetails, { dataLoader as productDetailsLoader } from './Pages/ProductDetails/ProductDetails';
import SearchResults, { dataLoader as searchResultDataLoader } from './Pages/SearchResults/SearchResults';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/items/:productId',
        component: ProductDetails,
        loadData: productDetailsLoader
    },
    {
        path: "/items",
        component: SearchResults,
        loadData: searchResultDataLoader
    }

];