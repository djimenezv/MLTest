import { connect } from 'react-redux';
import React from 'react';
import styles from './ProductDetails.less';
import { applyUSDFormat } from '../../../misc/currency.helper';

export const ProductDetails = ({productDetails}) => {

    return(        
        <div className={styles.details}>
            {
                productDetails
                    ?
            
            <div className={styles.details__content}>
                <div className={styles.content__img}>
                    <img src={productDetails.picture}/>
                </div>
                <div className={styles.content__details}>
                    <div className={styles.details__condition}>{`${productDetails.condition} - ${productDetails.sold_quantity} vendidos`}</div>
                    <div className={styles.details__title}>{productDetails.title}</div>
                    { 
                        productDetails.price
                            ? <div className={styles.details__price}>{applyUSDFormat(productDetails.price.amount)}</div>
                            :null
                    }
                    <div className={styles.details__button}>Comprar</div>
                </div>
                <div className={styles.content__description}>
                    <div className={styles.description__title}>Descripción del Producto</div>
                    <div className={styles.description__note}>{productDetails.description}</div>
                </div>
            </div>
            : null
            }
        </div>
    );

}

const mapStateToProps = function(state) {
    return {
        productDetails: state.products.selectedProduct
    }
}

export default connect(mapStateToProps)(ProductDetails);