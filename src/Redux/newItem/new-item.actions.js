import { newItemActionTypes } from './new-item.types';
import { imageRef } from '../../firebase/firebase.utils';
import { firestore } from '../../firebase/firebase.utils';
import swal from 'sweetalert';

const addNewItemStart = () => ({
    type: newItemActionTypes.ADD_NEW_ITEM_START
});

const addNewItemSuccess = () => ({
    type: newItemActionTypes.ADD_NEW_ITEM_SUCCESS
});

const addNewItemFailure = (error) => ({
    type: newItemActionTypes.ADD_NEW_ITEM_FAILURE,
    payload: error
});

export const asyncUpLoadNewProducts = (newProduct) => {
    return async dispatch => {
        try {
            dispatch(addNewItemStart());
            await imageRef.child(newProduct.img.name).put(newProduct.img);
            const downloadUrl = await imageRef.child(newProduct.img.name).getDownloadURL();
            const productsRef = firestore.collection('products');
            await productsRef.add({
                productName: newProduct.productName,
                description: newProduct.description,
                category: newProduct.category,
                price: parseInt(newProduct.price),
                quantity: parseInt(newProduct.qty),
                imgUrl: downloadUrl,
                specifications: [newProduct.spec1, newProduct.spec2, newProduct.spec3, newProduct.spec4]
            });
            dispatch(addNewItemSuccess());
            swal({
                title: "Done",
                text: "Uploaded new Products!",
                icon: "success",
                button: "ok!",
            });
        } catch (error) {
            dispatch(addNewItemFailure(error));
            swal({
                title: "oops! An Error occurred",
                text: "Try Again",
                icon: "warning",
                button: "ok",
            }); 
        }
    }
}