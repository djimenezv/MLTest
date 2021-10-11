const { Observable } = require('rxjs');
const axios = require('axios');
const { SEARCH_API_URL_ML, GET_PRODUCT_API_URL_ML } = require('../constants/url');


/** Returns detail for a product given its unique id */
exports.getProductById = (productId) => {

    const product$ = new Observable((subscriber) => {
        axios.all([
            axios.get(`${GET_PRODUCT_API_URL_ML}${productId}`),
            axios.get(`${GET_PRODUCT_API_URL_ML}${productId}/description`)
        ])
        .then(axios.spread((...responses)  =>  subscriber.next(responses)))
        .catch(error => {
            subscriber.next(error)
        });
    });

    return product$;
} 

/** Returns a list of product which their name match with a given productKey */
exports.getProductByKey = (productKey) => {

    const product$ = new Observable((subscriber) => {
      axios.get(`${SEARCH_API_URL_ML}${productKey}`)
      .then(r => subscriber.next(r));
    });

    return product$;
} 