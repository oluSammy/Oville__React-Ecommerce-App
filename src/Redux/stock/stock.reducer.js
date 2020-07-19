import { stockActionTypes } from './stock.types';

const INIT_STATE = {
    stock: null,
    isGettingStock: false,
    getStockErrorMsg: '',
    burgerIsHidden: true
}

export const stockReducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case stockActionTypes.GET_STOCK_START:
            return {
                ...state,
                isGettingStock: true
            }
        case stockActionTypes.GET_STOCK_SUCCESS: 
            return {
                ...state,
                isGettingStock: false,
                stock: action.payload
            }
        case stockActionTypes.GET_STOCK_FAILURE:
            return {
                ...state,
                isGettingStock: false,
                getStockErrorMsg: action.payload
            }
        case stockActionTypes.TOGGLE_HIDDEN:
            return {
                ...state,
                burgerIsHidden: !state.burgerIsHidden
            }
        default:
            return state;
    }
}