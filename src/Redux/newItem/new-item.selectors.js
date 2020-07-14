import { createSelector } from 'reselect';

const selectAddNewItem = state => state.newItem;

export const isAddingNewProduct = createSelector(
    [selectAddNewItem],
    newItem => newItem.isAdding
);