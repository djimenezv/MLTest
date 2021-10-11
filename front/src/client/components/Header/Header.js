import styles from './Header.less';
import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setKeywordSearch } from '../../actions/products';


/**
 * Header component
 * @param setSearchKey: property in storage with the string the user is using to search products
 * @param searchProducts: products found given the search key
 * @param searchKey: search key enter by user
 */
const Header = ({keywordSearch, setSearchKeyword}) => {
    const searchBox = useRef(null);
    const [keyword, setKeyword] = useState(keywordSearch);
    
    return (
        <div className={styles.header}>
            <div className={styles.header__content}>
                <div className={styles.content__img}>
                    <Link to={'/'}>
                        <img src="/assets/Logo_ML.png"></img>
                    </Link>
                </div>
                <div className={styles.content__search}>
                    <input  type='text' ref={searchBox} defaultValue={keywordSearch} onChange={e => setKeyword(searchBox.current.value)}></input>
                    <Link onClick={() => setSearchKeyword(keyword)} to={`/items?search=${keyword}`}>
                        <img src="/assets/ic_Search.png"></img>
                    </Link> 
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = function(state) {
    return {
        keywordSearch: state.products.keywordSearch
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      setSearchKeyword: (keyword) => dispatch(setKeywordSearch(keyword))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);