import { configureStore } from '@reduxjs/toolkit'
import useReducer from './user/userSlice'

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
})