import { createSelector } from 'reselect';

const selectCategories = state => state.category;

export const creatingCategorySlice = createSelector(
    [selectCategories],
    category => category.isCreating
);

export const selectCategoryErrMsgSlice = createSelector(
    [selectCategories],
    category => category.errMsg
)