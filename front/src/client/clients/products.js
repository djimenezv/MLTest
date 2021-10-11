import axios from 'axios';
import { ITEMS_API_URL, SEARCH_API_URL } from '../constants/apis';

export const getProductByKey = (productKey) => {

    return  axios.get(`${SEARCH_API_URL}${productKey}`);

} 

export const getProductById = (productKey) => {

    return  axios.get(`${ITEMS_API_URL}/${productKey}`);

}

