import { configureStore } from '@reduxjs/toolkit'
import keywordsSlice from './reducers/keywords'

export default configureStore({
  reducer: {
    keywords: keywordsSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['keywords/addKeyword/fulfilled'],
      },
    }),
})