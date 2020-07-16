import { firestore } from '../../firebase/firebase.utils';
import { stockActionTypes } from './stock.types';

const getStockStart = () => ({
    type: stockActionTypes.GET_STOCK_START
});

const getStockSuccess = (stock) => ({
    type: stockActionTypes.GET_STOCK_SUCCESS,
    payload: stock
});

const getStockFailure = (error) => ({
    type: stockActionTypes.GET_STOCK_FAILURE,
    payload: error
});

export const asyncGetStockCount = () => {
    return async dispatch => {
        try {
            
            //get stock count from firebase
            dispatch(getStockStart());
            const stock = [];
            const stockRef = firestore.collection('stock_count');
            const stockCount = await stockRef.get();
            stockCount.docs.forEach(doc => {
                stock.push(doc.data());
            })
            dispatch(getStockSuccess(stock));
        } catch (error) {
            dispatch(getStockFailure(error));
        }
    }
}