import { configureStore } from '@reduxjs/toolkit' 
import Cartslice from './cartslice'

export const store = configureStore({
  reducer: {
        cart: Cartslice
  },
  devTools:true
})