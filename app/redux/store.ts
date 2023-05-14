import { configureStore } from '@reduxjs/toolkit'
import whitelistReducer from './whitelist/whitelistSlice'
import authReducer from './auth/authSlice'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// const persistConfig = {
//   key: 'counter',
//   storage,
// };

// const reducers = combineReducers({whitelist: whitelistReducer, auth: authReducer});
// const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    whitelist: whitelistReducer,
    auth: authReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch