import {configureStore} from '@reduxjs/toolkit';

import accountsReducer from './reducers/accountsReducer';
import appReducer from './reducers/appReducer';
import categoriesReducer from './reducers/categoriesReducer';

export const store = configureStore({
  reducer: {
    app: appReducer,
    accounts: accountsReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
