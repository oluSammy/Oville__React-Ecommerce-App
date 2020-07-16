import { createSelector } from 'reselect';

const selectCategories = state => state.category;

export const creatingCategorySlice = createSelector(
    [selectCategories],
    category => category.isCreating
);

export const selectCategoryErrMsgSlice = createSelector(
    [selectCategories],
    category => category.errMsg
);

export const getCategoryErrorMsg = createSelector(
    [selectCategories],
    category => category.getCategoryErrorMsg
);

export const categories = createSelector(
    [selectCategories],
    category => category.categories
);
export const isGettingCategorySlice  = createSelector(
    [selectCategories],
    category => category.isGettingCategory
);

// export const overallStockCount = createSelector(
//     [selectCategories],
//     category => 
// )