import { categoryActionTypes } from './category.types';
import { firestore } from '../../firebase/firebase.utils';

const createCategoryStart = () => ({
    type: categoryActionTypes.ADD_CATEGORY_START
});

const categorySuccess = () => ({
    type: categoryActionTypes.ADD_CATEGORY_SUCCESS
});

const createCategoryFailure = () => ({
    type: categoryActionTypes.ADD_CATEGORY_FAILURE
});

export const asyncCreateCategory = (category) => {
    return async dispatch => {
        try {
            dispatch(createCategoryStart());
            await firestore.collection('categories').add({
                categoryName: category
            });
            dispatch(categorySuccess());
            alert(`Done! Created new category "${category}"`)
        } catch (error) {
            dispatch(createCategoryFailure(error));
            console.log(error);
        }
    };
}