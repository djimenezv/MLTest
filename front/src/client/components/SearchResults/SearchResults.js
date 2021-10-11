import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { applyUSDFormat } from '../../../misc/currency.helper';
import styles from './SearchResults.less';

export const SearchResults = ({searchResult}) => {

    return(
        <div className = {styles.results}>
            <div className = {styles.results__content}>
                { 
                    searchResult.length > 0 
                        ? 
                            searchResult.map(r =>
                                <Link className={styles.content__item} to={`/items/${r.id}`} key={r.id}>
                                        <div className={styles.item__picture}>
                                            <img src={r.picture}/>
                                        </div>
                                        <div className={styles.item__header} >
                                            <div className={styles.header__price}>
                                                <span>{applyUSDFormat(r.price.amount)}</span>
                                                { 
                                                    r.free_shipping
                                                            ? <img src="/assets/ic_shipping.png" title="free shipping !" />
                                                            :null
                                                }
                                            </div>
                                            <span className={styles.price__location}>{r.state}</span>
                                        </div>
                                        <div className={styles.item__title} >{r.title}</div>
                                        <div className={styles.item__condition} >{r.condition}</div>
                                </Link>
                            )
                        : null
                }
            </div>
        </div>
    );

}

const mapStateToProps = function(state) {
    return {
        searchResult: state.products.searchResult
    }
}

export default connect(mapStateToProps)(SearchResults);