import { configureStore } from '@reduxjs/toolkit'
import colorSlice from './features/colorSlice'

export const store = configureStore({
    reducer: {
      "changeColor" : colorSlice
    },
  })
