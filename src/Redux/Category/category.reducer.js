import { categoryActionTypes } from './category.types';

const INIT_STATE= {
    isCreating: false,
    errorMsg: null,
    isGettingCategory: false,
    getCategoryErrorMsg: '',
    categories: null
}

const categoryReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case categoryActionTypes.ADD_CATEGORY_START:
            return {
                ...state,
                isCreating: true
            }
        case categoryActionTypes.ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                isCreating: false
            }
        case categoryActionTypes.ADD_CATEGORY_FAILURE:
            return {
                ...state,
                isCreating: false,
                errorMsg: action.payload
            }
        case categoryActionTypes.GET_CATEGORY_START:
            return {
                ...state,
                isGettingCategory: true
            }
        case categoryActionTypes.GET_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                isGettingCategory: false
            }
        case categoryActionTypes.GET_CATEGORY_FAILURE:
            return {
                ...state, 
                isGettingCategory: false,
                getCategoryErrorMsg: action.payload
            }
        default: 
            return state;
    }
}

export default categoryReducer;