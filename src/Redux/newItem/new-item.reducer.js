import { newItemActionTypes } from './new-item.types';

const INIT_STATE = {
    isAdding: false,
    addingErrorMsg: '',
    isUpdating: false,
    updateErrorMsg: '',
    clearForm: false
}

const addNewItemReducer = (state=INIT_STATE, action) => {
    switch(action.type) {
        case newItemActionTypes.ADD_NEW_ITEM_START:
            return {
                ...state,
                isAdding: true
            }
        case newItemActionTypes.ADD_NEW_ITEM_SUCCESS:
            return {
                ...state,
                isAdding: false
            }
        case newItemActionTypes.ADD_NEW_ITEM_FAILURE:
            return {
                ...state,
                isAdding: false,
                addingErrorMsg: action.payload
            }
        case newItemActionTypes.UPDATE_ITEM_START:
            return {
                ...state,
                isUpdating: true
            }
        case newItemActionTypes.UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                clearForm: true
            }
        case newItemActionTypes.UPDATE_ITEM_FAILURE:
            return {
                ...state,
                updateErrorMsg: action.payload
            }
        default: 
            return state
    }
}

export default addNewItemReducer;