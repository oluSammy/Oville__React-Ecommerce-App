import { productActionTypes } from './products.types';

const INIT_STATE = {
    isGettingProducts: false,
    productCategory: '',
    products: null,
    getProductsErrorMsg: ''
}

const productsReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case productActionTypes.GET_PRODUCT_START:
            return {
                ...state,
                isGettingProducts: true,
                productCategory: action.payload
            }
        case productActionTypes.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isGettingProducts: false,
                products: action.payload
            }
        case productActionTypes.GET_PRODUCT_FAILURE:
            return {
                ...state,
                isGettingProducts: false,
                getProductsErrorMsg: action.payload
            }
        default: 
            return state;
    }
}

export default productsReducer;
