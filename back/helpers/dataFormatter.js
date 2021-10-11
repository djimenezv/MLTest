
/**
 * This function is used by the reducer its main goal is to process raw entity 
 * and convert that raw data into a formatted data
 * @param formattedEntity : The accum of the reducer
 * @param rawProduct : The raw product data returned by the endpoint
 */
 exports.getFormattedProduct = (formattedEntity, rawProduct)  => {

    return !formattedEntity ?
                getNewFormattedItem(rawProduct):
                getUpdatedFormattedItem(formattedEntity, rawProduct);

}

/**
 * Retrieves a formatted entity given a raw product entity
 * @param rawItem : raw product entity
 */
 exports.getFormattedItem = (rawItem, rawDescription = null) => {

    return {
        id: rawItem.id,
        title: rawItem.title,
        price: {
            currency: rawItem.currency_id,
            amount: rawItem.price,
            decimals: rawItem.price % 1
        },
        picture: rawItem.thumbnail,
        condition: rawItem.condition,
        free_shipping: rawItem.shipping.free_shipping,
        state: rawItem.address? rawItem.address.state_name : null,
        sold_quantity: rawItem.sold_quantity,
        description: rawDescription? rawDescription.plain_text : null
    }

}

/**
 * Retreive a new formatted entity for the first product
 * @param rawProduct: raw product entity
 */
const getNewFormattedItem = (rawProduct) => {
    return  {
        categories : [rawProduct.category_id],
        items:[getFormattedItem(rawProduct)]
     }
}

/**
 * Updates the existing formatted entity given a new raw entity 
 * @param formattedItem : Formatted data
 * @param rawProduct : new product raw data to add
 */
const getUpdatedFormattedItem = (formattedItem, rawProduct) => {

    return {
        ...formattedItem,
        categories: [...formattedItem.categories, rawProduct.category_id],
        items: [...formattedItem.items, getFormattedItem(rawProduct)]  
    }
    
}

/**
 * Retrieves a formatted entity given a raw product entity
 * @param rawItem : raw product entity
 */
 const getFormattedItem = (rawItem, rawDescription = null) => {

    return {
        id: rawItem.id,
        title: rawItem.title,
        price: {
            currency: rawItem.currency_id,
            amount: rawItem.price,
            decimals: rawItem.price % 1
        },
        picture: rawItem.thumbnail,
        condition: rawItem.condition,
        free_shipping: rawItem.shipping.free_shipping,
        state: rawItem.address? rawItem.address.state_name : null,
        sold_quantity: rawItem.sold_quantity,
        description: rawDescription? rawDescription.plain_text : null
    }

}