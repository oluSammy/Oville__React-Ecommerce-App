import { productActionTypes } from './products.types';
import { firestore } from '../../firebase/firebase.utils';

const getProductsStart = (productCategory) => ({
    type: productActionTypes.GET_PRODUCT_START,
    payload: productCategory
});

const getProductSuccess = (products) => ({
    type: productActionTypes.GET_PRODUCT_SUCCESS,
    payload: products
});

const getProductsFailure = (error) => ({
    type: productActionTypes.GET_PRODUCT_FAILURE,
    payload: error
});

export const asyncGetProducts = (productCategory) => {
    return async dispatch => {
        try {
            dispatch(getProductsStart(productCategory));

            //query ref to query firestore
            const queryRef = firestore.collection('products').where('category', '==', productCategory);

            const products = []; //empty array that will hold all docs            
            const getProducts = await queryRef.get();   //get docs from firestore
            
            //store docs in the products array
            getProducts.docs.forEach(doc => {
                products.push({id: doc.id, data: doc.data()});
            });
            
            //dispatch to props
            dispatch(getProductSuccess(products))
        } catch (error) {
            dispatch(getProductsFailure(productCategory));
        }
    }
}
