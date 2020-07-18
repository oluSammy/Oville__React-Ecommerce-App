import { createSelector } from 'reselect';

const selectProducts = state => state.products;

export const isGettingProducts = createSelector(
    [selectProducts],
    products => products.isGettingProducts
);

export const getProductsSlice = createSelector(
    [selectProducts],
    products => products.products
);

