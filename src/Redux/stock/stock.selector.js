import { createSelector } from 'reselect';

const selectStock = state => state.stock;

export const selectStockSlice = createSelector(
    [selectStock],
    stock => stock.stock
);

export const toggleSideBarSlice = createSelector(
    [selectStock],
    stock => stock.burgerIsHidden
);
