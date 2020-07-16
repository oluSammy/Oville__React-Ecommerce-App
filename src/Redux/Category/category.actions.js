import { categoryActionTypes } from './category.types';
import { firestore } from '../../firebase/firebase.utils';
import swal from 'sweetalert';

const createCategoryStart = () => ({
    type: categoryActionTypes.ADD_CATEGORY_START
});

const categorySuccess = () => ({
    type: categoryActionTypes.ADD_CATEGORY_SUCCESS
});

const createCategoryFailure = () => ({
    type: categoryActionTypes.ADD_CATEGORY_FAILURE
});

const getCategoryStart = () => ({
    type: categoryActionTypes.GET_CATEGORY_START
});

const getCategorySuccess = (categories) => ({
    type: categoryActionTypes.GET_CATEGORY_SUCCESS,
    payload: categories
});

const getCategoryFailure = (error) => ({
    type: categoryActionTypes.GET_CATEGORY_FAILURE,
    payload: error
});

export const asyncCreateCategory = (category) => {
    return async dispatch => {
        try {
            dispatch(createCategoryStart());
            await firestore.collection('categories').add({
                categoryName: category,
            });
            await firestore.collection('stock_count').doc(category).set({count: 0, category});
            dispatch(categorySuccess());
            swal({
                title: "Done",
                text: "Created new category",
                icon: "success",
                button: "ok!",
            });
        } catch (error) {
            dispatch(createCategoryFailure(error));
        }
    };
}

export const asyncGetCategory = () => {
    return async dispatch => {
        try {
            let categoryNames = []
            dispatch(getCategoryStart());
            const categoryRef = firestore.collection('categories');
            const categories = await categoryRef.get();
            categories.docs.forEach(doc => {
                categoryNames.push(doc.data());
            });
            dispatch(getCategorySuccess(categoryNames));
        } catch (error) {
            console.log(error);
            dispatch(getCategoryFailure(error));
        }
    }
}