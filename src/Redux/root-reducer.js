import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import categoryReducer from './Category/category.reducer';
import addNewItemReducer from './newItem/new-item.reducer';
import { stockReducer } from './stock/stock.reducer';
import productsReducer from './products-page/products.reducer';





const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['category', 'newItem', 'stock'] 
}

const rootReducer = combineReducers({
    user: userReducer,
    category: categoryReducer,
    newItem: addNewItemReducer,
    stock: stockReducer,
    products: productsReducer
});

export default persistReducer(persistConfig, rootReducer);