import { configureStore } from '@reduxjs/toolkit'
import modeJs  from '../slice/mode'
export const store = configureStore({
  reducer: {
    mode: modeJs
  },
  devTools: process.env.NODE_ENV !== 'production'
})
