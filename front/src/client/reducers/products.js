import { GET_PRODUCT_BY_ID, SEARCH_PRODUCTS, SET_APP_LOADED, SET_SEARCH_KEYWORD } from "../actions/products"; 

const initialState = {
    selectedProduct: {},
    searchResult: [],
    keywordSearch: '',
    isFirstLoad: true
}

export default(state = initialState, action) => {
    switch(action.type) {
        case SEARCH_PRODUCTS:
            return {
                ...state,
                searchResult: action.payload
            }
        case SET_SEARCH_KEYWORD:
            return {
                ...state,
                keywordSearch: action.payload
            }
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                selectedProduct: action.payload
            }
        case SET_APP_LOADED:
            return {
                ...state,
                isFirstLoad: false
            }         
            
            
        default: return state
    }

}