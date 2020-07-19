import { createSelector } from 'reselect';

const selectAddNewItem = state => state.newItem;

export const isAddingNewProduct = createSelector(
    [selectAddNewItem],
    newItem => newItem.isAdding
);

export const isUpdating = createSelector(
    [selectAddNewItem],
    newItem => newItem.isUpdating
);

export const clearForm = createSelector(
    [selectAddNewItem],
    newItem => newItem.clearForm
);