import React, { useEffect, useState } from 'react';
import { getProductById, setKeywordSearch } from '../../actions/products';
import Header from '../../components/Header/Header';
import ProductsDetails from '../../components/ProductsDetails/ProductDetails';
import styles from './ProductDetails.less';
import { connect } from 'react-redux';

const ProductDetails = ({match, firstLoad, getInfoProductById}) => {
    
    // functional on init hook to get product details on page load
    useEffect(() => {
        
        // async call implementation needed for useeffect async calls
        async function getProductDetails() {
            if(firstLoad) return;
            await getInfoProductById(match.params.productId);
        }
        getProductDetails();
    
    },[]);

    return(
        <div className={styles.details}>
            <Header></Header> 
            <ProductsDetails></ProductsDetails>
        </div>
    );
}

/**
 data loader to be used before app hydration
 */
export const dataLoader = (store, match, query) => {
    store.dispatch(setKeywordSearch(''));
    return store.dispatch(getProductById(match.params.productId));
}

/**
 connection to dispatch store actions
 */
const mapDispatchToProps = (dispatch) => {
    return {
      getInfoProductById: (productId) => dispatch(getProductById(productId))
    }
}

/**
 connection to read store properties
 */
const mapStateToProps = function(state) {
    return {
      firstLoad: state.products.isFirstLoad
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);