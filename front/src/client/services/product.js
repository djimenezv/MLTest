import { getProductByKey, getProductById } from '../clients/products';


export const getProductsByKeywordSearch = (keywordSearch) => {

    return getProductByKey(keywordSearch);

}

export const getProductByProductId = (productId) => {
    
    return getProductById(productId);

} 