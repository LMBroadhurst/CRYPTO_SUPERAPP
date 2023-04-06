import { configureStore } from '@reduxjs/toolkit'
import whitelistReducer from './whitelist/whitelistSlice'

export const store = configureStore({
  reducer: {
    whitelist: whitelistReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch