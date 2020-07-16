import { newItemActionTypes } from './new-item.types';  

//firebase image reference
import { imageRef } from '../../firebase/firebase.utils';   
import { firestore } from '../../firebase/firebase.utils';
import swal from 'sweetalert';
import  firebase  from 'firebase/app';

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

            //add image to firebase storage
            await imageRef.child(newProduct.img.name).put(newProduct.img);
            
            //get download url of the image
            const downloadUrl = await imageRef.child(newProduct.img.name).getDownloadURL();
            const productsRef = firestore.collection('products');

            //add new product to firebase database
            await productsRef.add({
                productName: newProduct.productName,
                description: newProduct.description,
                category: newProduct.category,
                price: parseInt(newProduct.price),
                quantity: parseInt(newProduct.qty),
                imgUrl: downloadUrl,
                specifications: [newProduct.spec1, newProduct.spec2, newProduct.spec3, newProduct.spec4]
            });

            //update stock count
            const categoryRef = firestore.collection('stock_count').doc(newProduct.category);
            await categoryRef.update({count: firebase.firestore.FieldValue.increment(parseInt(newProduct.qty))});

            dispatch(addNewItemSuccess());

            //sweet alert modal
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