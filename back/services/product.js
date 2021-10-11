const { getProductByKey, getProductById } = require("../repository/product");
const { map, take, mergeMap, reduce, catchError } = require("rxjs/operators");
const { Observable } = require("rxjs");
const { getFormattedProduct, getFormattedItem } = require("../helpers/dataFormatter");

exports.searchProductsByKeyword = (keyword) => {

    const product$ = getProductByKey(keyword);
    return product$.pipe(
            map((r) => r.data),
            map(d => d.results),
            mergeMap(a => a),
            take(4),
            reduce((acum, val) => getFormattedProduct(acum, val), null));

}

exports.getProductById = (productId) => {

    const product$ = getProductById(productId);
    return product$.pipe(
        map(r => (Array.isArray(r) && r.length == 2) 
                        ? getFormattedItem(r[0].data, r[1].data) 
                        : {})
    );        
}

