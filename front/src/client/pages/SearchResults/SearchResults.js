import React, {useEffect} from 'react';
import 'regenerator-runtime/runtime';
import { connect } from 'react-redux';
import { fetchProducts, setAppLoaded, setKeywordSearch } from '../../actions/products';
import Header from '../../components/Header/Header';
import Results from '../../components/SearchResults/SearchResults';
import styles from './SearchResults.less';

const SearchResults = ({searchProducts, firstLoad, keywordSearch}) => {

    // hook on init to be executed after keyword changes in store
    useEffect(() => {

        // async call implementation needed for useeffect async calls
        async function fetchProducts() {
            
            // first load determine if hidration already happened
            if(firstLoad) return;
            await searchProducts(keywordSearch);
        }

        fetchProducts();
    },[keywordSearch]);
    
    return (
            <div className={styles.results}>
                <Header></Header>
                <Results></Results>
            </div>
        );
}

/**
 data loader to be used before app hydration
 */
export const dataLoader = (store, match, query) => {
    store.dispatch(setKeywordSearch(query.search));
    return store.dispatch(fetchProducts(query.search));
}

/**
 connection to dispatch store actions
 */
const mapStateToProps = function(state) {
    return {
      firstLoad: state.products.isFirstLoad,
      keywordSearch: state.products.keywordSearch
    }
}

/**
 connection to read store properties
 */
const mapDispatchToProps = (dispatch) => {
    return {
      searchProducts: (keyword) => dispatch(fetchProducts(keyword))
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(SearchResults);