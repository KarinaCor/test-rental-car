import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { carsReducer } from './carsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import { filtersReducer } from './filter/filterSlice';

const carsPersistConfig = {
  key: 'favoriteCars',
  storage,
  whitelist: ['favoriteCars'],
};

const persistedReducer = persistReducer(carsPersistConfig, carsReducer);

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    cars: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
