import { getProductByProductId, getProductsByKeywordSearch } from '../services/product';
import 'regenerator-runtime/runtime';

export const SEARCH_PRODUCTS = 'search_products';
export const SET_SEARCH_KEYWORD = 'set_search_keyword';
export const GET_PRODUCT_BY_ID = 'get_product_by_id';
export const SET_APP_LOADED = 'set_app_loaded';


export const fetchProducts = (keyword= null) => async dispatch => {
    const products = await getProductsByKeywordSearch(keyword);
    return dispatch({
        type: SEARCH_PRODUCTS,
        payload: products.data.items
    });
}

export const getProductById = (productId= null) => async dispatch => {
    const product = await getProductByProductId(productId);
    return dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: product.data
    });
}

export const setKeywordSearch = (keyword) => dispatch => {
    dispatch({
        type: SET_SEARCH_KEYWORD,
        payload: keyword
    });
}

export const setAppLoaded = () => dispatch => {
    dispatch({
        type: SET_APP_LOADED
    });
}
